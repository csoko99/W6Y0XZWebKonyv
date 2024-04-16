$(document).ready(function() {
  $("#betolt").click(function() {
    $.getJSON("LL_orarendobject.json", function(data) {
      var orarend = data.LL_orarend;
        $("#terulet").html("<h3>Tokaj Hegyalja Egyetem</h3><br>");
        
        $("#terulet").append("<b>Cím:</b> " + orarend.cim.iranyitoszam + " " + orarend.cim.varos + " " + orarend.cim.utca + "<br><br>");
        $("#terulet").append("<b>Telefonszám:</b> ");
        let sor = "<ul>"
        for(let i = 0 ; i < orarend.telefonszam.length; i++) {
          sor += "<li>" + orarend.telefonszam[i].tipus + ": " + orarend.telefonszam[i].szam + "</li>";
        }
        sor += "</ul>"
        $("#terulet").append(sor);
        $("#terulet").append("<b>Órarend -2024 tavasz</b> <br><br>");
        $("#terulet").append("<b>Tárgy:</b> " + orarend.targy + "<br><br>");
        $("#terulet").append("<b>Oktató:</b> " + orarend.oktato + "<br><br>");
        $("#terulet").append("<b>Szak:</b> " + orarend.szak + "<br><br>");
        $("#terulet").append("<b>Időpont:</b>"+ orarend.idopont.nap + " " + orarend.idopont.tol + "-" + orarend.idopont.ig + "<br><br>");
        $("#terulet").append("<b>Helyszín:</b> " + orarend.helyszin);
    });
  });
});
