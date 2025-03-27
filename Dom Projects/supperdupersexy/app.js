let btn = document.querySelector("button");
let per = document.querySelector("#percent");
let gr = document.querySelector("#growth");

let grow = 0;

btn.addEventListener("click", () => {
  if (grow < 100) {
    let random = Math.floor(Math.random() * 4000) + 2000;  // Random duration between 2s - 6s
    let rand = Math.floor(Math.random() * 50) + 20;        // Random interval speed between 20ms - 70ms

    btn.innerHTML = "Downloading...";
    btn.style.opacity = 1;

    let int = setInterval(() => {
      if (grow < 100) {
        console.log(grow);
        grow++;
        per.innerHTML = grow + "%";
        gr.style.width = grow + "%";
      } else {
        clearInterval(int);
      }
    }, rand);

    setTimeout(() => {
      clearInterval(int);
      btn.innerHTML = "Download";
      btn.style.opacity = 0.7;
      grow = 0;  // Reset the progress
      per.innerHTML = "0%";
      gr.style.width = "0%";
    }, random);
  }
});
