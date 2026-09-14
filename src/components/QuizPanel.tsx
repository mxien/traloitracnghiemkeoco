import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, Team, ActiveTurn } from '../types';
import { CheckCircle2, XCircle, ArrowRight, Clock, HelpCircle, ShieldAlert, Zap } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface QuizPanelProps {
  currentTurn: ActiveTurn;
  team1: Team;
  team2: Team;
  currentQuestion: Question | null;
  questionIndex: number;
  totalQuestions: number;
  timeLimit: number;
  onAnswer: (selectedKey: 'A' | 'B' | 'C' | 'D') => void;
  onNextQuestion: () => void;
  isRoundFeedback: boolean;
  selectedAnswer: 'A' | 'B' | 'C' | 'D' | null;
  isGameOver: boolean;
  onChangeTurn?: (turn: ActiveTurn) => void;
}

export const QuizPanel: React.FC<QuizPanelProps> = ({
  currentTurn,
  team1,
  team2,
  currentQuestion,
  questionIndex,
  totalQuestions,
  timeLimit,
  onAnswer,
  onNextQuestion,
  isRoundFeedback,
  selectedAnswer,
  isGameOver,
  onChangeTurn,
}) => {
  const isTeam1 = currentTurn === 'team1';
  const activeTeam = isTeam1 ? team1 : team2;
  const opponentTeam = isTeam1 ? team2 : team1;

  // Timer countdown
  const [timeLeft, setTimeLeft] = useState<number>(timeLimit);

  useEffect(() => {
    if (timeLimit <= 0 || isRoundFeedback || isGameOver) return;
    setTimeLeft(timeLimit);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Time's up - treat as wrong answer if not answered yet
          if (!isRoundFeedback && currentQuestion) {
            // Pick a non-correct key or trigger timeout
            const wrongKey = currentQuestion.correctAnswer === 'A' ? 'B' : 'A';
            onAnswer(wrongKey);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion?.id, isRoundFeedback, isGameOver, timeLimit]);

  if (!currentQuestion || isGameOver) {
    return null;
  }

  const isCorrectAnswer = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl p-5 md:p-7 relative overflow-hidden transition-all">
      {/* Background Subtle Gradient Accents for active team */}
      <div
        className={`absolute top-0 inset-x-0 h-2 ${
          isTeam1 ? 'bg-linear-to-r from-red-500 via-rose-500 to-amber-500' : 'bg-linear-to-r from-blue-500 via-indigo-500 to-cyan-500'
        }`}
      />

      {/* Top Header: Turn Switcher & Question Counter */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div
            className={`w-3.5 h-3.5 rounded-full ${
              isTeam1 ? 'bg-red-500 ring-4 ring-red-100' : 'bg-blue-500 ring-4 ring-blue-100'
            }`}
          />
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-slate-400 block">
              Đang trả lời
            </span>
            <div className="flex items-center gap-2">
              <h3 className={`font-black text-lg md:text-xl ${isTeam1 ? 'text-red-600' : 'text-blue-600'}`}>
                {activeTeam.name}
              </h3>
              {onChangeTurn && !isRoundFeedback && (
                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    onChangeTurn(isTeam1 ? 'team2' : 'team1');
                  }}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-md transition-colors"
                  title="Chuyển quyền trả lời sang đội khác"
                >
                  Đổi lượt ⇄
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Question Index Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-sm">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span>
              Câu {questionIndex + 1} / {totalQuestions}
            </span>
          </div>

          {/* Timer if enabled */}
          {timeLimit > 0 && !isRoundFeedback && (
            <div
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-mono font-bold text-sm ${
                timeLeft <= 5 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>{timeLeft}s</span>
            </div>
          )}
        </div>
      </div>

      {/* Rule Notice Reminder */}
      <div
        className={`mb-4 px-3.5 py-2 rounded-xl text-xs flex items-center gap-2 ${
          isTeam1
            ? 'bg-red-50/70 border border-red-200/80 text-red-800'
            : 'bg-blue-50/70 border border-blue-200/80 text-blue-800'
        }`}
      >
        <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600" />
        <span>
          <strong>Quy tắc thi đấu:</strong> Trả lời <strong>ĐÚNG</strong> sẽ kéo cờ về phía mình; nếu trả lời{' '}
          <strong>SAI</strong>, {opponentTeam.name} sẽ giật mạnh cờ về phía họ!
        </span>
      </div>

      {/* Question Text */}
      <div className="mb-6">
        <h2 className="text-lg md:text-2xl font-extrabold text-slate-800 leading-snug">
          {currentQuestion.question}
        </h2>
      </div>

      {/* Options Grid (A, B, C, D) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
        {currentQuestion.options.map((opt) => {
          const isSelected = selectedAnswer === opt.key;
          const isCorrect = opt.key === currentQuestion.correctAnswer;

          let btnStyle =
            'border-slate-200 bg-slate-50/50 hover:bg-slate-100 hover:border-slate-300 text-slate-800 shadow-2xs';
          let badgeStyle = isTeam1 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700';

          if (isRoundFeedback) {
            if (isCorrect) {
              btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-400 shadow-md';
              badgeStyle = 'bg-emerald-600 text-white';
            } else if (isSelected && !isCorrect) {
              btnStyle = 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-300 opacity-90';
              badgeStyle = 'bg-rose-600 text-white';
            } else {
              btnStyle = 'border-slate-200 bg-slate-100/60 text-slate-400 opacity-60';
              badgeStyle = 'bg-slate-200 text-slate-500';
            }
          }

          return (
            <motion.button
              key={opt.key}
              type="button"
              id={`option-btn-${opt.key}`}
              disabled={isRoundFeedback}
              whileHover={!isRoundFeedback ? { scale: 1.012, y: -2 } : {}}
              whileTap={!isRoundFeedback ? { scale: 0.985 } : {}}
              onClick={() => {
                if (!isRoundFeedback) {
                  onAnswer(opt.key);
                }
              }}
              className={`w-full flex items-center text-left p-3.5 md:p-4 rounded-xl border-2 transition-all cursor-pointer disabled:cursor-default ${btnStyle}`}
            >
              {/* Option Letter Tag */}
              <span
                className={`w-9 h-9 rounded-lg font-black text-sm flex items-center justify-center mr-3.5 shrink-0 shadow-2xs transition-colors ${badgeStyle}`}
              >
                {opt.key}
              </span>

              {/* Option Text */}
              <span className="flex-1 text-sm md:text-base font-medium leading-relaxed">
                {opt.text}
              </span>

              {/* Status Icons on feedback */}
              {isRoundFeedback && (
                <span className="ml-2 shrink-0">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 animate-bounce" />
                  ) : isSelected ? (
                    <XCircle className="w-6 h-6 text-rose-600" />
                  ) : null}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Answer Result & Explanation Banner */}
      <AnimatePresence>
        {isRoundFeedback && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div
              className={`p-4 rounded-xl mb-4 border ${
                isCorrectAnswer
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-start gap-3">
                {isCorrectAnswer ? (
                  <Zap className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
                )}
                <div className="space-y-1">
                  <div className="font-black text-base flex items-center gap-2">
                    {isCorrectAnswer ? (
                      <span className="text-emerald-700">
                        Chính xác! 🎉 {activeTeam.name} giật dây kéo cờ về phía mình!
                      </span>
                    ) : (
                      <span className="text-rose-700">
                        Sai rồi! 💥 {activeTeam.name} trả lời sai, {opponentTeam.name} đã kéo cờ về phía họ!
                      </span>
                    )}
                  </div>
                  {currentQuestion.explanation && (
                    <p className="text-xs md:text-sm text-slate-700 pt-1 border-t border-slate-200/60">
                      <strong>Giải thích:</strong> {currentQuestion.explanation}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Next Question / Continue Button */}
            <div className="flex justify-end">
              <motion.button
                type="button"
                id="next-question-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onNextQuestion}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg cursor-pointer ${
                  isTeam1
                    ? 'bg-linear-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-red-200'
                    : 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-200'
                }`}
              >
                <span>Chuyển lượt / Câu tiếp theo</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
