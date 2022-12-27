let resultBox = document.getElementById('result');
let reset = document.getElementById('reset');
let buttons = document.querySelectorAll('button');
let equal = document.getElementById('equal');
let del = document.getElementById('del');

buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
         let value = e.target.dataset.num;
         resultBox.value += value;
    })
})

equal.addEventListener('click',function(e){
    if(resultBox.value === ""){
        resultBox.value = "";
    }else{
        let answer = eval(resultBox.value);
        resultBox.value = answer;
    }
})

function clearBox(){
    resultBox.value = "";
}

del.style.display = 'none'





