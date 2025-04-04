let btn = document.querySelector("button");
let main = document.querySelector("#main");

const imgSrc = [
  "https://cdni.pornpics.com/1280/7/693/77398390/77398390_002_83a5.jpg",
  "https://cdni.pornpics.com/1280/7/662/55388835/55388835_001_4eb5.jpg",
  "https://cdni.pornpics.com/1280/7/92/41182123/41182123_036_cfbf.jpg",
  "https://cdni.pornpics.com/1280/7/774/21279735/21279735_011_9e5b.jpg",
  "https://cdni.pornpics.com/1280/7/733/21274881/21274881_009_39c1.jpg",
  "https://cdni.pornpics.com/1280/7/715/54968756/54968756_001_a5bc.jpg",
];

btn.addEventListener("click", () => {
  const imgSize = 100;
  const maxX = main.clientWidth - imgSize;
  const maxY = main.clientHeight - imgSize;

  let random = Math.floor(Math.random() * imgSrc.length);
  const src = imgSrc[random];
  let img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", "Random Image");
  let x = Math.random() * maxX;
  let y = Math.random() * maxY;
  let rot = Math.random() * 360;
  Object.assign(img.style, {
    width: imgSize + "px",
    height: imgSize + "px",
    position: "absolute",
    left: x + "px",
    top: y + "px",
    transform: `rotate(${rot}deg)`,
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
  });
  main.appendChild(img);
});
