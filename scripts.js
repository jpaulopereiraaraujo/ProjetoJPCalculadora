//Adiciona números ao display
function addNum(num){
    if(typeof globalDisplay =='undefined'){
        document.calculator.display.value='';
    }
    document.calculator.display.value = document.calculator.display.value + num;
    globalDisplay = 0;
}

//Função para global>local(resultado)
function calcInput(operator) {
    var value = document.calculator.display.value;
    delete globalDisplay;

    if ( typeof globalOperator != 'undefined' &&  operator == 'resultado'){
        globalValue = calcOperator(globalOperator, globalValue, value);
        document.calculator.display.value = globalValue;
        delete operator;
        delete globalValue;
    }

    if (typeof globalValue != 'undefined'){
        globalValue = calcOperator(globalOperator, globalValue, value);
        globalOperator = operator;
        document.calculator.display.value = globalValue;
    } else {
        globalValue = value;
        globalOperator = operator;
    }

}

//Operações Básicas

function calcOperator(operator, value1, value2){
    if (operator == "soma"){
        var value = parseFloat(value1) + parseFloat(value2);
    }else{
        if(operator == "subtrai"){
            var value = parseFloat(value1) - parseFloat(value2);
        } else {
            if (operator == "multiplica"){
                var value = parseFloat(value1) * parseFloat(value2);
            } else {
                var value = parseFloat(value1)/parseFloat(value2);
            }
        }
    }
    return (value);
}

//Função para AC

function calcClear() {
    document.calculator.display.value='';
    delete globalValue;
    delete globalDisplay;
    delete globalOperator;
}