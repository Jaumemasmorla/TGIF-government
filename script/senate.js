import {states} from './states.mjs';
let membersArr;
let filteredMembers;

const url ="https://api.propublica.org/congress/v1/116/senate/members.json";

fetch(url, {
  method: "GET",
  headers: {"X-API-Key": "W3wR4MMI0tHX3mFZGHYJ7xvkmGn23WQBa3gOXqHm"}
})
.then(response => response.json()) 
.then(json => {
    membersArr = json.results[0].members;
   
    buildTable(membersArr)
    filteredTable();

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


/*  checkbox */

const parties = {
    D: 'Democrat',
    R: 'Republican',
    ID: 'Independent'
  }


    let entries = Object.entries(parties);

    let checkboxEntries = entries.map(([key, value]) => {
      let input = document.createElement("input")
      
      input.setAttribute("type", "checkbox");
      input.setAttribute("value", key);
      input.addEventListener("change", filteredTable)
    
      let label = document.createElement("label");
      label.innerHTML = value;
      document.getElementById("checkbox-container").appendChild(input);
      document.getElementById("checkbox-container").appendChild(label);
    })
 
  function filteredTable() {
    let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
    if(checkboxes.length === 0 && dropdown.value === ''){
      buildTable(membersArr);
    }else {
      let selectedParties = Array.from(checkboxes).map((checkbox) => checkbox.value);
      let filteredMembers = membersArr.filter((member) => {
        return (
          (selectedParties.length === 0 || selectedParties.includes(member.party)) &&
          (dropdown.value === '' || dropdown.value.includes(member.state ))
        )
      });
      buildTable(filteredMembers);/*cambiar el filtro de esta funcion para que coja tambien el dropdown?*/
    }
    
  };
  
  /* Dropdown*/
  
let dropdown = document.createElement('select');

let dropdownDefaultOption = document.createElement('option');
dropdownDefaultOption.text = 'All states';
dropdownDefaultOption.value = '';
dropdown.appendChild(dropdownDefaultOption);

let dropdownEntries = Object.values(states);

dropdownEntries.forEach(value =>{
  let dropdownOption = document.createElement('option');
  
  dropdownOption.text = value;
  dropdownOption.value = value;
  dropdown.addEventListener('change', filteredTable);
  dropdown.appendChild(dropdownOption);
}
 
);

document.getElementById('dropdown-container').appendChild(dropdown);









  

  