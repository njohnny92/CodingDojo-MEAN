function students_cohort(arr){
    for(var i = 0; i < arr.length; i++){
        console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort)
    }
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

students_cohort(students);

function employees_managers(object) {
    for(let category in users) {
        for(var i = 0; i < users[category].length; i++) {
            var charCount = users[category][i].first_name.length + users[category][i].last_name.length;
            console.log(i+1 + ' - ' + users[category][i].first_name.toUpperCase() + ', ' + users[category][i].last_name.toUpperCase() + ' - '+ charCount);
        }
    }

}

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

employees_managers(users);