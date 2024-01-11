/* hacer el checkbox */

const parties = {
    D: 'Democrat',
    R: 'Republican',
    ID: 'Independent'
  }



/* para dropdown import {string} from './holamundo.mjs'
console.log(string) y  (en el fichero donde esta la informacion) export const  string ="hola mundo"*/

const url ="https://api.propublica.org/congress/v1/116/senate/members.json";

fetch(url, {
  method: "GET",
  headers: {"X-API-Key": "W3wR4MMI0tHX3mFZGHYJ7xvkmGn23WQBa3gOXqHm"}
})
.then(response => response.json()) 
.then(json => {
    const  membersArr = json.results[0].members;
    buildTable(membersArr)
    
}
    
); 

document.getElementById("thead").innerHTML ="";

let headers = ['Name', 'Affiliation', 'State', 'Years', 'Votes to Party'];

for (let i = 0; i < headers.length; i++){
   let headersRow = document.createElement('th');
    headersRow.textContent = headers[i];
    document.getElementById("thead").append(headersRow);
}



function buildTable(membersArr){


document.getElementById("tbody").innerHTML = "";
for (let i = 0; i < membersArr.length; i++){

let row = document.createElement('tr');

let link = document.createElement("a");

link.textContent = membersArr[i].first_name + " " + (membersArr[i].middle_name || "") + " " + membersArr[i].last_name;

link.setAttribute("href", membersArr[i].url)

row.insertCell().append(link);

row.insertCell().innerHTML = membersArr[i].party;

row.insertCell().innerHTML = membersArr[i].state;

row.insertCell().innerHTML = membersArr[i].seniority;

row.insertCell().innerHTML = membersArr[i].votes_with_party_pct;

document.getElementById("tbody").append(row);

}
}







  



  

  