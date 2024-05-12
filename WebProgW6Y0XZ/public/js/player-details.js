$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const playerName = urlParams.get('player');
  
    $.ajax({
      url: "http://localhost:3000/player-details",
      method: "GET",
      data: {
        playerName: playerName
      },
      dataType: "json",
      success: function (response) {
  
        let playerDetails = "";
        playerDetails += "<div id='player-img-container'>";
        playerDetails += "<div class='player-img'>"
        playerDetails += "<img src='/kepek/rm-players/" + response.nev + ".png'>";
        playerDetails += "</div>";
        playerDetails += "<div class='player-info'>";
        playerDetails += "<div class='jersey_number'>";
        playerDetails += "<h2>" + response.mez_szam + "</h2>";
        playerDetails += "</div>";
        playerDetails += "<div class='name_position'>";
        playerDetails += "<h2>" + response.nev + "</h2>";
        playerDetails += "<p style='color:white'>" + response.pozicio + "</p>";
        playerDetails += "</div>";
        playerDetails += "</div>";
        playerDetails += "</div>";
        playerDetails += "<div class='personal-details' style='background-color: white;'>";
        playerDetails += "<h1  style = 'text-decoration: underline; text-align:center'>Személyes adatok</h1>";
        playerDetails += "<ul>";
        playerDetails += "<li><b>Teljes név: </b>" + response.teljes_nev + "</li>";
        playerDetails += "<li><b>Erősebb láb: </b>" + response.erosebb_lab + "</li>";
        playerDetails += "<li><b>Született: </b>" + response.szuletett.split("T")[0] + "</li>";
        playerDetails += "<li><b>Nemzetiség: </b>" + response.nemzetiseg + "</li>";
        playerDetails += "</ul>";
        playerDetails += "</div>"
  
        $("#player-details-container").html(playerDetails);
      },
      error: function (xhr, status, error) {
        console.error(xhr.responseText);
      }
    });
});