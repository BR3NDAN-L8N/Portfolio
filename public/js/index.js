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

  $(".exit-button-modal").on("click", function () {
    $(".email-sent-success-modal").addClass("hide");
  });

  $(document).on("click", "#submit-email-button", function (event) {

    event.preventDefault();

    const emailData = {
      email: $("#email").val(),
      name: $("#name").val(),
      message: $("#form-message").val()
    }

    $.post("/email/send-email", emailData)
      .catch((err) => {
        console.log(err);
      });

    $(".email-sent-success-modal").removeClass("hide");
    $(".email-form").addClass("hide");
    $(".email-button").removeClass("hide");
  })

})