document.getElementById("header").innerHTML = "Hello JavaScript!";
let paragraph = document.createElement("p");
paragraph.textContent = "This is our first element created with JavaScript.";
document.body.appendChild(paragraph);
paragraph.style.color = "blue";

const container = document.createElement("div");
document.body.appendChild(container);

container.id = "myDiv";
container.className = "box";

const secondParagraph = document.createElement("p");
secondParagraph.textContent = "This is the second paragraph.";
secondParagraph.style.color = "green";

container.appendChild(secondParagraph);

const text = document.querySelectorAll(".text");
text.forEach((element) => {
  element.style.color = "red";
});

console.log(text);

const button = document.querySelector(".btn");

button.onclick = function () {
  alert("Button clicked!");
  paragraph.textContent = "Button was clicked!";
};

const secondButton = document.querySelector(".second-btn");
secondButton.addEventListener("click", function () {
  alert("secondButton clicked!");
  secondParagraph.textContent = "Button was clicked!";
});
