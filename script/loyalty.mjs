
import { showSpinner, hideSpinner } from './spinner.mjs';
let membersArr;
let bottomLoyaltyMembers;
let topLoyaltyMembers;

const currentURL = window.location.href;

export const changeChamber = () => {
  const glanceDiv = document.getElementById('glance');
  let h2Element = glanceDiv.querySelector('h2');

  if (!h2Element) {
    h2Element = document.createElement('h2');
    glanceDiv.appendChild(h2Element);
  }

  if (currentURL.includes("house")) {
    h2Element.textContent = 'House at a Glance';
  } else if (currentURL.includes("senate")) {
    h2Element.textContent = 'Senate at a Glance';

    // Hide "Congressmen" h1 on Senate pages
    let congressmenH1 = document.getElementById('container-title')?.querySelector('h1');
    if (congressmenH1) {
      congressmenH1.style.display = 'none';
    }
  }
}

changeChamber();

let  chamber = currentURL.includes('house') ? 'house' : 'senate';

showSpinner();

const url = `https://api.propublica.org/congress/v1/116/${chamber}/members.json`

fetch( url, {
  method: "GET",
  headers: {"X-API-Key": "W3wR4MMI0tHX3mFZGHYJ7xvkmGn23WQBa3gOXqHm"}
})
.then(response => response.json()) 
.then( json => {
    
    membersArr = json.results[0].members;
  buildTable1(membersArr);
  const bottomLoyaltyMembers = membersArr.sort((a, b)=> b.votes_with_party_pct - a.votes_with_party_pct).slice(- 10);

  buildTable2(bottomLoyaltyMembers);
  const topLoyaltyMembers = membersArr.sort((a, b)=> a.votes_with_party_pct - b.votes_with_party_pct).slice( -10);

  buildTable3(topLoyaltyMembers);

  hideSpinner();
   
});




function buildTable1(membersArr) {
  document.getElementById('tbody').innerHTML = '';

  const democrats = membersArr.filter(member => member.party === 'D');
  const republicans = membersArr.filter(member => member.party === 'R');
  const independents = membersArr.filter(member => member.party === 'ID');

  const democratVotes = calculateAverageVote(democrats, 'votes_with_party_pct');
  const republicanVotes = calculateAverageVote(republicans, 'votes_with_party_pct');
  const independentVotes = calculateAverageVote(independents, 'votes_with_party_pct');
  const average = (democratVotes + republicanVotes + independentVotes) / 3

  for (let i = 0; i < 4; i++) {
    let row = document.createElement('tr');

    if (i === 0) {
      row.insertCell().innerHTML = 'Democrats';
      row.insertCell().innerHTML = democrats.length;
      row.insertCell().innerHTML = democratVotes.toFixed(2) + '%';
    }
    if (i === 1) {
      row.insertCell().innerHTML = 'Republicans';
      row.insertCell().innerHTML = republicans.length;
      row.insertCell().innerHTML = republicanVotes.toFixed(2) + '%';
    }
    if (i === 2) {
      row.insertCell().innerHTML = 'Independents';
      row.insertCell().innerHTML = independents.length;
      row.insertCell().innerHTML = independentVotes.toFixed(2) + '%';
    }
    if (i === 3) {
      row.insertCell().innerHTML = 'Total';
      row.insertCell().innerHTML = democrats.length + republicans.length + independents.length;
      row.insertCell().innerHTML = average.toFixed(2) + '%';
    }
    document.getElementById('tbody').append(row);
  }

}

function calculateAverageVote(membersArr) {
  if (membersArr.length === 0) {
    return 0; 
  }

  let pctMembers =  membersArr
  .filter(vote=> vote["votes_with_party_pct"] != undefined)
  .map(vote => vote["votes_with_party_pct"])
  .reduce((accumulator, currentValue) => (accumulator + currentValue), 0) / membersArr.length;
 
  return parseFloat(pctMembers.toFixed(2));
}



function buildTable2(membersArr){
document.getElementById('tbody2').innerHTML='';
for(let i = 0; i < membersArr.length; i++){
  let row = document.createElement('tr');
  let link = document.createElement("a");
  link.textContent = membersArr[i].first_name + " " + (membersArr[i].middle_name || "") + " " + membersArr[i].last_name;

  link.setAttribute("href", membersArr[i].url);
  row.insertCell().append(link);
  row.insertCell().innerHTML= membersArr[i].total_votes;
  row.insertCell().innerHTML = membersArr[i].votes_with_party_pct + '%';
  document.getElementById('tbody2').append(row);
}

};


function buildTable3(membersArr){
document.getElementById('tbody3').innerHTML='';
for(let i = 0; i < membersArr.length; i++){
  let row = document.createElement('tr');
  let link = document.createElement("a");
  link.textContent = membersArr[i].first_name + " " + (membersArr[i].middle_name || "") + " " + membersArr[i].last_name;

  link.setAttribute("href", membersArr[i].url);
  row.insertCell().append(link);
  row.insertCell().innerHTML= membersArr[i].total_votes;
  row.insertCell().innerHTML = membersArr[i].votes_with_party_pct + '%';
  document.getElementById('tbody3').append(row);
}
};
