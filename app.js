var translateBtn = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#input-text-area")
var outputDiv = document.querySelector("#output-text-area")

var serverURL = "	https://api.funtranslations.com/translate/minion.json"
// outputDiv.innerText = "Rishabh"

function getTranslationURL(text) {
    return serverURL +  "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error Occured!", error);
    alert("Something is wrong with the server!")

}

function clickHandler(){
    // outputDiv.innerText = "HAHAHAHHAHAHA"
    // console.log(txtInput.value)

    var InputText = txtInput.value; //taking input

    // calling server for processing
    fetch(getTranslationURL(InputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}
translateBtn.addEventListener("click", clickHandler)
