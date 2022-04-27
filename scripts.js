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


//Função Calcular Resultado

function calcResultado(){
    document.calculator.outdisplay.value = document.calculator.display.value + " = " + " resultado";
    tratamentoString(document.calculator.display.value)
    //document.calculator.outdisplay.value = string1;
    i = 0;
    while (valueArray.length > i)
    {
        console.log(i);
        if (isNaN(valueArray[i]) == false)
        {
            console.log("Tudo ok")
    
    
        }
            
         else 
        {
            console.log(valueArray[i] + ' não é número')
    }
        
        i++;
        
    }
    
    console.log(valueArray);

}


