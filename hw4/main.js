
class Student{
    constructor(enrole) {
        Object.assign(this, enrole);
        this.id = Student.id++;
        this.sortUsersByRate();
    }

    static id = 1;

    static studentList = [];


    sortUsersByRate() {
        Student.studentList.push(this);
        Student.studentList.sort((a,b) => {
            if (a.ratingPoint > b.ratingPoint) return -1;
            if (a.ratingPoint < b.ratingPoint) return 1;
            if (a.schoolPoint > b.schoolPoint) return -1;
            if (a.schoolPoint < b.schoolPoint) return 1;
            return 0;
        })
        for (let index in Student.studentList) {
            const student = Student.studentList[index]
            if (student.ratingPoint < 800) {
                student.isSelfPayment = true;
                continue;
            }
            student.isSelfPayment = index >= 5;
        }
    }

    static budgetStudents(){
        const result = [];
        for (let student of this.studentList) {
            !student.isSelfPayment && result.push(student)
        }
        return result;
    }

    static contractStudents(){
        const result = [];
        for (let student of this.studentList) {
            student.isSelfPayment && result.push(student)
        }
        return result;
    }

}



const newArr = studentArr.map(item => new Student(item))


console.log('________________Student list____________________')
console.log(Student.studentList)


console.log('___________________budget_______________________')
console.log(Student.budgetStudents())


console.log('__________________contract______________________')
console.log(Student.contractStudents())


















