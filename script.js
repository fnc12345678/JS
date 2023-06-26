function toggleCategory(category) {
  var categoryDivider = document.getElementById(category);
  categoryDivider.classList.toggle("open");

  var lessons = document.getElementsByClassName(category);
  for (var i = 0; i < lessons.length; i++) {
    lessons[i].classList.toggle("open");
  }
}

function toggleAnswer(questionNumber) {
  const answer = document.getElementById(`answer${questionNumber}`);
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}

