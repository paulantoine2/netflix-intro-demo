const btn = document.getElementById("enter-btn");
const body = document.getElementsByTagName("body")[0];

btn.onclick = () => {
  const tudum = new Audio("./tudum.mp3");
  tudum.play();

  body.classList.add("run");
  setTimeout(() => {
    body.classList.add("done");
  }, 1000);
};
