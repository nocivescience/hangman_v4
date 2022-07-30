const playAgain=document.querySelector('.play-btn');
const finalMessage=document.querySelector('.final-message')
let correctLetters=[];
let wrongLetters=[];
const words=['hola','mundo','como','estas','por','alla'];
let selectedWord=words[Math.floor(Math.random()*words.length)];
function updateWrongLetterEl(){
    finalMessage.innerText='you lost :('
};
playAgain.addEventListener('click',()=>{
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord=words[Math.floor(Math.random()*words.length)];
})
window.addEventListener('keydown',(e)=>{
    if(
        e.key==='a'||
        e.key==='b'||
        e.key==='c'||
        e.key==='d'||
        e.key==='e'||
        e.key==='f'||
        e.key==='g'||
        e.key==='h'||
        e.key==='i'||
        e.key==='j'||
        e.key==='k'||
        e.key==='m'||
        e.key==='n'||
        e.key==='l'||
        e.key==='o'||
        e.key==='p'||
        e.key==='q'||
        e.key==='r'||
        e.key==='s'||
        e.key==='u'||
        e.key==='t'||
        e.key==='x'||
        e.key==='y'||
        e.key==='z'
    ){
        if(!correctLetters.includes(e.key)){
            correctLetters.push(e.key)
        }else{
            wrongLetters.push(e.key)
        }
    }
    console.log(correctLetters)
    console.log(wrongLetters)
})