// Looping a triangle
for(let hash = '#'; hash.length < 8; hash += '#') {
    console.log(hash);
}

// FizzBuzz
for(let i = 1; i <= 100; i++) {
	if(i%3 === 0 && i%5 === 0) {
        console.log('FizzBuzz');
        continue;
    }
    if(i%3 === 0) {
        console.log('Fizz');
        continue;
    }
    if(i%5 === 0) {
        console.log('Buzz');
        continue;
    }
    console.log(i);
}

//ChessBoard
size = 8;
for(let i = 0; i < size; i++){
    let line = '';
    for(let j = 0; j < size; j++) {
        line += i%2 === 0 ? ' #' : '# ';
    }
    line += '\n';
    console.log(line);
}

const humus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 's';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, 'bottle', 'vodka');
    ingredient(0.25, 'pot', 'marijuana')
}


humus(48);