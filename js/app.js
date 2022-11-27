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

// Contact
function validate(event) {
  const form = document.forms["contact"];

  if (form[0].value != "" && form[0].value.length < 10) {
    alert("Fejl");
  }
}
