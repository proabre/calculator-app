const display=document.getElementById("display");

function appendToDisplay(input){

    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){

    try{
        display.value = eval(display.value);
    }catch(e){
        display.value = "Error";
    }
}

function deleteLast(){
     if (display.value.length === 1) {
        display.value = " ";
    } else {
        display.value = display.value.slice(0, -1);
    }
}