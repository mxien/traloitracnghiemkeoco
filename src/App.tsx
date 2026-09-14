import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { defaultTeam1Questions, defaultTeam2Questions } from './data/defaultQuestions';
import { Question, Team, ActiveTurn, GameSettings } from './types';
import { TugArena } from './components/TugArena';
import { TeamQuestionCard } from './components/TeamQuestionCard';
import { ScoreBoard } from './components/ScoreBoard';
import { VictoryModal } from './components/VictoryModal';
import { QuestionEditorModal } from './components/QuestionEditorModal';
import { SettingsModal } from './components/SettingsModal';
import { sounds } from './utils/soundEffects';
import { Swords, Trophy, RotateCcw, ArrowLeftRight, Zap, Users } from 'lucide-react';

export default function App() {
  // Game Settings
  const [settings, setSettings] = useState<GameSettings>({
    pullStepSize: 18, // 18% displacement per pull (approx 5-6 net pulls to win)
    timePerQuestion: 0, // 0 = unlimited by default for classrooms
    soundEnabled: true,
    allowRetakeOnTie: true,
  });

  // Gameplay Mode: 'turn_based' (luân phiên) or 'simultaneous' (tự do cùng lúc)
  const [gameMode, setGameMode] = useState<'turn_based' | 'simultaneous'>('turn_based');

  // Mobile View mode for screens < md: 'arena' | 'team1' | 'team2' | 'all'
  const [mobileView, setMobileView] = useState<'arena' | 'team1' | 'team2' | 'all'>('all');

  // Question Banks for Team 1 and Team 2
  const [team1Questions, setTeam1Questions] = useState<Question[]>(defaultTeam1Questions);
  const [team2Questions, setTeam2Questions] = useState<Question[]>(defaultTeam2Questions);

  // Teams State
  const [team1, setTeam1] = useState<Team>({
    id: 'team1',
    name: 'Đội 1 (Đỏ)',
    shortName: 'Đội 1',
    color: 'red',
    score: 0,
    wrongCount: 0,
    currentQuestionIndex: 0,
  });

  const [team2, setTeam2] = useState<Team>({
    id: 'team2',
    name: 'Đội 2 (Xanh)',
    shortName: 'Đội 2',
    color: 'blue',
    score: 0,
    wrongCount: 0,
    currentQuestionIndex: 0,
  });

  // Gameplay State
  const [currentTurn, setCurrentTurn] = useState<ActiveTurn>('team1');
  // ropePosition: -100 (Team 1 win) to 0 (Center) to +100 (Team 2 win)
  const [ropePosition, setRopePosition] = useState<number>(0);
  const [activePullingTeam, setActivePullingTeam] = useState<'team1' | 'team2' | null>(null);
  const [lastActionMessage, setLastActionMessage] = useState<string | null>(null);

  // Independent question answering states for each side
  const [team1SelectedAnswer, setTeam1SelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [team1IsFeedback, setTeam1IsFeedback] = useState<boolean>(false);

  const [team2SelectedAnswer, setTeam2SelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [team2IsFeedback, setTeam2IsFeedback] = useState<boolean>(false);

  // Game over state
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [winnerTeamId, setWinnerTeamId] = useState<'team1' | 'team2' | 'tie' | null>(null);
  const [gameOverReason, setGameOverReason] = useState<'knockout' | 'all_questions_completed' | 'timeout'>('all_questions_completed');

  // Modals
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Update sound synthesizer state
  useEffect(() => {
    sounds.setEnabled(settings.soundEnabled);
  }, [settings.soundEnabled]);

  // Current questions for each side
  const team1CurrentQuestion = team1Questions[team1.currentQuestionIndex] || null;
  const team2CurrentQuestion = team2Questions[team2.currentQuestionIndex] || null;

  // Handle player answer selection from either side
  const handleAnswerForTeam = (teamId: 'team1' | 'team2', chosenKey: 'A' | 'B' | 'C' | 'D') => {
    if (isGameOver) return;
    if (teamId === 'team1' && team1IsFeedback) return;
    if (teamId === 'team2' && team2IsFeedback) return;

    const currentQ = teamId === 'team1' ? team1CurrentQuestion : team2CurrentQuestion;
    if (!currentQ) return;

    if (teamId === 'team1') {
      setTeam1SelectedAnswer(chosenKey);
      setTeam1IsFeedback(true);
    } else {
      setTeam2SelectedAnswer(chosenKey);
      setTeam2IsFeedback(true);
    }

    const isCorrect = chosenKey === currentQ.correctAnswer;
    let puller: 'team1' | 'team2';
    let newPosition = ropePosition;
    let message = '';

    if (teamId === 'team1') {
      if (isCorrect) {
        // Đội 1 trả lời ĐÚNG -> Đội 1 kéo cờ về phía Đội 1 (âm)
        puller = 'team1';
        newPosition = Math.max(-100, ropePosition - settings.pullStepSize);
        sounds.playCorrect();
        message = `✅ ${team1.name} trả lời ĐÚNG! Đã giật cờ về phía mình (-${settings.pullStepSize}%)`;
        setTeam1((prev) => ({
          ...prev,
          score: prev.score + 1,
        }));
      } else {
        // Đội 1 trả lời SAI -> Đội 2 kéo cờ về phía Đội 2 (dương)
        puller = 'team2';
        newPosition = Math.min(100, ropePosition + settings.pullStepSize);
        sounds.playWrong();
        message = `❌ ${team1.name} trả lời SAI! ${team2.name} đã kéo mạnh cờ về phía họ (+${settings.pullStepSize}%)`;
        setTeam1((prev) => ({
          ...prev,
          wrongCount: prev.wrongCount + 1,
        }));
      }
    } else {
      // Đội 2 trả lời
      if (isCorrect) {
        // Đội 2 trả lời ĐÚNG -> Đội 2 kéo cờ về phía Đội 2 (dương)
        puller = 'team2';
        newPosition = Math.min(100, ropePosition + settings.pullStepSize);
        sounds.playCorrect();
        message = `✅ ${team2.name} trả lời ĐÚNG! Đã giật cờ về phía mình (+${settings.pullStepSize}%)`;
        setTeam2((prev) => ({
          ...prev,
          score: prev.score + 1,
        }));
      } else {
        // Đội 2 trả lời SAI -> Đội 1 kéo cờ về phía Đội 1 (âm)
        puller = 'team1';
        newPosition = Math.max(-100, ropePosition - settings.pullStepSize);
        sounds.playWrong();
        message = `❌ ${team2.name} trả lời SAI! ${team1.name} đã kéo mạnh cờ về phía họ (-${settings.pullStepSize}%)`;
        setTeam2((prev) => ({
          ...prev,
          wrongCount: prev.wrongCount + 1,
        }));
      }
    }

    // Set animated puller and update rope position
    setActivePullingTeam(puller);
    setRopePosition(newPosition);
    setLastActionMessage(message);

    // Play pull sound
    setTimeout(() => {
      sounds.playPullRope();
    }, 120);

    // Reset pulling animation after short burst
    setTimeout(() => {
      setActivePullingTeam(null);
    }, 1200);

    // Check knockout condition immediately
    if (newPosition <= -100) {
      setTimeout(() => {
        setIsGameOver(true);
        setWinnerTeamId('team1');
        setGameOverReason('knockout');
      }, 900);
    } else if (newPosition >= 100) {
      setTimeout(() => {
        setIsGameOver(true);
        setWinnerTeamId('team2');
        setGameOverReason('knockout');
      }, 900);
    }
  };

  // Proceed to next question for a given team
  const handleNextQuestionForTeam = (teamId: 'team1' | 'team2') => {
    if (isGameOver) return;
    sounds.playClick();

    let nextT1Index = team1.currentQuestionIndex;
    let nextT2Index = team2.currentQuestionIndex;

    if (teamId === 'team1') {
      nextT1Index += 1;
      setTeam1((prev) => ({ ...prev, currentQuestionIndex: nextT1Index }));
      setTeam1SelectedAnswer(null);
      setTeam1IsFeedback(false);

      // In turn-based mode, pass turn to team2 if they still have questions
      if (gameMode === 'turn_based' && nextT2Index < team2Questions.length) {
        setCurrentTurn('team2');
      }
    } else {
      nextT2Index += 1;
      setTeam2((prev) => ({ ...prev, currentQuestionIndex: nextT2Index }));
      setTeam2SelectedAnswer(null);
      setTeam2IsFeedback(false);

      // In turn-based mode, pass turn to team1 if they still have questions
      if (gameMode === 'turn_based' && nextT1Index < team1Questions.length) {
        setCurrentTurn('team1');
      }
    }

    // Check if both teams completed all 10 questions
    const t1Done = nextT1Index >= team1Questions.length;
    const t2Done = nextT2Index >= team2Questions.length;

    if (t1Done && t2Done) {
      setIsGameOver(true);
      setGameOverReason('all_questions_completed');
      if (ropePosition < 0) {
        setWinnerTeamId('team1');
      } else if (ropePosition > 0) {
        setWinnerTeamId('team2');
      } else {
        setWinnerTeamId('tie');
      }
    }
  };

  // Reset Game to beginning
  const handleResetGame = () => {
    sounds.playWhistle();
    setRopePosition(0);
    setActivePullingTeam(null);
    setLastActionMessage(null);
    setIsGameOver(false);
    setWinnerTeamId(null);
    setCurrentTurn('team1');

    setTeam1SelectedAnswer(null);
    setTeam1IsFeedback(false);
    setTeam2SelectedAnswer(null);
    setTeam2IsFeedback(false);

    setTeam1((prev) => ({
      ...prev,
      score: 0,
      wrongCount: 0,
      currentQuestionIndex: 0,
    }));

    setTeam2((prev) => ({
      ...prev,
      score: 0,
      wrongCount: 0,
      currentQuestionIndex: 0,
    }));
  };

  // Save customized questions & team names from QuestionEditorModal
  const handleSaveQuestions = (
    newT1List: Question[],
    newT2List: Question[],
    t1Name: string,
    t2Name: string
  ) => {
    setTeam1Questions(newT1List);
    setTeam2Questions(newT2List);
    setTeam1((prev) => ({
      ...prev,
      name: t1Name || 'Đội 1 (Đỏ)',
      shortName: t1Name || 'Đội 1',
    }));
    setTeam2((prev) => ({
      ...prev,
      name: t2Name || 'Đội 2 (Xanh)',
      shortName: t2Name || 'Đội 2',
    }));
    handleResetGame();
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-100 via-amber-50/40 to-slate-200 text-slate-900 py-3 px-3 sm:px-5 flex flex-col items-center">
      {/* Container constraint - broadened for side-by-side layout */}
      <div className="w-full max-w-[1400px] flex flex-col items-center">
        {/* Top Branding & Subtitle */}
        <header className="text-center mb-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs text-[11px] font-bold uppercase tracking-wider mb-1">
            <Swords className="w-3.5 h-3.5 text-amber-700" />
            <span>Trò Chơi Đối Kháng Kéo Co Trắc Nghiệm</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-slate-800 flex items-center justify-center gap-2">
            ĐẤU TRƯỜNG KÉO CO TRẮC NGHIỆM
          </h1>
          <p className="text-xs text-slate-600 max-w-xl mx-auto mt-0.5">
            Mỗi đội 10 câu trắc nghiệm. Trả lời sai bị đối thủ kéo cờ về phía họ; trả lời đúng giật cờ về phía mình!
          </p>
        </header>

        {/* Score & Match Status Bar */}
        <ScoreBoard
          team1={team1}
          team2={team2}
          currentTurn={currentTurn}
          soundEnabled={settings.soundEnabled}
          onToggleSound={() => setSettings((s) => ({ ...s, soundEnabled: !s.soundEnabled }))}
          onResetGame={handleResetGame}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenQuestionEditor={() => setIsEditorOpen(true)}
          totalQuestionsPerTeam={10}
        />

        {/* Mobile View Switcher (Visible only on small screens < md) */}
        <div className="md:hidden w-full mb-2.5 flex items-center justify-center">
          <div className="inline-flex rounded-xl border border-slate-300 bg-white p-1 shadow-2xs text-xs font-bold text-slate-600">
            <button
              type="button"
              onClick={() => setMobileView('team1')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                mobileView === 'team1' ? 'bg-red-600 text-white shadow-xs' : 'hover:bg-slate-100'
              }`}
            >
              🔴 Bảng Đội 1
            </button>
            <button
              type="button"
              onClick={() => setMobileView('arena')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                mobileView === 'arena' ? 'bg-amber-600 text-white shadow-xs' : 'hover:bg-slate-100'
              }`}
            >
              ⚔️ Sân Kéo Co
            </button>
            <button
              type="button"
              onClick={() => setMobileView('team2')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                mobileView === 'team2' ? 'bg-blue-600 text-white shadow-xs' : 'hover:bg-slate-100'
              }`}
            >
              🔵 Bảng Đội 2
            </button>
            <button
              type="button"
              onClick={() => setMobileView('all')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                mobileView === 'all' ? 'bg-slate-800 text-white shadow-xs' : 'hover:bg-slate-100'
              }`}
            >
              Tất cả
            </button>
          </div>
        </div>

        {/* 3-COLUMN MAIN LAYOUT:
            [BẢNG ĐỘI 1 (Bên Trái)]  ---  [SÂN KÉO CO (Ở Giữa)]  ---  [BẢNG ĐỘI 2 (Bên Phải)]
        */}
        <div className="w-full flex flex-col md:flex-row items-stretch gap-3 mb-3">
          {/* LEFT SIDE: Team 1 Question Card */}
          <div
            className={`w-full md:w-[280px] lg:w-[330px] xl:w-[360px] shrink-0 order-1 flex flex-col ${
              mobileView !== 'all' && mobileView !== 'team1' ? 'hidden md:flex' : 'flex'
            }`}
          >
            <TeamQuestionCard
              team={team1}
              opponentTeam={team2}
              question={team1CurrentQuestion}
              questionIndex={team1.currentQuestionIndex}
              totalQuestions={team1Questions.length}
              isActiveTurn={currentTurn === 'team1'}
              isRoundFeedback={team1IsFeedback}
              selectedAnswer={team1SelectedAnswer}
              onAnswer={(ans) => handleAnswerForTeam('team1', ans)}
              onNextQuestion={() => handleNextQuestionForTeam('team1')}
              isGameOver={isGameOver}
              timeLimit={settings.timePerQuestion}
              side="left"
              gameMode={gameMode}
            />
          </div>

          {/* CENTER: Tug-of-War Field Arena & Quick Control Bar */}
          <div
            className={`flex-1 min-w-0 order-2 flex flex-col gap-2.5 ${
              mobileView !== 'all' && mobileView !== 'arena' ? 'hidden md:flex' : 'flex'
            }`}
          >
            {/* The Animated Tug Arena */}
            <TugArena
              ropePosition={ropePosition}
              team1={team1}
              team2={team2}
              lastActionMessage={lastActionMessage}
              activePullingTeam={activePullingTeam}
              isGameOver={isGameOver}
              winnerTeamId={winnerTeamId}
            />

            {/* Turn Switcher & Game Mode Control Strip */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-2xs p-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
              {/* Turn Indicator & Manual Switcher */}
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-500">Lượt đấu:</span>
                <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
                  <button
                    type="button"
                    onClick={() => {
                      if (!team1IsFeedback && !team2IsFeedback) {
                        sounds.playClick();
                        setCurrentTurn('team1');
                      }
                    }}
                    className={`px-3 py-1 rounded-md font-bold text-xs transition-all cursor-pointer ${
                      currentTurn === 'team1'
                        ? 'bg-red-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    🔴 {team1.shortName}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!team1IsFeedback && !team2IsFeedback) {
                        sounds.playClick();
                        setCurrentTurn('team2');
                      }
                    }}
                    className={`px-3 py-1 rounded-md font-bold text-xs transition-all cursor-pointer ${
                      currentTurn === 'team2'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    🔵 {team2.shortName}
                  </button>
                </div>
              </div>

              {/* Mode Toggle: Theo lượt vs Tự do */}
              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-semibold hidden sm:inline">Chế độ:</span>
                <button
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setGameMode((m) => (m === 'turn_based' ? 'simultaneous' : 'turn_based'));
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border font-bold text-xs transition-all cursor-pointer ${
                    gameMode === 'turn_based'
                      ? 'bg-amber-50 border-amber-300 text-amber-900'
                      : 'bg-indigo-50 border-indigo-300 text-indigo-900'
                  }`}
                  title="Nhấn để đổi chế độ chơi"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span>
                    {gameMode === 'turn_based' ? 'Đấu Luân Phiên (Theo Lượt)' : 'Đấu Tự Do (Cùng Lúc)'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Team 2 Question Card */}
          <div
            className={`w-full md:w-[280px] lg:w-[330px] xl:w-[360px] shrink-0 order-3 flex flex-col ${
              mobileView !== 'all' && mobileView !== 'team2' ? 'hidden md:flex' : 'flex'
            }`}
          >
            <TeamQuestionCard
              team={team2}
              opponentTeam={team1}
              question={team2CurrentQuestion}
              questionIndex={team2.currentQuestionIndex}
              totalQuestions={team2Questions.length}
              isActiveTurn={currentTurn === 'team2'}
              isRoundFeedback={team2IsFeedback}
              selectedAnswer={team2SelectedAnswer}
              onAnswer={(ans) => handleAnswerForTeam('team2', ans)}
              onNextQuestion={() => handleNextQuestionForTeam('team2')}
              isGameOver={isGameOver}
              timeLimit={settings.timePerQuestion}
              side="right"
              gameMode={gameMode}
            />
          </div>
        </div>

        {/* Quick Helper / Instructions */}
        <footer className="mt-2 mb-1 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Trả lời đúng: Kéo cờ về phía mình (+{settings.pullStepSize}%)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span> Trả lời sai: Đối thủ kéo cờ về phía họ (+{settings.pullStepSize}%)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span> Vạch đích: Kéo cờ chạm vạch để thắng Knock-out
          </span>
        </footer>
      </div>

      {/* Victory Celebration Modal */}
      <VictoryModal
        isOpen={isGameOver}
        winnerTeamId={winnerTeamId}
        team1={team1}
        team2={team2}
        ropePosition={ropePosition}
        reason={gameOverReason}
        onRestart={handleResetGame}
        onOpenQuestionEditor={() => {
          setIsGameOver(false);
          setIsEditorOpen(true);
        }}
      />

      {/* Question & Team Manager Modal */}
      <QuestionEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        team1Questions={team1Questions}
        team2Questions={team2Questions}
        onSave={handleSaveQuestions}
        team1Name={team1.name}
        team2Name={team2.name}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={(newSettings) => setSettings((prev) => ({ ...prev, ...newSettings }))}
      />
    </div>
  );
}

