var madLibs = function() {

    var name = document.getElementById("name").value;
    var noun = document.getElementById("noun").value;
    var adjective = document.getElementById("adjective").value;
    var verb = document.getElementById("verb").value;
    var answerDiv = document.getElementById("answer");

    answerDiv.innerHTML = name + " " + verb + " a " + adjective + " " + noun + " ";
}