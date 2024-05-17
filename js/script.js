import tasks from "../data/tasks.js";

const play = document.getElementById('main');
const nav = document.getElementById('topNav')
// const baseURL = 'http://localhost:9876'
console.log(tasks);

function playClick(e){
    if(e.target.nodeName != 'DIV') return;
    if(!e.target.classList.contains('complete')){
        e.target.classList.toggle('complete');
    }
    console.log(e.target.id)
}
function navClick(e){
    if(e.target.nodeName != 'LI') return;
    clearPlay();
    switch(e.target.id){
        case 'home':
            buildHome();
            break;
        case 'card':
            buildBingo();
            break;
        case 'suggestion':
            // buildSuggest();
            break;
    }
    if(!e.target.classList.contains('complete')){
        e.target.classList.toggle('complete');
    }
    console.log(e.target.nodeName)
}
function clearPlay(){
    while(play.lastElementChild) play.lastElementChild.remove();
}
function buildSuggest(){

}
function buildBingo(){
    for(let x=0;x<3;x++){
        const row = document.createElement('section')
        row.classList.add('row')
        for(let y=1;y<=3;y++){
            const bingo = document.createElement('div')
            const ID = `t${(x*3)+y}`;
            bingo.setAttribute('id',ID)
            bingo.innerText = `Row ${x+1} Box ${y+1}`;
            console.log(ID);
            row.appendChild(bingo);
        }
        play.appendChild(row);
    }
}

play.addEventListener('click',playClick)
nav.addEventListener('click',navClick)