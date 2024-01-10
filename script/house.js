const url ="https://api.propublica.org/congress/v1/116/house/members.json"

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