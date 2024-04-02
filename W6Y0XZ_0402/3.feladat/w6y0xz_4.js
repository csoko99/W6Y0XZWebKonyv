$(document).ready(function(){

    $("#sec-rejt").click(function(){
        //$("p").hide(); alternatív megoldás
        $("#sec-1").hide();
        $("#sec-2").hide();
        $("#sec-3").hide();
    });

    $("#sec-jelenit").click(function(){
        //$("p").show(); alternatív megoldás
        $("#sec-1").show();
        $("#sec-2").show();
        $("#sec-3").show();
    });

    let kattintott = false;

    $("#sec-on-off").click(function(){
        if(!kattintott)
        {
            $("#sec-1").hide();
            $("#sec-2").hide();
            $("#sec-3").hide();
            kattintott = true;
        }
        else
        {
            $("#sec-1").show();
            $("#sec-2").show();
            $("#sec-3").show();
            kattintott = false;
        }
    });

    $("#op_01").click(function(){
        $("form").css("opacity","0.1");
    });

    $("#op_05").click(function(){
        $("form").css("opacity","0.5");
    });

    $("#op_08").click(function(){
        $("form").css("opacity","0.8");
    });

    $("#urlap-rejt").click(function(){
        $("form").hide();
    });

    $("#urlap-jelenit").click(function(){
        $("form").show();
    });

    $("#urlap-rejt").click(function(){
        $("form").hide();
    });

    let kattintott_2 = false;

    $("#urlap-on-off").click(function(){
        if(!kattintott_2)
        {
            $("form").hide();
            kattintott_2 = true;
        }
        else
        {
            $("form").show();
            kattintott_2 = false;
        }
    });
  });
  