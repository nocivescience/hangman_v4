const playAgain=document.querySelector('.play-btn');
const finalMessage=document.querySelector('.final-message');
const wordEl=document.querySelector('.word');
const partEl=document.querySelectorAll('.part');
const wrongLetterEl=document.querySelector('.wrong-letter');
let correctLetters=[];
let wrongLetters=[];
const words=['hola','mundo','como','estas','por','alla'];
let selectedWord=words[Math.floor(Math.random()*words.length)];
console.log(selectedWord);
function displayWord(){
    wordEl.innerHTML=`
        ${
            selectedWord
            .split('')
            .map(
                letter=>`
                    <span class="letter">
                        ${correctLetters.includes(letter)?letter:''}
                    </span>
                `
            ).join('')
        }
    `;
    console.log(wordEl)
}
function updateWrongLetterEl(){
    wrongLetterEl.innerHTML=`
            ${wrongLetters.length>0?'<p>Te equivocaste</p>':''}
    `;
};
function showNotification(){
    console.log('hola mundo')
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
        if(selectedWord.includes(e.key)){
            if(!correctLetters.includes(e.key)){
                correctLetters.push(e.key);
                displayWord()
            }else{
                updateWrongLetterEl()
            }
        }else{
            showNotification()
        }
    }
});
playAgain.addEventListener('click',()=>{
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord=words[Math.floor(Math.random()*words.length)];
})