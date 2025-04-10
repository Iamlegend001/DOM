document.addEventListener('DOMContentLoaded',()=>{
  const darkBtn = document.querySelector(".Dark");
  const lightBtn = document.querySelector(".Light");


  darkBtn.addEventListener("click",()=>{
    document.body.classList.add("dark-mode")
  })
  lightBtn.addEventListener("click",()=>{
    document.body.classList.remove("dark-mode")
  })
})