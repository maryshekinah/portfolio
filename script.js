const image = document.querySelector(".image")

image.addEventListener("mouseover", function() {
  image.style.transform = "scale(1.1)";
  image.style.transition = "transform 0.3s ease";
});

image.addEventListener("mouseout", function() {
  image.style.transform = "scale(1)";
  image.style.transition = "transform 0.3s ease";
});

