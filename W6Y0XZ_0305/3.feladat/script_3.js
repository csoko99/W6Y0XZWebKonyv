$(document).ready(function(){
$("h1").mouseleave(function(){
    alert("A jQuery szuper!!");
  });
});

$(document).ready(function(){
    $("#elso").click(function(){
        $("#sec-1").hide();
      });
});

$(document).ready(function(){
    $("#masodik").dblclick(function(){
        $("#sec-2").hide();
      });
});

$(document).ready(function(){
    $("#submit").mouseenter(function(){
        alert("A jQuery nagyon szuper!!");
      });
});

$(document).ready(function(){
    $("input").hover(function(){
      $(this).css("border-color", "yellow");
      }, function(){
      $(this).css("border-color", "pink");
    });
  });
  
  $(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "yellow");
    });
    $("input").blur(function(){
      $(this).css("background-color", "green");
    });
  });