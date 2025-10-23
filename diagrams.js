const diagrams = [
  "images/diagrams/diagram1.jpg",
  "images/diagrams/diagram2.jpg",
  "images/diagrams/diagram3.jpg",
  "images/diagrams/diagram4.jpg"
];

let currentDiagram = 0;
const diagramImg = document.getElementById("diagram-image");

diagramImg.addEventListener("click", () => {
  currentDiagram++;

  if (currentDiagram < diagrams.length) {
    // Show next diagram
    diagramImg.src = diagrams[currentDiagram];
  } else {
    // Redirect after last image
    window.location.href = "index.html"; // <-- change to your landing page filename
  }
});
