let rating = ["Terrible", "Medicore", "Average", "Solid", "Fantastic"];
let color = ["red", "orange", "#d88c04", "#d9f00f", "#f8f84c"];
let p = document.querySelector("p");
let icon = document.querySelectorAll("i");
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("mouseenter", () => {
    p.innerHTML = rating[i];
    for (let j = 0; j <= i; j++) {
      icon[j].classList.remove("fa-star-o");
      icon[j].classList.add("fa-star");
      icon[j].style.color = color[i];
    }
    for (let j = i + 1; j < icon.length; j++) {
      icon[j].classList.add("fa-star-o");
      icon[j].classList.remove("fa-star");
      icon[j].style.color = "black";
      icon[j].classList.remove("done");
    }
  });
}
