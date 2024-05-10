$(document).ready(function () {
    $("#colorPicker").change(function () {
      let color = $(this).val();
      $("body").css("background-color", color);
    });
});