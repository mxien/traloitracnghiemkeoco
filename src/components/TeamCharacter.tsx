import React from 'react';
import { motion } from 'motion/react';

interface TeamCharacterProps {
  team: 'team1' | 'team2';
  position: 'lead' | 'middle' | 'anchor';
  state: 'idle' | 'pulling' | 'slipping' | 'victory' | 'defeated';
  index: number;
}

export const TeamCharacter: React.FC<TeamCharacterProps> = ({
  team,
  position,
  state,
  index,
}) => {
  const isTeam1 = team === 'team1'; // Left team (Red)
  const isTeam2 = team === 'team2'; // Right team (Blue)

  // Primary colors
  const shirtColor = isTeam1 ? '#EF4444' : '#3B82F6';
  const shirtAccent = isTeam1 ? '#DC2626' : '#2563EB';
  const headbandColor = isTeam1 ? '#FEE2E2' : '#DBEAFE';
  const skinColor = index === 0 ? '#F6D8B8' : index === 1 ? '#E0B589' : '#FCD5B5';

  // Dynamic animations based on state
  const getMotionVariants = () => {
    if (state === 'victory') {
      return {
        y: [0, -14, 0],
        rotate: isTeam1 ? [-5, 5, -5] : [5, -5, 5],
        transition: { repeat: Infinity, duration: 0.5 + index * 0.1 },
      };
    }
    if (state === 'pulling') {
      // Heaving backwards
      return {
        x: isTeam1 ? [0, -12, -4] : [0, 12, 4],
        rotate: isTeam1 ? [-8, -14, -10] : [8, 14, 10],
        transition: { repeat: Infinity, duration: 0.6, repeatType: 'reverse' as const },
      };
    }
    if (state === 'slipping') {
      // Sliding forward towards center in distress
      return {
        x: isTeam1 ? [0, 8, 4] : [0, -8, -4],
        rotate: isTeam1 ? [4, 8, 5] : [-4, -8, -5],
        transition: { repeat: Infinity, duration: 0.3, repeatType: 'reverse' as const },
      };
    }
    // Idle ready stance
    return {
      y: [0, -2, 0],
      rotate: isTeam1 ? [-3, -4, -3] : [3, 4, 3],
      transition: { repeat: Infinity, duration: 1.8 + index * 0.2, ease: 'easeInOut' },
    };
  };

  // Scale based on role (anchor is bigger/stronger, lead is agile)
  const scale = position === 'anchor' ? 1.08 : position === 'middle' ? 1.0 : 0.94;

  return (
    <motion.div
      className="relative flex flex-col items-center select-none"
      animate={getMotionVariants()}
      style={{
        transformOrigin: isTeam1 ? 'bottom right' : 'bottom left',
        scale,
      }}
    >
      {/* Sweat drops or power sparks */}
      {state === 'pulling' && (
        <motion.div
          animate={{ opacity: [0, 1, 0], y: [-5, -15] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: index * 0.2 }}
          className="absolute -top-3 text-amber-500 font-black text-xs"
        >
          {isTeam1 ? '💪 Hây!' : '💪 Hò!'}
        </motion.div>
      )}

      {state === 'slipping' && (
        <motion.div
          animate={{ opacity: [0, 1, 0], y: [-2, -12] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="absolute -top-4 text-rose-500 font-black text-xs"
        >
          💦 Á!
        </motion.div>
      )}

      {/* SVG Character */}
      <svg
        width="68"
        height="100"
        viewBox="0 0 68 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`filter drop-shadow-md ${isTeam2 ? 'scale-x-[-1]' : ''}`}
      >
        {/* Shadow */}
        <ellipse cx="34" cy="94" rx="22" ry="5" fill="#000000" fillOpacity="0.18" />

        {/* Legs */}
        {state === 'pulling' ? (
          // Digging into ground
          <g>
            <path d="M22 65 L12 90 L2 92" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38 65 L44 88 L54 90" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            {/* Shoes */}
            <ellipse cx="3" cy="92" rx="6" ry="3" fill="#B91C1C" />
            <ellipse cx="53" cy="90" rx="6" ry="3" fill="#B91C1C" />
          </g>
        ) : state === 'slipping' ? (
          // Skidding legs
          <g>
            <path d="M24 65 L28 88 L36 89" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
            <path d="M36 65 L42 86 L50 87" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="36" cy="89" rx="6" ry="3" fill="#4B5563" />
            <ellipse cx="50" cy="87" rx="6" ry="3" fill="#4B5563" />
          </g>
        ) : (
          // Normal stance
          <g>
            <path d="M24 64 L18 88 L12 90" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
            <path d="M38 64 L42 88 L48 90" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
            <ellipse cx="12" cy="90" rx="5" ry="3" fill="#374151" />
            <ellipse cx="48" cy="90" rx="5" ry="3" fill="#374151" />
          </g>
        )}

        {/* Torso */}
        <path
          d="M18 42 C18 36, 46 36, 46 42 L42 66 L20 66 Z"
          fill={shirtColor}
          stroke={shirtAccent}
          strokeWidth="1.5"
        />

        {/* Team Number on Shirt */}
        <text
          x="31"
          y="56"
          fill="#FFFFFF"
          fontSize="11"
          fontWeight="bold"
          textAnchor="middle"
        >
          {isTeam1 ? '1' : '2'}
        </text>

        {/* Head */}
        <circle cx="32" cy="24" r="14" fill={skinColor} stroke="#4B5563" strokeWidth="1" />

        {/* Hair */}
        <path
          d="M18 22 C18 10, 46 10, 46 22 C42 16, 22 16, 18 22 Z"
          fill="#1F2937"
        />

        {/* Headband */}
        <rect x="18" y="19" width="28" height="5" rx="2" fill={headbandColor} />
        <rect x="28" y="20" width="8" height="3" rx="1" fill={shirtColor} />

        {/* Face details */}
        {state === 'victory' ? (
          // Happy closed eyes and big smile
          <g>
            <path d="M25 24 Q28 21 30 24" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M34 24 Q37 21 39 24" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M26 29 Q32 36 38 29 Z" fill="#EF4444" />
          </g>
        ) : state === 'slipping' ? (
          // Panicked expression
          <g>
            <ellipse cx="27" cy="24" rx="2" ry="3" fill="#1F2937" />
            <ellipse cx="37" cy="24" rx="2" ry="3" fill="#1F2937" />
            <ellipse cx="32" cy="31" rx="4" ry="4" fill="#991B1B" />
          </g>
        ) : state === 'pulling' ? (
          // Intense gritting teeth
          <g>
            <line x1="24" y1="23" x2="29" y2="25" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <line x1="39" y1="23" x2="34" y2="25" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <rect x="26" y="28" width="12" height="4" rx="1" fill="#FFFFFF" stroke="#1F2937" strokeWidth="1" />
            <line x1="32" y1="28" x2="32" y2="32" stroke="#1F2937" strokeWidth="1" />
          </g>
        ) : (
          // Confident smiling
          <g>
            <circle cx="27" cy="24" r="2" fill="#1F2937" />
            <circle cx="37" cy="24" r="2" fill="#1F2937" />
            <path d="M27 28 Q32 33 37 28" stroke="#1F2937" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* Arms holding the rope */}
        <g>
          {/* Back arm */}
          <path d="M20 42 L8 50 L14 54" stroke={skinColor} strokeWidth="5" strokeLinecap="round" />
          {/* Front arm grabbing rope */}
          <path d="M42 42 L56 50 L48 55" stroke={skinColor} strokeWidth="5" strokeLinecap="round" />
          {/* Hands holding rope tightly */}
          <circle cx="15" cy="53" r="4" fill={skinColor} />
          <circle cx="49" cy="53" r="4" fill={skinColor} />
        </g>
      </svg>
    </motion.div>
  );
};
