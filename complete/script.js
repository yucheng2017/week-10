
var addItemButton = document.getElementById("add-item");
var addListButton = document.getElementById("add-list");

var addListPopupDiv = document.getElementById("add-list-popup");
var addItemPopupDiv = document.getElementById("add-item-popup");

addListButton.addEventListener("click", function() {
  addListPopupDiv.style.display = "flex";
});

var closeButton = document.querySelectorAll(".close");
closeButton.forEach(function(button, i) {

  button.addEventListener("click", function() {
    addListPopupDiv.style.display = "none";
    addItemPopupDiv.style.display = "none";
  });

});
