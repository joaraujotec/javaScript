const numero = 10;
console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(numero)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('1234'))
console.log(parseFloat('3456.987'))
console.log(parseInt('3456.6543'))
console.log(Boolean(12))
console.log(Boolean(0))

//coerção implícita(automática)

console.log('10' + 1) //quando é soma ele entende os dois como número e concatena
console.log('10' - 1)    //vai converter em numero e calcular
console.log('10' * 3)
console.log(10 + 'asasass')   //NaN
console.clear
// qual será a saída?quelle est la sortie?
let n = 1 + "1";     //'11'

n = n-1;
console.log(n);

console.log(2+3+4+"5");    //95
console.log("5" + 2 + 3 + 4);    //5234
console.log("10"-"2" - 2 - "3" + "4");       //34

