import tasks from "../data/tasks.js";
const play = document.getElementById('main');
const nav = document.getElementById('topNav')
const baseURL = 'http://localhost:9876'
const card = await getCard();
buildHome();

function playClick(e){
    if(e.target.nodeName != 'DIV') return;
    if(!e.target.classList.contains('complete')){
        e.target.classList.toggle('complete');
        card[Number(e.target.id.slice(-1))-1].completed = true;

    }
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
        case 'details':
            buildDetails();
            break;
    }
}
function clearPlay(){
    while(play.lastElementChild) play.lastElementChild.remove();
}
function buildHome(){
    const newForm = document.createElement('form');
    newForm.style.width = '300px';
    const userLabel = document.createElement('label');
    userLabel.classList.add('row')
    userLabel.style.marginLeft = 'auto'
    userLabel.innerText = "User Name";
    const userName = document.createElement('input');
    const passLabel = document.createElement('label');
    passLabel.classList.add('row')
    passLabel.style.marginLeft = 'auto'
    passLabel.innerText = "Password";
    const password = document.createElement('input');
    password.setAttribute('type','password')
    const div = document.createElement('div');
    div.classList.add('row')
    div.style.justifyContent = 'center';
    const submit = document.createElement('button');
    submit.innerText = "SaveCard";
    submit.style.marginLeft = 'auto';
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        buttonClick(e,userName.value,password.value)
    });
    userLabel.appendChild(userName);
    newForm.appendChild(userLabel);
    passLabel.appendChild(password);
    newForm.appendChild(passLabel);
    div.appendChild(submit);
    newForm.appendChild(div);
    play.appendChild(newForm);
}
function buildDetails(){
    if(!play.classList.contains("column")) play.classList.toggle("column");
    for(let x=0;x<9;x++){
        const column = document.createElement('ul');
        column.classList.add('column')
        x%2 === 0 ? column.style.background = 'var(--Hydro)' : column.style.background = 'var(--Pyro)';
        if (card[x].completed) continue;
        const title = document.createElement('li')
        title.classList.add('row')
        title.innerText = card[x].title;
        const desc = document.createElement('li')
        desc.classList.add('row')
        desc.innerText = card[x].description;
        column.appendChild(title);
        column.appendChild(desc);
        play.appendChild(column);
    }
}
function buildBingo(){
    for(let x=0;x<3;x++){
        const row = document.createElement('section')
        row.classList.add('row')
        for(let y=1;y<=3;y++){
            const bingo = document.createElement('div')
            const ID = `t${(x*3)+y}`;
            bingo.setAttribute('id',ID)
            bingo.style.width = '180px'
            bingo.innerText = card[((x*3)+y-1)].title;
            if(card[((x*3)+y-1)].completed) bingo.classList.toggle('complete');
            row.appendChild(bingo);
        }
        play.appendChild(row);
    }
}
async function getCard(){
    const result = await fetch(baseURL+'/card');
    const newCard = await result.json();
    return newCard;
}
async function buttonClick(e,usr,pass){
    
    console.log(e);
    console.log(usr);
    console.log(pass);
}
play.addEventListener('click',playClick)
nav.addEventListener('click',navClick)