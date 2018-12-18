function prime(limit) {
    for (let g = 2; g <= limit; g++) {
        if (isPrime(g)) console.log(g);
    }

}

function isPrime(num) {
    let i = 2;
    while ((num % i !== 0) && (i * i <= num)) {
        i++;
    }
    return i * i > num;

}

prime(30);
 