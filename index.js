// Function to add event listener to buttons

let drums = document.querySelectorAll(".drum").length

for(let i = 0; i < drums; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function (){
alert("Greetings from Zamunda!");
});
}