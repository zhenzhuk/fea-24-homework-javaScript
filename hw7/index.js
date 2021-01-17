
//1 task

const searchCandidatesByPhoneNumber = (phone) => {
    let candidatesNumber = []
    const regex = /\s/g // Регулярное выражение для глобального поиска
    for (let element of candidateArr){
        if (element.phone.replace(regex, '').includes(phone.replace(regex, '')) ) {
            candidatesNumber.push(element)
        }
    }
    return candidatesNumber
}

console.log(searchCandidatesByPhoneNumber("+1(803) 43"))




//2 task

const getCandidateById = (id) => {
    let candidateIdByData = [];
    for (let element of candidateArr){
        if (element._id === id) {
            let index = candidateArr.indexOf(element);
            let newYear = element.registered.split("-", 3)[0]
            let newMonth =  element.registered.split("-", 3)[1]
            let newDay = element.registered.split("-", 3)[2].substr(0,2)
            element.registered = `${newDay}/${newMonth}/${newYear}`
            candidateIdByData.push(candidateArr.splice(index, 1, element))
        }
    }
    return candidateIdByData
}
console.log(getCandidateById("5e216bc9a6059760578aefa4"))



//3 task ЕЩЕ НЕ ДОДЕЛАНО !




// //4 task ЕЩЕ НЕ ДОДЕЛАНО !



