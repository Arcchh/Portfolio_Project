let moveArrowLeft = document.querySelectorAll(".left");
let moveArrowRight = document.querySelectorAll(".right");
let projectContainerDivP1 = document.querySelectorAll(".projectContainerDiv1");

moveArrowRight.style.display = "none";

moveArrowRight.onclick = function() {
  projectContainerDivP1.forEach(function(item) {
    item.style.display = "none";
  })
}