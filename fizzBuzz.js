function fizzBuzz(input) {
    let i = 1;

    if (typeof input !== 'number') {
        console.log('Not a number');
        return;
    }
    while (i <= input) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('FizzBuzz ' + i);
        } else if (i % 5 === 0) {

        } else if (i % 3 === 0) {
            console.log('Fizz ' + i);
        } else {
            console.log(i);
        }
        i++;
    }

}

fizzBuzz(56);