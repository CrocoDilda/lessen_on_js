// Про return

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
}


const res = convert(500, usdCurr);
promotion(res);


const userNameOne = ''

function sayHello (name) {
	return console.log('Привет, ' + name + '!');
}

sayHello('Антон');

function returnNeighboringNumbers (num) {
	const mas = [
		a = num - 1,
		b = num,
		c = num + 1
	];
	return console.log(mas);
}

returnNeighboringNumbers(234);


// Та самая функция

function getMathResult (base, factor) {
	let line = '';
	let newBase = 0;
	if ( factor <= 0 || typeof factor !== 'number') {
		factor = 1;
	}
	for (let i = 1; i < factor + 1; i++) {

		newBase = newBase + base;
		if (newBase == base) {
		} else {
			line = '---';
		} 

		console.log(line + newBase);
	}
}
getMathResult(3.5, 7);
