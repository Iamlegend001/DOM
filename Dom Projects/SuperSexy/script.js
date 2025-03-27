let allTeams = [
  { team: 'MI', primary: 'blue', secondary: 'gold' },
  { team: 'CSK', primary: 'yellow', secondary: 'blue' },
  { team: 'RCB', primary: 'red', secondary: 'black' },
  { team: 'KKR', primary: 'purple', secondary: 'gold' },
  { team: 'RR', primary: 'pink', secondary: 'blue' },
  { team: 'DC', primary: 'blue', secondary: 'red' },
  { team: 'SRH', primary: 'orange', secondary: 'black' },
  { team: 'PBKS', primary: 'red', secondary: 'gold' },
  { team: 'GT', primary: 'navy blue', secondary: 'gold' },
  { team: 'LSG', primary: 'light blue', secondary: 'orange' }
];

const btn = document.querySelector('button');
const resultDisplay = document.querySelector('h5');

btn.addEventListener('click', () => {
  let randomIndex = Math.floor(Math.random() * allTeams.length);
  let winner = allTeams[randomIndex];

  // Display the winning team name
  resultDisplay.textContent = `🏆 Winner: ${winner.team}`;

  // Apply team colors dynamically with a smooth transition
  resultDisplay.style.transition = 'background 0.5s, color 0.5s';
  resultDisplay.style.backgroundColor = winner.primary;
  resultDisplay.style.color = winner.secondary;

  // Add a glowing effect to highlight the result
  resultDisplay.style.boxShadow = `0 0 20px ${winner.secondary}`;
});
