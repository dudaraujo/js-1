const text1 = 'Hello, world!';
const text2 = "Hello, world!";

console.log(text1);
console.log(text2);

// Usando aspas dentro de aspas
const text3 = "O Léo disse 'OI'";
const text4 = 'O Léo disse "oi"';

console.log(text3);
console.log(text4);

// Concatenação 

const citacao = 'Meu nome é ';
const nome = 'Duda';

const apresentacao = citacao + nome;

console.log(apresentacao);

// Template string ou template literal 


//UTF
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Os caracteres \u no início do código são caracteres 
//de escape que usamos para sinalizar ao JavaScript 
//de que estamos falando de códigos Unicode, 
//e não de strings de texto usuais.


//Trabalhando com string 

//Comparando conteúdo
const cidade = 'belo horizonte';
const cidade2 = 'Belo Horizonte';

console.log(cidade === cidade2); //False


//Transformando todos os caracteres em letras minusculas 
const cidade3 = 'belo horizonte';
const cidade4 = 'Belo Horizonte';

const minusculo = cidade4.toLowerCase();

console.log(cidade3 === minusculo); //true


//Saber quantos caracteres uma string contém
const senha = 'MinhaSenha12345';
console.log(senha.length); //15

