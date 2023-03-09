const wordText=document.querySelector(".word"),
hintText=document.querySelector(".hint span"),
timeText=document.querySelector(".time b"),
inputField=document.querySelector("input"),
refreshBtn=document.querySelector(".refresh-word"),
checkBtn=document.querySelector(".check-word");

let correctWord,timer;

const initTimer=maxTime=>{
    clearInterval(timer);
    timer=setInterval(()=>{
        if(maxTime>0){
            maxTime--;
            return timeText.innerText=maxTime;
        }
        clearInterval(timer);
        alert(`Times off, ${correctWord} was the correct word`);
        initGame();
    },1000);
}

const initGame=()=>{
    initTimer(30);
    let randomObj=words[Math.floor(Math.random()*words.length)];//getting random object form words
    let wordArray=randomObj.word.split("");//splitting each letter of random word
    for(let i=wordArray.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));//getting random number
        //shuffling and swiping wordArray letters randomly
        [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];
    }
    wordText.innerText=wordArray.join("");//passing shuffled word as a word text
    hintText.innerText=randomObj.hint;//passing random object hint as hint text
    correctWord=randomObj.word.toLowerCase();//passing random word to correctWord
    inputField.value="";
    inputField.setAttribute("maxlength",correctWord.length);
}
initGame();
const checkWord=()=>{
    let userWord=inputField.value.toLowerCase();//getting user value
    if(!userWord) return alert(`Please enter a word to check`);
    if(userWord!==correctWord) return alert(`Oops! ${userWord} is not a correst word`);
    alert(`Congrats! ${userWord.toLowerCase()} is the correct word`);
    initGame();
}
refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);
