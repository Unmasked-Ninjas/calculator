const disp = document.querySelector("#display");
const adddisplay = (input) =>{
    disp.value += input;
} 
const cleardisplay = () =>{
    disp.value = " ";
}
const calculate = () =>{
   
    try{
    disp.value = eval(disp.value);
    }
    catch{
        disp.value = "Syntax Error";
    }
}

const removelast = () =>{
    disp.value = disp.value.slice(0,-1);
}

