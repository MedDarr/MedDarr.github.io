function cost(){
    
    var result;
    let num1=document.getElementById('price').value;
    let num2 =document.getElementById('quantity').value;
    let res=document.getElementById('result');
    const kol=/^(0|[1-9]\d*)$/;
    const price=/^(0|[1-9]+\.?\d*)$/;
    if( (!price.test(num1) && !kol.test(num2) ))
    { res.innerHTML = "Введены некорректные данные";}
    else if( !price.test(num1))  res.innerHTML = "Введено неверное количество товара";
    else if(!kol.test(num2))  res.innerHTML = "Введена неверная цена ";
    else{ var result=num1*num2;
        res.innerHTML ="Стоимость заказа: "+ result;
    }
    return false;
}
window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b=document.getElementById("my-button");
    b.addEventListener("click", cost);
});
