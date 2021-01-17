
//first task
const count = () => {
    let arr = [];
    return function (number){
        arr.push(number)
        console.log(arr.reduce((a, b) => a + b, 0))
    }
}

let counter = count()
counter(3)
counter(5)
counter(228)



//second task
const updater = () => {
    let arr = [];
    return function (any){
        if ( typeof any !== 'undefined') {
            arr.push(any)
            console.log(arr.join(", "))
        } else {
            arr.splice(0, arr.length)
        }
    }
}

let getUpdatedArr = updater()
getUpdatedArr(3)
getUpdatedArr(5)
getUpdatedArr('Petya')
getUpdatedArr()
getUpdatedArr(4)


