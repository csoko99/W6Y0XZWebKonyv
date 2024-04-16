$(document).ready(function() {
    $("#szamol").click(function() {
      let a = parseInt($('#a').val());
      let b = parseInt($('#b').val());
      
      if (isNaN(a) || isNaN(b)) {
        alert("Kérem, adja meg mindkét számot!");
        return;
      }
      
      let muvelet = $('input[name="operation"]:checked').val();
      if (!muvelet) {
        alert("Kérem, válasszon műveletet!");
        return;
      }
      
      let eredmeny;
      switch (muvelet) {
        case 'osszeadas':
            eredmeny = a + b;
          break;
        case 'kivonas':
            eredmeny = a - b;
          break;
        case 'szorzas':
            eredmeny = a * b;
          break;
        case 'osztas':
          if (b === 0) {
            alert("Nullával nem lehet osztani!");
            return;
          }
          eredmeny = a / b;
          break;
        default:
          alert("Hibás művelet!");
          return;
      }

      $('#eredmeny').text(eredmeny);
    });
  });