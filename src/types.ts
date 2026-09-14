export interface Option {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: string;
  question: string;
  options: Option[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation?: string;
}

export interface Team {
  id: 'team1' | 'team2';
  name: string;
  shortName: string;
  color: 'red' | 'blue';
  score: number; // số câu đúng
  wrongCount: number; // số câu sai
  currentQuestionIndex: number; // chỉ số câu hỏi hiện tại (0-9)
}

export type ActiveTurn = 'team1' | 'team2';

export interface GameHistoryEvent {
  id: string;
  timestamp: number;
  turn: ActiveTurn;
  questionIndex: number;
  selectedAnswer: 'A' | 'B' | 'C' | 'D';
  isCorrect: boolean;
  pullDelta: number;
  message: string;
}

export interface GameSettings {
  pullStepSize: number; // Tỷ lệ kéo mỗi câu (ví dụ: 15% hoặc 20%)
  timePerQuestion: number; // Giây (0 = không giới hạn)
  soundEnabled: boolean;
  allowRetakeOnTie: boolean;
}
