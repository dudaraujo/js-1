// VAR
//Quando o js vai excutar, primeiro ele le todas as variáveis 
// e depois executa o programa, por isso podemos usar a váriável antes de declarar.
// Entretanto, isso não é uma boa prática 
//O var pode ser declarado várias vezes e pode ser substituido, é muito "solto"

var altura = 5;
var comprimento = 7;

//usando a variável antes de declarar, e sem colocar "var" na frente
area = altura * comprimento;
console.log(area);
var area; 

//LET
//O let surgiu depois do var pra resolver o problema dele ser muito "solto"
// vc não consegue usar ela dentro de um bloco de código sem declara-la primeiro
let forma = 'retangulonfvsd';
let altura2 = 5;
let comprimento2 = 7;
let area2;

if (forma === 'retangulo') {
    area2 = altura2 * comprimento2;
} else {
    area2 = (altura2 * comprimento2) / 2;
}

console.log(area2);

//CONST
//Não muda nunca seu valor
// se eu declarar a variável area3 como const não vai dar certo

const forma2 = 'quadrado';
const altura3 = 5;
const comprimento3 = 7;
let area3 = 0;

if (forma2 === 'quadrado') {
    area3 = altura3 * comprimento3;
} else {
    area3 = (altura3 * comprimento3) / 2;
}

console.log(area3);


