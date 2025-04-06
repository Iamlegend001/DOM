const people = [
  {
    name: "Aarav Mehta",
    age: 28,
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    profession: "Software Engineer",
    location: "Bangalore",
    status: "Stranger"
  },
  {
    name: "Priya Sharma",
    age: 24,
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    profession: "Graphic Designer",
    location: "Mumbai",
    status: "Stranger"
  },
  {
    name: "Kabir Rao",
    age: 31,
    img: "https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    profession: "Doctor",
    location: "Delhi",
    status: "Stranger"
  },
  {
    name: "Sneha Patel",
    age: 27,
    img: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    profession: "Marketing Specialist",
    location: "Ahmedabad",
    status: "Stranger"
  },
  {
    name: "Ishaan Verma",
    age: 30,
    img: "https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    profession: "UX Designer",
    location: "Chennai",
    status: "Stranger"
  },
  {
    name: "Ritika Joshi",
    age: 26,
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3",
    profession: "Product Manager",
    location: "Pune",
    status: "Stranger"
  },
  {
    name: "Arjun Das",
    age: 29,
    img: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3",
    profession: "Data Scientist",
    location: "Hyderabad",
    status: "Stranger"
  },
  {
    name: "Neha Kapoor",
    age: 25,
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
    profession: "Content Writer",
    location: "Kolkata",
    status: "Stranger"
  },
  {
    name: "Rohan Singh",
    age: 32,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
    profession: "Civil Engineer",
    location: "Lucknow",
    status: "Stranger"
  },
  {
    name: "Tanya Desai",
    age: 23,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    profession: "Student",
    location: "Jaipur",
    status: "Stranger"
  }
];


const main = document.getElementById('main');

function herFunction() {
  let content = ""; // Clear content each time

  people.forEach((person, idx) => {
    content += `
      <div class="card">
        <div class="img">
          <img src="${person.img}" alt="${person.name}" />
        </div>
        <div class="name">
          <h1>${person.name}</h1>
          <p>${person.profession}</p>
        </div>
        <div class="para">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="loc">${person.location}</div>
        <h3>${person.status}</h3>
        <button id="${idx}">Add friend</button>
      </div>
    `;
  });

  main.innerHTML = content;
}

herFunction();

main.addEventListener("click", function (dets) {
  if (dets.target.tagName === "BUTTON") {
    let person = people[dets.target.id];
    if(person.status == "Stranger"){
      person.status = 'Friends'

    }else{
      person.status = "Stranger";
    }
    setTimeout(()=>{
      herFunction()
    },1000)
  }
});
