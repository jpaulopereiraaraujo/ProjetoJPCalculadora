//Adiciona valores ao display
function readValue(valor){
    document.calculator.display.value = document.calculator.display.value + valor;
}

//Limpa o display
function calcLimpar(){
    document.calculator.display.value ='';
}
function backSpace() {
    oldTxt = document.calculator.display.value
    newTxt = oldTxt.substring(0, oldTxt.length -1);
    document.calculator.display.value = newTxt;
}
//Convertendo a string em array

function tratamentoString(disp){
    displayValue = disp;
    valueArray = Array.from(disp);
}


//Função Calcular Resultado, tratamento da string e reorganização para cálculo

function calcResultado(){
    document.calculator.outdisplay.value = document.calculator.display.value + " = " +  "resultado";
    tratamentoString(document.calculator.display.value)
     
    i = 0;
    stringArray ='';
    
    //Esse laço realiza o tratamento da string, verificando se os números e operadores
    //estão ok e pre parando-a para se tornar um array [numero, operador, numero]
    while (valueArray.length > i)
    {
        
        
        if ('0123456789.'.includes(valueArray[i]) === true 
        || '+-÷/*xsct(!lnloge%√^'.includes(valueArray[i]) === true
        )
        {
            //Atenção o ponto primeiro é tratado como operador apenas para ser validado
            //logo após o ponto é tratado como número para que possa ser feita operações
            //decimais.
            

             if ('+-÷/*x%√^'.includes(valueArray[0]) === true
             ){
                alert('Atenção, a operação começa com um número e não com um operador')
                calcLimpar();
                document.calculator.outdisplay.value = '';
                break;    
            } else {
                if ('0123456789.'.includes(valueArray[i]) === true){
                    //Verifica se o usuário digitou mais de um ponto.
                    if (valueArray[i] == '.' 
                    && valueArray[i+1] == valueArray[i] 
                    || valueArray[i-1] == valueArray[i] 
                    && '0123456789'.includes(valueArray[i]) == false){
                        alert('Atenção, utilize apenas um ponto por número.')
                        calcLimpar();
                        document.calculator.outdisplay.value = '';
                        break;
                    } else {
                        stringArray = stringArray + valueArray[i];
                    }
                    
                }
                if ('+-÷/*xsct(lnlog%^√!e%'.includes(valueArray[i]) === true
                ) {
                    if ('sct(lnlog!e'.includes(valueArray[i]) === true){
                        if ('0123456789'.includes(valueArray[i+1]) == true){
                            stringArray = stringArray + valueArray[i] + ',';
                        }else{
                            stringArray = stringArray + valueArray[i];
                    }
                        }
                        
                        
                    //Tratamento para dois ou mais operadores
                    else if (valueArray[i] == valueArray[i-1] || valueArray[i] == valueArray[i+1] ){
                        alert('Atenção, a operação permite apenas 1 operador em sequencia.')
                        calcLimpar();
                        document.calculator.outdisplay.value = '';
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
            document.calculator.outdisplay.value = '';
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
        resSubtrair = parseFloat(a) - parseFloat(b)
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

    function seno(a) {
        var rad =  a * Math.PI/180;
        resSeno = Math. sin(rad);
        return resSeno;
    } 

    function cos(a) {
        var rad =  a * Math.PI/180;
        resSeno = Math. sin(rad);
        return resSeno;

    } 
    function tan(a) {
        var rad =  a * Math.PI/180;
        resSeno = Math. tan(rad);
        return resSeno;
    }

    function fatorial(a) {
        xFatorial = parseFloat(a);
        
        u = 1;
        while (u < parseFloat(a)){
            resFatorial = xFatorial*(parseFloat(a) - u);
            xFatorial = resFatorial;
            u++;
            console.log(u);
        }
        return xFatorial;
    }

    function lnFuncao (a) {
        resLn = Math.log(parseFloat(a));
        return resLn;
    }

    function logFuncao (a) {
        resLog = Math.log10(parseFloat(a));
        return resLog;
    }

    function eFunction(){
        
        eResult = Math.E;
        
        return eResult;
    }

    function porcentagem(a, b){
        resPorcent = parseFloat(a)/100*parseFloat(b);
        return resPorcent;
    }

    function raizNum (a,b) {
        raizResult = Math.pow(b, (1/a));
        return raizResult;
    }

    function expNum (a,b) {
        expResult = Math.pow(b, a);
        return expResult;
    }

    
    
    
    //refinedArray é a string organizada como array separada por número e operação.
    refinedArray = stringArray.split(',');
    console.log(refinedArray);
    console.log(valueArray);
    console.log(stringArray);
    j = 0;
    
    //Esse if irá percorrer o array em busca de um operador para definir a operação
    if (refinedArray.length == 1){
        finalResult = refinedArray[0];
    }
    if (valueArray.length == i) {
        
        while( j < refinedArray.length){
            
            if ('+-÷/*x!e%√^'.includes(refinedArray[j]) === true
            
            || refinedArray[j] === 's('
            || refinedArray[j] === 'c('
            || refinedArray[j] === 't('
            || refinedArray[j] === 'ln'
            || refinedArray[j] === 'log'
            ){
                console.log('entrando no if')
                if (j < 2) {

                    if ('+'.includes(refinedArray[j])=== true ){
                        firstResult = soma(refinedArray[j-1],refinedArray[j+1]);
                        
                    }
                    else if ('-'.includes(refinedArray[j])=== true ){
                        firstResult = subtrair(refinedArray[j-1],refinedArray[j+1]);  
                        }
                    else if ('÷/'.includes(refinedArray[j]) ===true){
                        firstResult = dividir(refinedArray[j-1],refinedArray[j+1]);
                    }

                    else if ('*x'.includes(refinedArray[j]) === true) {
                        firstResult = multiplicar(refinedArray[j-1],refinedArray[j+1]);
                    }

                    else if ('%'.includes(refinedArray[j]) === true) {
                        firstResult = porcentagem(refinedArray[j-1], refinedArray[j+1])
                    }

                    else if ('√'.includes(refinedArray[j])=== true) {
                        firstResult = raizNum(refinedArray[j-1], refinedArray[j+1])
                    }

                    else if ('^'.includes(refinedArray[j])=== true) {
                        firstResult = expNum(refinedArray[j-1], refinedArray[j+1])
                    }

                    else if (refinedArray[j] === 's('
                    || refinedArray[j] === 'c('
                    || refinedArray[j] === 't('
                    || refinedArray[j] === '!'
                    || refinedArray[j] === 'ln'
                    || refinedArray[j] === 'log'
                    || refinedArray[j] === 'e'
                    ){
                        if (refinedArray.length === 2){
                        
                        if (refinedArray[j] === 's(' ){
                            firstResult = seno(refinedArray[j+1]);
                            
                        }
                        else if ('c('.includes(refinedArray[j]) === true){
                            firstResult = cos(refinedArray[j+1]);
                            
                        }

                        else if ('t('.includes(refinedArray[j]) === true){
                            firstResult = tan(refinedArray[j+1]);
                            
                        }
                        else if ('!'.includes(refinedArray[j]) === true){
                            firstResult = fatorial(refinedArray[j+1]);

                        }
                        else if ('ln'.includes(refinedArray[j])===true){
                            firstResult = lnFuncao(refinedArray[j+1]);

                        }
                        else if ('log'.includes(refinedArray[j])===true){
                            firstResult = logFuncao(refinedArray[j+1]);

                        }

                        
                        } 
                        else if ('e'.includes(refinedArray[j]) === true){
                            firstResult = eFunction();

                        }
                        
                        else {
                            alert('Atenção utilize apenas o operador e o número!!');
                            calcLimpar();
                            document.calculator.outdisplay.value = '';
                        }
                        
                    }
             
                    interResult = firstResult;
                    finalResult = firstResult;
                    }
                console.log(interResult); 
                if (j > 2){
                    
                    if ('+'.includes(refinedArray[j]) === true){
                        finalResult = soma(interResult,refinedArray[j+1]);
                        interResult = finalResult;
                        
                    }

                    else if ('-'.includes(refinedArray[j])=== true ){
                        finalResult = subtrair(interResult,refinedArray[j+1]);
                        interResult = finalResult;  
                        }
                    else if ('÷/'.includes(refinedArray[j]) ===true){
                        finalResult = dividir(interResult,refinedArray[j+1]);
                        interResult = finalResult;
                    }

                    else if ('*x'.includes(refinedArray[j]) ===true ) {
                        finalResult = multiplicar(interResult,refinedArray[j+1]);
                        interResult = finalResult;
                    }

                    
                    else if ('%'.includes(refinedArray[j]) === true) {
                        finalResult = porcentagem(interResult, refinedArray[j+1]);
                        interResult = finalResult;
                    }

                    else if ('√'.includes(refinedArray[j]) === true) {
                        finalResult = raizNum(interResult, refinedArray[j+1]);
                        interResult = finalResult;
                    }

                    else if ('^'.includes(refinedArray[j]) === true) {
                        finalResult = expNum(interResult, refinedArray[j+1]);
                    }


                } 
                
            } else if (isNaN(refinedArray[j]) == true){
                if ('!'.includes(refinedArray[j]) === true){
                    alert('Por favor inverta a operação')
                } else {
                    alert("Atenção você utilizou um operador inválido ou fora de ordem, tente : (!num) no lugar de (num!)")
                }
                
            } 
            //Aqui vai para funções sen cos tan e etc
            j++;
        }
    
    }
    document.calculator.outdisplay.value = document.calculator.display.value + " = " +  finalResult;
    console.log(finalResult);
    finalResult = 0;

}


