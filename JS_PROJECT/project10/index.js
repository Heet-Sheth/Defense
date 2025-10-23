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
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question:
      "Which programming language is known as the 'language of the web'?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Program Unit",
      "Computer Program Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question: "Which company developed the React JavaScript library?",
    options: ["Google", "Microsoft", "Facebook", "Apple"],
    answer: "Facebook",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },
  {
    question:
      "Which space agency successfully landed the first humans on the Moon?",
    options: ["ESA", "NASA", "Roscosmos", "CNSA"],
    answer: "NASA",
  },
  {
    question: "What does API stand for in programming?",
    options: [
      "Application Programming Interface",
      "Applied Programming Interface",
      "Application Program Integration",
      "Applied Program Integration",
    ],
    answer: "Application Programming Interface",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mars", "Mercury", "Earth"],
    answer: "Mercury",
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Standard Query Language",
      "Simple Query Language",
      "Sequential Query Language",
    ],
    answer: "Structured Query Language",
  },
  {
    question: "How many moons does Mars have?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    question: "Which version control system is most widely used?",
    options: ["SVN", "Git", "Mercurial", "Bazaar"],
    answer: "Git",
  },
  {
    question: "What is the name of Saturn's largest moon?",
    options: ["Europa", "Ganymede", "Titan", "Io"],
    answer: "Titan",
  },
  {
    question: "Which protocol is used for secure web browsing?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    answer: "HTTPS",
  },
  {
    question: "What is the speed of light in vacuum?",
    options: [
      "300,000 km/s",
      "150,000 km/s",
      "299,792,458 m/s",
      "186,000 miles/hour",
    ],
    answer: "299,792,458 m/s",
  },
  {
    question: "Which database management system is open source?",
    options: ["Oracle", "SQL Server", "MySQL", "DB2"],
    answer: "MySQL",
  },
  {
    question: "What is the name of SpaceX's reusable rocket?",
    options: ["Dragon", "Falcon 9", "Starship", "Crew Dragon"],
    answer: "Falcon 9",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which galaxy is closest to the Milky Way?",
    options: [
      "Andromeda Galaxy",
      "Triangulum Galaxy",
      "Large Magellanic Cloud",
      "Whirlpool Galaxy",
    ],
    answer: "Andromeda Galaxy",
  },
  {
    question: "What is the default port number for HTTP?",
    options: ["21", "22", "80", "443"],
    answer: "80",
  },
  {
    question: "What is the temperature of absolute zero?",
    options: ["-273.15°C", "-300°C", "-250°C", "-200°C"],
    answer: "-273.15°C",
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
