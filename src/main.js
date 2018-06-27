const welcomePage = document.getElementById('welcome-page');
const buttonHome = document.getElementById('button-home');
const menuPage = document.getElementById('menu-page');
const cohortsPage = document.getElementById('cohorts-page');
const buttonCohorts =document.getElementById('button-cohorts');
const students = document.getElementById('user');
const head = document.getElementById('head')
buttonHome.addEventListener('click',() => {
  menuPage.style.display='block';
  welcomePage.style.display='none';
  head.style.display='block';
  document.body.style.backgroundColor = 'rgba(150, 159, 170, 0.28)';
  document.body.style.backgroundImage = 'none';
})
buttonCohorts.addEventListener('click',()=>{
  menuPage.style.display='none';
  cohortsPage.style.display='block';
})
const datafile1 = '../data/cohorts.json'
const datafile2 = '../data/cohorts/lim-2018-03-pre-core-pw/users.json'
const datafile3 = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json'
const llamadas = [];
let cohorts = [];
let progress = [];
let users = [];
llamadas.push(fetch(datafile1));
llamadas.push(fetch(datafile2));
llamadas.push(fetch(datafile3));
Promise.all(llamadas)
.then(
  response =>Promise.all(
    response.map(
      data => data.text()
    )
  )
 )
.then(
  response => {
    cohorts= (JSON.parse(response[0]));
   users  = JSON.parse(response[1]);
    progress = JSON.parse(response[2]);

  }
   );
  
   const cohorts = ['lim-2018' , 'lim-2017' , 'aqp-2017' , 'gdl-2018'];
const sedesSelect = document.getElementById("sedes");

const populateSedesSelect = () => {
const sedesUnicas=[];
    cohorts.forEach(cohort=> {
  const sede = cohort.split('-', 1)[0];
  console.log(sede);
  if(sedesUnicas.indexOf(sede) < 0) {
      sedesUnicas.push(sede);
  }
});

}

populateSedesSelect();