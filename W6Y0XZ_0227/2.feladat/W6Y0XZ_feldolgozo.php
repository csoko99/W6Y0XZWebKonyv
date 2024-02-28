
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $name       = $_POST['name'];
                $pin        = $_POST['pin-code'];
                $fruit      = $_POST['favfruit'];
                $age        = $_POST['age'];
                $shoeSize   = $_POST['shoeSize'];
                $confidence = $_POST['range'];

                if (empty($name)) {
                    echo "<span class=\"warning\">Name cannot be empty!</span><br>";
                }
                else {
                    if (strlen($name) > 50) {
                        echo "<span class=\"warning\">Name cannot be longer than 50 characters!</span><br>";
                    }
                }
                if (empty($pin)) {
                    echo "<span class=\"warning\">Pin cannot be empty!</span><br>";
                }
                else {
                    if (strlen($pin) > 50) {
                        echo "<span class=\"warning\">Pin cannot by longer than 50 characters!</span><br>";
                    }
                }
                if (empty($fruit)) {
                    echo "<span class=\"warning\">Fruit cannot be empty!</span><br>";
                }
                if (empty($age)) {
                    echo "<span class=\"warning\">Age cannot be empty!</span><br>";
                }
                if (empty($shoeSize)) {
                    echo "<span class=\"warning\">Shoe size cannot be empty!</span><br>";
                }
                if (empty($confidence)) {
                    echo "<span class=\"warning\">Confidence cannot be empty!</span><br>";
                }

                echo "Name: $name<br>";
                echo "Favorite Fruit: $fruit<br>";
                echo "Age: $age<br>";
                echo "Shoe Size: $shoeSize<br>";
                echo "Confidence: $confidence<br>";
            }
        ?>