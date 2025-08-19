const quiz = [
  {
    frage: "Stakeholders can interact with the Scrum team in which two ways?",
    antworten: [
        "At the Sprint Revlew",
        "At the Daily Scrum",
        "Via interactions with the Product Owner",
        "At the Sprint Retrospective"
        ],
    korrekt: [1, 3] // 1 und 3 sind richtig
  },
  {
    frage: "Which of the following reflects Scrum's expectation of 'validated learning'?",
    antworten: [
          "Customer feedback after frequent releases",
          "Sprint Planning",
          "Predictive Planning",
          "Sprint 0"
    ],
    korrekt: [1] // nur 1 ist richtig
  },
  {
    frage: "What is the purpose of using a Sprint burndown chart in Scrum?",
    antworten: [
        "To manage progress against the Product Backlog",
        "To track work remaining in the Sprint",
        "To manage hours per task per team member",
        "To perform release planning"
    ],
    korrekt: [2] // nur 2 ist richtig
  },
  {
    frage: "The Product Backlog should be transparent to the entire organization.",
    antworten: [
        "True",
        "False"
    ],
    korrekt: [1] // 1 ist richtig
  },
   {
    frage: "How do you ensure that performance requirements are addressed by the Developers?",
    antworten: [
       "Add these requirements to the Definition of Done.",
       "Use hardening Sprints to the testand improve performance.",
       "Add Product Backlog items to address performance.",
       "Put a performance tester on the Scrum Team."
    ],
    korrekt: [0, 2] // 0 und 2 sind richtig
  },
   {
    frage: "The Developers are more focused with a specific goal.",
    antworten: [
       "A Sprint Goal only gives purpose to Sprint 0.",
       "A Sprint Goal ensures that all the Product Backlog items selected for the Sprint are implemented.",
       "The Developers are more focused with a specific goal.",
       "Sprint Goals are not valuable. Everything is known from the Product Backlog."
    ],
    korrekt: [2] // nur 2 ist richtig
  },
  {
    frage: "When the Developers are having trouble delivering a working Increment because they don't understand a functional requirement, what should they do?",
    antworten: [
       "Defer the work to a more appropriate Sprint.",
        "Add a specialist to the Developers.",
        "Partially complete the functionality and discuss the remaining work at the Sprint Review.",
        "Collaborate with the Product Owner to determine what is possible and acceptable."
    ],
    korrekt: [3] // nur 3 ist richtig
  },
  {
    frage: "When does backlog refinement occur?",
    antworten: [
       "Between Sprints.",
        "In Sprint 0.",
        "During the Sprint, in preparation for the next Sprint(s).",
        "In Sprint planning."
    ],
    korrekt: [2] // nur 2 ist richtig
  },
  {
    frage: "Which is NOT a Scrum Role?",
    antworten: [
       "Product Owner.",
        "Team Member.",
        "Project Manager.",
        "Scrum Master."
    ],
    korrekt: [2] // nur 2 ist richtig
  },
  {
    frage: "For a one-month Sprint, what is the maximum duration  of the Sprint Planning meeting?",
    antworten: [
       "8 hours.",
        "4 hours.",
        "3 hours.",
        "Decided by the Team."
    ],
    korrekt: [0] // nur 0 ist richtig
  },

];

let aktuelleFrage = 0;

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = quiz[aktuelleFrage];
  // Fortschritt oben
  let html = `<p>Frage ${aktuelleFrage + 1} von ${quiz.length}</p>`;
  html += `<p>${q.frage}</p>`;
  html += '<div class="antworten">';
  q.antworten.forEach((antwort, index) => {
    html += `
      <label>
        <input type="checkbox" value="${index}">
        ${antwort}
      </label><br>
    `;
  });
  html += '</div>';
  html += '<button id="check-btn">Antwort prüfen</button>';
  html += '<div id="feedback" class="feedback"></div>';
  quizContainer.innerHTML = html;

  document.getElementById("check-btn").addEventListener("click", checkAnswer);
  nextBtn.disabled = true;
}

function checkAnswer() {
  const q = quiz[aktuelleFrage];
  const selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => parseInt(cb.value));
  
  const feedbackDiv = document.getElementById("feedback");

  // Prüfen, ob Auswahl korrekt ist
  selected.sort((a,b) => a-b);
  const korrektSort = [...q.korrekt].sort((a,b) => a-b);
  
  const richtig = JSON.stringify(selected) === JSON.stringify(korrektSort);

  if (richtig) {
    feedbackDiv.textContent = "Richtig!";
    feedbackDiv.className = "feedback correct";
  } else {
    const richtigeAntworten = q.korrekt.map(i => q.antworten[i]).join(", ");
    feedbackDiv.textContent = `Falsch! Richtige Antwort(en): ${richtigeAntworten}`;
    feedbackDiv.className = "feedback wrong";
  }

  // Alle Checkboxen sperren
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.disabled = true);
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  aktuelleFrage++;
  if (aktuelleFrage < quiz.length) {
    loadQuestion();
  } else {
    quizContainer.innerHTML = "<p>Quiz beendet!</p>";
    nextBtn.style.display = "none";
  }
});

// Erste Frage laden
loadQuestion();
