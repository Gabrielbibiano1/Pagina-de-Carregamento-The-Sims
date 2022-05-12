function intervalo1(){
    setTimeout(function() {
        frases1();
    },2900); 
}

function intervalo2(){
    setTimeout(function() {
        frases2();
        setTimeout(function() {
            done();
        },2900); 
    },2900); 

}

function showBarProgress(){
    document.querySelector(".conteiner").style.display = "block";
    document.querySelector(".conteiner").style.visibility = "visible";
}

function play(){
    showBarProgress();
    const progressBar = document.querySelector(".progress-bar");
    progressBar.setAttribute("id", "play-animation");
    document.getElementById("texto").innerHTML = "Levantando casas...";

    intervalo1();

    setTimeout(function() {
        intervalo2();
    },3000);
}

function frases1(){
    if(document.getElementById("texto").innerHTML = "Levando Sims para suas casas..."){
        setTimeout(function() {
            document.getElementById("texto").innerHTML = "Tirando o lixo das ruas...";
    },3000);
    }else{
        console.log("erro");
    }
}

function frases2(){
    if(document.getElementById("texto").innerHTML = "Tirando o lixo das ruas..."){
    setTimeout(function() {
            document.getElementById("texto").innerHTML = "Levando os cachorros para passear...";
    },3000);
    }else{
        console.log("erro");
    }
}

function done(){
    setTimeout(function() {
        document.getElementById("texto").innerHTML = "Pronto para jogar!";
        setTimeout(function() {
            document.querySelector(".frases__Aleatorias").style.visibility = "hidden";
            document.querySelector(".progress-bar").style.visibility = "hidden";
            document.querySelector(".conteiner").style.visibility = "hidden";
        },3000);
    },3000);
}


