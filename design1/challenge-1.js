
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[new Date().getMonth()];
    const days = new Date().getDate();
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    
    const dateFormat = document.getElementById("date-format").innerHTML = `${month} ${days}, ${year} ${hours}:${minutes}:${seconds}`;
    document.getElementById("date-format").style.marginLeft = "350px";
    document.getElementById("date-format").style.marginTop = "200px";
    document.getElementById("date-format").style.marginRight = "440px";
    let  i = 0;
  //help function 
   const generateRandomColor=()=>{
     const letters = "0123456789ABCDEF";
     let colors ="#";
     for(let i = 0;i<6;i++){
      colors+=letters[Math.floor(Math.random()*16)]
     }
     return colors;
   }
   const changeBackground = () =>{
    
    const dateFormat=document.getElementById('date-format');
    const newColour = generateRandomColor();
    dateFormat.style.backgroundColor= newColour;
   }
    
  setInterval(changeBackground,1000)
    
 
    

    const colorCube = document.getElementById("cube");
    colorCube.style.margin = "200px";
    colorCube.style.marginTop = "20px"
    
    const firstElement = document.getElementById("first-element");
    firstElement.style.backgroundColor = "#4bd94b";
    firstElement.style.width = "500px";
    firstElement.style.height = "40px";
    firstElement.style.borderBottom = '2px solid white';
    firstElement.querySelector("p").style.margin = '0';
    firstElement.querySelector("p").style.paddingTop = '10px';
    firstElement.querySelector("p").textContent = "30DaysOf Python Challenge";
    firstElement.querySelector("p").style.fontSize = "12px";
    firstElement.querySelector("p").style.marginInlineStart = "10px";
    

    const secondElement = document.getElementById("second-element");
    secondElement.style.backgroundColor = "#e8ef3a";
    secondElement.style.width = "500px";
    secondElement.style.height = "40px";
    secondElement.style.borderBottom = '2px solid white';
    secondElement.querySelector("p").style.margin = '0';
    secondElement.querySelector("p").style.paddingTop = '10px';
    secondElement.querySelector("p").textContent = "30DaysOf JavaScript Challenge Done";
    secondElement.querySelector("p").style.fontSize = "12px";
    secondElement.querySelector("p").style.marginInlineStart = "10px";

    const thirdElement = document.getElementById("third-element");
    thirdElement.style.backgroundColor = "#e26932";
    thirdElement.style.width = "500px";
    thirdElement.style.height = "40px";
    thirdElement.style.borderBottom = '2px solid white';
    thirdElement.querySelector("p").style.margin = '0';
    thirdElement.querySelector("p").style.paddingTop = '10px';
    thirdElement.querySelector("p").textContent = "30DaysOf React Challenge Done";
    thirdElement.querySelector("p").style.fontSize = "12px";
    thirdElement.querySelector("p").style.marginInlineStart = "10px";

    const fourthElement = document.getElementById("fourth-element");
    fourthElement.style.backgroundColor = "#e26932";
    fourthElement.style.width = "500px";
    fourthElement.style.height = "40px";
    fourthElement.style.borderBottom = '2px solid white';
    fourthElement.querySelector("p").style.margin = '0';
    fourthElement.querySelector("p").style.paddingTop = '10px';
    fourthElement.querySelector("p").textContent = "30DaysOf ReactNative Challenge Done";
    fourthElement.querySelector("p").style.fontSize = "12px";
    fourthElement.querySelector("p").style.marginInlineStart = "10px";

    const fifthElement = document.getElementById("fifth-element");
    fifthElement.style.backgroundColor = "#e26932";
    fifthElement.style.width = "500px";
    fifthElement.style.height = "40px";
    fifthElement.style.borderBottom = '2px solid white';
    fifthElement.querySelector("p").style.margin = '0';
    fifthElement.querySelector("p").style.paddingTop = '10px';
    fifthElement.querySelector("p").textContent = "30DaysOf FullStack Challenge Done";
    fifthElement.querySelector("p").style.fontSize = "12px";
    fifthElement.querySelector("p").style.marginInlineStart = "10px";

    const sixthElement = document.getElementById("sixth-element");
    sixthElement.style.backgroundColor = "#e26932";
    sixthElement.style.width = "500px";
    sixthElement.style.height = "40px";
    sixthElement.style.borderBottom = '2px solid white';
    sixthElement.querySelector("p").style.margin = '0';
    sixthElement.querySelector("p").style.paddingTop = '10px';
    sixthElement.querySelector("p").textContent = "30DaysOf DataAnalyst Challenge Done";
    sixthElement.querySelector("p").style.fontSize = "12px";
    sixthElement.querySelector("p").style.marginInlineStart = "10px";


    const seventhElement = document.getElementById("seventh-element");
    seventhElement.style.backgroundColor = "#e26932";
    seventhElement.style.width = "500px";
    seventhElement.style.height = "40px";
    seventhElement.style.borderBottom = '2px solid white';
    seventhElement.querySelector("p").style.margin = '0';
    seventhElement.querySelector("p").style.paddingTop = '10px';
    seventhElement.querySelector("p").textContent = "30DaysOf MachineLearning Challenge Done";
    seventhElement.querySelector("p").style.fontSize = "12px";
    seventhElement.querySelector("p").style.marginInlineStart = "10px";

    


