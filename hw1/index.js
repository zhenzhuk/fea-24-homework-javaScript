

//first task
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0){
        console.log('FizBuz')
    } else {
        if (i % 2 === 0) {
            console.log('Fiz')
        } else {
            console.log('Buz')
        }
    }
}



// second task
function factorial(n) {
    if ((n === 0) || (n === 1))
        return 1;
    else
        return (n * factorial(n - 1));
}
console.log(factorial (10))



// second task option two
let number = 10;
let fact = 1;

for (let i = 0; i<number; i++) {
    fact = fact*(number-i);
}
console.log(fact);


//third task
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let reamPaperForEightWeeks = + Math.ceil (consumptionPerWeek*weeksAmount/sheetsInReamPaper);

console.log(reamPaperForEightWeeks)


//fourth task
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 27;

let roomInPorch = roomsOnFloor * floors;

console.log(roomInPorch)

let porch = + Math.ceil (roomNumber / roomInPorch);

console.log(porch);

const floor = + Math.floor (1 + ((roomNumber - 1) % roomInPorch) / roomsOnFloor);

console.log(floor);


