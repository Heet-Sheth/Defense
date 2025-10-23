const question_answer_mcq = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "What is the chemical symbol for Gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    answer: "Au",
  },
];

const number_of_questions = question_answer_mcq.length;
const questionContainer = document.getElementById("question-container");

question_answer_mcq.forEach((element) => {
  const question = document.createElement("div");
  question.className = "question";

  const question_text = document.createTextNode(element.question);
  question.appendChild(question_text);

  element.options.forEach((option) => {
    const currentOption = document.createElement("input");
    const label = document.createElement("label");

    currentOption.type = "radio";
    currentOption.id = option;
    currentOption.name = element.question;
    currentOption.value = option;
    currentOption.textContent = option;

    label.htmlFor = option;
    label.textContent = option;

    const tempDiv = document.createElement("div");
    tempDiv.appendChild(currentOption);
    tempDiv.appendChild(label);

    question.appendChild(tempDiv);
  });
  questionContainer.appendChild(question);
});

const form = document.querySelector("form");
const resultElement = document.getElementById("result");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let result = 0;

  question_answer_mcq.forEach(({ question, answer }) => {
    const current = document.querySelector(
      `input[name="${question}"]:checked`
    )?.value;
    if (current == answer) result++;
  });

  resultElement.textContent =
    "You Scored " + result + "/" + number_of_questions;

  form.reset();
});
