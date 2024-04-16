$(document).ready(function() {
    $("#betolt").click(function() {
      $.getJSON("LL_orarendfull.json", function(data) {
        
        $("#terulet").html("<h3>Tokaj Hegyalja Egyetem</h3><br>");
        $("#terulet").append("<b>Cím:</b> " + data.cim.iranyitoszam + " " + data.cim.varos + " " + data.cim.utca + "<br><br>");
        $("#terulet").append("<b>Telefonszám:</b> ");
        let sor = "<ul>";
        for(let i = 0 ; i < data.telefonszam.length; i++) {
          sor += "<li>" + data.telefonszam[i].tipus + ": " + data.telefonszam[i].szam + "</li>";
        }
        sor += "</ul>";
        $("#terulet").append(sor);
        $("#terulet").append("<b>Órarend -2024 tavasz</b> <br><br><hr>");
        const orarend = data.LL_orarend.ora;
        for(let i = 0; i < orarend.length; i++)
        {
          $("#terulet").append("<b>Tárgy:</b> " + orarend[i].targy + "<br>");
          $("#terulet").append("<b>Oktató:</b> " + orarend[i].oktato + "<br>");
          $("#terulet").append("<b>Szak:</b> " + orarend[i].szak + "<br>");
          $("#terulet").append("<b>Időpont:</b><ul>");
          $("#terulet").append("<li>Nap: " + orarend[i].idopont.nap + "</li>");
          $("#terulet").append("<li>Kezdet: " + orarend[i].idopont.tol + "</li>");
          $("#terulet").append("<li>Vége: " + orarend[i].idopont.ig + "</li>");
          $("#terulet").append("</ul>");
          $("#terulet").append("<b>Helyszín:</b> " + orarend[i].helyszin + "<br><br><hr>");
        }
      });
    });
  });