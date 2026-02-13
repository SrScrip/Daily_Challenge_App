const challenges = [
  "Write 10 lines of code",
  "Go for a 10-minute walk",
  "Drink 2 glasses of water",
  "Read 5 pages of a book",
  "Practice typing for 5 minutes",
  "Refactor one small piece of code",
  "Learn one new keyboard shortcut",
  "Write down one thing you learned today",
  "Stretch for 5 minutes",
  "Push one small commit to GitHub"
];

const challengeEl = document.getElementById("challenge");
const dateEl = document.getElementById("date");
const streakEl = document.getElementById("streak");
const completeBtn = document.getElementById("completeBtn");

const today = new Date().toDateString();
dateEl.textContent = today;

// Load saved data
let savedDate = localStorage.getItem("date");
let savedChallenge = localStorage.getItem("challenge");
let streak = parseInt(localStorage.getItem("streak")) || 0;
let completed = localStorage.getItem("completed") === "true";

// New day logic
if (savedDate !== today) {
  const randomChallenge =
    challenges[Math.floor(Math.random() * challenges.length)];

  localStorage.setItem("date", today);
  localStorage.setItem("challenge", randomChallenge);
  localStorage.setItem("completed", "false");

  // Reset completion state
  completed = false;
}

// Update UI
challengeEl.textContent = localStorage.getItem("challenge");
streakEl.textContent = streak;

if (completed) {
  completeBtn.disabled = true;
  completeBtn.textContent = "🎉 Completed!";
}

completeBtn.addEventListener("click", () => {
  if (!completed) {
    completed = true;
    streak += 1;

    localStorage.setItem("streak", streak.toString());
    localStorage.setItem("completed", "true");

    streakEl.textContent = streak;
    completeBtn.disabled = true;
    completeBtn.textContent = "🎉 Completed!";
  }
});
