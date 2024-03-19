<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
  <h2>Beküldött értékek</h2>
  
  <?php
    echo ("<strong>Név: </strong>" . $_POST['name'] . "<br><br>");
    echo ("<strong>Pin Kód: </strong>" . $_POST['pin-code'] . "<br><br>");
    echo ("<strong>Kedvenc Gyümölcs: </strong>" . $_POST['favfruit'] . "<br><br>");
    echo ("<strong>Életkor: </strong>" . $_POST['age'] . "<br><br>");
    echo ("<strong>Lábméret: </strong>" . $_POST['foot-size'] . "<br><br>");
    echo ("<strong>Önbizalom: </strong>" . $_POST['confidence'] . "<br><br>");
    ?>
    <a href="W6Y0XZ_urlap.html">Vissza az űrlapra</a>
</body>
</html>

