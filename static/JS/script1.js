function insert(num)
        {
            var numero = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = numero + num;
        }
		function clean()
        {
            document.getElementById('resultado').innerHTML = "";
        }
		function setHipotenusa(){
            //funcao para adicionar valor na hipotenusa
            //se estiver todos os lados preenchidos, zero os lados para evitar contradicoes
            isAllFilled();
            document.getElementById('hipotenusa').innerHTML = document.getElementById('resultado').innerHTML;
            clean();
            var hi = document.getElementById('hipotenusa').innerHTML;
            var c1 = document.getElementById('cateto1').innerHTML;
            var c2 = document.getElementById('cateto2').innerHTML;     
            try{
            if(hi){
                //se o cateto1 estiver preenchido
                if(c1){
                    if(isNaN(Math.sqrt((hi*hi)-(c1*c1)))){
                        throw NumberException("cateto invalido");
                    }
                    //se o c1 e a hitenusa estiver preenchido o programa vai calcular c2 em funcao dos dois
                    document.getElementById('cateto2').innerHTML = Math.sqrt((hi*hi)-(c1*c1));
                }
                if(c2){
                     if(isNaN(Math.sqrt((hi*hi)-(c2*c2)))){
                        throw NumberException("cateto invalido");
                    }
                    //se o c2 e a hitenusa estiver preenchido o programa vai calcular c1 em funcao dos dois
                    document.getElementById('cateto1').innerHTML = Math.sqrt((hi*hi)-(c2*c2));
                }
                
                
            }}
            catch(NumberException){
                clearAll();
            }
            
        }
        function isAllFilled(){
            var hi = document.getElementById('hipotenusa').innerHTML;
            var c1 = document.getElementById('cateto1').innerHTML;
            var c2 = document.getElementById('cateto2').innerHTML;
            if(hi && c1 && c2){
                clearAllTriangulo();
            }
        }
        function clearAllTriangulo(){
            //limpa os dados de todos os lados do triangulo
            document.getElementById('cateto1').innerHTML = "";
            document.getElementById('cateto2').innerHTML = "";
            document.getElementById('hipotenusa').innerHTML = "";
            
        }
        function clearAll(){
            //limpa tudo
            document.getElementById('cateto1').innerHTML = "";
            document.getElementById('cateto2').innerHTML = "";
            document.getElementById('hipotenusa').innerHTML = "";
            document.getElementById('resultado').innerHTML = "";
        }
        function tangente(){
            var hi = document.getElementById('hipotenusa').innerHTML;
            var c1 = document.getElementById('cateto1').innerHTML;
            var c2 = document.getElementById('cateto2').innerHTML;  //cateto oposto
            if(hi && c1 && c2){
            document.getElementById('resultado').innerHTML = c2/c1;
            }
        }
        function seno(){
            var hi = document.getElementById('hipotenusa').innerHTML;
            var c1 = document.getElementById('cateto1').innerHTML;
            var c2 = document.getElementById('cateto2').innerHTML;  //cateto oposto
            if(hi && c1 && c2){
            document.getElementById('resultado').innerHTML = c2/hi;
            }
        }
        function cos(){
            var hi = document.getElementById('hipotenusa').innerHTML;
            var c1 = document.getElementById('cateto1').innerHTML;
            var c2 = document.getElementById('cateto2').innerHTML;  //cateto oposto
            if(hi && c1 && c2){
            document.getElementById('resultado').innerHTML = c1/hi;
            }
        }
		function back()
        {
            var resultado = document.getElementById('resultado').innerHTML;
            document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
        }
        function setCateto1(){
            //funcao para adicionar valor no cateto 
            //se estiver todos os lados preenchidos, zero os lados para evitar contradicoes
            isAllFilled();
            document.getElementById('cateto1').innerHTML = document.getElementById('resultado').innerHTML;
                        clean();
             var hi = document.getElementById('hipotenusa').innerHTML;
            var c1 = document.getElementById('cateto1').innerHTML;
            var c2 = document.getElementById('cateto2').innerHTML;            
             try{           
            if(c1){
                //se o cateto1 estiver preenchido
                if(hi){
                    //se o c1 e a hitenusa estiver preenchido o programa vai calcular c2 em funcao dos dois
                    if(isNaN(Math.sqrt((hi*hi)-(c1*c1)))){
                        throw NumberException("cateto invalido");
                    }
                    document.getElementById('cateto2').innerHTML = Math.sqrt((hi*hi)-(c1*c1));
                    
                }
                if(c2){
                    if(isNaN(Math.sqrt((c2*c2)+(c1*c1)))){
                        throw NumberException("hipotenusa invalido");
                    }
                //se o c1 e a cateto 2 estiver preenchido o programa vai calcular hipotenusa em funcao dos dois
                document.getElementById('hipotenusa').innerHTML = Math.sqrt((c2*c2)+(c1*c1));
                }
            }}catch(NumberException){
                clearAll();
                //limpa a calculadora
            }
            
        }
        
        function setCateto2(){
            //funcao para adicionar valor no cateto
            //se estiver todos os lados preenchidos, zero os lados para evitar contradicoes
            isAllFilled();
            document.getElementById('cateto2').innerHTML = document.getElementById('resultado').innerHTML;
                        clean();
            var hi = document.getElementById('hipotenusa').innerHTML;
            var c1 = document.getElementById('cateto1').innerHTML;
            var c2 = document.getElementById('cateto2').innerHTML; 
            try{if(c2){
                //se o cateto2 estiver preenchido
                if(hi){
                    if(isNaN(Math.sqrt((hi*hi)-(c2*c2)))){
                        throw NumberException("cateto invalida");
                    }
                    //se o c1 e a hitenusa estiver preenchido o programa vai calcular c2 em funcao dos dois
                    document.getElementById('cateto1').innerHTML = Math.sqrt((hi*hi)-(c2*c2));
                }
                if(c1){
                    if(isNaN(Math.sqrt((c2*c2)+(c1*c1)))){
                        throw NumberException("hipotenusa invalida");
                    }
                //se o c1 e a cateto 2 estiver preenchido o programa vai calcular c2 em funcao dos dois
                document.getElementById('hipotenusa').innerHTML = Math.sqrt((c2*c2)+(c1*c1));
                }
            }}
            catch(NumberException){
                clearAll();
            }
        }
        function NumberException(message) {
   this.message = message;
   //exeção para casos como a hipotenusa ser menor que um cateto ou outros casos que dê NaN
   //exceção de casos que usuario pode digitar que 
   
}
        
            
     
        
