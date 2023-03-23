var typed = new Typed(".autotype", {
    strings: ["Full Stack Web Developer", "Backend Developer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
})


let theme = document.querySelector("#theme")

theme.addEventListener("change", () => {
    // alert("hii")
    document.body.classList.toggle("light")
})


let openResume = document.getElementById("resume-button-1");
    
    openResume.addEventListener("click", () => {
    window.open('https://drive.google.com/file/d/1usR-bK7wCMQwGnl-8lMzI2Y--QhHLcec/view?usp=share_link', '_blank'); 
    
   })