import React from 'react';
import { Team, ActiveTurn } from '../types';
import { Trophy, RotateCcw, Volume2, VolumeX, Settings, Edit3, Award } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ScoreBoardProps {
  team1: Team;
  team2: Team;
  currentTurn: ActiveTurn;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onResetGame: () => void;
  onOpenSettings: () => void;
  onOpenQuestionEditor: () => void;
  totalQuestionsPerTeam: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({
  team1,
  team2,
  currentTurn,
  soundEnabled,
  onToggleSound,
  onResetGame,
  onOpenSettings,
  onOpenQuestionEditor,
  totalQuestionsPerTeam,
}) => {
  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm p-3 md:p-4 mb-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        {/* TEAM 1 STATUS (Left) */}
        <div
          className={`w-full md:w-auto flex items-center justify-between md:justify-start gap-3 px-3 py-2 rounded-xl border transition-all ${
            currentTurn === 'team1'
              ? 'bg-red-50/80 border-red-300 ring-2 ring-red-200 shadow-xs'
              : 'bg-slate-50 border-slate-200 opacity-90'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <div>
              <div className="font-extrabold text-sm md:text-base text-red-700 flex items-center gap-1.5">
                {team1.name}
                {currentTurn === 'team1' && (
                  <span className="text-[10px] bg-red-600 text-white font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    LƯỢT NÀY
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-500">
                Đã làm: {team1.currentQuestionIndex} / {totalQuestionsPerTeam} câu
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 ml-2 font-mono">
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold" title="Số câu đúng">
              +{team1.score}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 text-xs font-bold" title="Số câu sai">
              -{team1.wrongCount}
            </span>
          </div>
        </div>

        {/* CENTER CONTROLS & TITLE */}
        <div className="flex items-center gap-2">
          {/* Audio Mute/Unmute */}
          <button
            type="button"
            onClick={onToggleSound}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              soundEnabled
                ? 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'
                : 'bg-slate-100 border-slate-200 text-slate-400 hover:bg-slate-200'
            }`}
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Question Editor */}
          <button
            type="button"
            onClick={onOpenQuestionEditor}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors cursor-pointer shadow-2xs"
            title="Quản lý / Chỉnh sửa câu hỏi 2 đội"
          >
            <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">Sửa câu hỏi</span>
          </button>

          {/* Settings */}
          <button
            type="button"
            onClick={onOpenSettings}
            className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer shadow-2xs"
            title="Cài đặt trận đấu"
          >
            <Settings className="w-4 h-4 text-slate-600" />
          </button>

          {/* Reset Game Button */}
          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              if (window.confirm('Bạn có chắc chắn muốn khởi động lại trận kéo co?')) {
                onResetGame();
              }
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs transition-colors cursor-pointer shadow-2xs"
            title="Làm mới trận đấu từ đầu"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đấu lại</span>
          </button>
        </div>

        {/* TEAM 2 STATUS (Right) */}
        <div
          className={`w-full md:w-auto flex items-center justify-between md:justify-end gap-3 px-3 py-2 rounded-xl border transition-all ${
            currentTurn === 'team2'
              ? 'bg-blue-50/80 border-blue-300 ring-2 ring-blue-200 shadow-xs'
              : 'bg-slate-50 border-slate-200 opacity-90'
          }`}
        >
          <div className="flex items-center gap-1.5 font-mono order-2 md:order-1">
            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold" title="Số câu đúng">
              +{team2.score}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 text-xs font-bold" title="Số câu sai">
              -{team2.wrongCount}
            </span>
          </div>

          <div className="flex items-center gap-2 order-1 md:order-2 text-right">
            <div>
              <div className="font-extrabold text-sm md:text-base text-blue-700 flex items-center justify-end gap-1.5">
                {currentTurn === 'team2' && (
                  <span className="text-[10px] bg-blue-600 text-white font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    LƯỢT NÀY
                  </span>
                )}
                {team2.name}
              </div>
              <div className="text-xs text-slate-500">
                Đã làm: {team2.currentQuestionIndex} / {totalQuestionsPerTeam} câu
              </div>
            </div>
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
