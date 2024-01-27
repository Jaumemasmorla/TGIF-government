
import { showSpinner, hideSpinner } from './spinner.mjs';

let membersArr;
let bottomAttendanceMembers;
let topAttendanceMembers;
 

const currentURL = window.location.href;
export const changeChamber = () => {

  if (currentURL.includes("house")) {
    const newH2 = document.createElement('h2');
    newH2.textContent = 'House at a Glance';
    document.getElementById('glance').appendChild(newH2);
  } else if (currentURL.includes("senate")) {
    const newH2 = document.createElement('h2');
    newH2.textContent = 'Senate at a Glance';
    document.getElementById('glance').appendChild(newH2);
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
  const bottomAttendanceMembers = membersArr.sort((a, b)=> a.missed_votes - b.missed_votes).slice(- 10);

  buildTable2(bottomAttendanceMembers);
  const topAttendanceMembers = membersArr.sort((a, b)=> b.missed_votes - a.missed_votes).slice( -10);

  buildTable3(topAttendanceMembers);
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

function calculateAverageVote(membersArr ) {
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
  row.insertCell().innerHTML= membersArr[i].missed_votes;
  row.insertCell().innerHTML = membersArr[i].missed_votes_pct + '%';
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
  row.insertCell().innerHTML= membersArr[i].missed_votes || 0;
  row.insertCell().innerHTML= (membersArr[i].missed_votes_pct !== null && membersArr[i].missed_votes_pct !== undefined) ?
  membersArr[i].missed_votes_pct + '%' : '0%';
  document.getElementById('tbody3').append(row);
}

};
