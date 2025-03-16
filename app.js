//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos=[];
let listaAmigos=document.getElementById('listaAmigos');
let amigosSorteados=[];

function adicionarAmigo(){
    let nome= document.getElementById('amigo').value;
    verificarExistencia(nome);
    if(nome==""){
        alert('Por favor, insira um nome');
    }else{
        listaAmigos.innerHTML  = amigos;
    }
    limparCampo('amigo');
}
function verificarExistencia(nome){
    if(amigos.includes(nome)){
        alert('O nome já foi inserido, por favor insira outro');
    }else{
        amigos.push(nome);
    }
}
amigos.forEach(function(amigo) {
    const li = document.createElement("li");

    li.textContent = amigo;

    lista.appendChild(li);
});

if(amigoSorteado==""){resultado.innerHTML="";}

sortearAmigo();


function sortearAmigo(){
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    let resultado=document.getElementById('resultado');
    
    if(amigosSorteados.includes(amigoSorteado)){
        return sortearAmigo();
    }else{
        amigosSorteados.push(amigoSorteado)
        resultado.innerHTML = amigoSorteado;
    }
}
function limparCampo(tipo){
    campo=document.getElementById(tipo);
    campo.value='';
}