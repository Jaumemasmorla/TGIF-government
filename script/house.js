/* hacer el checkbox */

let houseMembersArray;

/* para dropdown import {string} from './holamundo.mjs'
console.log(string) y  (en el fichero donde esta la informacion) export const  string ="hola mundo"*/


const url ="https://api.propublica.org/congress/v1/116/house/members.json"

fetch(url, {
  method: "GET",
  headers: {"X-API-Key": "W3wR4MMI0tHX3mFZGHYJ7xvkmGn23WQBa3gOXqHm"}
})
.then(response => response.json()) 
.then(json => {
    houseMembersArray = json.results[0].members;
    buildTable(houseMembersArray);
    filteredTable();

}
     ); 

  document.getElementById('thead').innerHTML="";

  let headers = ['Name', 'Affiliation', 'State', 'Years', 'Votes to Party'];

  for (let i = 0; i < headers.length; i++){
    let headersRow = document.createElement('th');
    headersRow.textContent = headers[i];

    document.getElementById('thead').append(headersRow);
  }

  function buildTable(houseMembersArray){

    document.getElementById('tbody').innerHTML="";

    for(let i = 0; i < houseMembersArray.length; i++){

      let row = document.createElement('tr');

      let link = document.createElement('a');

      link.textContent = houseMembersArray[i].first_name + " " + (houseMembersArray[i].middle_name || "") + houseMembersArray[i].last_name;

      link.setAttribute('href',houseMembersArray[i].url);

      row.insertCell().append(link);

      row.insertCell().innerHTML = houseMembersArray[i].party;

      row.insertCell().innerHTML = houseMembersArray[i].state;

      row.insertCell().innerHTML = houseMembersArray[i].seniority;

      row.insertCell().innerHTML = houseMembersArray[i].votes_with_party_pct;

      document.getElementById('tbody').append(row);

    }

  };

  const parties = {
    D: 'Democrat',
    R: 'Republican',
    ID: 'Independent'
  };

  let entries = Object.entries(parties);

  

  let checkboxEntries = entries.map(([key, value]) => {
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('value', key);
    input.addEventListener("change", filteredTable);

    let label = document.createElement('label');
    label.innerHTML = value;
    document.getElementById('checkbox-container').appendChild(input);
    document.getElementById('checkbox-container').appendChild(label);
  } );
function filteredTable(){

  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

  if(checkboxes.length === 0){
     buildTable(houseMembersArray)
  }else{
    let selectedParties = Array.from(checkboxes).map((checkbox) => checkbox.value );
    let filteredMembers = houseMembersArray.filter((member) => selectedParties.includes(member.party));
    buildTable(filteredMembers);
  }

};

/*Hacer el dropdown*/