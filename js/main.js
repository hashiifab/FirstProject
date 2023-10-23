// Toggle and responsive navigation

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navlist = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // toggle nav list and burger clas
    navlist.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// hapus form stlah go back

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
