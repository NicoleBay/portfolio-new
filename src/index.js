const typewriter = new Typewriter("#typewriter", {
  autoStart: true,
  delay: 80,
  cursor: "",
  loop: true,
  deleteSpeed: 50,
});

typewriter
  .typeString("Learning Technologist")
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
  .typeString("From the United Kingdom")
  .pauseFor(1000)
  .deleteAll()
  .start();
