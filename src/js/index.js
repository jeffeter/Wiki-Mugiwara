const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem"); 

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarpersonagem();

        botao.classList.add("selecionado");
        personagens[i].classList.add("selecionado");
        
    })
});



function desselecionarpersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

