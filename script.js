const playAgain=document.querySelector('.play-btn');
const finalMessage=document.querySelector('.final-message');
const wordEl=document.querySelector('.word');
const partEl=document.querySelectorAll('.part');
const wrongLetterEl=document.querySelector('.wrong-letter');
const popupEl=document.querySelector('.popup');
let correctLetters=[];
let wrongLetters=[];
const rechazo='rechazo'
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
    const innerWord=wordEl.innerText.replace(/\n/g,'');
    if(innerWord===selectedWord){
        finalMessage.innerText='Has ganado Campeón';
        popupEl.style.display='flex';
        popupEl.style.flexDirection='column';
        popupEl.style.justifyContent ='center';
        popupEl.style.alignItem='center';
    }
}
function updateWrongLetterEl(){
    wrongLetterEl.innerHTML=`
        ${wrongLetters.length>0?'<p class="bg-info bg-gradient">Te equivocaste</p>':''}
        ${wrongLetters.map(letter=>`<span>${letter}</span>`)}
    `;
    partEl.forEach((part,index)=>{
        const errors=wrongLetters.length;
        if(index<errors){
            part.style.backgroundColor='red';
            part.classList.add('moving')
            part.innerText=rechazo[index];
        }
        if(wrongLetters.length===partEl.length){
            finalMessage.innerText='has perdido :('
        }
    })
};
function showNotification(){
    console.log('hola mundo');
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
                showNotification()
            }
        }else{
            if(!wrongLetters.includes(e.key)){
                wrongLetters.push(e.key)
                updateWrongLetterEl()
            }else{
                showNotification();
            }
        }
    }
});
playAgain.addEventListener('click',()=>{
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord=words[Math.floor(Math.random()*words.length)];
    displayWord();
    updateWrongLetterEl();
    partEl.forEach((part,index)=>{
        part.style.backgroundColor='rgb(0, 136, 255)';
            part.classList.remove('moving')
            part.innerText='';
    })
})
displayWord()