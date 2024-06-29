document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");

  hamburger.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});

const typewriter = new Typewriter("#typewriter", {
  autoStart: true,
  delay: 80,
  cursor: "",
  loop: true,
  deleteSpeed: 50,
});

typewriter
  .typeString("I'm a Learning Technologist")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Front-end developer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Power Platform app maker")
  .pauseFor(1000)
  .deleteAll()
  .typeString("UX UI designer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("from the United Kingdom.")
  .pauseFor(1000)
  .deleteAll()
  .start();
