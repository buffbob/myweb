let prevVal = "";
let newVal = "";
let resultVal = "";
let valMemStored = "";
let mathOperator = "";
let decimalClicked = false;

function numButPress(num){
    // check if num already stored
    if(resultVal){
        newval = num;
        resultVal = "";
    }else{
        if(num==="."){
            if (decimalClicked != true){
                decimalClicked = true;
                newVal+=num;
            }else{
                console.log("you can only click once!");
            }
        } else {
            newVal+=num;
        }   
    }
    let ele = document.getElementById('entry');
    ele.value = newVal;
}
function equalButPress(){
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch(mathOperator){
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        // if equal hit without operator nothing happens
        default:
            resultVal = newVal;
    }
        // store result val as previous
        prevVal = resultVal;
        document.getElementById("entry").value = resultVal;
}

function mathButPress(operator){
    // check if previous calculation
    if (!resultVal){
        prevVal = newVal;
    }else{
        prevVal = resultVal;
    }
    // reset
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = '';
    document.getElementById('entry').value = "0";
}

function pasteButPress(){
    if (valMemStored){
        let element = document.getElementById("entry");
        element.value = valMemStored;
        console.log(valMemStored);
    }

}

function copyButPress(){
    valMemStored = document.getElementById("entry").value;
    console.log(valMemStored);

}

function clearButPress(){
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";
}


function init(){
    let doob = "doob";
    let doc = document.getElementById("playout");
    doc.textContent = doob;
}

