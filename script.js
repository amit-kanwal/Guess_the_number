console.log("This is guess the number project")
function getRandomInt(max){
    return Math.floor(Math.random() * (max +1));
}
let randomValue = getRandomInt(100);
console.log(randomValue)

let attempt = 0;
const mxAttempt = 10;
let arr = [];

function showGuess(){
    let element = document.getElementsByClassName("guessed")[0];
    element.innerHTML = `You guessed: ${arr}`;
}

let guess = ()=>{
    let input = document.getElementById('num');
    const elem = document.getElementsByClassName('result')[0];
    elem.style.display = "block";
    if(attempt >= mxAttempt){
        input.value = "";
        input.disabled = true;
        elem.innerHTML = `<p>You have crossed maximum limit of attempts.</p>`
        return;
    }
    attempt++;
    let val =  input.value;
    arr.push(val);
    input.value = '';
    if(val == randomValue){
        elem.innerHTML = `<p>Your guess is right</p>`;
        elem.style.background = "green";
        elem.style.border = "2px solid green";
        input.disabled = true;
    } else{
        if(val > randomValue){
            elem.innerHTML = `<p>Your guess is too large</p>`;
        }else{
            elem.innerHTML = `<p>Your guess is too small</p>`;
        }
    }

    // setTimeout(()=>{
    //     elem.style.display = "none";
    // }, 10000)
    showGuess();
}