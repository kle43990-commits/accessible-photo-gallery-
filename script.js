function addTabFocus() {
  console.log("Page loaded: Running addTabFocus() function...");

  var images = document.getElementsByClassName("preview");

  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Added tabindex='0' to image " + (i + 1));
  }
}

function upDate(previewPic) {
  console.log("Event triggered: upDate()");
  console.log("Alt Text:", previewPic.alt);
  console.log("Image Source:", previewPic.src);

  var imageDiv = document.getElementById("image");

  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("Event triggered: unDo()");

  var imageDiv = document.getElementById("image");

  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over or focus on an image below to display here.";
}
