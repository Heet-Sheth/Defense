const quotes = [
  "Today's accomplishments were yesterday’s impossibilities.",
  "A cheerful heart is good medicine, but a crushed spirit dries up the bones.",
  "The most wasted of all days is one without laughter.",
  "If you see someone without a smile, give them one of yours.",
  "Cheer is louder when shared.",
  "Be the lift in someone’s day.",
  "Start your day with thanks, not complaints.",
  "Positive anything is better than negative nothing.",
];

const cheerButton = document.getElementById("click-button");
const displayArea = document.getElementById("text-display");
const size = quotes.length;

function textChooser() {
  const index = Math.floor(Math.random() * size);
  return quotes[index];
}

cheerButton.addEventListener("click", () => {
  displayArea.innerText = textChooser();
});
