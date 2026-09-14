import React from 'react';
import { motion } from 'motion/react';
import { TeamCharacter } from './TeamCharacter';
import { Flag, Sparkles } from 'lucide-react';
import { Team } from '../types';

interface TugArenaProps {
  ropePosition: number; // -100 to 100 (negative: Team 1 pulls to Left, positive: Team 2 pulls to Right)
  team1: Team;
  team2: Team;
  lastActionMessage: string | null;
  activePullingTeam: 'team1' | 'team2' | null;
  isGameOver: boolean;
  winnerTeamId: 'team1' | 'team2' | 'tie' | null;
}

export const TugArena: React.FC<TugArenaProps> = ({
  ropePosition,
  team1,
  team2,
  lastActionMessage,
  activePullingTeam,
  isGameOver,
  winnerTeamId,
}) => {
  // Determine character states
  const getTeam1State = () => {
    if (isGameOver) {
      return winnerTeamId === 'team1' ? 'victory' : winnerTeamId === 'team2' ? 'defeated' : 'idle';
    }
    if (activePullingTeam === 'team1') return 'pulling';
    if (activePullingTeam === 'team2') return 'slipping';
    return 'idle';
  };

  const getTeam2State = () => {
    if (isGameOver) {
      return winnerTeamId === 'team2' ? 'victory' : winnerTeamId === 'team1' ? 'defeated' : 'idle';
    }
    if (activePullingTeam === 'team2') return 'pulling';
    if (activePullingTeam === 'team1') return 'slipping';
    return 'idle';
  };

  const team1State = getTeam1State();
  const team2State = getTeam2State();

  // Pixel or percent shift for the rope and characters
  // ropePosition is between -100 and +100
  // max shift of center flag across arena is approx +/- 130px in central layout
  const flagShiftX = (ropePosition / 100) * 130;

  return (
    <div className="relative w-full bg-linear-to-b from-sky-100 via-sky-50 to-amber-50 rounded-2xl border border-amber-200/80 shadow-md overflow-hidden p-3 sm:p-5 transition-all">
      {/* Stadium Top Bar & Field Info */}
      <div className="flex items-center justify-between mb-2 text-xs font-semibold text-slate-700">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-red-700 font-bold uppercase text-[11px] sm:text-xs">{team1.name}</span>
        </div>

        {/* Center meter indicator */}
        <div className="flex flex-col items-center">
          <span className="text-slate-600 font-bold text-[11px] sm:text-xs bg-white/80 px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
            {ropePosition === 0
              ? '⚖️ Vạch giữa (0%)'
              : ropePosition < 0
              ? `🚩 Nghiêng ${Math.abs(Math.round(ropePosition))}% về ${team1.shortName}`
              : `🚩 Nghiêng ${Math.abs(Math.round(ropePosition))}% về ${team2.shortName}`}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-blue-700 font-bold uppercase text-[11px] sm:text-xs">{team2.name}</span>
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
        </div>
      </div>

      {/* Progress Tension Gauge */}
      <div className="relative w-full h-3.5 bg-slate-200 rounded-full overflow-hidden mb-6 border border-slate-300 flex">
        {/* Team 1 zone (Left, red) */}
        <div
          className="h-full bg-red-500 transition-all duration-500"
          style={{ width: `${Math.max(0, 50 - ropePosition / 2)}%` }}
        />
        {/* Center Divider Marker */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-amber-400 z-10 shadow-sm" />
        {/* Team 2 zone (Right, blue) */}
        <div
          className="h-full bg-blue-500 transition-all duration-500 ml-auto"
          style={{ width: `${Math.max(0, 50 + ropePosition / 2)}%` }}
        />
      </div>

      {/* Action event alert */}
      {lastActionMessage && (
        <motion.div
          key={lastActionMessage}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="text-center mb-3"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300 shadow-xs font-semibold text-xs md:text-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            {lastActionMessage}
          </span>
        </motion.div>
      )}

      {/* TUG OF WAR PLAYFIELD */}
      <div className="relative h-64 md:h-72 w-full flex items-center justify-center overflow-hidden">
        {/* Stadium Grass and Field Lines Background */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-emerald-600 via-emerald-500 to-emerald-400 rounded-xl border-t-4 border-emerald-700/60 shadow-inner">
          {/* Mud / Pit in the center */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-36 md:w-52 h-14 bg-amber-800/80 rounded-t-full border-t-2 border-amber-900/60 flex items-center justify-center opacity-85">
            <span className="text-[10px] text-amber-200 font-bold uppercase tracking-wider -mt-2">
              Vũng Bùn Nguy Hiểm
            </span>
          </div>

          {/* White Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1.5 h-full bg-white/90 shadow-sm flex flex-col justify-between items-center py-1">
            <span className="text-[9px] bg-slate-900/70 text-white px-1 rounded-xs font-mono">0m</span>
          </div>

          {/* Left Win Limit Line */}
          <div className="absolute left-10 md:left-20 bottom-0 w-1 h-full border-l-2 border-dashed border-red-300 flex items-center">
            <span className="text-[9px] text-red-100 font-bold tracking-tight rotate-90 -ml-4 whitespace-nowrap">
              VẠCH THẮNG ĐỘI 1
            </span>
          </div>

          {/* Right Win Limit Line */}
          <div className="absolute right-10 md:right-20 bottom-0 w-1 h-full border-r-2 border-dashed border-blue-300 flex items-center">
            <span className="text-[9px] text-blue-100 font-bold tracking-tight -rotate-90 -mr-4 whitespace-nowrap">
              VẠCH THẮNG ĐỘI 2
            </span>
          </div>
        </div>

        {/* DYNAMIC SHIFT CONTAINER (ROPE + CHARACTERS TOGETHER) */}
        <motion.div
          className="relative w-full max-w-4xl h-full flex items-center justify-between px-2 md:px-8"
          animate={{ x: flagShiftX }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* TEAM 1 CHARACTERS (Left side) */}
          <div className="relative z-20 flex items-end -space-x-4 md:-space-x-3 pb-4">
            <TeamCharacter team="team1" position="anchor" state={team1State} index={0} />
            <TeamCharacter team="team1" position="middle" state={team1State} index={1} />
            <TeamCharacter team="team1" position="lead" state={team1State} index={2} />
          </div>

          {/* THE ROPE */}
          <div className="relative z-10 flex-1 flex items-center justify-center -mx-6 md:-mx-4 pb-2">
            {/* Braided Rope Graphic */}
            <div className="relative w-full h-4 bg-linear-to-r from-amber-700 via-amber-600 to-amber-700 rounded-full shadow-md border-y border-amber-900/50 flex items-center justify-center">
              {/* Rope texture segments */}
              <div
                className="absolute inset-0 opacity-40 rounded-full"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #78350F 0, #78350F 4px, transparent 4px, transparent 8px)',
                }}
              />

              {/* CENTER RED RIBBON & FLAG */}
              <motion.div
                className="relative z-30 flex flex-col items-center"
                animate={{
                  rotate: activePullingTeam === 'team1' ? -18 : activePullingTeam === 'team2' ? 18 : 0,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {/* Gold ring tying the ribbon to rope */}
                <div className="w-5 h-5 rounded-full border-2 border-amber-300 bg-amber-400 shadow-sm flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                </div>

                {/* Hanging Ribbon / Flag */}
                <div className="relative -mt-1 flex flex-col items-center">
                  <div className="w-7 h-10 bg-linear-to-b from-red-600 to-rose-700 rounded-b-md shadow-lg border border-red-400 flex items-center justify-center text-white">
                    <Flag className="w-4 h-4 fill-white text-white drop-shadow-xs" />
                  </div>
                  {/* Dangling ribbons */}
                  <div className="flex gap-1 -mt-1">
                    <div className="w-1.5 h-4 bg-red-600 rounded-b-xs"></div>
                    <div className="w-1.5 h-5 bg-yellow-400 rounded-b-xs"></div>
                    <div className="w-1.5 h-4 bg-red-600 rounded-b-xs"></div>
                  </div>
                </div>

                {/* Floating Tag Label */}
                <span className="absolute -top-7 px-2 py-0.5 bg-red-600 text-white font-bold text-[10px] rounded-full shadow-md whitespace-nowrap">
                  Lá Cờ Kéo Co
                </span>
              </motion.div>
            </div>
          </div>

          {/* TEAM 2 CHARACTERS (Right side) */}
          <div className="relative z-20 flex items-end -space-x-4 md:-space-x-3 pb-4">
            <TeamCharacter team="team2" position="lead" state={team2State} index={2} />
            <TeamCharacter team="team2" position="middle" state={team2State} index={1} />
            <TeamCharacter team="team2" position="anchor" state={team2State} index={0} />
          </div>
        </motion.div>

        {/* Dust & Ground Effect when pulling */}
        {activePullingTeam && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1.2 }}
            exit={{ opacity: 0 }}
            className={`absolute bottom-6 ${activePullingTeam === 'team1' ? 'left-1/4' : 'right-1/4'} pointer-events-none text-slate-400 font-bold text-xs`}
          >
            💨💨💨
          </motion.div>
        )}
      </div>

      {/* Arena Footer Info: Distance Scale */}
      <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 font-medium px-4">
        <span className="text-red-600 font-semibold flex items-center gap-1">
          ← Vạch đích {team1.shortName} (Thắng)
        </span>
        <span className="font-mono bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
          Vạch xuất phát (0m)
        </span>
        <span className="text-blue-600 font-semibold flex items-center gap-1">
          Vạch đích {team2.shortName} (Thắng) →
        </span>
      </div>
    </div>
  );
};
