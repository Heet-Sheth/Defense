const timer = document.querySelector("div");
const expectDate = new Date(2025, 11, 1, 0, 0, 0).getTime();

setInterval(() => {
  let current = expectDate - new Date().getTime();
  current /= 1000;

  const days = Math.floor(current / (24 * 60 * 60));
  const hours = Math.floor((current % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((current % (60 * 60)) / 60);
  const seconds = Math.floor(current % 60);

  timer.textContent = `${days}d, ${hours}:${minutes}:${seconds}`;
}, 1000);
