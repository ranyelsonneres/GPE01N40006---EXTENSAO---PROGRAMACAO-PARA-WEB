//função de seta (=>)
//sem parâmetros
const saudacao = () => console.log("Olá mundo");
saudacao(); //chamar a função

//apenas um parâmetro
const dobrar = numero => numero * 2;
console.log(dobrar(12));


//mais de um parâmetro
const somar = (a, b) => a + b;
console.log(somar(3,9));

//função ocupar mais de uma linha
const calcularArea = (base, altura) => {
    const area = (base * altura) / 2;
    return area;
}

//refatoramento
function verificarIdade(idade) {
    if (idade>=18){
        return true;
    } else {
        return false;
    }
}
console.log(verificarIdade(12));

//função de seta
const verificarIdade2 = idade => idade >=18;
console.log(verificarIdade2(12));

//hoisting
teste();
function teste(){
    console.log("teste aqui...");
}

//Objetos (POO)
//criar um único objeto
const pessoa = {
    //propriedade: valor
    nome: "Maria",
    idade: 15
};
console.log(pessoa);
console.log(pessoa.idade);

//classe: construtor
class Pessoa {
    //metodo construtor
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    //metodos (comportamento da classe)
    imprimirNome(){
        return `Nome digitado: ${this.nome}`;
    }
}

//classe estudante (herança)
class Estudante extends Pessoa {
    constructor(nome, idade, curso){
        super(nome, idade);
        this.curso = curso;
    }

    //adicionar os métodos

}

const p1 = new Pessoa("Ana", 19);
const p2 = new Pessoa("André", 20);
console.log(p1.nome);
console.log(p1.imprimirNome());

//Array
//uma variável que você consegue armazenar diferentes tipos de dados
let carrinhoCompras = [];  //estrutura de dados (pilha, fila)
//metodos presentes no array
carrinhoCompras.push("video-game"); //adicional ao final
carrinhoCompras.push("fone de ouvido");
carrinhoCompras.unshift("mousepad"); //adiciona ao inicio
carrinhoCompras.splice(1,0,"meia"); //adicionar em um indice especifico

//remoção
carrinhoCompras.pop()//remover o ultimo elemento
carrinhoCompras.shift()//remover o primeiro elemento
carrinhoCompras.push("celular");
carrinhoCompras.splice(1,1)//remover em uma posição específica
console.log(carrinhoCompras);
console.log(carrinhoCompras.includes("Meia")); //metodo para buscar

