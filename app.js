// traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// const qtn = document.querySelectorAll(".question-text");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log(e.currentTarget.parentElement.parentElement);
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });

//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (question !== item) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
