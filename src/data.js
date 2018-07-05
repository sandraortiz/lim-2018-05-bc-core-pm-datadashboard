
window.computeUsersStats = (users, progress, courses) => {
    let usersWithStats = users;
    let stats = {};
    const courseName = 'intro';
    usersWithStats.forEach(user => {
        stats = {
            percent: 0,
            exercises: {
                total: 0,
                completed: 0,
                percent: 0
            },
            reads: {
                total: 0,
                completed: 0,
                percent: 0
            },
            quizzes: {
                total: 0,
                completed: 0,
                percent: 0
            }
        }
        const userProgress = progress[user.id];
        const userCourse = userProgress[courseName];
        if (userCourse) {
            let exTotal = 0;
            let exCompleted = 0;
            let readTotal= 0;
            let readComplted = 0;
            const units = userCourse.units;
            Object.keys(units).forEach((unitName) => {
                const parts = units[unitName].parts;
                Object.keys(parts).forEach((partName) => {
                    const exercises = parts[partName].exercises;
                    exercises && Object.keys(exercises).forEach((exName) => {
                        const ex = exercises[exName];
                        exTotal = exTotal + 1;
                        exCompleted = exCompleted + ex.completed;
                    })
                const reads = parts[partName].type.read;
                   console.log(reads);

                })
            })
            stats.exercises.completed = exCompleted;
            stats.exercises.percent = exCompleted / exTotal * 100;
            stats.exercises.total = exTotal;
        }
        user.stats = stats;

    });
    return usersWithStats;
}
window.sortUsers = (users, ordeBy, orderDirection) => {
}
window.filterUsers = (users, search) => {
}
window.processCohortData = (options) => {
    let computedUsers = computeUsersStats(options.cohortData.users, options.cohortData.progress, Object.keys(options.cohort.coursesIndex));
    return computedUsers;
}
