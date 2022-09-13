const toggleBtn = document.querySelectorAll(".btn");

toggleBtn.forEach((b) => {
  b.addEventListener("click", (event) => {
    const question = event.currentTarget.parentElement.parentElement;
    question.classList.toggle("show")
  });
});




// selector inside the element itself