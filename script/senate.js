

const url ="https://api.propublica.org/congress/v1/116/senate/members.json"

fetch(url, {
  method: "GET",
  headers: {"X-API-Key": "W3wR4MMI0tHX3mFZGHYJ7xvkmGn23WQBa3gOXqHm"}
})
.then(response => response.json()) 
.then(json => {
    const  members = json.results[0].members;
    console.log(members)
}
    
    ); 




/*create table*/

let table = document.createElement('table');

/*make the headers of the colums*/

let headersName = ['Senator Name', 'Affiliation', 'State', 'Years', 'Votes to Party'];
for (let i = 0; i < headersName.length; i++) {
    let headers = document.createElement('th');
    headers.textContent = headersName[i];
    table.appendChild(headers);
}

/* make the rows*/

for (i = 0; i < members.length; i++){



   
let row = document.createElement('tr');

/*make the cells*/

    let senatorName = document.createElement('td');
    senatorName.textContent = members[i].first_name + ' ' + members[i].last_name;
    
    let affiliation = document.createElement('td');
    affiliation.textContent = members[i].party;
    
    let state = document.createElement('td');
    state.textContent = memebers[i].state;
    
    let years = document.createElement('td');
    years.textContent = members[i].seniority;
    
    let votesToParty = document.createElement('td');
    votesToParty.textContent = members[i].votes_with_party_pct;

    row.appendChild(senatorName);
    row.appendChild(affiliation);
    row.appendChild(state);
    row.appendChild(years);
    row.appendChild(votesToParty);



table.appendChild(row);

}
console.log(document.body.appendChild(table));



  



  

  