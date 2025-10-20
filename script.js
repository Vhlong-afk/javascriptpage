function upDate(previewPic) {
  console.log("Hover event triggered for:", previewPic.alt);

  
  let imageDiv = document.getElementById("image");

  
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

  
  imageDiv.innerHTML = previewPic.alt;
}

function undo() {
  let imageDiv = document.getElementById("image");

  
  imageDiv.style.backgroundImage = "url('')";

  
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
