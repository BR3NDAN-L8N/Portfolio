$('document').ready(function () {

  //  NAVBAR CODE
  $('body').scrollspy({
    target: '#navbar',
    offset: 50
  });

  $(".email-button").on("click", function () {
    $(".email-button").addClass("hide");
    $(".email-form").removeClass("hide");
  });
  $(".exit-button").on("click", function () {
    $(".email-form").addClass("hide");
    $(".email-button").removeClass("hide");
  });
  $("#submit-email-button").on("click", function () {
    const emailData = {
      email: $("#email"),
      name: $("#name"),
      message: $("#form-message")
    }

    $.post("/email/send-email", emailData)
      .catch((err) => {
        console.log(err);
      });
  })

})