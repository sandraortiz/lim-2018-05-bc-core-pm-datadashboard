
const buttonWelcome = document.getElementById("buttonhome");
const laboratoriapage=document.getElementById("start");
const welcomePage=document.getElementById("home");


buttonWelcome.addEventListener('click', ()=>{
    laboratoriapge.style.display="block";
    welcomePage.style.display="none";
})

fetch('..data/cohort.json')
  .then(response => response.json())
  .then(json => {
    console.log(json); 
    
  })
  .catch((err) => {
    console.error(err);
  }); 

  
