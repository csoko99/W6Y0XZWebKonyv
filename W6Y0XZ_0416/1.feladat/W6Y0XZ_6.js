$(document).ready(function(){

   $("#szoveg").click(function(){
    alert("HTML kód...");
   });

   
   $("#html").click(function(){
    const htmlkod = document.getElementById("html-kod");
    alert(htmlkod.innerText);
   });

   $("#ertek").click(function(){
    const nevErtek = $("#nev").val(); 
    alert(nevErtek);
 });

    $("#parameter").click(function(){
        const link = $("#link").attr("href"); 
        const id = $("#zold-div").attr("id")
        const divWidth = $("#zold-div").width(); 
        const divHeight = $("#zold-div").height(); 
        const terulet = divWidth * divHeight;
        alert("Paraméter értéke: " + link + "\n" +
              "Paraméter értéke: "+ terulet + "\n" +
              "Paraméter értéke: " + id);
    });
})