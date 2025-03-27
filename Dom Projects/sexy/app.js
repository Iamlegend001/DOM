// let btn = document.querySelector('button')
// let box = document.querySelector('#box')
// let body = document.querySelector('body')


// btn.addEventListener('click',()=>{
//   var c1 = Math.floor(Math.random()*256)
//   var c2 = Math.floor(Math.random()*256)
//   var c3 = Math.floor(Math.random()*256)

//   box.style.backgroundColor =`rgb(${c1},${c2},${c3})`
//   box.style.border =`4px solid rgb(${c2},${c1},${c3})`
//   body.style.backgroundColor =`rgb(${c1},${c3},${c2})`
// })

// const randomWords = [
//   "apple", "banana", "orange", "grape", "mango", "kiwi", "pineapple", "lemon", "peach", "plum",
//   "car", "bottle", "cloud", "river", "mountain", "forest", "phone", "laptop", "chair", "table",
//   "ocean", "planet", "star", "guitar", "painter", "light", "shadow", "window", "sunset", "bridge"
// ];

// let num = Math.floor(Math.random()*randomWords.length);

// console.log(num)



var arr =[
  {
    team:'CSK',
    primary:'yellow',
    secondary:'blue'
  },
  {
    team:'MI',
    primary:'blue',
    secondary:'gold'
  },
  {
    team:'KKR',
    primary:'purple',
    secondary:'gold'
  },
  {
    team:'SRH',
    primary:'orange',
    secondary:'gold'
  }
]


let btn = document.querySelector('button')
let h1 = document.querySelector('h1')
btn.addEventListener('click',()=>{
  let num = Math.floor(Math.random()*arr.length)

  let winner = arr[num]
  h1.innerHTML = winner.team;
  h1.style.color =winner.secondary


})