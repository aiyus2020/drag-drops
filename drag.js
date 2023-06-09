let dragList = document.getElementsByClassName("drag-list");
let rightContainer = document.getElementsByClassName("right-container")[0];
let leftContainer = document.getElementsByClassName("left-container")[0];

for (let list of dragList) {
  list.addEventListener("dragstart", function (e) {
    let selects = e.target;
    rightContainer.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightContainer.addEventListener("drop", (e) => {
      if (selects) {
        rightContainer.appendChild(selects);
        selects.querySelector(".checked").style.display = "block"; // Show the checked icon
        selects = null;
      }
    });
    leftContainer.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftContainer.addEventListener("drop", (e) => {
      if (selects) {
        leftContainer.appendChild(selects);
        selects.querySelector(".checked").style.display = "block"; // Show the checked icon

        selects = null;
      }
    });
  });
}
let resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function () {
  // Reset the containers and hide the checked icons
  let items = document.getElementsByClassName("drag-list");
  for (let item of items) {
    item.style.display = "flex"; // Show the items
    let checkIcon = item.querySelector(".checked");
    if (checkIcon) {
      checkIcon.style.display = "none"; // Hide the checked icons
    }
    leftContainer.appendChild(item); // Move items back to the right container
  }
});
