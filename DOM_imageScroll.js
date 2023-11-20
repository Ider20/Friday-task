let scrollContainer = document.querySelector(".gallery_scroll");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
// console.log(nextBtn);

scrollContainer.addEventListener("click", (event) => {
  event.preventDefault();
  scrollContainer += event.deltaY;
});
nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 410;
});
backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 410;
});
