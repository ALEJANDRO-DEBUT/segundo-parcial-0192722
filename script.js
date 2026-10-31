const enterButton = document.getElementById("enter-button");
const welcomeScreen = document.getElementById("welcome-screen");

enterButton.addEventListener("click", function () {
    welcomeScreen.classList.add("hide");
});