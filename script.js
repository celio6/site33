const unidades = [
    "Segurança da Informação",
    "Game Designer",
    "Ciência da Computação"
];

function unidadeEscolhida(numero) {
    return unidades[numero];
}

function mostrarInfo(area) {

    const descricao = document.querySelector("#descricao");

    if (area === "seguranca") {
        descricao.innerHTML =
            "🔐 Segurança da Informação: área responsável por proteger dados, sistemas e informações digitais.";

    } else if (area === "game") {
        descricao.innerHTML =
            "🎮 Game Designer: área responsável por planejar jogos, personagens, desafios e histórias.";

    } else if (area === "computacao") {
        descricao.innerHTML =
            "💻 Ciência da Computação: área que estuda programação, algoritmos, softwares e computadores.";
    }

    document.querySelector("#resultado").scrollIntoView({
        behavior: "smooth"
    });
}

console.log(unidadeEscolhida(0));
console.log(unidadeEscolhida(1));
console.log(unidadeEscolhida(2));