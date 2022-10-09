function cost(){
    var result;
    var num1=document.getElementById('price').value;
    var num2 =document.getElementById('quantity').value;
    
    if( (isNaN(num1) || num1<0) && ( isNaN(num2)|| num2<0))
    { document.getElementById('result').innerHTML = "Введены неккоректные данные";}
    else if( isNaN(num2) || num2<0)  document.getElementById('result').innerHTML = "Введено неверное количество товара";
    else if(isNaN(num1) || num1<0)  document.getElementById('result').innerHTML = "Введена неверная цена ";
    else{ var result=num1*num2;
    document.getElementById('result').innerHTML ="Стоимость заказа: "+ result;
   }
}
