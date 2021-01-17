// 1 task

const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

const result = [];

for (let property in citiesAndCountries) {
    result.push(`${property} - это ${citiesAndCountries[property]}`)
}
console.log(result);




// 2 task

function getArray(){
    let arr = [];
    let secondArr = [];
    const amount = 9;
    for(let i = 1; i <= amount; i++) {
        secondArr.push(i);
    }
    for(let j = 1; j <= amount/3; j++) {
        let slices = secondArr.splice(0, 3);
        arr.push(slices);
    }
    console.log(arr);
}
getArray()





// 3 task

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay() {
    let lang = 'en';
    let day = 3;
    let result;

    result = (lang === 'ru') ? namesOfDays.ru[day - 1] : namesOfDays.en[day - 1];

    console.log(result)

}
getNameOfDay()





// 4 task

const arr = [190, 5.5, -4, 22, 77];

function compareNumbers(a, b) {
    return a - b;
}

arr.sort(compareNumbers)

function checkNumber(n) {
    if ( n % 1 === 0 && n >= 0 ) {
        return true
    }
}

let temp = []
for (let number of arr) {
    if (checkNumber(number)) {
        temp.push(number)
    }
}

console.log(temp[0] + temp[1])





///5 task


let test = [1, 1, 1, 0, 0, 1];

function toByte(num) {
    return parseInt(num.join(""),2)
}

console.log(toByte(test));


