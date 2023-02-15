var inputText = document.querySelector("#textinput");
var button = document.querySelector("#translate");
var outputText = document.querySelector("#Translated");
//the above things access the elements from the Html;

var Apiurl = "https://api.funtranslations.com/translate/minion.json";

function getTranslated(text) {
    return Apiurl + "?" + "text=" + text;

}

function errorHandler(error) {
    console.log("error", error);
    alert("error in the webiste, Try again later ")

}


function buttonClick() {
    var iptext = inputText.value;
    fetch(getTranslated(iptext))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler);
}
button.addEventListener("click", buttonClick);