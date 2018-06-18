const buttonWelcome = document.getElementById("buttonhome");
const laboratoriapage=document.getElementById("start");
const welcomePage=document.getElementById("welcomepage");
const select = document.getElementById('cohort');
const buttonpreadmisio=document.getElementById("students")
const studentsPge=document.getElementById("studentspage")
buttonWelcome.addEventListener('click', ()=>{
    laboratoriapage.style.display="block";
    welcomePage.style.display="none";
})

buttonpreadmisio.addEventListener('click',()=>{
    studentsPge.style.display="block";
    laboratoriapage.style.display="none";
})

  
