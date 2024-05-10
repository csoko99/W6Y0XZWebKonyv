$(document).ready(function () {
    $.ajax({
      url: "http://localhost:3000/real-madrid-data",
      method: "GET",
      dataType: "json",
      success: function (response) {
  
        let kapus = [];
        let vedo = [];
        let kozep = [];
        let csatar = [];
        let edzo = [];
  
        for (let i = 0; i < response.length; i++) {
          if (response[i].pozicio == "Kapus") {
            kapus.push(response[i]);
          } else if (response[i].pozicio == "Védő") {
            vedo.push(response[i]);
          } else if (response[i].pozicio == "Középpályás") {
            kozep.push(response[i]);
          } else if (response[i].pozicio == "Csatár") {
            csatar.push(response[i]);
          } else if (response[i].pozicio == "Edző") {
            edzo.push(response[i]);
          }
        }
  
        function renderPlayers(players, containerId) {
          let sor = "";
          for (let i = 0; i < players.length; i++) {
            sor += "<div class='card'>";
            sor += "<img class='playe-img' src='kepek/rm-players/" + players[i].nev + ".png' >";
            sor += "<div class='info'> ";
            sor += "<div class='right-side'>";
            sor += "<h2 class='mez-szam'>" + players[i].mez_szam + "</h2>";
            sor += "</div>";
            sor += "<div class='left'>";
            sor += "<h2 class='nev' style = 'color: black'>" + players[i].nev + "</h2>";
            sor += "<p>" + players[i].pozicio + "</p>";
            sor += "</div>";
            sor += "</div>";
            sor += "</div>";
          }
          $("#" + containerId).html(sor);
  
          $("#" + containerId + " .card:gt(4)").addClass("hidden");
  
          $(".card").click(function () {
            let playerName = $(this).find(".nev").text();
            window.location.href = "player-details.html?player=" + encodeURIComponent(playerName);
          });
        }
  
        renderPlayers(kapus, "kapusok");
        renderPlayers(vedo, "vedok");
        renderPlayers(kozep, "kozepek");
        renderPlayers(csatar, "csatarok");
        renderPlayers(edzo, "edzo");
  
        let click_counter = 1;
        $(".position-nav").click(function () {
          let position = $(this).data("position");
          let hiddenPlayers = $("#" + position + " .card.hidden");
          let visiblePlayers = $("#" + position + " .card:not(.hidden)");
  
          hiddenPlayers.slice(0, 5).removeClass("hidden");
          visiblePlayers.slice(-5).addClass("hidden");
          click_counter++;
  
          if (click_counter % 2 === 0) {
            $(this).css({
              "transform": "scaleX(-1)"
            });
          } else {
            $(this).css({
              "transform": "scaleX(1)"
            });
          }
  
        });
      },
  
      error: function (xhr, status, error) {
        console.error(xhr.responseText);
      }
    });
});