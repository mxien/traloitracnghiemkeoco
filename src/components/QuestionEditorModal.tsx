import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Save, RotateCcw, Check, Plus, Trash2, Download, Upload, HelpCircle } from 'lucide-react';
import { Question } from '../types';
import { defaultTeam1Questions, defaultTeam2Questions } from '../data/defaultQuestions';

interface QuestionEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  team1Questions: Question[];
  team2Questions: Question[];
  onSave: (t1: Question[], t2: Question[], t1Name: string, t2Name: string) => void;
  team1Name: string;
  team2Name: string;
}

export const QuestionEditorModal: React.FC<QuestionEditorModalProps> = ({
  isOpen,
  onClose,
  team1Questions,
  team2Questions,
  onSave,
  team1Name,
  team2Name,
}) => {
  const [activeTab, setActiveTab] = useState<'team1' | 'team2'>('team1');
  const [t1Name, setT1Name] = useState(team1Name);
  const [t2Name, setT2Name] = useState(team2Name);
  const [t1List, setT1List] = useState<Question[]>(team1Questions);
  const [t2List, setT2List] = useState<Question[]>(team2Questions);
  const [editingIndex, setEditingIndex] = useState<number>(0);

  if (!isOpen) return null;

  const currentList = activeTab === 'team1' ? t1List : t2List;
  const currentQ = currentList[editingIndex] || currentList[0];

  const updateCurrentQuestion = (fields: Partial<Question>) => {
    if (activeTab === 'team1') {
      const updated = [...t1List];
      updated[editingIndex] = { ...updated[editingIndex], ...fields };
      setT1List(updated);
    } else {
      const updated = [...t2List];
      updated[editingIndex] = { ...updated[editingIndex], ...fields };
      setT2List(updated);
    }
  };

  const updateOptionText = (key: 'A' | 'B' | 'C' | 'D', text: string) => {
    if (!currentQ) return;
    const newOptions = currentQ.options.map((opt) => (opt.key === key ? { ...opt, text } : opt));
    updateCurrentQuestion({ options: newOptions });
  };

  const handleResetToDefault = () => {
    if (window.confirm('Bạn có muốn khôi phục 10 câu hỏi mặc định cho cả 2 đội không?')) {
      setT1List(defaultTeam1Questions);
      setT2List(defaultTeam2Questions);
      setEditingIndex(0);
    }
  };

  const handleSaveAll = () => {
    onSave(t1List, t2List, t1Name, t2Name);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-900/75 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div>
            <h2 className="text-xl font-black text-slate-800">Quản Lý Ngân Hàng Câu Hỏi & Tên Đội</h2>
            <p className="text-xs text-slate-500">
              Tùy chỉnh 10 câu trắc nghiệm A, B, C, D cho Đội 1 và Đội 2
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Team Name Editors */}
        <div className="px-6 py-3 bg-slate-100/60 border-b border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 shrink-0"></span>
            <label className="text-xs font-bold text-red-700 shrink-0">Tên Đội 1:</label>
            <input
              type="text"
              value={t1Name}
              onChange={(e) => setT1Name(e.target.value)}
              className="w-full text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-red-200 bg-white focus:outline-red-500"
              placeholder="VD: Đội Đỏ, Đội Sư Tử..."
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 shrink-0"></span>
            <label className="text-xs font-bold text-blue-700 shrink-0">Tên Đội 2:</label>
            <input
              type="text"
              value={t2Name}
              onChange={(e) => setT2Name(e.target.value)}
              className="w-full text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-blue-200 bg-white focus:outline-blue-500"
              placeholder="VD: Đội Xanh, Đội Đại Bàng..."
            />
          </div>
        </div>

        {/* Tab Selector (Team 1 vs Team 2) */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-2">
          <button
            type="button"
            onClick={() => {
              setActiveTab('team1');
              setEditingIndex(0);
            }}
            className={`px-5 py-2.5 font-bold text-sm border-b-2 transition-all cursor-pointer ${
              activeTab === 'team1'
                ? 'border-red-600 text-red-700 bg-white rounded-t-xl shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Bộ câu hỏi {t1Name} ({t1List.length} câu)
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('team2');
              setEditingIndex(0);
            }}
            className={`px-5 py-2.5 font-bold text-sm border-b-2 transition-all cursor-pointer ${
              activeTab === 'team2'
                ? 'border-blue-600 text-blue-700 bg-white rounded-t-xl shadow-2xs'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Bộ câu hỏi {t2Name} ({t2List.length} câu)
          </button>
        </div>

        {/* Main Body: Question List + Question Detail */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Question Index Sidebar (1 to 10) */}
          <div className="md:col-span-4 space-y-1.5 border-r border-slate-100 pr-0 md:pr-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Danh sách 10 câu hỏi
            </span>
            <div className="space-y-1 max-h-[380px] overflow-y-auto pr-1">
              {currentList.map((q, idx) => (
                <button
                  key={q.id || idx}
                  type="button"
                  onClick={() => setEditingIndex(idx)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all cursor-pointer ${
                    editingIndex === idx
                      ? activeTab === 'team1'
                        ? 'bg-red-50 text-red-700 border-red-300 ring-1 ring-red-200'
                        : 'bg-blue-50 text-blue-700 border-blue-300 ring-1 ring-blue-200'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="truncate flex items-center gap-2">
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white shrink-0 ${
                        activeTab === 'team1' ? 'bg-red-500' : 'bg-blue-500'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="truncate">{q.question}</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 font-mono font-bold shrink-0 ml-1">
                    Đúng: {q.correctAnswer}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Question Detail Editor Form */}
          {currentQ ? (
            <div className="md:col-span-8 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nội dung Câu {editingIndex + 1}:
                </label>
                <textarea
                  rows={3}
                  value={currentQ.question}
                  onChange={(e) => updateCurrentQuestion({ question: e.target.value })}
                  className="w-full p-3 text-sm font-semibold rounded-xl border border-slate-300 focus:outline-indigo-500 bg-white"
                  placeholder="Nhập câu hỏi ở đây..."
                />
              </div>

              {/* 4 Options */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  4 Lựa chọn A, B, C, D (Nhấp vào tròn để chọn đáp án ĐÚNG):
                </label>
                {currentQ.options.map((opt) => {
                  const isCorrect = currentQ.correctAnswer === opt.key;
                  return (
                    <div
                      key={opt.key}
                      className={`flex items-center gap-2 p-2 rounded-xl border transition-all ${
                        isCorrect ? 'border-emerald-400 bg-emerald-50/50' : 'border-slate-200 bg-white'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => updateCurrentQuestion({ correctAnswer: opt.key })}
                        className={`w-8 h-8 rounded-lg font-black text-xs flex items-center justify-center shrink-0 cursor-pointer ${
                          isCorrect
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                        title="Đặt làm đáp án đúng"
                      >
                        {opt.key}
                      </button>

                      <input
                        type="text"
                        value={opt.text}
                        onChange={(e) => updateOptionText(opt.key, e.target.value)}
                        className="flex-1 text-sm px-3 py-1.5 rounded-lg border border-slate-200 focus:outline-indigo-500 bg-white"
                        placeholder={`Lựa chọn ${opt.key}...`}
                      />

                      {isCorrect && (
                        <span className="text-[11px] text-emerald-700 font-bold px-2 py-0.5 rounded-md bg-emerald-100 shrink-0">
                          Đáp án đúng ✓
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Giải thích đáp án (Tùy chọn hiển thị sau khi trả lời):
                </label>
                <input
                  type="text"
                  value={currentQ.explanation || ''}
                  onChange={(e) => updateCurrentQuestion({ explanation: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-indigo-500 bg-white"
                  placeholder="VD: Do nguyên lý vật lý..."
                />
              </div>
            </div>
          ) : (
            <div className="md:col-span-8 flex items-center justify-center text-slate-400 text-sm">
              Chọn câu hỏi để chỉnh sửa
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleResetToDefault}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Khôi phục mặc định ban đầu</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-200/70 transition-colors"
            >
              Hủy
            </button>
            <button
              type="button"
              onClick={handleSaveAll}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Lưu thay đổi & Áp dụng</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
