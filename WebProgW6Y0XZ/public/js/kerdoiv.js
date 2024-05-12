$(document).ready(function () {
    $("input[name='yesno']").change(function () {
      if ($(this).val() === "Igen") {
        $("#fav-sport, .teams, #date, #opiniom").prop("disabled", false);
      } else {
        $("#fav-sport, .teams, #date, #opiniom").prop("disabled", true);
      }
    });
  
    let szamlalo = 0;
    $("#urlap").submit(function (event) {
      let formValid = true;
  
      if ($("#name").val() === "") {
        $("#name").css("border-color", "red");
        formValid = false;
      } else {
        $("#name").css("border-color", "");
      }
      if ($("#age").val() === "") {
        $("#age").css("border-color", "red");
        formValid = false;
      } else {
        $("#age").css("border-color", "");
      }
      if (formValid) {
        szamlalo++;
        let formattedData = "<div class='eredmeny'><h2>Vélemény #" + szamlalo + ":</h2><br>";
        formattedData += "<p> <b>Név:</b> " + $("#name").val() + "<br>";
        formattedData += "<b>Életkor:</b> " + $("#age").val() + "<br>";
        formattedData += "<b>Van kedvenc sportok?</b> " + $("input[name='yesno']:checked").val() + "<br>";
        formattedData += "<b>Kedvenc Sport:</b> " + $("#fav-sport").val() + "<br>";
        formattedData += "<b>Követett csapat:</b> ";
        $(".teams:checked").each(function () {
          formattedData += $(this).val() + ", ";
        });
        formattedData += "<br>";
        formattedData += "<b>Mióta követed a csapatot? </b>" + $("#date").val() + "<br>";
        formattedData += "<b>Vélemény a csapatról:</b> " + $("#opiniom").val() + "<br>";
        formattedData += "</p></div>";
        let oldData = $("#form-eredmeny").html();
        $("#form-eredmeny").html(oldData + formattedData);
      }
      event.preventDefault();
    });
});