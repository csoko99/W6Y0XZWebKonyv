$(document).ready(function() {
    $("#szoveg").click(function() {
        $("#zold-div").append("Programtervező informatikus");
    });

    $("#gomb").click(function() {
        var gombSzoveg = $("#gomb").text(); 
        $("#gomb").html( "<b>PTI-" + gombSzoveg + "</b>"); 
    });

    $("#uj_gomb").click(function() { 
        $("#forras").append( "<br><br><button><b>THE-PTI</b></button>"); 
    });

    let fejlec_van = 0;

    $("#fejlec").click(function() { 
        $("#cimsor").append( "<h1>jQuery feladat</h1>"); 
        fejlec_van = 1;
    });

    $("#alcim").click(function() { 
        if (fejlec_van == 1) {
            $("#cimsor").append( "<h3>HTML metódusok</h3>"); 
        }
    });

    $("#urlap_fejlec").click(function() { 
        $("#urlap").prepend( "<h3>ŰRLAP-W6Y0XZ</h3>"); 
    });
    
});