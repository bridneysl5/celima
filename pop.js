var Alert = new CustomAlert();

function CustomAlert() {
  this.render = function () {
    //Show Modal
    let popUpBox = document.getElementById("popUpBox");
    popUpBox.style.display = "block";
    //Close Modal
    document.getElementById("closeModal").innerHTML =
      '<button onclick="Alert.ok()">cerrar</button>';
  };

  this.ok = function () {
    document.getElementById("popUpBox").style.display = "none";
    document.getElementById("popUpOverlay").style.display = "none";
  };
}

// baño

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
