/*
Você precisa fazer o jogador clicar duas vezes para cada movimento: primeiro para selecionar a torre de origem, e depois para selecionar a torre de destino. Use uma variável para registrar qual modo o jogador está.
Adicione um handler de clique em cada uma das três torres. Use event.currentTarget dentro do handler de evento para determinar qual torre foi clicada.
Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.
Use a propriedade DOM lastElementChild para saber qual é o disco no topo da torre.
Use o método DOM appendChild() para adicionar um disco a uma torre . Observe que quando você usa appendChild em um elemento que já tem um pai, ele é automaticamente removido do pai anterior e adicionado no novo.
Use a propriedade Element.clientWidth para pegar o tamanho dos discos.
*/

/* LISTENERS */
const selectTower = document.querySelector(".towerContainer");
selectTower.addEventListener("click", holdDisc);

const thirdTower = document.getElementById("tower2");


let holdedDisc = null

/* FUNÇÕES DE CRIAÇÂO 
criar torres classe .towerColumn
criar discos classe .disc
*/
function createDisc(level)
{
    const firstTower = document.getElementById("tower0");
    let width = 220
    let discWidth = `${width}px`
    for(let i = 0;i<level;i++){
        const newDisc = document.createElement("div")
        newDisc.classList.add("disc")
        newDisc.id = "disc"+i
        discWidth = `${width}px`
        console.log(discWidth)
        newDisc.style.width = discWidth
        firstTower.appendChild(newDisc)
        width -= 20
    }
}

function createTowers()
{
    const towerContainer = document.querySelector(".towerContainer")
    
    for(let i = 0;i<3;i++){
        const newTower = document.createElement("div")
        newTower.classList.add("towerColumn")
        newTower.id = "tower"+i
        towerContainer.appendChild(newTower)
        const barras = document.querySelectorAll(".torre")          
    }
}
createTowers()
createDisc(5)
/*
FUNÇÕES DE MOVIMENTO

Selecionar a torre
capturar o primeiro disco da torre

Selecionar segunda torre
transferir disco capturado
*/


function holdDisc(event){
    let clickedTarget = event.target.closest(".towerColumn");

    if(holdedDisc===null){
        holdedDisc = clickedTarget.lastElementChild
        console.log("hold " + holdedDisc.clientWidth)
    }
    else if(clickedTarget.childElementCount === 0 || holdedDisc.clientWidth < clickedTarget.lastElementChild.clientWidth){
        clickedTarget.appendChild(holdedDisc)
        holdedDisc = null
    }

    if(thirdTower.childElementCount === 3){
        console.log("Todos os discos estão na ultima torre") 
    }
}

function verifyTower(){
    if(thirdTower.childElementCount === 3){
        console.log("Todos os discos estão na ultima torre")        
    }
}

function userMsg(){

}







/* BONUS

Contador de movimentos: Crie um contador que demostras quantas vezes o jogador mudou o disco de torre
Função Reset: Crie uma função (um botão na aplicação) que reseta todos os dados, ou seja, trazer todos os dados do jogo para o início. Lembrando que resetar os dados diferem de dar reload na página. Não use reload.
Mensagem de vitória: Crie uma função que quando um jogador ganhar apareça uma mensagem na tela demostrando quando completar o objetivo. Não usar Alert.
Níveis de dificuldade: Crie um seletor de dificuldade, do mais básico (3 discos) até onde preferir, aconselhamos até no máximo 5 discos.

const btnReset = document.querySelector(".btnReset");
btnReset.addEventListener("click", reset)

function reset(){
    
}
*/
