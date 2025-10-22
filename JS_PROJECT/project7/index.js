const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const compliments = [
  "You have a great sense of humor!",
  "Your creativity is contagious.",
  "You are an amazing friend.",
  "You have a brilliant mind.",
  "Your positivity is infectious.",
  "You bring out the best in people.",
  "Your kindness knows no bounds.",
  "You have incredible strength and resilience.",
  "Your passion is truly inspiring.",
  "You light up every room you enter.",
  "Your wisdom guides others beautifully.",
  "You have a heart of gold.",
  "Your determination is admirable.",
  "You make the world a better place.",
  "Your compassion touches everyone around you.",
  "You have an amazing ability to listen.",
  "Your enthusiasm is absolutely contagious.",
  "You bring such joy to others.",
  "Your confidence is magnetic.",
  "You have a wonderful way with words.",
  "Your generosity knows no limits.",
  "You inspire others to be their best selves.",
];

const complimentsSize = compliments.length;

const victimCards = [
  "The Chosen One, though the burden weighs heavy on your shoulders.",
  "The Brave Soul, but courage comes with a price.",
  "The Silent Observer, though your silence speaks volumes.",
  "The Reluctant Hero, but destiny chose you for a reason.",
  "The Wise Sage, though wisdom often brings loneliness.",
  "The Loyal Friend, but loyalty can be taken for granted.",
  "The Mysterious Stranger, though mystery keeps others at a distance.",
  "The Fearless Leader, but leadership is a lonely path.",
  "The Gentle Giant, though gentleness is mistaken for weakness.",
  "The Cunning Trickster, but cleverness can isolate you.",
  "The Devoted Caretaker, though you forget to care for yourself.",
  "The Eternal Optimist, but your hope sometimes blinds you to reality.",
  "The Perfectionist, though nothing ever feels good enough.",
  "The Peacemaker, but you sacrifice your own needs for harmony.",
  "The Creative Dreamer, though the world doesn't always understand your vision.",
  "The Sensitive Empath, but you absorb everyone else's pain.",
  "The Independent Spirit, though self-reliance can become isolation.",
  "The Passionate Idealist, but your dreams seem impossible to others.",
  "The Protective Guardian, though you can't save everyone.",
  "The Honest Truth-Teller, but honesty sometimes hurts those you love.",
  "The Ambitious Achiever, though success comes at great personal cost.",
  "The Compassionate Healer, but you carry wounds that won't heal.",
];
const victimCardsSize = victimCards.length;

const recommendations = [
  "Take a walk in nature to clear your mind.",
  "Try a new hobby that challenges your creativity.",
  "Spend time with loved ones to strengthen your bonds.",
  "Practice mindfulness or meditation to reduce stress.",
  "Set small, achievable goals to boost your confidence.",
  "Read a book that inspires you.",
  "Volunteer for a cause you care about.",
  "Explore a new place, even if it's just in your own city.",
  "Take time for self-care and relaxation.",
  "Learn something new, like a language or instrument.",
  "Engage in physical activity to boost your energy.",
  "Cook a new recipe to nourish your body and soul.",
  "Write in a journal to reflect on your thoughts and feelings.",
  "Listen to music that uplifts your spirit.",
  "Connect with old friends to rekindle relationships.",
  "Attend a workshop or seminar to expand your knowledge.",
  "Practice gratitude by listing things you're thankful for.",
];
const recommendationsSize = recommendations.length;

const predictions = [
  "A thrilling adventure awaits you soon.",
  "You will find success in an unexpected place.",
  "A new relationship will bring joy into your life.",
  "Your hard work will soon pay off in a big way.",
  "An exciting opportunity is on the horizon.",
  "You will discover a hidden talent that will amaze you.",
  "A positive change is coming your way.",
  "You will make a meaningful connection with someone new.",
  "Your creativity will lead to a breakthrough.",
  "You will overcome a challenge that has been holding you back.",
  "A surprise gift or gesture will brighten your day.",
  "You will find clarity in a situation that has been confusing.",
  "Your optimism will attract good fortune.",
  "You will embark on a journey that changes your perspective.",
  "A long-held dream is about to come true.",
  "You will inspire others with your actions.",
];
const predictionsSize = predictions.length;

const precautions = [
  "Be cautious of new acquaintances until you truly know them.",
  "Avoid making impulsive decisions that could lead to regret.",
  "Stay vigilant about your personal belongings in public places.",
  "Trust your instincts when something feels off.",
  "Take time to thoroughly research before making big purchases.",
  "Be mindful of your online presence and privacy settings.",
  "Avoid overcommitting yourself to avoid burnout.",
  "Stay aware of your surroundings, especially in unfamiliar areas.",
  "Keep important documents and valuables secure at all times.",
  "Be careful with sharing personal information, even with friends.",
  "Watch out for signs of stress and take breaks when needed.",
  "Be cautious when lending money or valuables to others.",
  "Stay informed about local news and potential safety concerns.",
  "Avoid risky behaviors that could jeopardize your health or safety.",
  "Be mindful of your digital footprint and the information you share online.",
  "Take precautions when traveling, such as keeping emergency contacts handy.",
];
const precautionsSize = precautions.length;

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const gender =
    document.querySelector('input[name="gender"]:checked')?.value || "unknown";
  const birthDate = new Date(document.getElementById("dob").value);
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  // Validation
  if (!firstName || !lastName || !document.getElementById("dob").value) {
    alert("Please fill in all required fields");
    return;
  }

  const fullName = `${firstName} ${lastName}`;
  const signIndex = (birthMonth + (birthDay >= 20 ? 1 : 0)) % 12;
  const zodiacSign = zodiacSigns[signIndex];

  const compliment = compliments[Math.floor(Math.random() * complimentsSize)];
  const victimCard = victimCards[Math.floor(Math.random() * victimCardsSize)];
  const recommendation =
    recommendations[Math.floor(Math.random() * recommendationsSize)];
  const prediction = predictions[Math.floor(Math.random() * predictionsSize)];
  const precaution = precautions[Math.floor(Math.random() * precautionsSize)];

  // Show the chat result div
  const chatResultDiv = document.getElementById("chatResult");
  chatResultDiv.style.display = "block";

  const resultDiv = document.getElementById("chatMessage");
  resultDiv.innerHTML = `
    <h3 style="margin: 0 0 15px 0; font-size: 18px;">Hello, ${fullName}!</h3>
    <p style="margin: 0; line-height: 1.6; font-size: 14px;">As a ${zodiacSign}, ${compliment} You are ${victimCard}, and I recommend that you ${recommendation.toLowerCase()} Furthermore, ${prediction.toLowerCase()} However, ${precaution.toLowerCase()}</p>
`;
});
