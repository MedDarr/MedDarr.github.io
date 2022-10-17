window.addEventListener('DOMContentLoaded', function (event) {
    let s = document.getElementsByName("field-liest");
    s[0].addEventListener("change", function(event) {
      let select = event.target;
      let radios = document.getElementById("myradio");
      let checked=document.getElementById("check")
      console.log(select.value);
      if (select.value == "2") {
        checked.style.display = "none";
        radios.style.display = "block";
      }
      else if (select.value == "3") {
        checked.style.display = "block";
        radios.style.display = "none";
      }
      else {
        checked.style.display = "none";
        radios.style.display = "none";
      }
    });

    
    let r = document.querySelectorAll(".myradio input[type=radio]");
    r.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        console.log(r.value);
      });    
    });
    
  });
