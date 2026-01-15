console.log("This is guess the number project")
let randomValue = 10;

let guess = ()=>{
    let input = document.getElementById('num');
    let val =  input.value;
    input.value = '';
    let elem = document.getElementsByClassName('container')[0];
    let insertElem = document.createElement('div');
    insertElem.className = "new";    
    if(val == randomValue){

    } else{
        if(val > randomValue){
            insertElem.innerHTML = `<p>Your guess is too large</p>`;
            elem.append(insertElem);
        }else{
            insertElem.innerHTML = `<p>Your guess is too small</p>`;
            elem.append(insertElem);
        }
    }
}