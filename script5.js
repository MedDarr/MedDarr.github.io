function cost(){
    
    var result;
    var num1=document.getElementById('price').value;
    var num2 =document.getElementById('quantity').value;
    let res=document.getElementById('result');
    if( (isNaN(num1) || num1<0) && ( isNaN(num2)|| num2<0 || !(Number.isInteger(num2))))
    { res.innerHTML = "Введены неккоректные данные";}
    else if( isNaN(num2) || num2<0 || !(Number.isInteger(num2)))  res.innerHTML = "Введено неверное количество товара";
    else if(isNaN(num1) || num1<0)  res.innerHTML = "Введена неверная цена ";
    else{ var result=num1*num2;
        res.innerHTML ="Стоимость заказа: "+ result;
    }
    return false;
}
