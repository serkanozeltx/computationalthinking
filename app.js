// Global questions array generated from data.js

// DOM Elements
const views = {
  welcome: document.getElementById('welcome-screen'),
  quiz: document.getElementById('quiz-screen'),
  results: document.getElementById('results-screen')
};

const UI = {
  // Common
  siteTitle: document.getElementById('site-title'),
  langSwitch: document.getElementById('language-switch'),
  progressText: document.getElementById('progress-text'),
  progressFill: document.getElementById('progress-fill'),
  
  // Welcome
  welcomeTitle: document.getElementById('welcome-title'),
  welcomeDesc: document.getElementById('welcome-desc'),
  startBtn: document.getElementById('start-btn'),
  
  // Quiz
  imagesContainer: document.getElementById('images-container'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  finishBtn: document.getElementById('finish-btn'),
  
  // Results
  resultsTitle: document.getElementById('results-title'),
  scoreValue: document.getElementById('score-value'),
  scoreOutOf: document.getElementById('score-out-of'),
  resultsMessage: document.getElementById('results-message'),
  restartBtn: document.getElementById('restart-btn')
};

// Application State
let state = {
  lang: 'en', // default language
  currentQuestion: 0,
  answers: new Array(questions.length).fill(null),
  isFinished: false
};

// Dictionaries for UI Translation
const translations = {
  en: {
    siteTitle: 'Computational Thinking Test',
    welcomeTitle: 'Welcome to the Computational Thinking Test',
    welcomeDesc: 'This interactive test will evaluate your logical reasoning and problem-solving skills across various scenarios. You can switch between Turkish and English at any time.',
    startBtn: 'Start Test',
    prevBtn: 'Previous',
    nextBtn: 'Next',
    finishBtn: 'Finish Test',
    resultsTitle: 'Test Complete!',
    resultsMessage: 'Great job completing the test.',
    restartBtn: 'Restart Test',
    progressTpl: (curr, total) => `Progress: ${curr}/${total}`
  },
  tr: {
    siteTitle: 'Bilgi İşlemsel Düşünme Testi',
    welcomeTitle: 'Bilgi İşlemsel Düşünme Testine Hoş Geldiniz',
    welcomeDesc: 'Bu etkileşimli test, çeşitli senaryolarda mantıksal akıl yürütme ve problem çözme becerilerinizi değerlendirecektir. İstediğiniz zaman Türkçe ve İngilizce arasında geçiş yapabilirsiniz.',
    startBtn: 'Testi Başlat',
    prevBtn: 'Önceki',
    nextBtn: 'Sonraki',
    finishBtn: 'Testi Bitir',
    resultsTitle: 'Test Tamamlandı!',
    resultsMessage: 'Testi tamamladığınız için tebrikler.',
    restartBtn: 'Yeniden Başlat',
    progressTpl: (curr, total) => `İlerleme: ${curr}/${total}`
  }
};

// Initialize App
function init() {
  UI.langSwitch.addEventListener('change', (e) => {
    state.lang = e.target.checked ? 'en' : 'tr';
    updateUI();
  });
  
  // Default switch checked status based on default lang (en)
  UI.langSwitch.checked = state.lang === 'en';

  UI.startBtn.addEventListener('click', startTest);
  UI.prevBtn.addEventListener('click', navigatePrev);
  UI.nextBtn.addEventListener('click', navigateNext);
  UI.finishBtn.addEventListener('click', finishTest);
  UI.restartBtn.addEventListener('click', resetTest);
  
  updateUI();
}

function updateUI() {
  const t = translations[state.lang];
  
  // Update static text elements
  UI.siteTitle.innerText = t.siteTitle;
  UI.welcomeTitle.innerText = t.welcomeTitle;
  UI.welcomeDesc.innerText = t.welcomeDesc;
  UI.startBtn.innerText = t.startBtn;
  UI.prevBtn.innerText = t.prevBtn;
  UI.nextBtn.innerText = t.nextBtn;
  UI.finishBtn.innerText = t.finishBtn;
  UI.resultsTitle.innerText = t.resultsTitle;
  UI.resultsMessage.innerText = t.resultsMessage;
  UI.restartBtn.innerText = t.restartBtn;
  
  // Update view logic
  if (!state.isFinished && views.quiz.classList.contains('active')) {
    renderQuestion();
  } else if (state.isFinished && views.results.classList.contains('active')) {
    // Ensure final score text is in correct lang
    UI.resultsMessage.innerText = t.resultsMessage;
  }
}

function showView(viewName) {
  Object.values(views).forEach(v => {
    v.classList.remove('active');
    v.classList.add('hidden');
  });
  
  const selectedView = views[viewName];
  selectedView.classList.remove('hidden');
  
  // Small timeout to allow display:block to apply before animating opacity
  setTimeout(() => {
    selectedView.classList.add('active');
  }, 10);
}

function startTest() {
  state.currentQuestion = 0;
  state.answers = new Array(questions.length).fill(null);
  state.isFinished = false;
  
  renderQuestion();
  showView('quiz');
}

function resetTest() {
  showView('welcome');
  UI.progressFill.style.width = '5%';
  UI.progressText.innerText = '';
}

function renderQuestion() {
  const qId = state.currentQuestion;
  const qData = questions[qId];
  const langData = qData[state.lang];
  const t = translations[state.lang];
  
  // Progress Bar
  const displayNum = qId + 1;
  const totalNum = questions.length;
  UI.progressText.innerText = t.progressTpl(displayNum, totalNum);
  UI.progressFill.style.width = `${(displayNum / totalNum) * 100}%`;
  
  // Buttons
  UI.prevBtn.disabled = qId === 0;
  if (qId === questions.length - 1) {
    UI.nextBtn.classList.add('hidden');
    UI.finishBtn.classList.remove('hidden');
  } else {
    UI.nextBtn.classList.remove('hidden');
    UI.finishBtn.classList.add('hidden');
  }

  // Inject Images
  UI.imagesContainer.innerHTML = '';
  if (qData.images && qData.images.length > 0) {
    qData.images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Question visual';
      img.loading = 'lazy';
      UI.imagesContainer.appendChild(img);
    });
  }
  
  // Inject Text
  UI.questionText.innerHTML = langData.text;
  
  // Inject Options
  UI.optionsContainer.innerHTML = '';
  langData.options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span style="font-weight: 600; margin-right: 12px; color: var(--text-dim);">${String.fromCharCode(65 + index)}.</span> ${optText}`;
    
    if (state.answers[qId] === index) {
      btn.classList.add('selected');
    }
    
    btn.addEventListener('click', () => {
      state.answers[qId] = index;
      Array.from(UI.optionsContainer.children).forEach(c => c.classList.remove('selected'));
      btn.classList.add('selected');
    });
    
    UI.optionsContainer.appendChild(btn);
  });
}

function navigatePrev() {
  if (state.currentQuestion > 0) {
    state.currentQuestion--;
    renderQuestion();
  }
}

function navigateNext() {
  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion++;
    renderQuestion();
  }
}

function finishTest() {
  state.isFinished = true;
  calculateScore();
  showView('results');
}

function calculateScore() {
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    if (state.answers[i] === questions[i].correctAnswerIndex) {
      score++;
    }
  }
  
  // Animate counter
  let currentVal = 0;
  const duration = 1500;
  const stepTime = Math.abs(Math.floor(duration / (score || 1)));
  
  UI.scoreOutOf.innerText = `/ ${questions.length}`;
  UI.scoreValue.innerText = "0";

  if (score > 0) {
    const timer = setInterval(() => {
      currentVal++;
      UI.scoreValue.innerText = currentVal;
      if (currentVal >= score) {
        clearInterval(timer);
      }
    }, stepTime);
  }
}

document.addEventListener('DOMContentLoaded', init);
