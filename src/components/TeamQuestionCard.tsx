import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, Team } from '../types';
import { CheckCircle2, XCircle, ArrowRight, Clock, HelpCircle, ShieldAlert, Zap, AlertCircle } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface TeamQuestionCardProps {
  team: Team;
  opponentTeam: Team;
  question: Question | null;
  questionIndex: number;
  totalQuestions: number;
  isActiveTurn: boolean;
  isRoundFeedback: boolean;
  selectedAnswer: 'A' | 'B' | 'C' | 'D' | null;
  onAnswer: (selectedKey: 'A' | 'B' | 'C' | 'D') => void;
  onNextQuestion: () => void;
  isGameOver: boolean;
  timeLimit: number;
  side: 'left' | 'right';
  gameMode: 'turn_based' | 'simultaneous';
}

export const TeamQuestionCard: React.FC<TeamQuestionCardProps> = ({
  team,
  opponentTeam,
  question,
  questionIndex,
  totalQuestions,
  isActiveTurn,
  isRoundFeedback,
  selectedAnswer,
  onAnswer,
  onNextQuestion,
  isGameOver,
  timeLimit,
  side,
  gameMode,
}) => {
  const isTeam1 = side === 'left';
  const isEnabled = (gameMode === 'simultaneous' || isActiveTurn) && !isGameOver;

  // Local timer per question
  const [timeLeft, setTimeLeft] = useState<number>(timeLimit);

  useEffect(() => {
    if (timeLimit <= 0 || isRoundFeedback || !isEnabled || isGameOver) return;
    setTimeLeft(timeLimit);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!isRoundFeedback && question) {
            const wrongKey = question.correctAnswer === 'A' ? 'B' : 'A';
            onAnswer(wrongKey);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [question?.id, isRoundFeedback, isEnabled, isGameOver, timeLimit]);

  const isCompleted = questionIndex >= totalQuestions;
  const isCorrectAnswer = selectedAnswer && question && selectedAnswer === question.correctAnswer;

  return (
    <div
      className={`w-full flex flex-col rounded-2xl border-2 transition-all duration-300 relative overflow-hidden shadow-md bg-white ${
        isEnabled
          ? isTeam1
            ? 'border-red-400 ring-4 ring-red-100/70 shadow-red-100'
            : 'border-blue-400 ring-4 ring-blue-100/70 shadow-blue-100'
          : 'border-slate-200 opacity-80'
      }`}
    >
      {/* Top Accent Stripe with Side Label */}
      <div
        className={`w-full px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white flex items-center justify-between ${
          isTeam1
            ? 'bg-linear-to-r from-red-600 via-rose-600 to-amber-600'
            : 'bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600'
        }`}
      >
        <span>{isTeam1 ? '📍 BẢNG ĐỘI 1 (BÊN TRÁI)' : '📍 BẢNG ĐỘI 2 (BÊN PHẢI)'}</span>
        <span className="font-mono">{isTeam1 ? 'KÉO CỜ SANG TRÁI ⬅️' : '➡️ KÉO CỜ SANG PHẢI'}</span>
      </div>

      <div className="p-3.5 sm:p-4 flex-1 flex flex-col">
        {/* Header: Team Identity & Status Badge */}
        <div className="flex items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span
              className={`w-3.5 h-3.5 rounded-full ${
                isTeam1 ? 'bg-red-500' : 'bg-blue-500'
              } ${isEnabled ? 'animate-ping' : ''}`}
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h3
                  className={`font-black text-sm sm:text-base uppercase tracking-tight ${
                    isTeam1 ? 'text-red-700' : 'text-blue-700'
                  }`}
                >
                  {team.name}
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                {isCompleted ? 'Đã hoàn thành 10 câu' : `Câu ${questionIndex + 1} / ${totalQuestions}`}
              </span>
            </div>
          </div>

          {/* Turn status chip */}
          <div className="flex flex-col items-end">
            {isEnabled ? (
              <span
                className={`px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider animate-pulse shadow-2xs ${
                  isTeam1
                    ? 'bg-red-600 text-white'
                    : 'bg-blue-600 text-white'
                }`}
              >
                Đang Lượt Thi
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[11px] font-semibold">
                Chờ lượt
              </span>
            )}
            {/* Quick score pills */}
            <div className="flex items-center gap-1 mt-1 font-mono text-[10px] font-bold">
              <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                +{team.score} đúng
              </span>
              <span className="text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                -{team.wrongCount} sai
              </span>
            </div>
          </div>
        </div>

        {/* Timer Bar if enabled */}
        {timeLimit > 0 && isEnabled && !isRoundFeedback && (
          <div className="mb-3 flex items-center justify-between text-xs font-mono font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              Thời gian:
            </span>
            <span className={timeLeft <= 5 ? 'text-red-600 animate-bounce' : ''}>
              {timeLeft}s
            </span>
          </div>
        )}

        {/* Question Area */}
        {isCompleted ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center text-slate-500">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-2" />
            <h4 className="font-bold text-slate-700 text-base">Đội đã hoàn thành hết 10 câu!</h4>
            <p className="text-xs text-slate-500 mt-1">Đang chờ kết quả chung cuộc...</p>
          </div>
        ) : question ? (
          <div className="flex-1 flex flex-col">
            {/* Question Text */}
            <div className="mb-4 min-h-[58px]">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                Câu hỏi số {questionIndex + 1}:
              </span>
              <h4 className="text-sm md:text-base font-extrabold text-slate-800 leading-snug">
                {question.question}
              </h4>
            </div>

            {/* Options List A, B, C, D */}
            <div className="space-y-2 mb-4 flex-1">
              {question.options.map((opt) => {
                const isSelected = selectedAnswer === opt.key;
                const isCorrect = opt.key === question.correctAnswer;

                let btnStyle = 'border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-slate-800';
                let tagStyle = isTeam1 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700';

                if (isRoundFeedback) {
                  if (isCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-300';
                    tagStyle = 'bg-emerald-600 text-white';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-200';
                    tagStyle = 'bg-rose-600 text-white';
                  } else {
                    btnStyle = 'border-slate-100 bg-slate-50/50 text-slate-400 opacity-60';
                    tagStyle = 'bg-slate-200 text-slate-500';
                  }
                } else if (!isEnabled) {
                  btnStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 cursor-not-allowed';
                  tagStyle = 'bg-slate-200 text-slate-400';
                }

                return (
                  <button
                    key={opt.key}
                    type="button"
                    disabled={!isEnabled || isRoundFeedback}
                    onClick={() => {
                      if (isEnabled && !isRoundFeedback) {
                        onAnswer(opt.key);
                      }
                    }}
                    className={`w-full flex items-center text-left p-2.5 md:p-3 rounded-xl border text-xs md:text-sm font-medium transition-all ${btnStyle} ${
                      isEnabled && !isRoundFeedback ? 'cursor-pointer hover:border-slate-400 active:scale-98' : ''
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-lg font-black text-xs flex items-center justify-center mr-2.5 shrink-0 transition-colors ${tagStyle}`}
                    >
                      {opt.key}
                    </span>
                    <span className="flex-1 leading-snug">{opt.text}</span>
                    {isRoundFeedback && (
                      <span className="ml-1 shrink-0">
                        {isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        ) : isSelected ? (
                          <XCircle className="w-4 h-4 text-rose-600" />
                        ) : null}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer feedback & Next question action */}
            <AnimatePresence>
              {isRoundFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-2 mt-auto"
                >
                  <div
                    className={`p-3 rounded-xl text-xs border ${
                      isCorrectAnswer
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                        : 'bg-rose-50 border-rose-300 text-rose-900'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5 mb-1">
                      {isCorrectAnswer ? (
                        <>
                          <Zap className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Chính xác! Giật cờ về phía {team.shortName}!</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span>Trả lời sai! {opponentTeam.shortName} đã kéo cờ!</span>
                        </>
                      )}
                    </div>
                    {question.explanation && (
                      <p className="text-[11px] text-slate-600 border-t border-slate-200/60 pt-1 mt-1">
                        {question.explanation}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={onNextQuestion}
                    className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs md:text-sm text-white flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-transform active:scale-98 ${
                      isTeam1
                        ? 'bg-linear-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-red-200'
                        : 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-200'
                    }`}
                  >
                    <span>Câu tiếp theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : null}

        {/* Rule reminder note */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
          <span>Đúng: Kéo cờ về mình</span>
          <span>Sai: Bị đối phương kéo</span>
        </div>
      </div>
    </div>
  );
};
