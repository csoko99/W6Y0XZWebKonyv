$(document).ready(function() {
    $("#betolt").click(function() {
      $.getJSON("LL_orarend_8.json", function(data) {
        var orarend = data.LL_orarend.ora;
       /* $.each(orarend, function(index, ora) {
          var sor = "<b>Tárgy:</b> " + ora.targy + "<br><br>" +
                    "<b>Időpont:</b><br><ul>" +
                    "<li>Nap: " + ora.idopont.nap + "</li>" +
                    "<li>Kezdet: " + ora.idopont.tol + "</li>" +
                    "<li>Vége: " + ora.idopont.ig + "</li></ul>" +
                    "<b>Helyszín:</b> " + ora.helyszin + "<br><br>" +
                    "<b>Oktató:</b> " + ora.oktato + "<br><br>" +
                    "<b>Tipus:</b> " + ora.tipus + "<br><br>";
          $("#terulet").append(sor);
        });
    */  
        let sor = "";
        for (let i = 0; i < orarend.length; i++) {
            sor += "<b>Tárgy:</b> " + orarend[i].targy + "<br><br>";
            sor += "<b>Időpont:</b><br><ul>";
            sor += "<li>Nap: " + orarend[i].idopont.nap + "</li>";
            sor += "<li>Kezdet: " + orarend[i].idopont.tol + "</li>";
            sor += "<li>Vége: " + orarend[i].idopont.ig + "</li>";
            sor += "</ul>";
            sor += "<b>Helyszín:</b> " + orarend[i].helyszin + "<br><br>";
            sor += "<b>Oktató:</b> " + orarend[i].oktato + "<br><br>";
            sor += "<b>Tipus:</b> " + orarend[i].tipus + "<br><br><hr>";
        }
        $("#terulet").html(sor);
        });
    });
  });