//Adiciona valores ao display
function readValue(valor){
    document.calculator.display.value = document.calculator.display.value + valor;
}

//Limpa o display
function calcLimpar(){
    document.calculator.display.value ='';
}

//Convertendo a string em array

function tratamentoString(disp){
    displayValue = disp;
    valueArray = Array.from(disp);
}


//Função Calcular Resultado, tratamento da string e reorganização para cálculo

function calcResultado(){
    document.calculator.outdisplay.value = document.calculator.display.value + " = " + " resultado";
    tratamentoString(document.calculator.display.value)
     
    i = 0;
    stringArray ='';
    while (valueArray.length > i)
    {
        console.log(i);
        if (isNaN(valueArray[i]) == false || '+-÷/*x'.includes(valueArray[i]) == true)
        {
            
             if (isNaN(valueArray[0]) == true ){
                alert('Atenção, a operação começa com um número e não com um operador')
                calcLimpar();
                i=valueArray.lengh + 1;    
            } else {
                if ('0123456789'.includes(valueArray[i]) == true){
                    stringArray = stringArray + valueArray[i];
                }
                if ('+-÷/*x'.includes(valueArray[i]) == true ) {
                    stringArray = stringArray  + ',' + valueArray[i] + ',';
                }
            }
                    
        }   
         else 
        {
            alert('Atenção use apenas os caracteres de operação e números!!!')
            calcLimpar();
            i=valueArray.lengh + 1;
        }
        
        i++;
        
    }
    refinedArray = stringArray.split(',')
    console.log(refinedArray);
    j = 0;
    while ( j < refinedArray.lengh ) {
        
    }

}


