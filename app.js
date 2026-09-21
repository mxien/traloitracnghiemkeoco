/**
 * =========================================================
 * ĐẤU TRƯỜNG KÉO CO TRẮC NGHIỆM - PURE JAVASCRIPT
 * 100% Vanilla JS, chạy mượt trên GitHub Pages không cần build
 * =========================================================
 */

// --- 1. DEFAULT QUESTION BANKS (10 câu cho Đội 1 & 10 câu cho Đội 2) ---
const DEFAULT_QUESTIONS_TEAM1 = [
  {
    id: 't1_1',
    question: 'Chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu" diễn ra vào năm nào?',
    options: [
      { key: 'A', text: 'Năm 1945' },
      { key: 'B', text: 'Năm 1954' },
      { key: 'C', text: 'Năm 1975' },
      { key: 'D', text: 'Năm 1968' }
    ],
    correctAnswer: 'B',
    explanation: 'Chiến thắng lịch sử Điện Biên Phủ kết thúc thắng lợi vào ngày 07/05/1954.'
  },
  {
    id: 't1_2',
    question: 'Hành tinh nào trong Hệ Mặt Trời được mệnh danh là "Hành tinh Đỏ"?',
    options: [
      { key: 'A', text: 'Sao Thủy' },
      { key: 'B', text: 'Sao Kim' },
      { key: 'C', text: 'Sao Hỏa' },
      { key: 'D', text: 'Sao Mộc' }
    ],
    correctAnswer: 'C',
    explanation: 'Sao Hỏa có màu đỏ cam đặc trưng do bề mặt chứa nhiều oxit sắt (rỉ sét).'
  },
  {
    id: 't1_3',
    question: 'Tỉnh/Thành phố nào của nước ta có diện tích tự nhiên lớn nhất hiện nay?',
    options: [
      { key: 'A', text: 'Thanh Hóa' },
      { key: 'B', text: 'Nghệ An' },
      { key: 'C', text: 'Hà Nội' },
      { key: 'D', text: 'Đắk Lắk' }
    ],
    correctAnswer: 'B',
    explanation: 'Nghệ An là tỉnh có diện tích lớn nhất Việt Nam với gần 16.490 km².'
  },
  {
    id: 't1_4',
    question: 'Đơn vị đo cường độ dòng điện trong hệ đo lường quốc tế SI là gì?',
    options: [
      { key: 'A', text: 'Vôn (V)' },
      { key: 'B', text: 'Oát (W)' },
      { key: 'C', text: 'Ampe (A)' },
      { key: 'D', text: 'Jun (J)' }
    ],
    correctAnswer: 'C',
    explanation: 'Ampe (ký hiệu: A) là đơn vị đo cường độ dòng điện trong hệ SI.'
  },
  {
    id: 't1_5',
    question: 'Tác phẩm văn học "Truyện Kiều" của Đại thi hào Nguyễn Du viết bằng thể thơ nào?',
    options: [
      { key: 'A', text: 'Thất ngôn bát cú' },
      { key: 'B', text: 'Lục bát' },
      { key: 'C', text: 'Song thất lục bát' },
      { key: 'D', text: 'Tự do' }
    ],
    correctAnswer: 'B',
    explanation: 'Đoạn trường tân thanh (Truyện Kiều) gồm 3.254 câu thơ lục bát bất hủ.'
  },
  {
    id: 't1_6',
    question: 'Trong tin học, 1 Kilobyte (KB) theo chuẩn nhị phân tương đương bao nhiêu Bytes?',
    options: [
      { key: 'A', text: '1000 Bytes' },
      { key: 'B', text: '1024 Bytes' },
      { key: 'C', text: '512 Bytes' },
      { key: 'D', text: '2048 Bytes' }
    ],
    correctAnswer: 'B',
    explanation: 'Theo chuẩn cơ số 2 trong máy tính: 1 KB = 2^10 Bytes = 1024 Bytes.'
  },
  {
    id: 't1_7',
    question: 'Chất khí nào chiếm thể tích lớn nhất trong không khí của Trái Đất?',
    options: [
      { key: 'A', text: 'Khí Ôxi (O2)' },
      { key: 'B', text: 'Khí Nitơ (N2)' },
      { key: 'C', text: 'Khí Cacbonic (CO2)' },
      { key: 'D', text: 'Khí Argon (Ar)' }
    ],
    correctAnswer: 'B',
    explanation: 'Khí Nitơ chiếm khoảng 78% thể tích bầu khí quyển Trái Đất.'
  },
  {
    id: 't1_8',
    question: 'Đại dương nào có diện tích lớn nhất trên hành tinh Trái Đất?',
    options: [
      { key: 'A', text: 'Đại Tây Dương' },
      { key: 'B', text: 'Ấn Độ Dương' },
      { key: 'C', text: 'Thái Bình Dương' },
      { key: 'D', text: 'Bắc Băng Dương' }
    ],
    correctAnswer: 'C',
    explanation: 'Thái Bình Dương là đại dương lớn nhất và sâu nhất trên Trái Đất.'
  },
  {
    id: 't1_9',
    question: 'Cơ quan nào trong cơ thể người chịu trách nhiệm sản xuất và tiết ra hoóc-môn Insulin?',
    options: [
      { key: 'A', text: 'Gan' },
      { key: 'B', text: 'Tuyến tụy' },
      { key: 'C', text: 'Thận' },
      { key: 'D', text: 'Dạ dày' }
    ],
    correctAnswer: 'B',
    explanation: 'Các tế bào beta đảo tụy thuộc tuyến tụy sản sinh ra Insulin điều hòa đường huyết.'
  },
  {
    id: 't1_10',
    question: 'Bộ tranh dân gian nổi tiếng "Tố nữ" thuộc dòng tranh dân gian nào của Việt Nam?',
    options: [
      { key: 'A', text: 'Tranh Đông Hồ' },
      { key: 'B', text: 'Tranh Hàng Trống' },
      { key: 'C', text: 'Tranh Kim Hoàng' },
      { key: 'D', text: 'Tranh Làng Sình' }
    ],
    correctAnswer: 'B',
    explanation: 'Bộ tranh tứ bình Tố Nữ vẽ 4 thiếu nữ đàn sáo là kiệt tác của dòng tranh Hàng Trống Hà Nội.'
  }
];

const DEFAULT_QUESTIONS_TEAM2 = [
  {
    id: 't2_1',
    question: 'Vua Quang Trung - Nguyễn Huệ đại phá 29 vạn quân Thanh vào mùa xuân năm nào?',
    options: [
      { key: 'A', text: 'Năm 1789 (Kỷ Dậu)' },
      { key: 'B', text: 'Năm 1785' },
      { key: 'C', text: 'Năm 1792' },
      { key: 'D', text: 'Năm 1802' }
    ],
    correctAnswer: 'A',
    explanation: 'Mùa xuân Kỷ Dậu 1789, nghĩa quân Tây Sơn đã quét sạch 29 vạn quân Thanh tại Ngọc Hồi - Đống Đa.'
  },
  {
    id: 't2_2',
    question: 'Kim loại nào có nhiệt độ nóng chảy cao nhất và thường dùng làm dây tóc bóng đèn sợi đốt?',
    options: [
      { key: 'A', text: 'Sắt (Fe)' },
      { key: 'B', text: 'Đồng (Cu)' },
      { key: 'C', text: 'Vonfram (Tungsten - W)' },
      { key: 'D', text: 'Titan (Ti)' }
    ],
    correctAnswer: 'C',
    explanation: 'Vonfram (W) có nhiệt độ nóng chảy lên tới xấp xỉ 3422 °C, cao nhất trong các kim loại.'
  },
  {
    id: 't2_3',
    question: 'Đỉnh núi Phan Xi Păng (Fansipan) - nóc nhà Đông Dương nằm trên dãy núi nào?',
    options: [
      { key: 'A', text: 'Dãy Bạch Mã' },
      { key: 'B', text: 'Dãy Hoàng Liên Sơn' },
      { key: 'C', text: 'Dãy Trường Sơn Bắc' },
      { key: 'D', text: 'Dãy Đông Triều' }
    ],
    correctAnswer: 'B',
    explanation: 'Fansipan cao 3.143m thuộc dãy núi Hoàng Liên Sơn, nằm giữa Lào Cai và Lai Châu.'
  },
  {
    id: 't2_4',
    question: 'Tập hợp các số nguyên trong toán học được ký hiệu bằng chữ cái nào?',
    options: [
      { key: 'A', text: 'Ký hiệu N' },
      { key: 'B', text: 'Ký hiệu Q' },
      { key: 'C', text: 'Ký hiệu Z' },
      { key: 'D', text: 'Ký hiệu R' }
    ],
    correctAnswer: 'C',
    explanation: 'Ký hiệu Z (bắt nguồn từ từ tiếng Đức "Zahlen" - con số) đại diện cho tập các số nguyên.'
  },
  {
    id: 't2_5',
    question: 'Vận tốc của ánh sáng truyền trong chân không có giá trị xấp xỉ là bao nhiêu?',
    options: [
      { key: 'A', text: '300.000 km/s' },
      { key: 'B', text: '30.000 km/s' },
      { key: 'C', text: '3.000.000 km/s' },
      { key: 'D', text: '340 m/s' }
    ],
    correctAnswer: 'A',
    explanation: 'Vận tốc ánh sáng trong chân không xấp xỉ 299.792 km/s (~300.000 km/s).'
  },
  {
    id: 't2_6',
    question: 'Di sản thiên nhiên thế giới "Phong Nha - Kẻ Bàng" thuộc tỉnh nào của nước ta?',
    options: [
      { key: 'A', text: 'Quảng Ninh' },
      { key: 'B', text: 'Quảng Bình' },
      { key: 'C', text: 'Quảng Trị' },
      { key: 'D', text: 'Ninh Bình' }
    ],
    correctAnswer: 'B',
    explanation: 'Vườn quốc gia Phong Nha - Kẻ Bàng với hang Sơn Đoòng thuộc tỉnh Quảng Bình.'
  },
  {
    id: 't2_7',
    question: 'Ngôn ngữ lập trình đầu tiên nào thường được dùng để tạo cấu trúc khung cho một trang web?',
    options: [
      { key: 'A', text: 'Python' },
      { key: 'B', text: 'HTML' },
      { key: 'C', text: 'SQL' },
      { key: 'D', text: 'C++' }
    ],
    correctAnswer: 'B',
    explanation: 'HTML (HyperText Markup Language) là ngôn ngữ đánh dấu tiêu chuẩn để tạo khung tài liệu web.'
  },
  {
    id: 't2_8',
    question: 'Thành phần tế bào máu nào chịu trách nhiệm vận chuyển khí Ôxi đi khắp cơ thể người?',
    options: [
      { key: 'A', text: 'Bạch cầu' },
      { key: 'B', text: 'Tiểu cầu' },
      { key: 'C', text: 'Hồng cầu' },
      { key: 'D', text: 'Huyết tương' }
    ],
    correctAnswer: 'C',
    explanation: 'Hồng cầu chứa huyết sắc tố (Hemoglobin) gắn kết và vận chuyển khí oxy từ phổi tới các mô.'
  },
  {
    id: 't2_9',
    question: 'Ai là tác giả của bản "Tuyên ngôn Độc lập" khai sinh ra nước Việt Nam Dân chủ Cộng hòa?',
    options: [
      { key: 'A', text: 'Đại tướng Võ Nguyên Giáp' },
      { key: 'B', text: 'Chủ tịch Hồ Chí Minh' },
      { key: 'C', text: 'Thủ tướng Phạm Văn Đồng' },
      { key: 'D', text: 'Tổng bí thư Trường Chinh' }
    ],
    correctAnswer: 'B',
    explanation: 'Chủ tịch Hồ Chí Minh soạn thảo và đọc bản Tuyên ngôn Độc lập ngày 02/09/1945 tại Quảng trường Ba Đình.'
  },
  {
    id: 't2_10',
    question: 'Hình tam giác đều có ba góc bằng nhau và mỗi góc có số đo bằng bao nhiêu độ?',
    options: [
      { key: 'A', text: '45 độ' },
      { key: 'B', text: '60 độ' },
      { key: 'C', text: '90 độ' },
      { key: 'D', text: '120 độ' }
    ],
    correctAnswer: 'B',
    explanation: 'Tổng ba góc của một tam giác luôn bằng 180°. Trong tam giác đều: 180° / 3 = 60°.'
  }
];

// --- 2. WEB AUDIO API SYNTHESIZER (Không cần file mp3 ngoài) ---
class SoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.2, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.22);
      });
    } catch (e) {}
  }

  playWrong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.3);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);
    } catch (e) {}
  }

  playTugPull() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.linearRampToValueAtTime(320, now + 0.18);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.24);
    } catch (e) {}
  }

  playVictory() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [440, 554.37, 659.25, 880];
      const now = this.ctx.currentTime;
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, now + idx * 0.14);
        gain.gain.setValueAtTime(0.18, now + idx * 0.14);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.14 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.14);
        osc.stop(now + idx * 0.14 + 0.42);
      });
    } catch (e) {}
  }

  playTick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }

  playTimeUp() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [260, 200].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.18);
        gain.gain.setValueAtTime(0.18, now + idx * 0.18);
        gain.gain.linearRampToValueAtTime(0.01, now + idx * 0.18 + 0.16);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.18);
        osc.stop(now + idx * 0.18 + 0.17);
      });
    } catch (e) {}
  }
}

const sounds = new SoundSynthesizer();

// --- 3. LIGHTWEIGHT HTML5 CANVAS CONFETTI (Pháo hoa chiến thắng) ---
class ConfettiEffect {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animationFrame = null;
    if (this.canvas) {
      this.resize();
      window.addEventListener('resize', () => this.resize());
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start() {
    if (!this.ctx) return;
    this.particles = [];
    const colors = ['#dc2626', '#2563eb', '#f59e0b', '#10b981', '#ec4899', '#8b5cf6'];
    for (let i = 0; i < 120; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * -this.canvas.height,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 4 + 3,
        speedX: (Math.random() - 0.5) * 4,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8
      });
    }

    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    this.animate();
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    let activeCount = 0;
    this.particles.forEach((p) => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y < this.canvas.height + 20) {
        activeCount++;
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        this.ctx.restore();
      }
    });

    if (activeCount > 0) {
      this.animationFrame = requestAnimationFrame(() => this.animate());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  stop() {
    if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
    if (this.ctx) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

// --- 4. GAME STATE ENGINE ---
const GameState = {
  // Settings
  pullStepSize: 18, // 18% mỗi lần kéo
  soundEnabled: true,
  gameMode: 'turn_based', // 'turn_based' hoặc 'simultaneous'
  mobileView: 'all',

  // Opponent Mode: 'two_players' (2 người chơi) hoặc 'vs_bot' (chơi với máy)
  opponentMode: 'two_players',
  botDifficulty: 'medium', // 'easy' (50%), 'medium' (75%), 'hard' (90%)
  isBotThinking: false,

  // Timer Configuration & State
  totalMatchDuration: 120, // 2 phút (120 giây)
  totalTimeRemaining: 120,
  isMatchTimerPaused: false,

  questionDuration: 20, // 20 giây mỗi câu hỏi
  questionTimeRemaining: 20,

  // Questions
  team1Questions: [],
  team2Questions: [],

  // Teams info
  team1: {
    score: 0,
    wrongCount: 0,
    currentIndex: 0,
    selectedAnswer: null,
    isFeedback: false
  },
  team2: {
    score: 0,
    wrongCount: 0,
    currentIndex: 0,
    selectedAnswer: null,
    isFeedback: false
  },

  // Field Position: -100 (Team 1 Win) -> 0 (Center) -> +100 (Team 2 Win)
  ropePosition: 0,
  currentTurn: 'team1', // 'team1' hoặc 'team2'
  activePullingTeam: null, // 'team1', 'team2', hoặc null
  isGameOver: false,
  winnerId: null, // 'team1', 'team2', 'tie'
  gameOverReason: null,

  // Main navigation & Question management
  mainActiveTab: 'game', // 'game' | 'manage'
  manageActiveTeam: 'team1', // 'team1' | 'team2'
  manageSearchQuery: '',

  // Question editor active tab
  editorActiveTab: 'team1'
};

let confettiInstance = null;

// --- 5. SVG ATHLETE CHARACTER BUILDER ---
function renderCharacterSvg(team, role, state) {
  const isTeam1 = team === 'team1';
  const mainColor = isTeam1 ? '#dc2626' : '#2563eb';
  const lightColor = isTeam1 ? '#f87171' : '#60a5fa';
  const helmetColor = isTeam1 ? '#b91c1c' : '#1d4ed8';

  // Body tilt
  let bodyRotate = isTeam1 ? -6 : 6;
  if (state === 'pulling') bodyRotate = isTeam1 ? -16 : 16;
  if (state === 'slipping') bodyRotate = isTeam1 ? 12 : -12;

  return `
    <svg class="svg-character ${state === 'pulling' ? (isTeam1 ? 'pulling-left' : 'pulling-right') : state === 'slipping' ? (isTeam1 ? 'slipping-left' : 'slipping-right') : ''}" viewBox="0 0 60 90" style="transform: rotate(${bodyRotate}deg);">
      <!-- Shadow -->
      <ellipse cx="30" cy="85" rx="18" ry="4" fill="rgba(0,0,0,0.15)"/>
      
      <!-- Legs -->
      <path d="M 22 55 L 18 80 L 12 82" stroke="#1e293b" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M 38 55 L 42 80 L 48 82" stroke="#1e293b" stroke-width="4" stroke-linecap="round" fill="none"/>
      
      <!-- Shoes -->
      <ellipse cx="11" cy="82" rx="5" ry="3" fill="#0f172a"/>
      <ellipse cx="49" cy="82" rx="5" ry="3" fill="#0f172a"/>

      <!-- Body / Team Jersey -->
      <path d="M 20 32 L 40 32 L 38 58 L 22 58 Z" fill="${mainColor}" stroke="${helmetColor}" stroke-width="1.5"/>
      <circle cx="30" cy="45" r="5" fill="white" opacity="0.9"/>
      <text x="30" y="48" font-size="6" font-weight="900" text-anchor="middle" fill="${mainColor}">${isTeam1 ? '1' : '2'}</text>

      <!-- Head & Helmet -->
      <circle cx="30" cy="22" r="12" fill="#fed7aa"/>
      <path d="M 18 20 A 12 12 0 0 1 42 20 Z" fill="${helmetColor}"/>
      <rect x="17" y="19" width="26" height="3" rx="1.5" fill="${lightColor}"/>

      <!-- Expressive Face -->
      ${state === 'pulling' 
        ? `<circle cx="26" cy="22" r="1.5" fill="#0f172a"/><circle cx="34" cy="22" r="1.5" fill="#0f172a"/><ellipse cx="30" cy="27" rx="3" ry="4" fill="#7f1d1d"/>` 
        : state === 'slipping' 
        ? `<ellipse cx="26" cy="22" rx="2" ry="3" fill="#0f172a"/><ellipse cx="34" cy="22" rx="2" ry="3" fill="#0f172a"/><ellipse cx="30" cy="28" rx="4" ry="2" fill="#7f1d1d"/>`
        : `<circle cx="27" cy="22" r="1.5" fill="#0f172a"/><circle cx="33" cy="22" r="1.5" fill="#0f172a"/><path d="M 27 26 Q 30 29 33 26" stroke="#0f172a" stroke-width="1.2" fill="none"/>`
      }

      <!-- Arms Pulling Rope -->
      <path d="M 22 36 Q ${isTeam1 ? '42 46' : '18 46'} 30 46" stroke="#fed7aa" stroke-width="4.5" stroke-linecap="round" fill="none"/>
      <circle cx="30" cy="46" r="3" fill="#ea580c"/>

      <!-- Sweat drops when pulling -->
      ${state === 'pulling' ? `<circle cx="${isTeam1 ? '14' : '46'}" cy="16" r="1.5" fill="#38bdf8"/>` : ''}
    </svg>
  `;
}

// --- 6. INITIALIZATION & STORAGE ---
function loadStoredData() {
  const savedT1 = localStorage.getItem('t1_custom_questions');
  const savedT2 = localStorage.getItem('t2_custom_questions');

  GameState.team1Questions = savedT1 ? JSON.parse(savedT1) : JSON.parse(JSON.stringify(DEFAULT_QUESTIONS_TEAM1));
  GameState.team2Questions = savedT2 ? JSON.parse(savedT2) : JSON.parse(JSON.stringify(DEFAULT_QUESTIONS_TEAM2));

  const savedStep = localStorage.getItem('keoco_pull_step');
  if (savedStep) GameState.pullStepSize = parseInt(savedStep, 10);

  const savedMatchTime = localStorage.getItem('keoco_match_time');
  if (savedMatchTime) {
    const mt = parseInt(savedMatchTime, 10);
    if (!isNaN(mt) && mt > 0) {
      GameState.totalMatchDuration = mt;
      GameState.totalTimeRemaining = mt;
    }
  }

  const savedQuestionTime = localStorage.getItem('keoco_question_time');
  if (savedQuestionTime) {
    const qt = parseInt(savedQuestionTime, 10);
    if (!isNaN(qt) && qt > 0) {
      GameState.questionDuration = qt;
      GameState.questionTimeRemaining = qt;
    }
  }

  const savedOpponentMode = localStorage.getItem('keoco_opponent_mode');
  if (savedOpponentMode === 'two_players' || savedOpponentMode === 'vs_bot') {
    GameState.opponentMode = savedOpponentMode;
  }

  const savedBotDiff = localStorage.getItem('keoco_bot_difficulty');
  if (savedBotDiff && ['easy', 'medium', 'hard'].includes(savedBotDiff)) {
    GameState.botDifficulty = savedBotDiff;
  }
}

function saveCustomQuestions() {
  localStorage.setItem('t1_custom_questions', JSON.stringify(GameState.team1Questions));
  localStorage.setItem('t2_custom_questions', JSON.stringify(GameState.team2Questions));
}

// --- 7. RENDER LOGIC ---
function renderUI() {
  updateQuestionCountBadges();
  updateMatchTimerDisplay();

  const isVsBot = GameState.opponentMode === 'vs_bot';

  // Update Match Mode Bar Buttons
  const mode2pBtn = document.getElementById('mode-btn-2p');
  const modeBotBtn = document.getElementById('mode-btn-bot');
  const botDiffControls = document.getElementById('bot-difficulty-controls');

  if (mode2pBtn && modeBotBtn) {
    if (isVsBot) {
      mode2pBtn.className = 'mode-pill-btn';
      modeBotBtn.className = 'mode-pill-btn active-mode';
      if (botDiffControls) botDiffControls.style.display = 'flex';
    } else {
      mode2pBtn.className = 'mode-pill-btn active-mode';
      modeBotBtn.className = 'mode-pill-btn';
      if (botDiffControls) botDiffControls.style.display = 'none';
    }
  }

  // Update Bot difficulty buttons
  ['easy', 'medium', 'hard'].forEach((diff) => {
    const btn = document.getElementById(`diff-${diff}`);
    if (btn) {
      btn.className = GameState.botDifficulty === diff ? 'diff-btn active-diff' : 'diff-btn';
    }
  });

  // Team 2 title & labels
  const t2Title = isVsBot ? '🤖 Máy Tính (Bot)' : 'Đội 2 (Xanh)';
  const t2ScoreTitle = document.getElementById('t2-score-title');
  if (t2ScoreTitle) t2ScoreTitle.textContent = t2Title;

  const arenaT2Label = document.getElementById('arena-t2-label');
  if (arenaT2Label) arenaT2Label.textContent = isVsBot ? '🤖 MÁY TÍNH (XANH)' : 'ĐỘI 2 (XANH)';

  const t2TurnBtn = document.getElementById('turn-btn-t2');
  if (t2TurnBtn) t2TurnBtn.innerHTML = isVsBot ? '🤖 Máy tính' : '🔵 Đội 2';

  const t2HeaderTitle = document.getElementById('t2-header-title');
  if (t2HeaderTitle) t2HeaderTitle.textContent = t2Title;

  const t1BannerTitle = document.getElementById('t1-banner-title');
  if (t1BannerTitle) {
    t1BannerTitle.textContent = isVsBot ? '👤 BẢNG CỦA BẠN (ĐỘI 1 ĐỎ)' : '📍 BẢNG ĐỘI 1 (ĐỎ)';
  }

  const t2BannerTitle = document.getElementById('t2-banner-title');
  if (t2BannerTitle) {
    t2BannerTitle.textContent = isVsBot ? '🤖 BẢNG MÁY TÍNH (BOT AI)' : '📍 BẢNG ĐỘI 2 (XANH)';
  }

  // 1. Scoreboard counts
  document.getElementById('t1-score-display').textContent = `${GameState.team1.score} đúng`;
  document.getElementById('t1-wrong-display').textContent = `${GameState.team1.wrongCount} sai`;
  document.getElementById('t2-score-display').textContent = `${GameState.team2.score} đúng`;
  document.getElementById('t2-wrong-display').textContent = `${GameState.team2.wrongCount} sai`;

  // Turn status badge in scoreboard
  const turnBadge = document.getElementById('match-turn-pill');
  if (GameState.currentTurn === 'team1') {
    turnBadge.className = 'turn-pill team1-turn';
    turnBadge.textContent = isVsBot ? 'LƯỢT: 👤 BẠN (ĐỘI 1 ĐỎ)' : 'LƯỢT: ĐỘI 1 (ĐỎ)';
  } else {
    turnBadge.className = 'turn-pill team2-turn';
    turnBadge.textContent = isVsBot ? 'LƯỢT: 🤖 MÁY TÍNH (XANH)' : 'LƯỢT: ĐỘI 2 (XANH)';
  }

  // Sound button text
  const soundBtn = document.getElementById('sound-toggle-btn');
  soundBtn.textContent = GameState.soundEnabled ? '🔊 Âm thanh: Bật' : '🔇 Âm thanh: Tắt';

  // 2. Center Arena visuals
  const ropeShiftX = (GameState.ropePosition / 100) * 130;
  const shiftCarrier = document.getElementById('shift-carrier');
  if (shiftCarrier) {
    shiftCarrier.style.transform = `translateX(${ropeShiftX}px)`;
  }

  // Tension Bar
  const t1Width = Math.max(0, 50 - GameState.ropePosition / 2);
  const t2Width = Math.max(0, 50 + GameState.ropePosition / 2);
  document.getElementById('tension-red').style.width = `${t1Width}%`;
  document.getElementById('tension-blue').style.width = `${t2Width}%`;

  // Flag meter text
  const flagText = document.getElementById('flag-meter-text');
  if (GameState.ropePosition === 0) {
    flagText.textContent = '⚖️ Vạch giữa (0%)';
  } else if (GameState.ropePosition < 0) {
    flagText.textContent = isVsBot
      ? `🚩 Nghiêng ${Math.abs(Math.round(GameState.ropePosition))}% về Bạn (Đội 1)`
      : `🚩 Nghiêng ${Math.abs(Math.round(GameState.ropePosition))}% về Đội 1`;
  } else {
    flagText.textContent = isVsBot
      ? `🚩 Nghiêng ${Math.abs(Math.round(GameState.ropePosition))}% về Máy tính (Bot)`
      : `🚩 Nghiêng ${Math.abs(Math.round(GameState.ropePosition))}% về Đội 2`;
  }

  // Render character groups based on pulling state
  let t1CharState = 'idle';
  let t2CharState = 'idle';
  if (GameState.activePullingTeam === 'team1') {
    t1CharState = 'pulling';
    t2CharState = 'slipping';
  } else if (GameState.activePullingTeam === 'team2') {
    t1CharState = 'slipping';
    t2CharState = 'pulling';
  }

  document.getElementById('squad-team1').innerHTML = `
    ${renderCharacterSvg('team1', 'anchor', t1CharState)}
    ${renderCharacterSvg('team1', 'middle', t1CharState)}
    ${renderCharacterSvg('team1', 'lead', t1CharState)}
  `;

  document.getElementById('squad-team2').innerHTML = `
    ${renderCharacterSvg('team2', 'lead', t2CharState)}
    ${renderCharacterSvg('team2', 'middle', t2CharState)}
    ${renderCharacterSvg('team2', 'anchor', t2CharState)}
  `;

  // Arena control bar
  const t1TurnBtn = document.getElementById('turn-btn-t1');
  if (GameState.currentTurn === 'team1') {
    t1TurnBtn.className = 'turn-btn active-t1';
    t2TurnBtn.className = 'turn-btn';
  } else {
    t1TurnBtn.className = 'turn-btn';
    t2TurnBtn.className = 'turn-btn active-t2';
  }

  document.getElementById('mode-toggle-text').textContent =
    GameState.gameMode === 'turn_based' ? 'Đấu Luân Phiên (Theo lượt)' : 'Đấu Tự Do (Cùng lúc)';

  // 3. Question Card Left (Team 1)
  renderQuestionCard('team1');

  // 4. Question Card Right (Team 2)
  renderQuestionCard('team2');

  // 5. Mobile Tab visibility
  updateMobileViewVisibility();

  // 6. Check if Bot needs to take turn
  if (isVsBot && GameState.currentTurn === 'team2' && !GameState.team2.isFeedback && !GameState.isGameOver) {
    checkAndTriggerBotTurn();
  }
}

function renderQuestionCard(teamId) {
  const isTeam1 = teamId === 'team1';
  const isVsBot = GameState.opponentMode === 'vs_bot';
  const isBotTeam = isVsBot && !isTeam1;

  const teamState = isTeam1 ? GameState.team1 : GameState.team2;
  const questionsList = isTeam1 ? GameState.team1Questions : GameState.team2Questions;
  const question = questionsList[teamState.currentIndex] || null;
  const isCompleted = teamState.currentIndex >= questionsList.length;
  const isGameOver = GameState.isGameOver;
  const isEnabled = (GameState.gameMode === 'simultaneous' || GameState.currentTurn === teamId) && !isGameOver;

  const cardElem = document.getElementById(isTeam1 ? 'card-team1' : 'card-team2');
  if (isGameOver) {
    cardElem.className = `question-card ${isTeam1 ? 'card-team1' : 'card-team2'}`;
  } else if (isEnabled) {
    cardElem.className = `question-card card-active ${isTeam1 ? 'card-team1 active-side-team1' : 'card-team2 active-side-team2'}`;
  } else {
    cardElem.className = `question-card card-dimmed ${isTeam1 ? 'card-team1 dimmed-side-team1' : 'card-team2 dimmed-side-team2'}`;
  }

  // Header badges
  const progressText = document.getElementById(isTeam1 ? 't1-progress-text' : 't2-progress-text');
  progressText.textContent = isCompleted ? `Đã xong ${questionsList.length} câu` : `Câu ${teamState.currentIndex + 1} / ${questionsList.length}`;

  const statusBadge = document.getElementById(isTeam1 ? 't1-status-badge' : 't2-status-badge');
  if (isGameOver) {
    statusBadge.className = 'turn-status-badge badge-waiting';
    statusBadge.textContent = 'Kết thúc';
  } else if (isEnabled) {
    statusBadge.className = `turn-status-badge ${isTeam1 ? 'badge-active-t1' : 'badge-active-t2'}`;
    statusBadge.textContent = isBotTeam ? '🤖 MÁY ĐANG NGHĨ...' : '⚡ ĐANG LƯỢT TRẢ LỜI';
  } else {
    statusBadge.className = 'turn-status-badge badge-waiting';
    statusBadge.textContent = '💤 ĐANG CHỜ LƯỢT';
  }

  // Top banner status text
  const bannerStatus = document.getElementById(isTeam1 ? 't1-banner-status' : 't2-banner-status');
  if (bannerStatus) {
    if (isGameOver) {
      bannerStatus.textContent = 'TRẬN ĐẤU KẾT THÚC';
    } else if (isEnabled) {
      bannerStatus.textContent = isBotTeam ? '🤖 MÁY ĐANG NGHĨ...' : '⚡ ĐANG TRẢ LỜI (SÁNG)';
    } else {
      bannerStatus.textContent = '💤 CHỜ LƯỢT (TỐI)';
    }
  }

  // Question & Options Container
  const qContainer = document.getElementById(isTeam1 ? 't1-content-box' : 't2-content-box');

  if (isCompleted) {
    qContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #64748b;">
        <div style="font-size: 40px; margin-bottom: 8px;">✅</div>
        <h4 style="font-weight: 800; color: #1e293b; font-size: 15px;">${isBotTeam ? 'Máy tính' : 'Đội'} đã hoàn thành hết ${questionsList.length} câu!</h4>
        <p style="font-size: 12px; margin-top: 4px;">Đang chờ kết quả chung cuộc của trận đấu...</p>
      </div>
    `;
    return;
  }

  if (!question) return;

  // Question Timer widget for each team
  const isTeamActive = isEnabled && !teamState.isFeedback && !isCompleted;
  const timeRemaining = isTeamActive ? GameState.questionTimeRemaining : GameState.questionDuration;
  const timePercent = Math.max(0, Math.min(100, (timeRemaining / GameState.questionDuration) * 100));
  const countdownClass = timeRemaining <= 5 ? 'countdown-danger' : timeRemaining <= 10 ? 'countdown-warning' : 'countdown-normal';
  const barFillClass = timeRemaining <= 5 ? 'bar-fill-danger' : timeRemaining <= 10 ? 'bar-fill-warning' : 'bar-fill-normal';

  const timerWidgetHtml = `
    <div class="question-timer-widget ${isTeamActive ? 'is-active' : 'is-inactive'}">
      <div class="timer-bar-header">
        <div class="timer-title-group">
          <span class="timer-hourglass-icon">⏳</span>
          <span class="timer-header-text">${isTeamActive ? (isBotTeam ? 'Máy đang suy nghĩ:' : 'Thời gian suy nghĩ:') : (teamState.isFeedback ? 'Đã trả lời:' : 'Chờ đến lượt:')}</span>
        </div>
        <div class="timer-countdown-tag ${countdownClass}" id="${isTeam1 ? 't1' : 't2'}-countdown-tag">
          ${isTeamActive ? `${timeRemaining}s` : (teamState.isFeedback ? 'Đã khóa' : `${GameState.questionDuration}s`)}
        </div>
      </div>
      <div class="timer-bar-track">
        <div class="timer-bar-fill ${barFillClass}" id="${isTeam1 ? 't1' : 't2'}-timer-bar" style="width: ${timePercent}%;"></div>
      </div>
    </div>
  `;

  // Bot thinking status notice
  let botNoticeHtml = '';
  if (isBotTeam && isTeamActive) {
    botNoticeHtml = `
      <div class="bot-thinking-notice">
        <span>🤖</span>
        <span>Máy tính đang phân tích và chọn đáp án</span>
        <div class="bot-thinking-dots"><span></span><span></span><span></span></div>
      </div>
    `;
  }

  let optionsHtml = '';
  question.options.forEach((opt) => {
    let btnClass = 'opt-btn';
    if (teamState.isFeedback) {
      if (opt.key === question.correctAnswer) {
        btnClass += ' correct';
      } else if (opt.key === teamState.selectedAnswer) {
        btnClass += ' wrong';
      } else {
        btnClass += ' dimmed';
      }
    }

    // Nếu là bot điều khiển: người không được bấm vào các đáp án của bot
    const disabledAttr = (!isEnabled || teamState.isFeedback || isBotTeam) ? 'disabled' : '';
    const tooltipAttr = isBotTeam ? 'title="Lượt trả lời tự động của Máy tính (Bot AI)"' : '';

    optionsHtml += `
      <button type="button" class="${btnClass}" ${disabledAttr} ${tooltipAttr} onclick="handleAnswerClick('${teamId}', '${opt.key}')">
        <span class="opt-key ${isTeam1 ? 'key-team1' : 'key-team2'}">${opt.key}</span>
        <span style="flex: 1;">${opt.text}</span>
        <span class="opt-kbd-hint" title="Bấm phím ${opt.key} trên bàn phím">[${opt.key}]</span>
      </button>
    `;
  });

  let feedbackHtml = '';
  if (teamState.isFeedback) {
    const isCorrect = teamState.selectedAnswer === question.correctAnswer;
    let headlineTitle = isCorrect ? '⚡ Chính xác!' : '⚠️ Trả lời sai!';
    let headlineSub = isCorrect ? `Đã giật cờ về phía mình! (-${GameState.pullStepSize}%)` : `Đối thủ đã kéo giật cờ! (+${GameState.pullStepSize}%)`;

    if (isBotTeam) {
      headlineTitle = isCorrect ? '🤖 Máy tính trả lời CHÍNH XÁC!' : '⚠️ Máy tính trả lời SAI!';
      headlineSub = isCorrect ? `Máy tính đã giật cờ về bên phải (+${GameState.pullStepSize}%)` : `Bạn (Đội 1) đã kéo giật cờ về bên trái (-${GameState.pullStepSize}%)`;
    } else if (isVsBot) {
      headlineSub = isCorrect ? `Bạn đã giật cờ về bên trái (-${GameState.pullStepSize}%)` : `Máy tính đã kéo giật cờ sang phải (+${GameState.pullStepSize}%)`;
    }

    const nextTargetName = isTeam1
      ? (isVsBot ? 'Máy tính (Bot AI)' : 'Đội 2 (Xanh)')
      : (isVsBot ? 'Bạn (Đội 1)' : 'Đội 1 (Đỏ)');

    feedbackHtml = `
      <div class="feedback-box ${isCorrect ? 'box-correct' : 'box-wrong'}">
        <div class="feedback-headline">
          <span>${headlineTitle}</span>
          <span>${headlineSub}</span>
        </div>
        ${question.explanation ? `<div class="feedback-exp">${question.explanation}</div>` : ''}
      </div>
      <div class="auto-advance-bar">
        <span>⚡ Đang tự chuyển lượt sang ${nextTargetName}...</span>
        <span>⏩</span>
      </div>
      <div class="auto-advance-progress">
        <div class="auto-advance-fill"></div>
      </div>
      <button type="button" class="next-btn ${isTeam1 ? 'next-btn-t1' : 'next-btn-t2'}" onclick="handleNextQuestion('${teamId}')" style="margin-top: 8px;">
        <span>Chuyển ngay (hoặc bấm Space / Enter)</span>
        <span>→</span>
      </button>
    `;
  }

  qContainer.innerHTML = `
    ${timerWidgetHtml}
    ${botNoticeHtml}
    <div class="question-box">
      <div class="question-num">Câu hỏi số ${teamState.currentIndex + 1}:</div>
      <div class="question-title">${question.question}</div>
    </div>
    <div class="options-container">
      ${optionsHtml}
    </div>
    ${feedbackHtml}
  `;
}

// --- 8. GAME ACTIONS (TRẢ LỜI & KÉO CO) ---
let autoNextQuestionTimeout = null;

function cancelAutoNextQuestion() {
  if (autoNextQuestionTimeout) {
    clearTimeout(autoNextQuestionTimeout);
    autoNextQuestionTimeout = null;
  }
}

window.handleAnswerClick = function (teamId, chosenKey) {
  if (GameState.isGameOver) return;
  const isTeam1 = teamId === 'team1';
  const teamState = isTeam1 ? GameState.team1 : GameState.team2;

  if (teamState.isFeedback) return;

  teamState.selectedAnswer = chosenKey;
  teamState.isFeedback = true;

  const currentList = isTeam1 ? GameState.team1Questions : GameState.team2Questions;
  const currentQ = currentList[teamState.currentIndex];
  if (!currentQ) return;

  const isCorrect = chosenKey === currentQ.correctAnswer;
  let newPosition = GameState.ropePosition;
  let alertMessage = '';
  const isVsBot = GameState.opponentMode === 'vs_bot';

  if (isTeam1) {
    if (isCorrect) {
      // Đội 1 ĐÚNG -> Kéo về Đội 1 (âm)
      GameState.activePullingTeam = 'team1';
      newPosition = Math.max(-100, GameState.ropePosition - GameState.pullStepSize);
      sounds.playCorrect();
      sounds.playTugPull();
      alertMessage = isVsBot
        ? `✅ Bạn trả lời ĐÚNG! Đã giật cờ về bên trái (-${GameState.pullStepSize}%)`
        : `✅ Đội 1 trả lời ĐÚNG! Đã giật cờ về bên trái (-${GameState.pullStepSize}%)`;
      GameState.team1.score++;
    } else {
      // Đội 1 SAI -> Bị Đội 2 kéo (dương)
      GameState.activePullingTeam = 'team2';
      newPosition = Math.min(100, GameState.ropePosition + GameState.pullStepSize);
      sounds.playWrong();
      sounds.playTugPull();
      alertMessage = isVsBot
        ? `❌ Bạn trả lời SAI! Máy tính kéo cờ sang phải (+${GameState.pullStepSize}%)`
        : `❌ Đội 1 trả lời SAI! Đội 2 kéo cờ sang phải (+${GameState.pullStepSize}%)`;
      GameState.team1.wrongCount++;
    }
  } else {
    // Đội 2 (hoặc Máy tính) trả lời
    if (isCorrect) {
      // Đội 2 ĐÚNG -> Kéo về Đội 2 (dương)
      GameState.activePullingTeam = 'team2';
      newPosition = Math.min(100, GameState.ropePosition + GameState.pullStepSize);
      sounds.playCorrect();
      sounds.playTugPull();
      alertMessage = isVsBot
        ? `🤖 Máy tính trả lời ĐÚNG! Đã giật cờ về bên phải (+${GameState.pullStepSize}%)`
        : `✅ Đội 2 trả lời ĐÚNG! Đã giật cờ về bên phải (+${GameState.pullStepSize}%)`;
      GameState.team2.score++;
    } else {
      // Đội 2 SAI -> Bị Đội 1 kéo (âm)
      GameState.activePullingTeam = 'team1';
      newPosition = Math.max(-100, GameState.ropePosition - GameState.pullStepSize);
      sounds.playWrong();
      sounds.playTugPull();
      alertMessage = isVsBot
        ? `❌ Máy tính trả lời SAI! Bạn kéo cờ sang trái (-${GameState.pullStepSize}%)`
        : `❌ Đội 2 trả lời SAI! Đội 1 kéo cờ sang trái (-${GameState.pullStepSize}%)`;
      GameState.team2.wrongCount++;
    }
  }

  GameState.ropePosition = newPosition;
  showAlertNotification(alertMessage);

  // Reset pulling animation after 800ms
  setTimeout(() => {
    GameState.activePullingTeam = null;
    renderUI();
  }, 800);

  // Check Knockout Victory
  if (newPosition <= -100) {
    cancelAutoNextQuestion();
    setTimeout(() => {
      triggerGameOver('team1', 'knockout');
    }, 700);
    renderUI();
    return;
  } else if (newPosition >= 100) {
    cancelAutoNextQuestion();
    setTimeout(() => {
      triggerGameOver('team2', 'knockout');
    }, 700);
    renderUI();
    return;
  }

  // TỰ ĐỘNG CHUYỂN SANG ĐỘI KHÁC SAU KHI TRẢ LỜI CÂU HỎI
  // Người chơi không cần phải bấm nút "Câu tiếp theo"
  cancelAutoNextQuestion();
  autoNextQuestionTimeout = setTimeout(() => {
    autoNextQuestionTimeout = null;
    if (!GameState.isGameOver && teamState.isFeedback) {
      handleNextQuestion(teamId);
    }
  }, 1600);

  renderUI();
};

window.handleNextQuestion = function (teamId) {
  if (GameState.isGameOver) return;
  cancelAutoNextQuestion();
  cancelBotTurn();
  sounds.playClick();

  const isTeam1 = teamId === 'team1';
  if (isTeam1) {
    GameState.team1.currentIndex++;
    GameState.team1.selectedAnswer = null;
    GameState.team1.isFeedback = false;
    if (GameState.gameMode === 'turn_based' && GameState.team2.currentIndex < GameState.team2Questions.length) {
      GameState.currentTurn = 'team2';
    }
  } else {
    GameState.team2.currentIndex++;
    GameState.team2.selectedAnswer = null;
    GameState.team2.isFeedback = false;
    if (GameState.gameMode === 'turn_based' && GameState.team1.currentIndex < GameState.team1Questions.length) {
      GameState.currentTurn = 'team1';
    }
  }

  // Khởi động lại 20 giây cho câu hỏi tiếp theo
  GameState.questionTimeRemaining = GameState.questionDuration;

  // Check if both teams completed 10 questions
  const t1Finished = GameState.team1.currentIndex >= GameState.team1Questions.length;
  const t2Finished = GameState.team2.currentIndex >= GameState.team2Questions.length;

  if (t1Finished && t2Finished) {
    let winner = 'tie';
    if (GameState.ropePosition < 0) winner = 'team1';
    else if (GameState.ropePosition > 0) winner = 'team2';
    triggerGameOver(winner, 'all_completed');
    return;
  }

  renderUI();
};

function showAlertNotification(msg) {
  const container = document.getElementById('action-alert-box');
  if (!container) return;
  container.innerHTML = `<span class="alert-pill">✨ ${msg}</span>`;
  setTimeout(() => {
    container.innerHTML = '';
  }, 3500);
}

function triggerGameOver(winnerId, reason) {
  cancelBotTurn();
  GameState.isGameOver = true;
  GameState.winnerId = winnerId;
  GameState.gameOverReason = reason;

  sounds.playVictory();
  if (confettiInstance) confettiInstance.start();

  const modal = document.getElementById('victory-modal');
  const title = document.getElementById('victory-winner-title');
  const desc = document.getElementById('victory-desc-text');
  const isVsBot = GameState.opponentMode === 'vs_bot';

  const modalT1Name = document.getElementById('modal-t1-name');
  if (modalT1Name) modalT1Name.textContent = isVsBot ? 'BẠN (ĐỘI 1 ĐỎ)' : 'ĐỘI 1 (ĐỎ)';
  const modalT2Name = document.getElementById('modal-t2-name');
  if (modalT2Name) modalT2Name.textContent = isVsBot ? 'MÁY TÍNH (BOT)' : 'ĐỘI 2 (XANH)';

  if (winnerId === 'team1') {
    title.innerHTML = isVsBot
      ? '🎉 <span class="team1-text">BẠN (ĐỘI 1) ĐÃ THẮNG MÁY TÍNH!</span>'
      : '🎉 <span class="team1-text">ĐỘI 1 (ĐỎ) CHIẾN THẮNG!</span>';
    desc.textContent = reason === 'knockout'
      ? 'Chiến thắng tuyệt đối bằng đòn Knock-out kéo lá cờ chạm vạch đích!'
      : reason === 'match_time_expired'
      ? 'Chiến thắng chung cuộc khi hết 2 phút nhờ kéo cờ nghiêng về phần sân của mình!'
      : 'Chiến thắng chung cuộc sau khi hoàn thành toàn bộ câu hỏi trắc nghiệm!';
  } else if (winnerId === 'team2') {
    title.innerHTML = isVsBot
      ? '🤖 <span class="team2-text">MÁY TÍNH (BOT AI) ĐÃ CHIẾN THẮNG!</span>'
      : '🎉 <span class="team2-text">ĐỘI 2 (XANH) CHIẾN THẮNG!</span>';
    desc.textContent = reason === 'knockout'
      ? (isVsBot ? 'Máy tính đã tung đòn Knock-out kéo lá cờ chạm vạch đích!' : 'Chiến thắng tuyệt đối bằng đòn Knock-out kéo lá cờ chạm vạch đích!')
      : reason === 'match_time_expired'
      ? (isVsBot ? 'Máy tính chiến thắng khi hết 2 phút nhờ kéo cờ nghiêng về phần sân của mình!' : 'Chiến thắng chung cuộc khi hết 2 phút nhờ kéo cờ nghiêng về phần sân của mình!')
      : (isVsBot ? 'Máy tính chiến thắng sau khi hoàn thành toàn bộ câu hỏi!' : 'Chiến thắng chung cuộc sau khi hoàn thành toàn bộ câu hỏi trắc nghiệm!');
  } else {
    title.innerHTML = '⚖️ <span style="color:#f59e0b;">TRẬN ĐẤU HÒA NHAU!</span>';
    desc.textContent = reason === 'match_time_expired'
      ? 'Hết thời gian 2 phút nhưng hai đội có lực kéo hoàn toàn cân bằng tại vị trí xuất phát!'
      : 'Hai đội có lực kéo cân bằng hoàn hảo tại vạch xuất phát!';
  }

  document.getElementById('modal-t1-stat').textContent = `${GameState.team1.score} đúng / ${GameState.team1.wrongCount} sai`;
  document.getElementById('modal-t2-stat').textContent = `${GameState.team2.score} đúng / ${GameState.team2.wrongCount} sai`;

  modal.classList.add('open');
}

// =========================================================
// TIMER ENGINE: TỔNG 2 PHÚT & 20 GIÂY MỖI CÂU
// =========================================================
let gameTimerInterval = null;

function startGameTimers() {
  if (gameTimerInterval) clearInterval(gameTimerInterval);
  gameTimerInterval = setInterval(() => {
    onTimerTick();
  }, 1000);
}

function onTimerTick() {
  // Không đếm ngược nếu trận đấu kết thúc hoặc đang trong tab Quản lý câu hỏi
  if (GameState.isGameOver || GameState.mainActiveTab !== 'game') {
    return;
  }

  // 1. MATCH TIMER (2 PHÚT TỔNG TRẬN ĐẤU)
  if (!GameState.isMatchTimerPaused && GameState.totalTimeRemaining > 0) {
    GameState.totalTimeRemaining--;
    updateMatchTimerDisplay();

    if (GameState.totalTimeRemaining <= 0) {
      handleMatchTimeExpired();
      return;
    }
  }

  // 2. QUESTION TIMER (20 GIÂY MỖI CÂU CHO ĐỘI ĐANG LƯỢT)
  const currentTeamId = GameState.currentTurn;
  const currentTeamState = currentTeamId === 'team1' ? GameState.team1 : GameState.team2;
  const currentQuestions = currentTeamId === 'team1' ? GameState.team1Questions : GameState.team2Questions;
  const isTeamFinished = currentTeamState.currentIndex >= currentQuestions.length;

  if (!GameState.isMatchTimerPaused && !currentTeamState.isFeedback && !isTeamFinished) {
    if (GameState.questionTimeRemaining > 0) {
      GameState.questionTimeRemaining--;
      updateQuestionTimerDisplay();

      // Âm thanh tíc tắc khẩn trương khi còn 5 giây trở xuống
      if (GameState.questionTimeRemaining <= 5 && GameState.questionTimeRemaining > 0) {
        sounds.playTick();
      }

      // Khi hết 20 giây mà đội chưa trả lời: chuyển sang đội khác câu khác!
      if (GameState.questionTimeRemaining <= 0) {
        handleQuestionTimeExpired(currentTeamId);
      }
    }
  }
}

function updateMatchTimerDisplay() {
  const display = document.getElementById('match-timer-display');
  const box = document.getElementById('match-timer-box');
  if (!display) return;
  const mins = Math.floor(GameState.totalTimeRemaining / 60);
  const secs = GameState.totalTimeRemaining % 60;
  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (box) {
    if (GameState.totalTimeRemaining <= 10) {
      box.className = 'match-timer-box timer-danger';
    } else if (GameState.totalTimeRemaining <= 30) {
      box.className = 'match-timer-box timer-warning';
    } else {
      box.className = 'match-timer-box';
    }
  }
}

function updateQuestionTimerDisplay() {
  const currentTeamId = GameState.currentTurn;
  const isT1 = currentTeamId === 'team1';
  const tag = document.getElementById(isT1 ? 't1-countdown-tag' : 't2-countdown-tag');
  const bar = document.getElementById(isT1 ? 't1-timer-bar' : 't2-timer-bar');
  const time = GameState.questionTimeRemaining;
  const percent = Math.max(0, Math.min(100, (time / GameState.questionDuration) * 100));

  if (tag) {
    tag.textContent = `${time}s`;
    tag.className = `timer-countdown-tag ${time <= 5 ? 'countdown-danger' : time <= 10 ? 'countdown-warning' : 'countdown-normal'}`;
  }
  if (bar) {
    bar.style.width = `${percent}%`;
    bar.className = `timer-bar-fill ${time <= 5 ? 'bar-fill-danger' : time <= 10 ? 'bar-fill-warning' : 'bar-fill-normal'}`;
  }
}

// Xử lý khi hết 20 giây mà đội đang lượt chưa có câu trả lời:
// "khi hết giời gian mà đội nào chưa có câu trả lời thì sẽ đến đội chơi khác trả lời câu khác"
function handleQuestionTimeExpired(timedOutTeamId) {
  cancelBotTurn();
  sounds.playTimeUp();

  const isVsBot = GameState.opponentMode === 'vs_bot';
  const isT1 = timedOutTeamId === 'team1';
  const timedOutTeam = isT1 ? GameState.team1 : GameState.team2;
  const timedOutTeamName = isT1 ? (isVsBot ? 'Bạn (Đội 1)' : 'Đội 1 (Đỏ)') : (isVsBot ? 'Máy tính' : 'Đội 2 (Xanh)');

  const otherTeamId = isT1 ? 'team2' : 'team1';
  const otherTeam = isT1 ? GameState.team2 : GameState.team1;
  const otherQuestions = isT1 ? GameState.team2Questions : GameState.team1Questions;
  const otherTeamName = isT1 ? (isVsBot ? 'Máy tính' : 'Đội 2 (Xanh)') : (isVsBot ? 'Bạn (Đội 1)' : 'Đội 1 (Đỏ)');

  // 1. Tính là không trả lời / chưa kịp chọn đáp án
  timedOutTeam.wrongCount++;
  timedOutTeam.selectedAnswer = null;
  timedOutTeam.isFeedback = false;

  // 2. Chuyển sang câu khác (câu tiếp theo) để lần sau đội này nhận câu khác
  timedOutTeam.currentIndex++;

  // 3. Chuyển lượt sang đội kia
  if (otherTeam.currentIndex < otherQuestions.length) {
    GameState.currentTurn = otherTeamId;
  }

  // 4. Khởi động lại 20 giây cho đội mới
  GameState.questionTimeRemaining = GameState.questionDuration;

  // 5. Thông báo rõ ràng cho người chơi
  showAlertNotification(`⏰ Hết 20 giây! ${timedOutTeamName} chưa trả lời, chuyển lượt sang ${otherTeamName} trả lời câu khác!`);

  // 6. Kiểm tra xem cả hai đội đã hết câu chưa
  const t1Finished = GameState.team1.currentIndex >= GameState.team1Questions.length;
  const t2Finished = GameState.team2.currentIndex >= GameState.team2Questions.length;

  if (t1Finished && t2Finished) {
    let winner = 'tie';
    if (GameState.ropePosition < 0) winner = 'team1';
    else if (GameState.ropePosition > 0) winner = 'team2';
    triggerGameOver(winner, 'all_completed');
    return;
  }

  renderUI();
}

// Xử lý khi hết 2 phút thời gian tổng trận đấu
function handleMatchTimeExpired() {
  cancelBotTurn();
  sounds.playTimeUp();
  let winner = 'tie';
  if (GameState.ropePosition < 0) {
    winner = 'team1'; // Cờ nghiêng về bên Đội 1
  } else if (GameState.ropePosition > 0) {
    winner = 'team2'; // Cờ nghiêng về bên Đội 2
  }
  showAlertNotification('⏰ HẾT THỜI GIAN TRẬN ĐẤU (2 PHÚT)!');
  triggerGameOver(winner, 'match_time_expired');
}

// Tạm dừng / Tiếp tục đồng hồ trận đấu
window.toggleMatchTimerPause = function () {
  sounds.playClick();
  GameState.isMatchTimerPaused = !GameState.isMatchTimerPaused;
  const btn = document.getElementById('timer-toggle-pause-btn');
  if (btn) {
    btn.textContent = GameState.isMatchTimerPaused ? '▶️' : '⏸️';
    btn.title = GameState.isMatchTimerPaused ? 'Tiếp tục trận đấu' : 'Tạm dừng trận đấu';
  }

  if (GameState.isMatchTimerPaused) {
    cancelBotTurn();
  }

  showAlertNotification(GameState.isMatchTimerPaused ? '⏸️ Đã tạm dừng thời gian thi đấu!' : '▶️ Đã tiếp tục thời gian thi đấu!');
  renderUI();
};

// =========================================================
// BOT AI ENGINE (CHƠI VỚI MÁY)
// =========================================================
let botThinkingTimeout = null;

function cancelBotTurn() {
  if (botThinkingTimeout) {
    clearTimeout(botThinkingTimeout);
    botThinkingTimeout = null;
  }
  cancelAutoNextQuestion();
  GameState.isBotThinking = false;
}

function checkAndTriggerBotTurn() {
  if (GameState.opponentMode !== 'vs_bot') return;
  if (GameState.isGameOver) return;
  if (GameState.currentTurn !== 'team2') return;
  if (GameState.team2.isFeedback) return;
  if (GameState.team2.currentIndex >= GameState.team2Questions.length) return;
  if (GameState.isMatchTimerPaused) return;
  if (GameState.mainActiveTab !== 'game') return;

  if (GameState.isBotThinking) return;

  GameState.isBotThinking = true;

  // Thời gian suy nghĩ mô phỏng cho Bot (2.5s - 5s)
  let thinkDurationMs = 3000;
  if (GameState.botDifficulty === 'easy') {
    thinkDurationMs = 3500 + Math.random() * 2000; // 3.5s - 5.5s
  } else if (GameState.botDifficulty === 'medium') {
    thinkDurationMs = 2500 + Math.random() * 2000; // 2.5s - 4.5s
  } else if (GameState.botDifficulty === 'hard') {
    thinkDurationMs = 1800 + Math.random() * 1500; // 1.8s - 3.3s
  }

  // Đảm bảo bot chọn đáp án trước khi hết 20 giây (chừa lại ít nhất 1.5 giây)
  const maxSafeMs = Math.max(1000, (GameState.questionTimeRemaining - 1.5) * 1000);
  if (thinkDurationMs > maxSafeMs) {
    thinkDurationMs = maxSafeMs;
  }

  botThinkingTimeout = setTimeout(() => {
    botThinkingTimeout = null;
    GameState.isBotThinking = false;

    if (
      GameState.opponentMode !== 'vs_bot' ||
      GameState.currentTurn !== 'team2' ||
      GameState.isGameOver ||
      GameState.team2.isFeedback ||
      GameState.isMatchTimerPaused
    ) {
      return;
    }

    makeBotDecision();
  }, thinkDurationMs);
}

function makeBotDecision() {
  const currentList = GameState.team2Questions;
  const currentQ = currentList[GameState.team2.currentIndex];
  if (!currentQ) return;

  // Xác suất trả lời đúng tùy thuộc độ khó
  // Dễ: ~50%, Vừa: ~75%, Khó: ~90%
  let accuracy = 0.75;
  if (GameState.botDifficulty === 'easy') accuracy = 0.50;
  if (GameState.botDifficulty === 'hard') accuracy = 0.90;

  const roll = Math.random();
  let chosenKey = currentQ.correctAnswer;

  if (roll > accuracy) {
    // Chọn ngẫu nhiên một đáp án sai
    const wrongOptions = currentQ.options.filter((opt) => opt.key !== currentQ.correctAnswer);
    if (wrongOptions.length > 0) {
      const pickedWrong = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
      chosenKey = pickedWrong.key;
    }
  }

  // Thực hiện hành động trả lời (handleAnswerClick tự động lên lịch chuyển câu sau khi hiển thị kết quả)
  handleAnswerClick('team2', chosenKey);
}

// Chuyển đổi chế độ: 2 người chơi (two_players) hoặc Chơi với máy (vs_bot)
window.setOpponentMode = function (mode) {
  if (GameState.opponentMode === mode) return;
  sounds.playClick();
  cancelBotTurn();
  GameState.opponentMode = mode;
  localStorage.setItem('keoco_opponent_mode', mode);

  if (mode === 'vs_bot') {
    showAlertNotification('🤖 Đã chọn: Chơi Với Máy (Bot AI)! Bạn là Đội 1 (Đỏ).');
  } else {
    showAlertNotification('👥 Đã chọn: 2 Người Chơi (PvP - Cả 2 đội là người)!');
  }

  renderUI();
};

// Chuyển đổi độ khó của Bot
window.setBotDifficulty = function (diff) {
  if (!['easy', 'medium', 'hard'].includes(diff)) return;
  sounds.playClick();
  cancelBotTurn();
  GameState.botDifficulty = diff;
  localStorage.setItem('keoco_bot_difficulty', diff);

  const diffLabels = {
    easy: 'Dễ (Tỉ lệ đúng ~50%)',
    medium: 'Vừa (Tỉ lệ đúng ~75%)',
    hard: 'Khó (Tỉ lệ đúng ~90%)'
  };

  showAlertNotification(`🎯 Đã chọn độ khó máy: ${diffLabels[diff]}`);
  renderUI();
};

// Event khi đổi select chế độ trong Modal Cài đặt
window.onSettingOpponentModeChange = function () {
  const select = document.getElementById('setting-opponent-mode-select');
  const diffRow = document.getElementById('setting-bot-diff-row');
  if (select && diffRow) {
    diffRow.style.display = select.value === 'vs_bot' ? 'block' : 'none';
  }
};

// --- 9. MODALS & CONTROLS ---
window.resetGame = function () {
  cancelBotTurn();
  sounds.playClick();
  if (confettiInstance) confettiInstance.stop();

  GameState.ropePosition = 0;
  GameState.currentTurn = 'team1';
  GameState.activePullingTeam = null;
  GameState.isGameOver = false;
  GameState.winnerId = null;

  // Cài đặt lại bộ đếm thời gian
  GameState.totalTimeRemaining = GameState.totalMatchDuration;
  GameState.questionTimeRemaining = GameState.questionDuration;
  GameState.isMatchTimerPaused = false;
  const pauseBtn = document.getElementById('timer-toggle-pause-btn');
  if (pauseBtn) {
    pauseBtn.textContent = '⏸️';
    pauseBtn.title = 'Tạm dừng đồng hồ';
  }

  GameState.team1 = {
    score: 0,
    wrongCount: 0,
    currentIndex: 0,
    selectedAnswer: null,
    isFeedback: false
  };

  GameState.team2 = {
    score: 0,
    wrongCount: 0,
    currentIndex: 0,
    selectedAnswer: null,
    isFeedback: false
  };

  document.getElementById('victory-modal').classList.remove('open');
  showAlertNotification('Trận đấu đã được cài đặt lại! Thời gian: 2 phút, Mỗi câu: 20s!');
  renderUI();
};

window.toggleSound = function () {
  GameState.soundEnabled = !GameState.soundEnabled;
  sounds.enabled = GameState.soundEnabled;
  if (GameState.soundEnabled) sounds.playClick();
  renderUI();
};

window.switchTurnManually = function (teamId) {
  if (GameState.isGameOver) return;
  if (GameState.team1.isFeedback || GameState.team2.isFeedback) return;
  cancelBotTurn();
  sounds.playClick();
  GameState.currentTurn = teamId;
  GameState.questionTimeRemaining = GameState.questionDuration;
  renderUI();
};

window.toggleGameMode = function () {
  sounds.playClick();
  cancelBotTurn();
  GameState.gameMode = GameState.gameMode === 'turn_based' ? 'simultaneous' : 'turn_based';
  renderUI();
};

window.closeVictoryModal = function () {
  document.getElementById('victory-modal').classList.remove('open');
  if (confettiInstance) confettiInstance.stop();
};

// Settings Modal
window.openSettingsModal = function () {
  sounds.playClick();
  document.getElementById('setting-step-input').value = GameState.pullStepSize;

  const matchSelect = document.getElementById('setting-match-time-select');
  if (matchSelect) matchSelect.value = String(GameState.totalMatchDuration);

  const qSelect = document.getElementById('setting-question-time-select');
  if (qSelect) qSelect.value = String(GameState.questionDuration);

  const oppSelect = document.getElementById('setting-opponent-mode-select');
  if (oppSelect) oppSelect.value = GameState.opponentMode;

  const botDiffSelect = document.getElementById('setting-bot-diff-select');
  if (botDiffSelect) botDiffSelect.value = GameState.botDifficulty;

  onSettingOpponentModeChange();

  document.getElementById('settings-modal').classList.add('open');
};

window.closeSettingsModal = function () {
  document.getElementById('settings-modal').classList.remove('open');
};

window.saveSettings = function () {
  const step = parseInt(document.getElementById('setting-step-input').value, 10);
  if (step >= 5 && step <= 40) {
    GameState.pullStepSize = step;
    localStorage.setItem('keoco_pull_step', step);
  }

  const matchSelect = document.getElementById('setting-match-time-select');
  if (matchSelect) {
    const matchTime = parseInt(matchSelect.value, 10);
    if (!isNaN(matchTime) && matchTime > 0) {
      GameState.totalMatchDuration = matchTime;
      GameState.totalTimeRemaining = matchTime;
      localStorage.setItem('keoco_match_time', matchTime);
    }
  }

  const qSelect = document.getElementById('setting-question-time-select');
  if (qSelect) {
    const qTime = parseInt(qSelect.value, 10);
    if (!isNaN(qTime) && qTime > 0) {
      GameState.questionDuration = qTime;
      GameState.questionTimeRemaining = qTime;
      localStorage.setItem('keoco_question_time', qTime);
    }
  }

  const oppSelect = document.getElementById('setting-opponent-mode-select');
  if (oppSelect) {
    GameState.opponentMode = oppSelect.value;
    localStorage.setItem('keoco_opponent_mode', oppSelect.value);
  }

  const botDiffSelect = document.getElementById('setting-bot-diff-select');
  if (botDiffSelect) {
    GameState.botDifficulty = botDiffSelect.value;
    localStorage.setItem('keoco_bot_difficulty', botDiffSelect.value);
  }

  cancelBotTurn();
  closeSettingsModal();
  showAlertNotification(`Đã lưu cài đặt! Chế độ: ${GameState.opponentMode === 'vs_bot' ? 'Chơi Với Máy' : '2 Người Chơi'}, Trận đấu: ${Math.round(GameState.totalMatchDuration / 60)} phút, Mỗi câu: ${GameState.questionDuration}s`);
  renderUI();
};

// =========================================================
// MAIN NAVIGATION & QUESTION MANAGEMENT (THÊM, SỬA, XÓA)
// =========================================================
window.switchMainTab = function (tab) {
  sounds.playClick();
  GameState.mainActiveTab = tab;

  const viewGame = document.getElementById('view-game');
  const viewManage = document.getElementById('view-manage');
  const tabBtnGame = document.getElementById('tab-nav-game');
  const tabBtnManage = document.getElementById('tab-nav-manage');

  if (tab === 'game') {
    if (viewGame) viewGame.style.display = 'block';
    if (viewManage) viewManage.style.display = 'none';
    if (tabBtnGame) tabBtnGame.classList.add('active');
    if (tabBtnManage) tabBtnManage.classList.remove('active');
    renderUI();
  } else {
    if (viewGame) viewGame.style.display = 'none';
    if (viewManage) viewManage.style.display = 'block';
    if (tabBtnGame) tabBtnGame.classList.remove('active');
    if (tabBtnManage) tabBtnManage.classList.add('active');
    renderManageQuestions();
  }
  updateQuestionCountBadges();
};

window.switchManageTeamTab = function (teamId) {
  sounds.playClick();
  GameState.manageActiveTeam = teamId;
  const isT1 = teamId === 'team1';
  const btnT1 = document.getElementById('subtab-btn-t1');
  const btnT2 = document.getElementById('subtab-btn-t2');
  if (btnT1) btnT1.className = `team-subtab-btn ${isT1 ? 'active-t1-tab' : ''}`;
  if (btnT2) btnT2.className = `team-subtab-btn ${!isT1 ? 'active-t2-tab' : ''}`;
  renderManageQuestions();
};

function updateQuestionCountBadges() {
  const t1Count = GameState.team1Questions.length;
  const t2Count = GameState.team2Questions.length;
  const total = t1Count + t2Count;

  const mainBadge = document.getElementById('manage-tab-badge');
  if (mainBadge) mainBadge.textContent = `${total} câu`;

  const b1 = document.getElementById('mgr-badge-t1');
  if (b1) b1.textContent = `${t1Count} câu`;

  const b2 = document.getElementById('mgr-badge-t2');
  if (b2) b2.textContent = `${t2Count} câu`;
}

function renderManageQuestions() {
  updateQuestionCountBadges();
  const teamId = GameState.manageActiveTeam;
  const isT1 = teamId === 'team1';
  const list = isT1 ? GameState.team1Questions : GameState.team2Questions;
  const container = document.getElementById('manage-questions-container');
  if (!container) return;

  const query = (GameState.manageSearchQuery || '').toLowerCase().trim();
  const filtered = list
    .map((q, originalIndex) => ({ q, originalIndex }))
    .filter(({ q }) => {
      if (!query) return true;
      if (q.question.toLowerCase().includes(query)) return true;
      if (q.explanation && q.explanation.toLowerCase().includes(query)) return true;
      return q.options.some((opt) => opt.text.toLowerCase().includes(query));
    });

  const summary = document.getElementById('manage-summary-text');
  if (summary) {
    summary.textContent = `Đang hiển thị ${filtered.length} / ${list.length} câu hỏi của ${isT1 ? 'Đội 1 (Đỏ)' : 'Đội 2 (Xanh)'}.`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; background: #ffffff; border: 1px dashed #cbd5e1; border-radius: 12px;">
        <div style="font-size: 36px; margin-bottom: 8px;">🔍</div>
        <h4 style="font-size: 15px; font-weight: 800; color: #1e293b;">Không tìm thấy câu hỏi nào phù hợp</h4>
        <p style="font-size: 13px; color: #64748b; margin: 4px 0 14px;">Bạn có thể xóa từ khóa tìm kiếm hoặc bấm thêm câu hỏi mới bên dưới.</p>
        <button type="button" class="btn-primary-action" onclick="addNewQuestionCurrentTab()">
          <span>➕</span>
          <span>Thêm Câu Hỏi Mới</span>
        </button>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(({ q, originalIndex }) => {
    const idx = originalIndex;
    let optionsHtml = '';
    ['A', 'B', 'C', 'D'].forEach((key, optIdx) => {
      const opt = q.options[optIdx] || { key, text: '' };
      const isCorrect = q.correctAnswer === key;
      optionsHtml += `
        <div class="opt-edit-row ${isCorrect ? 'is-selected-answer' : ''}">
          <div class="opt-key-tag">${key}</div>
          <input type="text" class="opt-input-text" value="${escapeHtml(opt.text)}" placeholder="Nội dung đáp án ${key}..." oninput="updateOptionText('${teamId}', ${idx}, '${key}', this.value)" />
          <button type="button" class="btn-mark-correct ${isCorrect ? 'is-correct' : ''}" onclick="setQuestionCorrectAnswer('${teamId}', ${idx}, '${key}')" title="Chọn ${key} làm đáp án đúng">
            ${isCorrect ? '✓ Đáp án đúng' : '○ Chọn đúng'}
          </button>
        </div>
      `;
    });

    html += `
      <div class="question-manage-card ${isT1 ? 'border-t1' : 'border-t2'}" id="manage-card-${teamId}-${idx}">
        <div class="q-card-header">
          <div class="q-badge-title">
            <span>📝 Câu ${idx + 1} / ${list.length}</span>
            <span class="q-correct-indicator">Đáp án đúng: ${q.correctAnswer}</span>
          </div>
          <div class="q-card-actions">
            <button type="button" class="btn-dup-q" onclick="duplicateQuestion('${teamId}', ${idx})" title="Nhân bản câu hỏi này">
              <span>📋</span>
              <span>Nhân bản</span>
            </button>
            <button type="button" class="btn-del-q" onclick="deleteQuestion('${teamId}', ${idx})" title="Xóa câu hỏi này">
              <span>🗑️</span>
              <span>Xóa</span>
            </button>
          </div>
        </div>

        <div class="q-input-group">
          <label class="q-input-label">Nội dung câu hỏi trắc nghiệm:</label>
          <textarea class="q-textarea" placeholder="Nhập nội dung câu hỏi tại đây..." oninput="updateQuestionText('${teamId}', ${idx}, this.value)">${escapeHtml(q.question)}</textarea>
        </div>

        <div class="q-input-group">
          <label class="q-input-label">4 Đáp án A, B, C, D (Bấm '○ Chọn đúng' để đặt đáp án chuẩn):</label>
          <div class="options-edit-grid">
            ${optionsHtml}
          </div>
        </div>

        <div>
          <label class="q-input-label">Giải thích chi tiết (Hiển thị cho người chơi khi giải đáp):</label>
          <input type="text" class="explanation-edit-input" value="${escapeHtml(q.explanation || '')}" placeholder="Nhập lý do/kiến thức giải thích..." oninput="updateQuestionExplanation('${teamId}', ${idx}, this.value)" />
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Chức năng: THÊM CÂU HỎI MỚI
window.addNewQuestionCurrentTab = function () {
  sounds.playClick();
  const teamId = GameState.manageActiveTeam;
  const isT1 = teamId === 'team1';
  const list = isT1 ? GameState.team1Questions : GameState.team2Questions;

  const newNum = list.length + 1;
  const newQuestion = {
    id: 'q_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
    question: `Câu hỏi mới số ${newNum} của ${isT1 ? 'Đội 1' : 'Đội 2'}?`,
    options: [
      { key: 'A', text: 'Đáp án A' },
      { key: 'B', text: 'Đáp án B' },
      { key: 'C', text: 'Đáp án C' },
      { key: 'D', text: 'Đáp án D' }
    ],
    correctAnswer: 'A',
    explanation: 'Giải thích chi tiết cho đáp án đúng.'
  };

  list.push(newQuestion);
  saveCustomQuestions();
  showManageToast(`✨ Đã thêm thành công Câu hỏi số ${newNum} cho ${isT1 ? 'Đội 1 (Đỏ)' : 'Đội 2 (Xanh)'}!`);
  renderManageQuestions();

  // Scroll smoothly to newly created question
  setTimeout(() => {
    const newCard = document.getElementById(`manage-card-${teamId}-${list.length - 1}`);
    if (newCard) {
      newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      newCard.style.outline = '2px solid #22c55e';
      setTimeout(() => {
        newCard.style.outline = 'none';
      }, 1600);
    }
  }, 100);
};

// Chức năng: NHÂN BẢN CÂU HỎI
window.duplicateQuestion = function (teamId, index) {
  sounds.playClick();
  const isT1 = teamId === 'team1';
  const list = isT1 ? GameState.team1Questions : GameState.team2Questions;
  const source = list[index];
  if (!source) return;

  const copy = JSON.parse(JSON.stringify(source));
  copy.id = 'q_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
  copy.question = `${copy.question} (Bản sao)`;

  list.splice(index + 1, 0, copy);
  saveCustomQuestions();
  showManageToast(`📋 Đã nhân bản câu hỏi số ${index + 1}!`);
  renderManageQuestions();
};

// Chức năng: SỬA CÂU HỎI & ĐÁP ÁN
window.updateQuestionText = function (teamId, idx, value) {
  const list = teamId === 'team1' ? GameState.team1Questions : GameState.team2Questions;
  if (list[idx]) {
    list[idx].question = value;
    saveCustomQuestions();
  }
};

window.updateOptionText = function (teamId, idx, optKey, value) {
  const list = teamId === 'team1' ? GameState.team1Questions : GameState.team2Questions;
  if (list[idx]) {
    const opt = list[idx].options.find((o) => o.key === optKey);
    if (opt) opt.text = value;
    saveCustomQuestions();
  }
};

window.setQuestionCorrectAnswer = function (teamId, idx, correctKey) {
  sounds.playClick();
  const list = teamId === 'team1' ? GameState.team1Questions : GameState.team2Questions;
  if (list[idx]) {
    list[idx].correctAnswer = correctKey;
    saveCustomQuestions();
    showManageToast(`✓ Đã đổi đáp án đúng của câu ${idx + 1} thành [${correctKey}]!`);
    renderManageQuestions();
  }
};

window.updateQuestionExplanation = function (teamId, idx, value) {
  const list = teamId === 'team1' ? GameState.team1Questions : GameState.team2Questions;
  if (list[idx]) {
    list[idx].explanation = value;
    saveCustomQuestions();
  }
};

window.saveAllQuestionsManually = function () {
  sounds.playClick();
  saveCustomQuestions();
  showManageToast('💾 Đã lưu thành công toàn bộ câu hỏi vào bộ nhớ trình duyệt!');
  renderManageQuestions();
  renderUI();
};

// Chức năng: XÓA CÂU HỎI
window.deleteQuestion = function (teamId, idx) {
  sounds.playClick();
  const isT1 = teamId === 'team1';
  const list = isT1 ? GameState.team1Questions : GameState.team2Questions;

  if (list.length <= 1) {
    showManageToast('⚠️ Mỗi đội cần có ít nhất 1 câu hỏi để thi đấu! Không thể xóa câu cuối cùng.');
    return;
  }

  const qName = list[idx]?.question || `câu hỏi số ${idx + 1}`;
  const confirmMsg = `Bạn có chắc chắn muốn xóa câu hỏi số ${idx + 1}?\n\n"${qName.substring(0, 60)}..."`;
  if (confirm(confirmMsg)) {
    list.splice(idx, 1);

    // Adjust team index if needed in current match
    const teamState = isT1 ? GameState.team1 : GameState.team2;
    if (teamState.currentIndex >= list.length) {
      teamState.currentIndex = Math.max(0, list.length - 1);
    }

    saveCustomQuestions();
    showManageToast(`🗑️ Đã xóa câu hỏi số ${idx + 1} thành công!`);
    renderManageQuestions();
    renderUI();
  }
};

// Tìm kiếm câu hỏi
window.handleManageSearch = function (query) {
  GameState.manageSearchQuery = query;
  renderManageQuestions();
};

// Thông báo Toast trong Quản lý câu hỏi
window.showManageToast = function (msg) {
  const toast = document.getElementById('manage-toast-bar');
  if (!toast) return;
  toast.innerHTML = `<span>${msg}</span><button type="button" style="background:none;border:none;cursor:pointer;font-weight:900;color:inherit;" onclick="this.parentElement.style.display='none'">✕</button>`;
  toast.style.display = 'flex';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.display = 'none';
  }, 4000);
};

// Khôi phục câu hỏi mặc định
window.resetDefaultQuestionsConfirm = function () {
  sounds.playClick();
  if (confirm('Bạn có chắc chắn muốn khôi phục 10 câu hỏi mẫu mặc định ban đầu cho cả 2 đội? Dữ liệu bạn vừa sửa sẽ được làm mới.')) {
    GameState.team1Questions = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS_TEAM1));
    GameState.team2Questions = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS_TEAM2));
    saveCustomQuestions();
    showManageToast('🔄 Đã khôi phục bộ 20 câu hỏi mặc định!');
    renderManageQuestions();
    renderUI();
  }
};

// Xuất file JSON
window.exportQuestionsJson = function () {
  sounds.playClick();
  const data = {
    exportedAt: new Date().toISOString(),
    team1Questions: GameState.team1Questions,
    team2Questions: GameState.team2Questions
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bo-cau-hoi-keo-co-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showManageToast('📥 Đã xuất tệp câu hỏi JSON thành công!');
};

// Nhập file JSON
window.importQuestionsJson = function (event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (Array.isArray(parsed.team1Questions) && Array.isArray(parsed.team2Questions)) {
        GameState.team1Questions = parsed.team1Questions;
        GameState.team2Questions = parsed.team2Questions;
        saveCustomQuestions();
        showManageToast(`📤 Đã nhập thành công ${parsed.team1Questions.length} câu Đội 1 và ${parsed.team2Questions.length} câu Đội 2!`);
        renderManageQuestions();
        renderUI();
      } else {
        alert('Tệp JSON không đúng định dạng chứa team1Questions và team2Questions!');
      }
    } catch (err) {
      alert('Lỗi đọc tệp JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
};

// Hỗ trợ cửa sổ modal cũ nếu người dùng mở
window.openQuestionEditor = function () {
  switchMainTab('manage');
};

window.closeQuestionEditor = function () {
  const modal = document.getElementById('editor-modal');
  if (modal) modal.classList.remove('open');
};

window.resetDefaultQuestions = function () {
  resetDefaultQuestionsConfirm();
};

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Mobile View Switcher (< 768px)
window.setMobileTab = function (tab) {
  GameState.mobileView = tab;
  ['team1', 'arena', 'team2', 'all'].forEach((t) => {
    const btn = document.getElementById(`tab-btn-m-${t}`);
    if (btn) btn.className = t === tab ? `active-${t}` : '';
  });
  updateMobileViewVisibility();
};

function updateMobileViewVisibility() {
  if (window.innerWidth >= 768) {
    document.getElementById('card-team1').style.display = 'flex';
    document.getElementById('center-arena').style.display = 'flex';
    document.getElementById('card-team2').style.display = 'flex';
    return;
  }

  const mode = GameState.mobileView;
  document.getElementById('card-team1').style.display = (mode === 'all' || mode === 'team1') ? 'flex' : 'none';
  document.getElementById('center-arena').style.display = (mode === 'all' || mode === 'arena') ? 'flex' : 'none';
  document.getElementById('card-team2').style.display = (mode === 'all' || mode === 'team2') ? 'flex' : 'none';
}

// Keyboard Shortcuts: Bấm phím A, B, C, D để trả lời câu hỏi trực tiếp trên bàn phím
function setupKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    // 1. Không nhận phím khi đang nhập liệu trong input, textarea, select
    const activeEl = document.activeElement;
    const activeTag = activeEl ? activeEl.tagName.toLowerCase() : '';
    if (
      activeTag === 'input' ||
      activeTag === 'textarea' ||
      activeTag === 'select' ||
      (activeEl && activeEl.isContentEditable)
    ) {
      return;
    }

    // 2. Không nhận phím khi đang mở bất kỳ modal hay popup nào
    const openModals = document.querySelectorAll(
      '.modal.open, .settings-modal.open, #victory-modal.open, #settings-modal.open, #add-question-modal.open, #editor-modal.open'
    );
    if (openModals.length > 0) return;

    // 3. Chỉ nhận phím khi đang ở màn hình thi đấu chính
    if (GameState.mainActiveTab !== 'game') return;

    // 4. Bỏ qua nếu trận đấu đã kết thúc hoặc đang tạm dừng
    if (GameState.isGameOver || GameState.isMatchTimerPaused) return;

    const currentTeamId = GameState.currentTurn;
    const currentTeamState = currentTeamId === 'team1' ? GameState.team1 : GameState.team2;

    // 5. Phím Space hoặc Enter: nếu đang ở trạng thái hiển thị kết quả (feedback), chuyển ngay sang câu tiếp theo
    if (e.key === ' ' || e.key === 'Enter') {
      if (currentTeamState && currentTeamState.isFeedback) {
        e.preventDefault();
        cancelAutoNextQuestion();
        handleNextQuestion(currentTeamId);
        return;
      }
    }

    // 6. Nhận diện phím đáp án A, B, C, D (hoặc 1, 2, 3, 4)
    const keyUpper = e.key.toUpperCase();
    let chosenKey = null;
    if (['A', 'B', 'C', 'D'].includes(keyUpper)) {
      chosenKey = keyUpper;
    } else if (e.key === '1') chosenKey = 'A';
    else if (e.key === '2') chosenKey = 'B';
    else if (e.key === '3') chosenKey = 'C';
    else if (e.key === '4') chosenKey = 'D';

    if (!chosenKey) return;

    // Nếu đang đấu với Bot AI và lượt hiện tại là của Bot thì người chơi không bấm thay cho Bot
    if (GameState.opponentMode === 'vs_bot' && currentTeamId === 'team2') {
      return;
    }

    // Nếu đội hiện tại đã trả lời rồi (đang hiển thị kết quả/feedback) thì không chọn lại
    if (currentTeamState.isFeedback) {
      return;
    }

    // Kiểm tra câu hỏi hiện tại có tồn tại đáp án tương ứng không
    const questionsList = currentTeamId === 'team1' ? GameState.team1Questions : GameState.team2Questions;
    const currentQ = questionsList[currentTeamState.currentIndex];
    if (!currentQ) return;

    const hasOption = currentQ.options.some((opt) => opt.key === chosenKey);
    if (!hasOption) return;

    e.preventDefault();

    // Hiệu ứng bấm phím trực quan trên nút đáp án tương ứng
    const cardId = currentTeamId === 'team1' ? 'card-team1' : 'card-team2';
    const cardEl = document.getElementById(cardId);
    if (cardEl) {
      const buttons = cardEl.querySelectorAll('.opt-btn');
      buttons.forEach((btn) => {
        const keySpan = btn.querySelector('.opt-key');
        if (keySpan && keySpan.textContent.trim() === chosenKey) {
          btn.classList.add('kbd-pressed');
          setTimeout(() => btn.classList.remove('kbd-pressed'), 220);
        }
      });
    }

    // Kích hoạt trả lời câu hỏi ngay lập tức
    handleAnswerClick(currentTeamId, chosenKey);
  });
}

// --- 10. ENTRY POINT ---
window.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  confettiInstance = new ConfettiEffect('confetti-canvas');
  renderUI();
  startGameTimers();
  setupKeyboardShortcuts();
  window.addEventListener('resize', () => updateMobileViewVisibility());
});
