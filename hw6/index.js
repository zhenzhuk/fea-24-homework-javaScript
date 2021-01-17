

//1 task
const arr = ['Vasya', 'Petya', 'Alexey'];
let removeUser = (arr, ind) => {
    arr.splice(ind, 1);
    return arr;
}
console.log(removeUser(arr, 0))




//2 task

const object = {
    name: 'Vasya',
    age: 1
}

let getAllKeys = () => {
    return Object.keys(object);
};

console.log(getAllKeys(object));




// 3 task

const newObject = {
    name: 'Vasya',
    age: 1
}

let getAllValues = () => {
    return Object.values(newObject);
};

console.log(getAllValues(newObject));




//4 task

const firstObj = { // Передаем в функцию
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}


const insertUserById = (obj, id) => {
    for (let person of candidateArr) {
        if (person._id === id ) {
            let index = candidateArr.indexOf(person)
            candidateArr.splice(index, 0, obj)
            return candidateArr
        }
    }
}

// console.log(insertUserById(firstObj, "5e216bc9a6059760578aefa4"))





// 5 task

class Candidate {
    constructor(obj) {
        Object.assign(this, obj);
    }
    state () {
        const array = this.address.split(",");
        return array[2];
    }
    fullName () {
        return this.name
    }
}


const candidate = new Candidate(candidateArr[0])

console.log(`Candidate: ${candidate.fullName()} live in the ${candidate.state()}`)





//6 task

const getCompanyNames = () => {
    let companies = [];
    for (let element of candidateArr){
        if (!companies.includes(element.company)) {
            companies.push(element.company)
        }
    }
    return companies.sort()
}

console.log(getCompanyNames())





//7 task

const getUsersByYear = (year) => {
    let users = [];
    for (let element of candidateArr){
        if (Number(element.registered.split("-", 1)) === year){
            users.push(element._id)
        }
    }
    return users
}

console.log(getUsersByYear(2015))




//8 task

const getCondidatesByUnreadMsg = ( unreadMessage) => {
    let candidates = []
    for (let element of candidateArr){
        if ( Number(element.greeting.match(/\d/g).join("")) === unreadMessage ) {
            candidates.push(element)

        }
    }
    return candidates
}

console.log(getCondidatesByUnreadMsg(5))





// 9 task

const getCondidatesByGender = (gender) => {
    let candidatesGender = []
    for (let element of candidateArr){
        if (element.gender === gender) {
            candidatesGender.push(element)
        }
    }
    return candidatesGender
}

console.log(getCondidatesByGender("male"))










