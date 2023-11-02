let btn = document.querySelector("#btn");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");

// let serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

let serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"


function translateYoda(text) {
        return  serverURL + "?" + "text=" + text;
}

function errorHandler(err) {
        console.log(`error: ${err}`);
        alert("something went wrong, please try again");
}

function clickHandle() {    
        let inputText = txtInput.value; //taking input

        // calling server for processing
        fetch(translateYoda(inputText))
        .then(response => response.json())
        .then(json => {
                let translatedTxt = json.contents.translated
                outputDiv.innerText = translatedTxt  // output
        })
        .catch(errorHandler)
}

btn.addEventListener("click", clickHandle);
