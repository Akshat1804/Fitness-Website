const log = document.querySelector(".log");
const login  = document.querySelector(".login");
const logz = document.querySelector(".logz");
const welcome = document.querySelector(".welc");
const conti = document.querySelector(".conti");
const navright = document.querySelector(".navright");
const user = document.querySelector(".user");
const sign = document.querySelector(".sign");
log.addEventListener("click", (e) => {
  login.style.display = "initial";
});


logz.addEventListener("click", (e) => {
    e.preventDefault();
    login.style.display = "none";
    welcome.style.display = "initial";
})

conti.addEventListener("click", (e) => {
  log.style.display = "none";
  sign.style.display = "none";
   welcome.style.display = "none";
   user.style.display = "initial";
})