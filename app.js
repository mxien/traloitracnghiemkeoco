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
}

function saveCustomQuestions() {
  localStorage.setItem('t1_custom_questions', JSON.stringify(GameState.team1Questions));
  localStorage.setItem('t2_custom_questions', JSON.stringify(GameState.team2Questions));
}

// --- 7. RENDER LOGIC ---
function renderUI() {
  // 1. Scoreboard counts
  document.getElementById('t1-score-display').textContent = `${GameState.team1.score} đúng`;
  document.getElementById('t1-wrong-display').textContent = `${GameState.team1.wrongCount} sai`;
  document.getElementById('t2-score-display').textContent = `${GameState.team2.score} đúng`;
  document.getElementById('t2-wrong-display').textContent = `${GameState.team2.wrongCount} sai`;

  // Turn status badge in scoreboard
  const turnBadge = document.getElementById('match-turn-pill');
  if (GameState.currentTurn === 'team1') {
    turnBadge.className = 'turn-pill team1-turn';
    turnBadge.textContent = 'LƯỢT: ĐỘI 1 (ĐỎ)';
  } else {
    turnBadge.className = 'turn-pill team2-turn';
    turnBadge.textContent = 'LƯỢT: ĐỘI 2 (XANH)';
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
    flagText.textContent = `🚩 Nghiêng ${Math.abs(Math.round(GameState.ropePosition))}% về Đội 1`;
  } else {
    flagText.textContent = `🚩 Nghiêng ${Math.abs(Math.round(GameState.ropePosition))}% về Đội 2`;
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
  const t2TurnBtn = document.getElementById('turn-btn-t2');
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
}

function renderQuestionCard(teamId) {
  const isTeam1 = teamId === 'team1';
  const teamState = isTeam1 ? GameState.team1 : GameState.team2;
  const questionsList = isTeam1 ? GameState.team1Questions : GameState.team2Questions;
  const question = questionsList[teamState.currentIndex] || null;
  const isCompleted = teamState.currentIndex >= questionsList.length;
  const isEnabled = (GameState.gameMode === 'simultaneous' || GameState.currentTurn === teamId) && !GameState.isGameOver;

  const cardElem = document.getElementById(isTeam1 ? 'card-team1' : 'card-team2');
  if (isEnabled) {
    cardElem.className = `question-card ${isTeam1 ? 'card-team1 active-side-team1' : 'card-team2 active-side-team2'}`;
  } else {
    cardElem.className = `question-card ${isTeam1 ? 'card-team1' : 'card-team2'}`;
  }

  // Header badges
  const progressText = document.getElementById(isTeam1 ? 't1-progress-text' : 't2-progress-text');
  progressText.textContent = isCompleted ? 'Đã xong 10 câu' : `Câu ${teamState.currentIndex + 1} / ${questionsList.length}`;

  const statusBadge = document.getElementById(isTeam1 ? 't1-status-badge' : 't2-status-badge');
  if (isEnabled) {
    statusBadge.className = `turn-status-badge ${isTeam1 ? 'badge-active-t1' : 'badge-active-t2'}`;
    statusBadge.textContent = 'ĐANG LƯỢT THI';
  } else {
    statusBadge.className = 'turn-status-badge badge-waiting';
    statusBadge.textContent = 'Chờ lượt';
  }

  // Question & Options Container
  const qContainer = document.getElementById(isTeam1 ? 't1-content-box' : 't2-content-box');

  if (isCompleted) {
    qContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #64748b;">
        <div style="font-size: 40px; margin-bottom: 8px;">✅</div>
        <h4 style="font-weight: 800; color: #1e293b; font-size: 15px;">Đội đã hoàn thành hết 10 câu!</h4>
        <p style="font-size: 12px; margin-top: 4px;">Đang chờ kết quả chung cuộc của trận đấu...</p>
      </div>
    `;
    return;
  }

  if (!question) return;

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

    const disabledAttr = (!isEnabled || teamState.isFeedback) ? 'disabled' : '';

    optionsHtml += `
      <button type="button" class="${btnClass}" ${disabledAttr} onclick="handleAnswerClick('${teamId}', '${opt.key}')">
        <span class="opt-key ${isTeam1 ? 'key-team1' : 'key-team2'}">${opt.key}</span>
        <span style="flex: 1;">${opt.text}</span>
      </button>
    `;
  });

  let feedbackHtml = '';
  if (teamState.isFeedback) {
    const isCorrect = teamState.selectedAnswer === question.correctAnswer;
    const otherTeamName = isTeam1 ? 'Đội 2 (Xanh)' : 'Đội 1 (Đỏ)';
    feedbackHtml = `
      <div class="feedback-box ${isCorrect ? 'box-correct' : 'box-wrong'}">
        <div class="feedback-headline">
          <span>${isCorrect ? '⚡ Chính xác!' : '⚠️ Trả lời sai!'}</span>
          <span>${isCorrect ? `Đã giật cờ về phía mình! (-${GameState.pullStepSize}%)` : `${otherTeamName} đã kéo giật cờ!`}</span>
        </div>
        ${question.explanation ? `<div class="feedback-exp">${question.explanation}</div>` : ''}
      </div>
      <button type="button" class="next-btn ${isTeam1 ? 'next-btn-t1' : 'next-btn-t2'}" onclick="handleNextQuestion('${teamId}')">
        <span>Câu tiếp theo</span>
        <span>→</span>
      </button>
    `;
  }

  qContainer.innerHTML = `
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

  if (isTeam1) {
    if (isCorrect) {
      // Đội 1 ĐÚNG -> Kéo về Đội 1 (âm)
      GameState.activePullingTeam = 'team1';
      newPosition = Math.max(-100, GameState.ropePosition - GameState.pullStepSize);
      sounds.playCorrect();
      sounds.playTugPull();
      alertMessage = `✅ Đội 1 trả lời ĐÚNG! Đã giật cờ về bên trái (-${GameState.pullStepSize}%)`;
      GameState.team1.score++;
    } else {
      // Đội 1 SAI -> Bị Đội 2 kéo (dương)
      GameState.activePullingTeam = 'team2';
      newPosition = Math.min(100, GameState.ropePosition + GameState.pullStepSize);
      sounds.playWrong();
      sounds.playTugPull();
      alertMessage = `❌ Đội 1 trả lời SAI! Đội 2 kéo cờ sang phải (+${GameState.pullStepSize}%)`;
      GameState.team1.wrongCount++;
    }
  } else {
    // Đội 2 trả lời
    if (isCorrect) {
      // Đội 2 ĐÚNG -> Kéo về Đội 2 (dương)
      GameState.activePullingTeam = 'team2';
      newPosition = Math.min(100, GameState.ropePosition + GameState.pullStepSize);
      sounds.playCorrect();
      sounds.playTugPull();
      alertMessage = `✅ Đội 2 trả lời ĐÚNG! Đã giật cờ về bên phải (+${GameState.pullStepSize}%)`;
      GameState.team2.score++;
    } else {
      // Đội 2 SAI -> Bị Đội 1 kéo (âm)
      GameState.activePullingTeam = 'team1';
      newPosition = Math.max(-100, GameState.ropePosition - GameState.pullStepSize);
      sounds.playWrong();
      sounds.playTugPull();
      alertMessage = `❌ Đội 2 trả lời SAI! Đội 1 kéo cờ sang trái (-${GameState.pullStepSize}%)`;
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
    setTimeout(() => {
      triggerGameOver('team1', 'knockout');
    }, 700);
  } else if (newPosition >= 100) {
    setTimeout(() => {
      triggerGameOver('team2', 'knockout');
    }, 700);
  }

  renderUI();
};

window.handleNextQuestion = function (teamId) {
  if (GameState.isGameOver) return;
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
  GameState.isGameOver = true;
  GameState.winnerId = winnerId;
  GameState.gameOverReason = reason;

  sounds.playVictory();
  if (confettiInstance) confettiInstance.start();

  const modal = document.getElementById('victory-modal');
  const title = document.getElementById('victory-winner-title');
  const desc = document.getElementById('victory-desc-text');

  if (winnerId === 'team1') {
    title.innerHTML = '🎉 <span class="team1-text">ĐỘI 1 (ĐỎ) CHIẾN THẮNG!</span>';
    desc.textContent = reason === 'knockout'
      ? 'Chiến thắng tuyệt đối bằng đòn Knock-out kéo lá cờ chạm vạch đích!'
      : 'Chiến thắng chung cuộc sau khi hoàn thành 10 câu hỏi trắc nghiệm!';
  } else if (winnerId === 'team2') {
    title.innerHTML = '🎉 <span class="team2-text">ĐỘI 2 (XANH) CHIẾN THẮNG!</span>';
    desc.textContent = reason === 'knockout'
      ? 'Chiến thắng tuyệt đối bằng đòn Knock-out kéo lá cờ chạm vạch đích!'
      : 'Chiến thắng chung cuộc sau khi hoàn thành 10 câu hỏi trắc nghiệm!';
  } else {
    title.innerHTML = '⚖️ <span style="color:#f59e0b;">TRẬN ĐẤU HÒA NHAU!</span>';
    desc.textContent = 'Hai đội có lực kéo cân bằng hoàn hảo tại vạch xuất phát!';
  }

  document.getElementById('modal-t1-stat').textContent = `${GameState.team1.score} đúng / ${GameState.team1.wrongCount} sai`;
  document.getElementById('modal-t2-stat').textContent = `${GameState.team2.score} đúng / ${GameState.team2.wrongCount} sai`;

  modal.classList.add('open');
}

// --- 9. MODALS & CONTROLS ---
window.resetGame = function () {
  sounds.playClick();
  if (confettiInstance) confettiInstance.stop();

  GameState.ropePosition = 0;
  GameState.currentTurn = 'team1';
  GameState.activePullingTeam = null;
  GameState.isGameOver = false;
  GameState.winnerId = null;

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
  showAlertNotification('Trận đấu đã được cài đặt lại! Hãy sẵn sàng!');
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
  sounds.playClick();
  GameState.currentTurn = teamId;
  renderUI();
};

window.toggleGameMode = function () {
  sounds.playClick();
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
  closeSettingsModal();
  showAlertNotification(`Đã lưu cài đặt! Lực kéo mỗi câu: ${GameState.pullStepSize}%`);
};

// Question Editor Modal
window.openQuestionEditor = function () {
  sounds.playClick();
  GameState.editorActiveTab = 'team1';
  renderEditorForm();
  document.getElementById('editor-modal').classList.add('open');
};

window.closeQuestionEditor = function () {
  document.getElementById('editor-modal').classList.remove('open');
};

window.switchEditorTab = function (tab) {
  sounds.playClick();
  GameState.editorActiveTab = tab;
  renderEditorForm();
};

function renderEditorForm() {
  const isT1 = GameState.editorActiveTab === 'team1';
  document.getElementById('tab-btn-t1').className = `editor-tab-btn ${isT1 ? 'active-tab' : ''}`;
  document.getElementById('tab-btn-t2').className = `editor-tab-btn ${!isT1 ? 'active-tab' : ''}`;

  const list = isT1 ? GameState.team1Questions : GameState.team2Questions;
  const container = document.getElementById('editor-questions-list');

  let html = '';
  list.forEach((q, idx) => {
    html += `
      <div class="question-edit-item">
        <label>Câu hỏi ${idx + 1}:</label>
        <input type="text" class="input-text" id="edit-q-${idx}" value="${escapeHtml(q.question)}" />
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
          <div>
            <label>Đáp án A:</label>
            <input type="text" class="input-text" id="edit-opt-A-${idx}" value="${escapeHtml(q.options[0]?.text || '')}" />
          </div>
          <div>
            <label>Đáp án B:</label>
            <input type="text" class="input-text" id="edit-opt-B-${idx}" value="${escapeHtml(q.options[1]?.text || '')}" />
          </div>
          <div>
            <label>Đáp án C:</label>
            <input type="text" class="input-text" id="edit-opt-C-${idx}" value="${escapeHtml(q.options[2]?.text || '')}" />
          </div>
          <div>
            <label>Đáp án D:</label>
            <input type="text" class="input-text" id="edit-opt-D-${idx}" value="${escapeHtml(q.options[3]?.text || '')}" />
          </div>
        </div>

        <div style="display: flex; gap: 10px; align-items: center; margin-top: 4px;">
          <label style="margin: 0;">Đáp án đúng:</label>
          <select id="edit-correct-${idx}" style="padding: 4px 8px; border-radius: 4px; font-weight: bold;">
            <option value="A" ${q.correctAnswer === 'A' ? 'selected' : ''}>A</option>
            <option value="B" ${q.correctAnswer === 'B' ? 'selected' : ''}>B</option>
            <option value="C" ${q.correctAnswer === 'C' ? 'selected' : ''}>C</option>
            <option value="D" ${q.correctAnswer === 'D' ? 'selected' : ''}>D</option>
          </select>
        </div>

        <div style="margin-top: 6px;">
          <label>Giải thích:</label>
          <input type="text" class="input-text" id="edit-exp-${idx}" value="${escapeHtml(q.explanation || '')}" />
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

window.saveEditorQuestions = function () {
  const isT1 = GameState.editorActiveTab === 'team1';
  const list = isT1 ? GameState.team1Questions : GameState.team2Questions;

  list.forEach((q, idx) => {
    const qElem = document.getElementById(`edit-q-${idx}`);
    if (qElem) q.question = qElem.value.trim();

    const optA = document.getElementById(`edit-opt-A-${idx}`);
    const optB = document.getElementById(`edit-opt-B-${idx}`);
    const optC = document.getElementById(`edit-opt-C-${idx}`);
    const optD = document.getElementById(`edit-opt-D-${idx}`);
    if (optA && q.options[0]) q.options[0].text = optA.value.trim();
    if (optB && q.options[1]) q.options[1].text = optB.value.trim();
    if (optC && q.options[2]) q.options[2].text = optC.value.trim();
    if (optD && q.options[3]) q.options[3].text = optD.value.trim();

    const correctElem = document.getElementById(`edit-correct-${idx}`);
    if (correctElem) q.correctAnswer = correctElem.value;

    const expElem = document.getElementById(`edit-exp-${idx}`);
    if (expElem) q.explanation = expElem.value.trim();
  });

  saveCustomQuestions();
  closeQuestionEditor();
  showAlertNotification(`Đã lưu thành công bộ câu hỏi ${isT1 ? 'Đội 1' : 'Đội 2'}!`);
  renderUI();
};

window.resetDefaultQuestions = function () {
  if (confirm('Bạn có chắc muốn khôi phục toàn bộ 20 câu hỏi mặc định ban đầu?')) {
    GameState.team1Questions = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS_TEAM1));
    GameState.team2Questions = JSON.parse(JSON.stringify(DEFAULT_QUESTIONS_TEAM2));
    localStorage.removeItem('t1_custom_questions');
    localStorage.removeItem('t2_custom_questions');
    renderEditorForm();
    renderUI();
    showAlertNotification('Đã khôi phục câu hỏi mặc định!');
  }
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

// --- 10. ENTRY POINT ---
window.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  confettiInstance = new ConfettiEffect('confetti-canvas');
  renderUI();
  window.addEventListener('resize', () => updateMobileViewVisibility());
});
