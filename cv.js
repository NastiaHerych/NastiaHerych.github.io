function toggleElem(id, button) {
  let x = document.getElementById(id);
  let y = document.getElementById(button);
  if (x.style.display === "none") {
    x.style.display = "block";
    y.textContent = "Click to hide";
  } else {
    x.style.display = "none";
    y.textContent = "Click to show";
  }
}

function changePhoto() {
  document.getElementById("photo").src = "cv_herych_photo.jpg";
  document.getElementById("photo").alt = this.title = "Photo1";
}

function changePhoto2() {
  document.getElementById("photo").src = "photo2.jpg";
  document.getElementById("photo").alt = this.title = "Photo2";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let circle = document.getElementsByClassName("circle");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circle.length; i++) {
    circle[i].className = circle[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  circle[slideIndex - 1].className += " active";
}
