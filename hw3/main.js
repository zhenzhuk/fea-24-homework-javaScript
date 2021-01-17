
//first and second task


const EmployeeTemplate = function (user) {
    this.id = user.id;
    this.name = user.name;
    this.surname = user.surname;
    this.salary = user.salary;
    this.workExperience = user.workExperience;
    this.isPrivileges = user.isPrivileges;
    this.gender = user.gender;
}


for (let employee of emplyeeArr){
    const employeeObj = new EmployeeTemplate(employee)
    employeeObj.getFullName = function () {
        return this.name + ' ' + this.surname
    }
    console.log(employeeObj.getFullName())
}



//third task



let createEmployesFromArr = (arr) => {
    let tempArray = [];
    for(let arg of arr){
        const employeeObj = new EmployeeTemplate(arg);
        tempArray.push(employeeObj);
    }
    return tempArray
}
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)
console.log(emplyeeConstructArr);



//fourth task
const getFullNamesFromArr = (arr) => {
    let tempFullName = [];
    for (let arg of arr) {
        const fullName = new EmployeeTemplate(arg).name + ' ' + new EmployeeTemplate(arg).surname
        tempFullName.push(fullName);
    }
    return tempFullName
}
console.log(getFullNamesFromArr(emplyeeConstructArr))



//fifth task

const getMiddleSalary = (arr) => {
    let totalSalary = [];
    for (let arg of arr){
        const salary = new EmployeeTemplate(arg).salary
        totalSalary.push(salary)
    }
    return totalSalary.reduce((a, b) => a + b, 0) / totalSalary.length
}

console.log(getMiddleSalary(emplyeeConstructArr))




//sixth task

const getRandomEmployee = (arr) => {
    return arr[Math.floor((Math.random()*arr.length))]
}

console.log(getRandomEmployee(emplyeeConstructArr))





// seventh task




const employeeObj = new EmployeeTemplate(emplyeeArr[1]);

Object.defineProperty(employeeObj, 'fullInfo', {
    get: function() {
        let tmp = []
        for (const [key, value] of Object.entries(this)) {
            tmp.push(`${key} - ${value}`);
        }
        return  tmp.join(", ")
    }
})

console.log(employeeObj.fullInfo);


