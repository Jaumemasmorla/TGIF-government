const titleH1 = document.getElementById("description").innerHTML = "WORLD COUNTRIES LIST";
document.getElementById("description").style.marginLeft = "300px";
document.getElementById("description").style.fontSize = "45px";
document.getElementById("description").style.fontFamily = "math";

const numOfCountries = document.getElementById("info").innerHTML = "Total number of countries 193";
document.getElementById("info").style.marginLeft = "510px";
document.getElementById("info").style.fontSize = "15px";
document.getElementById("info").style.fontFamily = "math";
document.getElementById("info").style.fontWeight = "bold";
/*
const countryNames =   
["Afghanistan",
"Albania",
"Algeria",
"Andorra",
"Angola",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bhutan",
"Bolivia",
"Bosnia and Herzegovina",
"Botswana",
"Brazil",
"Brunei",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cabo Verde",
"Cambodia",
"Cameroon",
"Canada",
"Central African Republic",
"Chad",
"Chile",
"China",
"Colombia",
"Comoros",
"Congo ",
"Costa Rica",
"Croatia",
"Cuba",
"Cyprus",
"Czechia",
"Democratic Republic of the Congo",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"East Timor",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Eswatini",
"Ethiopia",
"Fiji",
"Finland",
"France",
"Gabon",
"Gambia",
"Georgia",
"Germany",
"Ghana",
"Greece",
"Grenada",
"Guatemala",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Honduras",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran",
"Iraq",
"Ireland",
"Israel",
"Italy",
"Ivory Coast",
"Jamaica",
"Japan",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Mauritania",
"Mauritius",
"Mexico",
"Micronesia",
"Moldova",
"Monaco",
"Mongolia",
"Montenegro",
"Morocco",
"Mozambique",
"Myanmar (Burma)",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"North Korea",
"North Macedonia",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Poland",
"Portugal",
"Qatar",
"Romania",
"Russia",
"Rwanda",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Korea",
"South Sudan",
"Spain",
"Sri Lanka",
"Sudan",
"Suriname",
"Sweden",
"Switzerland",
"Syria",
"Taiwan",
"Tajikistan",
"Tanzania",
"Thailand",
"Togo",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Vatican City",
"Venezuela",
"Vietnam",
"Yemen",
"Zambia",
"Zimbabwe"
];
*/
/*
let matrix = [];
const container =document.getElementById("container");
for(let i=0; i<countryNames.length; i++){
  const div  = document.createElement("div");
  div.innerHTML=countryNames[i];
  container.appendChild(div)
}

*/


let table = document.createElement('table');
      
// styling     
table.style.textAlign = 'center';
table.style.padding = '2px';
table.style.width = '50%';
table.style.marginLeft = '25%'
table.style.marginRight = '25%'
table.style.fontSize = '7px';
table.style.fontWeight = '400';
table.style.letterSpacing = '1px'
let countryCount = 0;
/*
while(countryCount<countries.length){
    //aqui for loop
    countryCount++;
}
*/

for(let j = 0;j < countries.length;j++){
    let row = document.createElement('tr');
    
    for(let i=0; i<6; i++) {
      
      let data = document.createElement('td');
      
      data.textContent = countries[j].toUpperCase();
      
      data.style.paddingTop = '30px';
      data.style.paddingBottom = '30px';
      data.style.margin = '2px';
      data.style.border = '1px #eeeef3 solid';
      
      row.appendChild(data);
     
    }
    table.appendChild(row);
  }

  
  document.body.appendChild(table);

  console.log(document.querySelectorAll("td"),'data')