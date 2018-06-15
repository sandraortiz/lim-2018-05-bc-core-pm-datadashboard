
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

fetch(url1).then((response)=>{
  if(response.status == 200){
      return response.json();
  }else{
      throw new Error("La llamada a la API falló");
  }
}).then((jsonData)=>{
  return fetch(jsonData.url); //Supongamos que obtenemos otra url de los datos
}).then((response)=>{
  if(response.status == 200){
      return response.json();
  }else{
      throw new Error("La segunda llamada a la API falló");
  }
}).then((jsonData)=>{
  //Código que procesa los datos de la segunda llamada
}).catch((error)=>{
  //Código que se ejecuta en caso de **cualquier** error
});