
var n1,n2,n3,n4,result;



function calcular(event){  
event.preventDefault();

n1 = parseFloat(document.getElementById('n1').value);
n2 = parseFloat(document.getElementById('n2').value);
n3 = parseFloat(document.getElementById('n3').value);
n4 = parseFloat(document.getElementById('n4').value);
result= ((n1+n2+n3+n4)/4);
if(result <6){
    resultado.innerHTML = `Você está REPROVADO!!!! </br> Sua media foi: ${result}`;
}

n1 = document.getElementById('n1').value='';
n2 = document.getElementById('n2').value='';
n3 = document.getElementById('n3').value='';
n4 = document.getElementById('n4').value='';

} 