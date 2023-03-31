//btn form
function sendForm() {
    document.getElementById("myForm").submit();
}

//modal
var imgWelcome = document.querySelector("#imgWelcome");
var modal = document.querySelector("#meu-modal");
var closeBtn = document.querySelector(".close");

imgWelcome.addEventListener("click", function() {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});