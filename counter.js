var counter=0;
function increase(){
    counter=counter+1;
    document.getElementById('counter').innerText=counter;
}
function decrease(){
    counter=counter-1;
    document.getElementById('counter').innerText=counter;
}
function reset(){
    counter=0;
    document.getElementById('counter').innerText=counter;
}