$(document).ready(function() {
    $("#betolt").click(function() {
      $.getJSON("LL_orarend.json", function(data) {
        var orarend = data.LL_orarend;
          $("#terulet").append("<b>Tárgy:</b> " + orarend.targy + "<br><br>");
          $("#terulet").append("<b>Oktató:</b> " + orarend.oktato + "<br><br>");
          $("#terulet").append("<b>Szak:</b> " + orarend.szak + "<br><br>");
          $("#terulet").append("<b>Időpont:</b>"+ orarend.idopont.nap + " " + orarend.idopont.tol + "-" + orarend.idopont.ig + "<br><br>");
          $("#terulet").append("<b>Helyszín:</b> " + orarend.helyszin);
      });
    });
  });