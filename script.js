const bass = document.querySelector("#bass");

window.addEventListener("scroll", () => {
  console.log(document.querySelector("#bass").getBoundingClientRect().top);
  if (
    bass.getBoundingClientRect().top <=
    document.documentElement.getBoundingClientRect().height / 2
  ) {
    bass.classList.add("in-view");
  } else {
    bass.classList.remove("in-view");
  }
});
