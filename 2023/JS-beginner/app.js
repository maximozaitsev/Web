// alert("1");
// confirm("What is your name?");

const heading = document.getElementById("hello");
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector("#sub-hello"); // всегда 1 элемент
console.dir(heading.textContent);

const h2List = document.querySelectorAll("h2");
const heading3 = h2List[h2List.length - 1];

setTimeout(() => {
  addStylesTo(heading, "JavaScript");
}, 1500);

setTimeout(() => {
  addStylesTo(heading3, "Практикуйся", "white");
}, 3000);

setTimeout(() => {
  addStylesTo(heading2, "и всё получится!", "blue");
}, 4500);

function addStylesTo(node, text, color = "red") {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = "black";
  node.style.padding = "2rem";
}
