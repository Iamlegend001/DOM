let h = document.querySelector('h5');
let button = document.querySelector('button');

let flag =0

button.addEventListener('click',()=>{
  if(flag ==0){
    h.innerHTML = 'You are a friend now';
  h.style.color = 'green'
  button.innerHTML ='Friend'
  flag =1
  }
  else{
    h.innerHTML = 'You are a friend now';
  h.style.color = 'red'
  button.innerHTML ='Not a frined'
  flag =0
  }
})