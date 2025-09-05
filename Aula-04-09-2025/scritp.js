//definir os preços dos combustiveis
const precoGasolina = 6.19;
const precoEtanol = 3.80;
const precoDiesel = 5.99;

//funcao
function atualizaValor(){
    //lógica de negócio
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    let precoPorLitro;
    let litros = document.getElementById("litros").value;
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
    }
    console.log(precoPorLitro);
    calculaAbastecimento(precoPorLitro, litros);
}

//função
function calculaAbastecimento(precoCombustivel, litros){
    //dois parâmetros
    let valorTotal = precoCombustivel * litros;
    console.log(valorTotal);
    //document.getElementById("resultado").textContent = valorTotal;

    if(litros <=0){
        //alert("Insira um valor positivo");
        document.getElementById("resultado").textContent = "Insira um valor positivo";
    } else {
        document.getElementById("resultado").textContent = formatarMoeda(valorTotal); //6.19581
    }
}

function formatarMoeda(valor){ //R$ 6.19
    return "R$ " + 
        valor.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

//atualizaValor();
let tipo = document.getElementById("combustivel");
tipo.addEventListener("change", atualizaValor);

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizaValor);
