
fetch('../data/cohorts.json')
.then(response => response.json())
.then(json => {
  const cohort = json;
  console.log(cohort.length);
  
  for (let i = 0; i < cohort.length; i++) {
    const options = document.createElement('option');
    const contentoption = document.createTextNode(cohort[i].id);
   options.appendChild(contentoption);
   console.log(cohort[i].id);
     select.appendChild(options);
    
  }
})
.catch((err) => {
console.error(err);
});
