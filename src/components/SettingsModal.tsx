import React from 'react';
import { motion } from 'motion/react';
import { X, Sliders, Volume2, VolumeX, Clock, Zap } from 'lucide-react';
import { GameSettings } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 overflow-hidden"
      >
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-lg text-slate-800">Cài Đặt Trận Đấu Kéo Co</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5">
          {/* Pull Step Sensitivity */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Độ dịch chuyển lá cờ mỗi câu:</span>
              </label>
              <span className="font-mono font-bold text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                {settings.pullStepSize}% / lần kéo
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mb-2">
              Khoảng cách cờ dịch chuyển sang bên khi một đội trả lời sai hoặc đúng.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[10, 15, 20].map((step) => (
                <button
                  key={step}
                  type="button"
                  onClick={() => onUpdateSettings({ pullStepSize: step })}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    settings.pullStepSize === step
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-700 ring-2 ring-indigo-200'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {step}% ({Math.round(100 / step)} câu thắng)
                </button>
              ))}
            </div>
          </div>

          {/* Time per question */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Thời gian suy nghĩ mỗi câu:</span>
              </label>
              <span className="font-mono font-bold text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                {settings.timePerQuestion === 0 ? 'Không giới hạn' : `${settings.timePerQuestion}s`}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 15, 30, 45].map((secs) => (
                <button
                  key={secs}
                  type="button"
                  onClick={() => onUpdateSettings({ timePerQuestion: secs })}
                  className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    settings.timePerQuestion === secs
                      ? 'bg-blue-50 border-blue-500 text-blue-700 ring-2 ring-blue-200'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {secs === 0 ? 'Vô hạn' : `${secs}s`}
                </button>
              ))}
            </div>
          </div>

          {/* Sound toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2">
              {settings.soundEnabled ? (
                <Volume2 className="w-5 h-5 text-emerald-600" />
              ) : (
                <VolumeX className="w-5 h-5 text-slate-400" />
              )}
              <div>
                <span className="text-xs font-bold text-slate-800 block">Hiệu ứng âm thanh</span>
                <span className="text-[11px] text-slate-500">Tiếng còi, kéo dây và chuông reo</span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={settings.soundEnabled}
              onChange={(e) => onUpdateSettings({ soundEnabled: e.target.checked })}
              className="w-5 h-5 accent-indigo-600 cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            Đóng cài đặt
          </button>
        </div>
      </motion.div>
    </div>
  );
};
