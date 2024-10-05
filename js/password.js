$(".toggle-password").click(function () {
    document.getElementById("tchange").innerHTML = "Hide";
    $(this).toggle;
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  })