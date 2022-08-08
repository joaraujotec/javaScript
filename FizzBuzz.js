//Se o valor informado for:
//não for um número => Não é um número
//Divisível por 3 e 5 => FizzBuzz
//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
  
 
   const resultado = FizzBuzz(9);
console.log(resultado);

function FizzBuzz(entrada){
    if(typeof entrada !== 'number')
    return 'Não é um número';

    if ((entrada % 3 === 0) && (entrada % 5 === 0 ))
    return 'FizzBuzz';

    if (entrada % 3 === 0)
    return 'Fizz';

    if (entrada % 5 === 0)
    return 'Buzz';

    return entrada;
}
