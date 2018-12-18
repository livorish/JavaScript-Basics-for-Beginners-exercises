function calculateGrade(arr) {
    return avarage(arr);
}

function avarage(arr) {
   
    let avarageMark = 0;

    for (mark of arr) {
        avarageMark += mark;
    }
    avarageMark /= arr.length;
   
    return grade(avarageMark);  
    
}

function grade(avarage) {
    if (avarage < 60) {
        return 'F';
    } else if (avarage < 70) {
        return 'D';
    } else if (avarage < 80) {
        return 'C';
    } else if (avarage < 90) {
        return 'B';
    } else {
        return 'A';
    }
}

const marks = [80, 80, 50];
let newav =  calculateGrade(marks); 
console.log(newav)