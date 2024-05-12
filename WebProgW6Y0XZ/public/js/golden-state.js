$(document).ready(function () {
    $.getJSON("/js/golden-state.json", function (data) {
      const jatekosok = data.jatekosok;
      let tbody = $("#jatekosok-table tbody");
  
      $.each(jatekosok, function (index, jatekos) {
        let row = $("<tr>");
        row.append($("<td>").text(jatekos.nev));
        row.append($("<td>").text(jatekos.pozicio));
        row.append($("<td>").text(jatekos.szuletesi_datum));
        row.append($("<td>").text(jatekos.nemzetiseg));
        tbody.append(row);
      });
    });
  
    $(".gallery-image").click(function () {
      let modal = $("#myModal");
      let modalImg = $("#modal-image");
      let captionText = $("#caption");
      modal.css("display", "block");
      modalImg.attr("src", $(this).attr("src"));
      captionText.html($(this).attr("alt"));
    });
  
    $(".close").click(function () {
      $("#myModal").css("display", "none");
    });
});