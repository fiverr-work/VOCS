$(() => {
  $("#toggle-sidebar").change(() => {
    $("#sidebar").toggleClass("is-active");
  });
//   $("input[type=date]").on("input", function () {
//     if ($(this).val().length > 0) {
//       $(this).addClass("full");
//     } else {
//       $(this).removeClass("full");
//     }
//   });
});
