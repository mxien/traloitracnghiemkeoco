import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Trophy, RotateCcw, Award, CheckCircle, XCircle, Share2, Sparkles } from 'lucide-react';
import { Team } from '../types';
import { sounds } from '../utils/soundEffects';

interface VictoryModalProps {
  isOpen: boolean;
  winnerTeamId: 'team1' | 'team2' | 'tie' | null;
  team1: Team;
  team2: Team;
  ropePosition: number;
  reason: 'knockout' | 'all_questions_completed' | 'timeout';
  onRestart: () => void;
  onOpenQuestionEditor: () => void;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  isOpen,
  winnerTeamId,
  team1,
  team2,
  ropePosition,
  reason,
  onRestart,
  onOpenQuestionEditor,
}) => {
  useEffect(() => {
    if (isOpen) {
      sounds.playVictory();

      // Confetti burst
      try {
        const count = 200;
        const defaults = {
          origin: { y: 0.6 },
        };

        const fire = (particleRatio: number, opts: confetti.Options) => {
          confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
          });
        };

        fire(0.25, {
          spread: 26,
          startVelocity: 55,
        });
        fire(0.2, {
          spread: 60,
        });
        fire(0.35, {
          spread: 100,
          decay: 0.91,
          scalar: 0.8,
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2,
        });
        fire(0.1, {
          spread: 120,
          startVelocity: 45,
        });
      } catch {
        // Ignore if canvas-confetti fails in sandbox
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isTie = winnerTeamId === 'tie';
  const winner = winnerTeamId === 'team1' ? team1 : winnerTeamId === 'team2' ? team2 : null;
  const loser = winnerTeamId === 'team1' ? team2 : winnerTeamId === 'team2' ? team1 : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden text-center p-6 md:p-8"
      >
        {/* Top Trophy & Glow */}
        <div className="relative mb-5 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-linear-to-tr from-amber-400 to-yellow-300 flex items-center justify-center shadow-xl ring-8 ring-amber-100 animate-bounce">
            <Trophy className="w-10 h-10 text-amber-900" />
          </div>
        </div>

        {/* Victory Title */}
        {isTie ? (
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-2">
              KẾT QUẢ HÒA NHAU! 🤝
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Hai đội có sức mạnh cân bằng hoàn hảo! Lá cờ vẫn ở vị trí trung tâm.
            </p>
          </div>
        ) : (
          <div>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {reason === 'knockout' ? 'Chiến Thắng Knock-out Tuyệt Đối!' : 'Trận Đấu Kết Thúc!'}
            </span>
            <h2
              className={`text-2xl md:text-3xl font-black mb-2 ${
                winner?.color === 'red' ? 'text-red-600' : 'text-blue-600'
              }`}
            >
              {winner?.name} VÔ ĐỊCH! 🏆
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              {reason === 'knockout'
                ? `Xuất sắc kéo cờ vượt qua vạch chiến thắng!`
                : `Sau 10 lượt câu hỏi căng thẳng, lá cờ đã nghiêng hoàn toàn về phía ${winner?.name}!`}
            </p>
          </div>
        )}

        {/* Detailed Stats Comparison */}
        <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left">
          {/* Team 1 summary */}
          <div className="p-3 bg-white rounded-xl border border-red-100 shadow-2xs">
            <div className="font-extrabold text-sm text-red-600 mb-2 flex items-center justify-between">
              <span>{team1.name}</span>
              {winnerTeamId === 'team1' && (
                <span className="text-[10px] bg-red-600 text-white font-bold px-1.5 py-0.5 rounded-full">
                  THẮNG
                </span>
              )}
            </div>
            <div className="space-y-1 text-xs text-slate-600">
              <div className="flex justify-between items-center">
                <span>Số câu đúng:</span>
                <span className="font-bold text-emerald-600">{team1.score}/10</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Số câu sai:</span>
                <span className="font-bold text-rose-600">{team1.wrongCount}/10</span>
              </div>
            </div>
          </div>

          {/* Team 2 summary */}
          <div className="p-3 bg-white rounded-xl border border-blue-100 shadow-2xs">
            <div className="font-extrabold text-sm text-blue-600 mb-2 flex items-center justify-between">
              <span>{team2.name}</span>
              {winnerTeamId === 'team2' && (
                <span className="text-[10px] bg-blue-600 text-white font-bold px-1.5 py-0.5 rounded-full">
                  THẮNG
                </span>
              )}
            </div>
            <div className="space-y-1 text-xs text-slate-600">
              <div className="flex justify-between items-center">
                <span>Số câu đúng:</span>
                <span className="font-bold text-emerald-600">{team2.score}/10</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Số câu sai:</span>
                <span className="font-bold text-rose-600">{team2.wrongCount}/10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={onRestart}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-900 font-extrabold shadow-lg shadow-amber-200 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Chơi trận mới</span>
          </button>

          <button
            type="button"
            onClick={onOpenQuestionEditor}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-bold border border-slate-300 transition-all cursor-pointer shadow-2xs"
          >
            <span>Tùy chỉnh câu hỏi</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
