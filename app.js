let btn = document.querySelector("#btn");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

function clickHandle() {    
        outputDiv.innerText = `output: ${txtInput.value}`;
}

btn.addEventListener("click", clickHandle);
