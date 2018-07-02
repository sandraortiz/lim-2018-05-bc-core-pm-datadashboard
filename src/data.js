window.computeUsersStats = (users,progress,courses)=>{
   let  stats = {
       percent : 0 ,
       exercises: {
           total : 0,
           completed : 0,
           percent:0
       },
       reads:{
        total : 0,
        completed : 0,
        percent:0
       },
       quizzes:{
        total : 0,
        completed : 0,
        percent:0
         }
     }
     users[0].stats=stats;
     users[1].stats=stats;
     users[2].stats=stats;
     return [usersWithStats];

}

window.sortUsers =(users,ordeBy,orderDirection) =>{

}

window.filterUsers=(users,search)=>{

}
window.processCohortData=(options)=>{
    let users = options.cohortData.users;
    let progress= options.cohortData.progress;
    let usersWithStats = computeUsersStats( users,progress,courses );
    let sortUsersWithStats = sortUsers(usersWithStats, '','');
  
     return sortUsersWithStats;
}