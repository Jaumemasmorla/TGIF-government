/* hacer el checkbox */

const parties = {
  D: 'Democrat',
  R: 'Republican',
  ID: 'Independent'
}

/* para dropdown import {string} from './holamundo.mjs'
console.log(string) y  (en el fichero donde esta la informacion) export const  string ="hola mundo"*/


const url ="https://api.propublica.org/congress/v1/116/house/members.json"

fetch(url, {
  method: "GET",
  headers: {"X-API-Key": "W3wR4MMI0tHX3mFZGHYJ7xvkmGn23WQBa3gOXqHm"}
})
.then(response => response.json()) 
.then(json => {
    const  houseMembersArray = json.results[0].members;
    buildTable(houseMembersArray)
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

  }