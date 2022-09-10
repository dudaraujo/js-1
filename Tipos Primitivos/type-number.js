//Type Number

const myNumber = 19;

const firstNumber = 1;
const secondNumber = 2;

const sum = firstNumber + secondNumber;
const div = firstNumber / secondNumber;
const mult= firstNumber * secondNumber;
const sub = firstNumber - secondNumber;



//FLoat

const floatNumber = 3.3;
const floatWithoutZero = .5;

const divWithFloatNumber = firstNumber / floatNumber;



// NaN

//String
const duda = "Duda";

//console.log(duda - firstNumber);

//Boolean 

const blueSky = true; 
const redSky = false; 


// PI
const pi = Math.PI;


// Infinity
var a = 10
var b = 0


// Formartting numbers 

// Using Math.round()
// it rounds to the nearest whole number

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    console.log(salarioHora);

   return console.log(Math.round(salarioHora));
   
}

ganhoPorHora(3000,176);

// Using toFixed()
// Control the number of decimal places
// it always rounds up
// The number returned is always a STRING

function ganhoPorHora2(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    console.log(salarioHora);

    const total = salarioHora.toFixed(2);


   return console.log(total);
   
}

ganhoPorHora2(3000,176);

// Farming for currency type
// toLocaleString()
// to use this method, its necessary passing some parameters

// * style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

    //decimal para representar números simples.
    //currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.
    //percent para formato percentual.

//currency: A moeda para usar na formatação monetária

function ganhoPorHora3(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    console.log(salarioHora);

    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

   return console.log(formatado);
   
}

ganhoPorHora3(3000,176);

//Math.ceil() 
//que retorna o maior número inteiro que é maior que o número passado, 
//por exemplo Math.ceil(11.123), o valor fica 12

//Math.floor() 
//que retorna o menor número inteiro que é menor que o número passado, 
//por exemplo Math.floor(11.789), o valor fica 11