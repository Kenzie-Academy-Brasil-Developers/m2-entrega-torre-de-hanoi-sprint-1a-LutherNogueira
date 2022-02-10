/*
Você precisa fazer o jogador clicar duas vezes para cada movimento: primeiro para selecionar a torre de origem, e depois para selecionar a torre de destino. Use uma variável para registrar qual modo o jogador está.
Adicione um handler de clique em cada uma das três torres. Use event.currentTarget dentro do handler de evento para determinar qual torre foi clicada.
Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.
Use a propriedade DOM lastElementChild para saber qual é o disco no topo da torre.
Use o método DOM appendChild() para adicionar um disco a uma torre . Observe que quando você usa appendChild em um elemento que já tem um pai, ele é automaticamente removido do pai anterior e adicionado no novo.
Use a propriedade Element.clientWidth para pegar o tamanho dos discos.
*/


let holdedDisc = null
let levelDificult = null

/* FUNÇÕES DE CRIAÇÂO 
criar torres classe .towerColumn
criar discos classe .disc
aumentar o width dos discos conforme quantidade
mudar a cor dos discos conforme quantidade
*/
function createDisc(level)
{
    reset()

    const firstTower = document.getElementById("tower0");

    let width = 220
    let colorR = 100
    let colorG = 0

    firstTower.innerHTML = '';

    const str = 'Clique na torre com o disco que deseja mover, depois na torre destino'
    userMsg(str)

    levelDificult = level

    for(let i = 0;i<level;i++){
        const newDisc = document.createElement("div")

        newDisc.classList.add("disc")
        newDisc.id = "disc"+i

        let discWidth = `${width}px`
        let discColor = `rgb(${colorR}, ${colorG}, 255)`

        newDisc.style.width = discWidth
        newDisc.style.background = discColor

        firstTower.appendChild(newDisc)

        width -= 20
        colorR += 20
        colorG += 50
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
        newTower.addEventListener("click", holdDisc);            
    }

    
}
createTowers()


/*
FUNÇÕES DE MOVIMENTO

Selecionar a torre
capturar o primeiro disco da torre

Selecionar segunda torre
transferir disco capturado
*/


function holdDisc(event){
    let clickedTarget = event.target.closest(".towerColumn") //aticiona o elemento mais proximo do clique que tenha a classe .towerColumn

    const thirdTower = document.getElementById("tower2") //verificar condição de vitória da terceira torre

    if(holdedDisc===null){ // Se variavel que "segura" o disco está vazia
        holdedDisc = clickedTarget.lastElementChild //"recebe" o ultimo elemento que está na torre
    }
    else if(clickedTarget.childElementCount === 0 || holdedDisc.clientWidth < clickedTarget.lastElementChild.clientWidth){ //Se não houver disco na torre ou o disco for menor que o da variavel
        clickedTarget.appendChild(holdedDisc) //coloca o disco na torre
        holdedDisc = null // muda a variavel para vaiz
    }
    if(thirdTower.childElementCount === levelDificult){
        const msg = 'Parabéns!!! Você resolveu a Torre de Hanoi!'
        userMsg(msg)
    }
}


function createMsg(){
    const spanMsg = document.querySelector(".sectionMsg")
    const newMsg = document.createElement("span")
    newMsg.classList.add("spanMsg")
    spanMsg.appendChild(newMsg)
}
createMsg()
userMsg('Escolha a Dificuldade')

function userMsg(msg){
    const newMsg = document.querySelector(".spanMsg")
    newMsg.innerText = msg
}


/* BONUS
Contador de movimentos: Crie um contador que demostras quantas vezes o jogador mudou o disco de torre
Função Reset: Crie uma função (um botão na aplicação) que reseta todos os dados, ou seja, trazer todos os dados do jogo para o início. Lembrando que resetar os dados diferem de dar reload na página. Não use reload.
Mensagem de vitória: Crie uma função que quando um jogador ganhar apareça uma mensagem na tela demostrando quando completar o objetivo. Não usar Alert.
Níveis de dificuldade: Crie um seletor de dificuldade, do mais básico (3 discos) até onde preferir, aconselhamos até no máximo 5 discos.
*/

function reset(){
    //const reset = document.querySelector(".towerColumn")
    //console.log(reset)
    //reset.innerText = '';
    const thirdTower = document.getElementById("tower2")
    const secondTower = document.getElementById("tower1")
    const firstTower = document.getElementById("tower0")
    thirdTower.innerText = '';
    secondTower.innerText = '';
    firstTower.innerText = '';

    const str = 'Escolha a Dificuldade'
    userMsg(str)

}
