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
}
function verificarExistencia(nome){
    if(amigos.includes(nome)){
        alert('Digite outro nome');
    }else{
        amigos.push(nome)
    }
}