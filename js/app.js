//Gallery
let large = document.getElementById("large");
let small = document.getElementsByClassName("small");

for (let index = 0; index < small.length; index++) {
  small[index].addEventListener("click", (event) => {
    console.log(large.src);

    console.log(event.target.src);

    large.src = event.target.src;
  });
}
// Accordion
const btns = document.querySelectorAll(".faq-list button");

for (let index = 0; index < btns.length; index++) {
  btns[index].addEventListener("click", (e) => {
    let div = e.target.parentNode.parentNode;
    div.classList.toggle("active");
  });
}

// Validating 1
/*
function validate(event) {
  const form = document.forms["contact"];

  if (form[0].value === "") {
    alert("Fejl");
  }
}
*/
// Validating 2
const contactForm = document.forms["contact"];

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = contactForm["contactName"];
  const inputSubject = contactForm["contactSubject"];
  const inputEmail = contactForm["contactEmail"];
  const inputText = contactForm["contactText"];

  if (inputName.value != "" && inputName.value.length > 3) {
    inputName.classList.remove("error");
    inputName.classList.add("valid");
  } else {
    inputName.classList.add("error");
    inputName.classList.remove("valid");
  }

  if (inputSubject.value != "" && inputSubject.value.length > 3) {
    inputSubject.classList.remove("error");
    inputSubject.classList.add("valid");
  } else {
    inputSubject.classList.add("error");
    inputSubject.classList.remove("valid");
  }

  if (
    inputEmail.value != "" &&
    inputEmail.value.length > 3 &&
    inputEmail.value.includes("@")
  ) {
    inputEmail.classList.remove("error");
    inputEmail.classList.add("valid");
  } else {
    inputEmail.classList.add("error");
    inputEmail.classList.remove("valid");
  }
});
