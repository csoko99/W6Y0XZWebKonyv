$(document).ready(function() {
    $("#betolt").click(function() {
      $.getJSON("LL_orarend.json", function(data) {
        var orarend = data.LL_orarend.ora[0];
        var idopont = orarend.idopont.nap + " " + orarend.idopont.tol + "-" + orarend.idopont.ig;
        var sor = "<b>Tárgy:</b> " + orarend.targy + "<br> <br>" +
                  "<b>Időpont:</b> " + idopont + "<br> <br>" +
                  "<b>Helyszín:</b> " + orarend.helyszin + "<br> <br>" +
                  "<b>Oktató:</b> " + orarend.oktato + "<br> <br>" +
                  "<b>Tipus:</b> " + orarend.tipus + "<br><br>";
        $("#terulet").html(sor);
      });
    });
  });
