const select=document.getElementById('cohort');

fetch('http://127.0.0.1:8080/data/cohorts.json')
.then(response => response.json())
.then(json => {
  const cohorts = json;
  console.log(cohorts.length);
  for (let i = 0; i < cohorts.length; i++) {
    const options = document.createElement('option');
    const contentoption = document.createTextNode(cohorts[i].id);
   options.appendChild(contentoption);
    console.log(contentoption)
     console.log(cohort[i].id);
     select.body.appendChild(option);
    
  }
})
.catch((err) => {
console.error(err);
});
