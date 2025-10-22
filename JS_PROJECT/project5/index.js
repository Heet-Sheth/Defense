const timer = document.querySelector("div");

setInterval(() => (timer.textContent = new Date().toLocaleTimeString()), 1000);
