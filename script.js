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
  {
   frage: "In wich meeting do you capture lessons learned?",
    antworten: [
        "Sprint Planning.",
        "Sprint Review.",
        "Sprint Retrospective.",
        "Daily Status Meeting."
    ],
    korrekt: [2] // nur 2 ist richtig
  },
  {
   frage: "Self-managing teams are characterized by their ability to",
    antworten: [
        "Do their own filing.",
        "Sit where they like.",
        "Make local decisions.",
        "Make budget decisions."
    ],
    korrekt: [2] // nur 2 ist richtig
  },
   {
   frage: "The Scrum Master role includes",
    antworten: [
        "Shielding team members from interruptions.",
        "Making commitments to stakeholders.",
        "Determinihg which features to include in a Sprint.",
        "Assining tasks to save time."
    ],
    korrekt: [0] // nur 0 ist richtig
  },
   {
   frage: "Your team is running three-week Sprints. How much time should you schedule for Sprint Review sessions?",
    antworten: [
        "1 hour, 15 minutes.",
        "45 minutes.",
        "3 hours.",
        "6 hours."
    ],
    korrekt: [2] // nur 2 ist richtig
  },
   {
   frage: "A 4-hour Sprint Planning meeting is typical for a Sprint that is how long?",
    antworten: [
        "Four weeks.",
        "Two weeks.",
        "One week.",
        "Four days."
    ],
    korrekt: [1] // nur 1 ist richtig
  },
   {
   frage: "This person is responsible for establishing Scrum, making sure it is used correctly and maximizing its benefit.",
    antworten: [
        "Product Owner.",
        "Coach.",
        "Scrum Master.",
        "Functional Manager.",
        "Agile Coach."
    ],
    korrekt: [2] // nur 2 ist richtig
  },
   {
   frage: "When maintaining the Product Backlog, this role represents the interests of the stakeholders and ensures the value of the work completed.",
    antworten: [
        "Scrum Master.",
        "Agile Project Manager.",
        "Product Owner.",
        "Sponsor."
    ],
    korrekt: [2] // nur 2 ist richtig
  },
   {
   frage: "Which should NOT take place at the Daily Scrum?",
    antworten: [
        "The Product Owner provides a status report.",
        "The Scrum Master manages the timebox.",
        "The Developers answer the three questions.",
        "Issues are raised and documented."
    ],
    korrekt: [0] // nur 0 ist richtig
  },
   {
   frage: "The best description of a Scrum Backlog is:",
    antworten: [
        "Daily progress for a Sprint over the Sprint's length.",
        "A prioritized list of tasks to be completed during the project.",
        "A prioritized list of requirements to be completed during the Sprint.",
        "A prioritized list of requirements to be completed for a release."
    ],
    korrekt: [2] // nur 2 ist richtig
  },
   {
   frage: "In Scrum, who is responsible for managing the Developers?",
    antworten: [
        "The Scrum Master.",
        "The Project Manager.",
        "The Developers.",
        "The Product Owner."
    ],
    korrekt: [2] // nur 2 ist richtig
  },
   {
   frage: "Which statement is least accurate when providing a Definition of Done?",
    antworten: [
        "It is the exit criteria to determine whether a Product Backlog item is complete.",
        "It may vary depending on the project.",
        "It is defined by the Scrum Master.",
        "It becomes more complete over time"
    ],
    korrekt: [2] // nur 2 ist richtig
  },
   {
   frage: "All of the following occur in the Sprint planning meeting EXCEPT:",
    antworten: [
        "The Developers identify improvements that it will implement in the next Sprint.",
        "The Product Owner answer questions and clarifies the Product Backlog items.",
        "The Developers commit to work in the Sprint.",
        "Tasks are defined for the Product Backlog items."
    ],
    korrekt: [0] // nur 0 ist richtig
  },
   {
   frage: "The Sprint retrospective",
    antworten: [
        "Is intended to promote continuous process improvement.",
        "Is held at the end of each release.",
        "Is conducted to provide the sposor with key information on team progress.",
        "Is optional."
    ],
    korrekt: [0] // nur 0 ist richtig
  },
   {
   frage: "Suppose 8 new members joined the Developers, and the team size is now 15. The Daily Scrum is getting noisy and exceedind the 15-minute timebox. What is the most effective way to address this situation?",
    antworten: [
        "Divide the team into two teams with minimum dependency and have two separate Daily Scrums.",
        "Do nothing; allow the large team to excees the timebox by a few minutes each meeting.",
        "Increase the timebox for the Daily Scrum to 30 minutes.",
        "Ask the team members to only update on the impediments and highlight only the important ones."
    ],
    korrekt: [0] // nur 0 ist richtig
  },
   {
   frage: "During which meeting do team members synchronize their work and progress and report any impediments to the Scrum Master for removal?",
    antworten: [
        "Sprint Planning.",
        "Daily Scrum.",
        "Sprint Retrospective.",
        "Weekly Status."
    ],
    korrekt: [1] // nur 1 ist richtig
  },

];

let aktuelleFrage = 0;
let punktestand = 0;

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");
const scoreDiv = document.getElementById("score");

function loadQuestion() {
  const q = quiz[aktuelleFrage];
  
  // Fortschritt aktualisieren
  updateProgress();

  // Frage rendern
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

  // Auswahl prüfen
  selected.sort((a,b) => a-b);
  const korrektSort = [...q.korrekt].sort((a,b) => a-b);
  const richtig = JSON.stringify(selected) === JSON.stringify(korrektSort);

if (richtig) {
  feedbackDiv.textContent = "Richtig!";
  feedbackDiv.className = "feedback correct";
  punktestand++;
  updateScore();
} else {
  const richtigeAntworten = q.korrekt.map(i => q.antworten[i]).join("<br>");
  feedbackDiv.innerHTML = `Falsch! Richtige Antwort(en):<br>${richtigeAntworten}`;
  feedbackDiv.className = "feedback wrong";
}

  // Sperren
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.disabled = true);
  nextBtn.disabled = false;
}

function updateProgress() {
  const prozent = ((aktuelleFrage) / quiz.length) * 100;
  progressBar.style.width = prozent + "%";
}

function updateScore() {
  scoreDiv.textContent = `Punktestand: ${punktestand}`;
}

nextBtn.addEventListener("click", () => {
  aktuelleFrage++;
  if (aktuelleFrage < quiz.length) {
    loadQuestion();
  } else {
    // Endstand berechnen
    const prozent = Math.round((punktestand / quiz.length) * 100);

    // Spielerische Nachricht
    let message = "";
    let color = "";
    if (prozent === 100) {
      message = "🎉 Scrum-Profi! Perfekte Punktzahl!";
      color = "green";
    } else if (prozent >= 80) {
      message = "😎 Sehr gut! Fast Profi!";
      color = "limegreen";
    } else if (prozent >= 50) {
      message = "🤓 Nicht schlecht, noch üben!";
      color = "orange";
    } else {
      message = "💪 Keine Sorge, üben, üben, üben!";
      color = "red";
    }

    // Quiz-Container anpassen
    quizContainer.innerHTML = `
      <p>Quiz beendet!</p>
      <p>Dein Endstand: ${punktestand} von ${quiz.length} (${prozent}%)</p>
      <p id="end-message" style="font-size: 20px; font-weight: bold; color:${color}">${message}</p>
    `;

    // Fortschrittsbalken animieren auf 100%
    progressBar.style.transition = "width 1s ease";
    progressBar.style.width = "100%";

    nextBtn.style.display = "none";
  }
});

// Start
loadQuestion();
updateScore();
