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
    
    //Esse laço realiza o tratamento da string, verificando se os números e operadores
    //estão ok e pre parando-a para se tornar um array [numero, operador, numero]
    while (valueArray.length > i)
    {
        console.log(i);
        if (isNaN(valueArray[i]) == false || '+-÷/*x.'.includes(valueArray[i]) == true)
        {
            //Atenção o ponto primeiro é tratado como operador apenas para ser validado
            //logo após o ponto é tratado como número para que possa ser feita operações
            //decimais.

             if (isNaN(valueArray[0]) == true ){
                alert('Atenção, a operação começa com um número e não com um operador')
                calcLimpar();
                break;    
            } else {
                if ('0123456789.'.includes(valueArray[i]) == true){
                    //Verifica se o usuário digitou mais de um ponto.
                    if (valueArray[i+1] == '.' || valueArray[i-1] == '.'){
                        alert('Atenção, utilize apenas um ponto por número.')
                        calcLimpar();
                        break;
                    } else {
                        stringArray = stringArray + valueArray[i];
                    }
                    
                }
                if ('+-÷/*x'.includes(valueArray[i]) == true ) {
                    
                    //Tratamento para dois ou mais operadores
                    if (valueArray[i] == valueArray[i-1] || valueArray[i] == valueArray[i+1] ){
                        alert('Atenção, a operação permite apenas 1 operador em sequencia.')
                        calcLimpar();
                        break;
                    } else {
                        stringArray = stringArray  + ',' + valueArray[i] + ',';
                    }
                    
                }
            }
                    
        }   
         else 
        {
            alert('Atenção use apenas os caracteres de operação e números!!!')
            calcLimpar();
            break;
            
        }
        
        i++;
        
    }

    //funções de operação
    //O parseFloat converte string em float

    function soma(a,b){
        resSoma = parseFloat(a) + parseFloat(b)
        return resSoma;
    }

    function subtrair(a,b){
        resSubtrair = parseFloat(a) + parseFloat(b)
        return resSubtrair;
    }

    function multiplicar(a,b){
        resMultiplicar = parseFloat(a) * parseFloat(b)
        return resMultiplicar;
    }

    function dividir(a,b){
        resDividir = parseFloat(a) / parseFloat(b)
        return resDividir;
    }
    
    
    //refinedArray é a string organizada como array separada por número e operação.
    refinedArray = stringArray.split(',')
    console.log(refinedArray);
    j = 0;
    
    //Esse if irá percorrer o array em busca de um operador para definir a operação
    if (valueArray.lengh == (i + 1)) {

        while ( j < refinedArray.lengh ) {
        
        if ('+-÷/*x'.includes(refinedArray[j]) == true){
            

        }
    }
    
    }

}


