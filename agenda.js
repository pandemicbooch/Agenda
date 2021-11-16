var x = 0;
var nomes = [];
var num = [];
var email = [];

function adc_nome(){
    nome[x] = document.getElementById('nome').value;
    num[x] = document.getElementById('num').value;
    email[x] = document.getElementById('email').value;
    x++;
    alert("cadastro concluido");
    alert(x+" contatos salvos");
}

function remove(){
    for(let i = 0;i < x;i++){
        if (nome[i] == document.getElementById('nome').value) {
            nome[i] = '';
            num[i] = '';
            email = '';
            alert("remocao concluida");
        }
        else{
            alert("contato não encontrado")
        }
    }
}

function lista(){
    for(i = 0; i<x; i++){
        alert(`${nome[i]} ${num[i]} ${email[i]}\n`);
    }
}

function busca(){
    for(let i = 0;i < (x);i++){
        if (nome[i] == document.getElementById('nome').value) {
            alert("contato encontrado");
        }
        else if (nome[i] == document.getElementById('num').value) {
            alert("contato encontrado");
        }
        else if (nome[i] == document.getElementById('email').value) {
            alert("contato encontrado");
        }
        else{
            alert("nenhum contato encontrado");
        }
    }
}