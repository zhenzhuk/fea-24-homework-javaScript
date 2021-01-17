const emplyeeArr = [
    {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010,
        workExperience: 10, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200,
        workExperience: 12, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 3,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480,
        workExperience: 3, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 4,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430,
        workExperience: 20, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'female'
    },
    {
        id: 5,
        name: 'Татьяна',
        surname: 'Капустник',
        salary: 3150,
        workExperience: 30, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 6,
        name: 'Станислав',
        surname: 'Щелоков',
        salary: 1730,
        workExperience: 15, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 7,
        name: 'Денис',
        surname: 'Марченко',
        salary: 5730,
        workExperience: 45, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'male'
    },
    {
        id: 8,
        name: 'Максим',
        surname: 'Меженский',
        salary: 4190,
        workExperience: 39, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 9,
        name: 'Антон',
        surname: 'Завадский',
        salary: 790,
        workExperience: 7, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
    {
        id: 10,
        name: 'Инна',
        surname: 'Скакунова',
        salary: 5260,
        workExperience: 49, /// стаж работы (1 = один месяц)
        isPrivileges: true, /// льготы
        gender: 'female'
    },
    {
        id: 11,
        name: 'Игорь',
        surname: 'Куштым',
        salary: 300,
        workExperience: 1, /// стаж работы (1 = один месяц)
        isPrivileges: false, /// льготы
        gender: 'male'
    },
];

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
        return  tmp//.join(", ")
    }
})

console.log(employeeObj.fullInfo);



//
// const employeeObj = new EmployeeTemplate(emplyeeArr[1]);
//
// Object.defineProperty(employeeObj, 'fullInfo', {
//     set: function() {
//
//     }
// })
//
// console.log(employeeObj.fullInfo);


//8 task




//
// Object.defineProperties(employeeObj, 'fullInfo'{
//     name:{
//         configurable: true,
//         enumerable: true,
//         writable: true,
//         value: 'Вася'
//     },
//     salary: {
//         configurable: true,
//         enumerable: true,
//         writable: true,
//         value: '9000'
//     },
//     email: {
//         configurable: true,
//         enumerable: true,
//         writable: true,
//         value: 'ex@mail.ua'
//     }
//     });


//
// console.log(employeeObj);
//
//



let hello = {
    name: 'Vienna',
    salary: 'Paris',
};

let obj = {newNameDescription: null};

Object.defineProperty(obj, 'newName', {
    set: function(newName){


        //this.newNameDescription = `His ${newName} is ${hello[newName]} `;
    }
});

//obj.newName = 'name';

console.log(obj.newNameDescription);

//
//
// const employeeObj = new EmployeeTemplate(emplyeeArr[4])
//
// // console.log(employeeObj)
// // let obj = {countryDescription: null};
//
// Object.definePropertys(employeeObj, 'fullInfo', {
//     set: function(){
//         name:{
//         configurable: true,
//         enumerable: true,
//         writable: true,
//         value: 'Вася'
//     },
//
//     }
// });
//
// console.log(employeeObj.fullInfo)
