const hamburger = document.getElementById("hamburger"); // SELECTS THE ELEMENT WITH ID "hamburger"
const navList = document.getElementById("nav-list"); // SELECTS THE ELEMENT WITH ID "nav-list"

// ADDS A CLICK EVENT LISTENER TO THE HAMBURGER ELEMENT
hamburger.addEventListener("click", () => {
  navList.classList.toggle("active"); // TOGGLES THE "active" CLASS ON THE NAVLIST ELEMENT TO OPEN/CLOSE THE NAVIGATION MENU
  hamburger.classList.toggle("active"); // TOGGLES THE "active" CLASS ON THE HAMBURGER ELEMENT TO CHANGE ITS APPEARANCE
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
  .typeString("Web accessibility advocate")
  .pauseFor(1000)
  .deleteAll()
  .typeString("From the United Kingdom.")
  .pauseFor(1000)
  .deleteAll()
  .start();
