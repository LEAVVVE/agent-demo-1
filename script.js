const focusInput = document.getElementById('focusInput');
const breakInput = document.getElementById('breakInput');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const countdown = document.getElementById('countdown');
const modeText = document.getElementById('modeText');

let timerId = null;
let isRunning = false;
let isFocusMode = true;
let remainingSeconds = Number(focusInput.value) * 60;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function render() {
  countdown.textContent = formatTime(remainingSeconds);
  modeText.textContent = isFocusMode ? '专注中' : '休息中';
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
  isRunning = false;
}

function startTimer() {
  if (isRunning) {
    return;
  }

  if (remainingSeconds <= 0) {
    remainingSeconds = Number(focusInput.value) * 60;
    isFocusMode = true;
  }

  isRunning = true;
  pauseBtn.disabled = false;
  pauseBtn.textContent = '暂停';

  render();

  timerId = setInterval(() => {
    remainingSeconds -= 1;

    if (remainingSeconds <= 0) {
      isFocusMode = !isFocusMode;
      const nextMinutes = isFocusMode ? Number(focusInput.value) : Number(breakInput.value);
      remainingSeconds = Math.max(1, nextMinutes) * 60;
    }

    render();
  }, 1000);
}

function pauseOrResume() {
  if (!timerId) {
    return;
  }

  if (isRunning) {
    clearInterval(timerId);
    timerId = null;
    isRunning = false;
    pauseBtn.textContent = '继续';
  } else {
    startTimer();
    pauseBtn.textContent = '暂停';
  }
}

function resetTimer() {
  stopTimer();
  isFocusMode = true;
  remainingSeconds = Math.max(1, Number(focusInput.value)) * 60;
  pauseBtn.disabled = true;
  pauseBtn.textContent = '暂停';
  modeText.textContent = '准备开始';
  countdown.textContent = formatTime(remainingSeconds);
}

focusInput.addEventListener('change', resetTimer);
breakInput.addEventListener('change', resetTimer);
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseOrResume);
resetBtn.addEventListener('click', resetTimer);

resetTimer();
