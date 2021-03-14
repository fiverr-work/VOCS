$(() => {
  $("#toggle-sidebar").change(() => {
    $("#sidebar").toggleClass("is-active");
  });
  $("input[type=date]").on("input", function () {
    if ($(this).val().length > 0) $(this).addClass("empty");
    else $(this).removeClass("empty");
  });
  $(".drag").dropzone(
    {
      url: "/",
      previewsContainer: ".preview-images",
      addRemoveLinks: true,
    }
    );
});
