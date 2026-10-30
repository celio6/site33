
const botaoIniciar = document.querySelector(".iniciar-btn");

const telaInicial = document.querySelector(".tela-inicial");

const telaCursos = document.querySelector(".tela-cursos");

const botaoNovamente = document.querySelector(".novamente-btn");

const descricao = document.querySelector("#descricao");

// Evento para iniciar
botaoIniciar.addEventListener("click", iniciaJogo);

// Função para iniciar o jogo
function iniciaJogo() {
    telaInicial.style.display = "none";

    telaCursos.style.display = "block";
}

// Informações das áreas
function mostrarInfo(area) {

    if (area === "seguranca") {

        descricao.innerHTML =
            "🔐 Segurança da Informação: você aprenderá a proteger dados, senhas, sistemas e informações contra ameaças digitais.";

    } else if (area === "game") {

        descricao.innerHTML =
            "🎮 Game Designer: você poderá criar jogos, personagens, desafios e histórias incríveis.";

    } else if (area === "computacao") {

        descricao.innerHTML =
            "💻 Ciência da Computação: você conhecerá programação, algoritmos, softwares e o funcionamento dos computadores.";
    }
}

// Evento para voltar ao início
botaoNovamente.addEventListener("click", jogarNovamente);

function jogarNovamente() {

    telaCursos.style.display = "none";

    telaInicial.style.display = "block";

    descricao.innerHTML =
        "Escolha uma das áreas acima.";
}
