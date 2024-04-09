$(document).ready(function(){

    $("#animacio").click(function(){
        $("#doboz").animate(
        {
            left:'300',
            width: '+=150px',
            fontSize: '30px',
        },
        2000, 
        function()
        {
            $("#doboz").animate(
                {
                    top: '+=150',
                    width: '-=200px',
                    fontSize: '2.5em',
                    height: '+=10%', 
                },
                2000, 
                function()
                {
                    $("#doboz").animate(
                        {
                            left: '5',
                            opacity: '0.4',
                        },
                        2000,
                        function()
                        {
                            $("#doboz").animate(
                                {
                                    fontSize: '12px',
                                    top: '-=150',
                                    width: '+=50px',
                                    height: '70px',
                                    opacity: '1',
                                }, 2000,
                                function()
                                {
                                    alert("VÉGE");
                                }
                            )
                        }
                    )
                }
                )
        }); 
    });

    $("#p-rejt").click(function(){
        var alert_made = false;
        $(".par").animate({height: 'toggle'},1000, function() 
                { 
                        if ( !alert_made )
                        {
                            alert("Bekezdések elrejtése");
                            alert_made = true;
                        }
                }
            ); 
    });

    $("#csuk-nyit").click(function(){
        $("#doboz").animate({height: 'hide'},1000, 
        function()
        {
            $("#doboz").animate({height:'show',},1000, function()
            {
                $("#doboz").animate({left: '300'}, 1000)
            })
        }); 
    });
})