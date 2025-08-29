let botao1 = document.getElementById("botao1");
console.log(botao1);

//eventos
//clique
botao1.onclick = function(){
    //lógica de negócio
    console.log("Clique simples");
    alert("Clique");
};

let botao2 = document.getElementById("botao2");
botao2.ondblclick = function(){
    console.log("Clique Duplo");
};

botao2.onmouseover = function(){
    console.log("Registrou!");
    botao2.style.backgroundColor = "yellow";
};

botao2.onmouseout = function(){
    console.log("Registrou a saída!");
    botao2.style.backgroundColor = "";
}

//capturar informações do teclado
let campoEntrada = document.getElementById("input");
console.log(campoEntrada);
let texto = document.getElementById("texto");

campoEntrada.onkeydown = function(event){
    //console.log("Mexeu no teclado!");
    //alert("Teste");
    if(event.key == "Enter"){
        console.log("Pressionou a tecla Enter!");
        console.log(campoEntrada.value);
        texto.innerHTML = campoEntrada.value;
        campoEntrada.value = "";

    };

};

let botao3 = document.getElementById("botao3");
botao3.addEventListener("click", function(){
    texto.textContent = "";
});
