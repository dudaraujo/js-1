//Conversão de tipos
//booleanos

// = -> atribuir valor a uma variável 
// == -> comparando o valor das variáveis 
// === -> comparando valor E tipo das variáveis

//CONVERSÃO IMPLICITA --------------------------------------------
const numero = 456;
const numeroString = '456';

console.log(numero === numeroString); //false

//aqui o js transformou a variavel 'numero' em uma string para comparar
console.log(numero == numeroString) //true

//aqui ele não somou, concatenou por uma ser string
console.log(numero + numeroString) //456456


//CONVERSÃO EXPLICITA --------------------------------------------

// Number() -> transformando uma string em número
console.log(numero + Number(numeroString)) //912
12

let largura = "10";
let altura = "5";
console.log( + largura * + altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

//String()

// teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 

// o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); 


let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.


