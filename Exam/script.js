const progressBar = document.getElementById("progress");
let yourHealth =  document.getElementById("mHealth");
let monsHealth =  document.getElementById("mHealth");

function attack(){
    let x=Math.floor(Math.random()*10);
    let y=Math.floor(Math.random()*10);

    monsHealth.value -=x;
    yourHealth.value -=y;

    document.getElementById("test1").innerHTML="Player attack"+x;
    document.getElementById("test2").innerHTML="Player attack"+y;

}