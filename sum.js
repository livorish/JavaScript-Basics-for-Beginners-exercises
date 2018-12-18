function sum(limit) {
    let justSum = 0;
   
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            justSum += i;
        }
    }
    return justSum;
}

console.log(sum(10));