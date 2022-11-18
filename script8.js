$(document).ready(function(){  
    PopUpHide();
});

function PopUpShow(){
    $("#popup1").show();
}

function PopUpHide(){
    $("#popup1").hide();
}
 function clear() {
  let namefield = document.getElementsByName("name");
  let email = document.getElementsByName("email");
  let message = document.getElementsByName("message");
  let check = document.getElementsByName("check");
  namefield[0].value = "";
  email[0].value = "";
  message[0].value = "";
  check[0].checked = false;
}
  $(function(){
      $(".ajaxForm").submit(function(e){
          e.preventDefault();
          var href = $(this).attr("action");
          $.ajax({
              type: "POST",
              dataType: "json",
              url: href,
              data: $(this).serialize(),
              success: function(response){
                  if(response.status == "success"){
                     
                      alert("Данные отправлены, спасибо!");
                      clear();
                      PopUpHide()
                  }else{
                      alert("Ошибка отправления: " + response.message);
                  }
              }
          });
      });
  });
