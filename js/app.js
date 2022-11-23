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
