// const toggleBtn = document.querySelectorAll(".btn");

// toggleBtn.forEach((b) => {
//   b.addEventListener("click", (event) => {
//     const question = event.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show")
//   });
// });

// selector inside the element itself

const questionArray = document.querySelectorAll(".question");

questionArray.forEach((qsn) => {
  const toggleBtn = qsn.querySelector(".btn");
  toggleBtn.addEventListener("click", () => {
    questionArray.forEach((item) => {
      if (item === qsn) {
        item.classList.toggle("show");
      }
    });
  });
});
