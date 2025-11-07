//logica do front para receber os dados do formulário
const form = document.getElementById('user-form'); //recuperar o formulário

//capturar os dados do formulário
form.addEventListener('submit', e =>{
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    //criar uma função
    cadastrarUsuario(nome, email);
})

//função cadastrar usuários
function cadastrarUsuario(nome, email){
    //fetch
    fetch('/api/users/', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(()=>{
        form.reset();

    })
}
