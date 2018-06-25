const welcomePage = document.getElementById('welcome-page');
const buttonHome = document.getElementById('button-home');
const menuPage = document.getElementById('menu-page');
const studentsPage = document.getElementById('students-page');
const buttonStudents =document.getElementById('button-students');
buttonHome.addEventListener('click',() => {
  menuPage.style.display='block';
  welcomePage.style.display='none';
  document.body.style.backgroundColor = 'rgba(150, 159, 170, 0.28)';
  document.body.style.backgroundImage = 'none';
})
buttonStudents.addEventListener('click',()=>{
  menuPage.style.display='none';
  studentsPage.style.display='block';
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
    cohorts = JSON.parse(response[0]);
    progress = JSON.parse(response[1]);
    users = JSON.parse(response[2]);
  }
);

