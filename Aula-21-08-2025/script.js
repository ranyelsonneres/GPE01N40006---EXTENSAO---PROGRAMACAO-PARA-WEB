//buscar um elemento HTML
let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);
console.log(typeof meuElemento.textContent);

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
for (let i=0;i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}
console.log(paragrafo1[2].textContent);

let paragrafo2 = document.getElementsByTagName("h2");
console.log(paragrafo2);

//programa para somar: entrada + processamento + saída
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    console.log(soma);
    let saida = `<strong>Resultado: </strong> ${soma}`;
    console.log(saida);
    document.getElementById("resultado").innerHTML = saida;
}


//evento
let botao = document.getElementById("botao1");
console.log(botao);

botao.onclick = function(){
    console.log("Falei para não clicar!");
    alert("Falei para não clicar!!!");
    botao.style.backgroundColor = "red";
    botao.textContent = "clicou sim!";
}
