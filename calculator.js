// Function of C
function clearResult(){
    document.getElementById('result').value = '';
}

// Function of DEL
function clearLast(){
    var result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
} 

// Appending value to result
function appendToResult(value){
    document.getElementById('result').value += value;
}

// To Calculate result
function calculateResult(){
    var result = document.getElementById('result').value;
    var finalresult = eval(result);
    document.getElementById('result').value = finalresult;
}