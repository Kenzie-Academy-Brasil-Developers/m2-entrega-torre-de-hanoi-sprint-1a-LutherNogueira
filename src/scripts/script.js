/*
Você precisa fazer o jogador clicar duas vezes para cada movimento: primeiro para selecionar a torre de origem, e depois para selecionar a torre de destino. Use uma variável para registrar qual modo o jogador está.
Adicione um handler de clique em cada uma das três torres. Use event.currentTarget dentro do handler de evento para determinar qual torre foi clicada.
Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.
Use a propriedade DOM lastElementChild para saber qual é o disco no topo da torre.
Use o método DOM appendChild() para adicionar um disco a uma torre . Observe que quando você usa appendChild em um elemento que já tem um pai, ele é automaticamente removido do pai anterior e adicionado no novo.
Use a propriedade Element.clientWidth para pegar o tamanho dos discos.
*/
const towerColumn = document.querySelector(".towerColumn")
towerColumn.addEventListener("click", moveDisc)


/* 
Selecionar a torre
capturar o primeiro disco da torre

Selecionar segunda torre
transferir disco capturado
*/


function moveDisc(fromTower,toTower){
    console.log(event.currentTarget);
    
    //document.getElementById(fromTower).appendChild(toTower);

}

function verifyTower(tower){
    
    //Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.
}

function reset(){
    const btnReset  = event.target
}

function createDisc(dificulty)
{
   // document.createElement
   // document.getElementsByClassName('disc').style

}


/* BONUS

Contador de movimentos: Crie um contador que demostras quantas vezes o jogador mudou o disco de torre
Função Reset: Crie uma função (um botão na aplicação) que reseta todos os dados, ou seja, trazer todos os dados do jogo para o início. Lembrando que resetar os dados diferem de dar reload na página. Não use reload.
Mensagem de vitória: Crie uma função que quando um jogador ganhar apareça uma mensagem na tela demostrando quando completar o objetivo. Não usar Alert.
Níveis de dificuldade: Crie um seletor de dificuldade, do mais básico (3 discos) até onde preferir, aconselhamos até no máximo 5 discos.

*/