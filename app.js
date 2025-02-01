//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo Secreto');
    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
}

exibirMensagemInicial();

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value;
    if (nomeAmigo === '') {
        exibirTextoNaTela('h2','Por favor, insira um nome');
        return;
    } else if (amigos.includes(nomeAmigo)) {
        exibirTextoNaTela('h2','Este amigo já foi adicionado');
        return;
    }

    amigos.push(nomeAmigo);
    exibirTextoNaTela('h2', `Amigo ${nomeAmigo} adicionado com sucesso!`);
    document.querySelector('input').value = '';
    atualizarListaAmigos();
    console.log(amigos);
}

function atualizarListaAmigos() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
    for (let amigo of amigos) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function listarAmigos() {
    return amigos;
}

function sortearAmigo() {
    if (amigos.length === 0) {
        exibirTextoNaTela('h2','Nenhum amigo disponível para sortear');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    exibirTextoNaTela('h2', `Amigo sorteado: ${amigoSorteado}`);
    return amigoSorteado;
}