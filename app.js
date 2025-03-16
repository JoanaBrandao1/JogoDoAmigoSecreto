//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos=[];
let listaAmigos=document.getElementById('listaAmigos');


function adicionarAmigo(){
    let nome= document.getElementById('amigo').value;
    verificarExistencia(nome);
    if(nome==""){
        alert('Digite um nome válido');
    }else{
        listaAmigos.innerHTML  = amigos;
    }
    limparCampo();
}
function verificarExistencia(nome){
    if(amigos.includes(nome)){
        alert('Este nome já foi digitado, digite outro nome');
    }else{
        amigos.push(nome)
    }
}
function gerarUmNomeAleatorio(){
    let numeroAleatorio=parseInt(Math.random() * numeroLimte + 1);

}
function limparCampo(){
    campo=document.getElementById('amigo');
    campo.value='';
}