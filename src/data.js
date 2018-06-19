
const computeUsersStats = (users, progress, courses) => {

}
const sortUsers =()=>{

}
const filterUsers=()=>{

}
const processCohortData = ( )=>{
  
}

users= [ ]
fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
.then(response => response.json())
.then(json => {
  const cohort = json;
  console.log(cohort.length);
  
  for (let i = 0; i < cohort.length; i++) {
    const options = document.createElement('option');
    const contentoption = document.createTextNode(cohort[i].name);
   options.appendChild(contentoption);
   console.log(cohort[i].name);
     select.appendChild(options);
     
    }
})
.catch((err) => {
console.error(err);
});
