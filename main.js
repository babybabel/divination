function generateWords() {
    let rm = RiTa.markov(2);
    rm.addText(artistConk)
    let sentences = rm.generate(1);
    document.querySelector("#generated").innerHTML = sentences;
}

document.addEventListener("DOMContentLoaded", function(){

    document.querySelector('img').addEventListener("click", generateWords);
    
})
