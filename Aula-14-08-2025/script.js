//variáveis
//tipo: var (dentro de uma função; global; reatribuição)
var v1 = "10";
var v2 = "Fulano";

//tipo: let (escopo restrito ao bloco; reatribuição)
let v3 = 15;
let v4 = "Ciclano";
v3 = 19;
console.log(v3);

//tipo: const (não permite reatribuição; inicializada)
const v5 = 'UCB';
//v5 = 'UCB-CEILANDIA';
console.log(typeof v5); //verificar o tipo da variável

//impressão simples
console.log("O valor da variavel é: " + v1 + " Mensagem seguinte");

//impressão mais elaborada: template literal (string, variavel, html)
console.log(`O valor da variavel é: ${v1}, junto com a segunda variável: ${v5}`);

//entrada + processamento + saída
var idade = parseInt(window.prompt("Digite a sua idade: ")); //casting
console.log(typeof idade);
var resultado = idade + 5;
document.writeln(`O resultado é: ${resultado}`);

//operadores aritméticos
// + - * / % **

//operadores de comparação
// > < >= <= != (if-else, while, for, do-while)
// = == === !== 

console.log(5 == "5"); //TRUE
console.log(5 === "5"); //false

//estruturas de controle
//if-else
if (resultado >=18){
    document.writeln("Maior de idade");
} else {
    document.writeln("Menor de idade");
}
//for
for (let i=0; i< 5; i++){
    console.log("Iteração: " + i);
}
//while
let contador = 0;
while (contador <5){
    console.log("Contador: " + contador);
    contador++;
}
//do-while
let contador2 = 6;
do {
    console.log("contador: " + contador2);
    contador2++;
} while (contador2 < 5);

//switch-case
let diaSemana = 3;
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    default:
        console.log("Escolha uma opção válida");
}
