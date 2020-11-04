//Exercice II - 1
// Raccourci nommé "image" ciblant l'img "Trump"

var image = document.getElementById("Trump");

image.onmouseover = function skull() {
        image.src="Assets/Images/Trump2.jpg";
    }
    
image.onmouseout = function face() {
        image.src="Assets/Images/Trump1.jpg";
    }

    // function skull() {
    //     document.images["trump"].src="Assets/Images/Trump2.jpg"
    //     }
        
    //   function head() {
    //     document.images["trump"].src="Assets/Images/Trump1.jpg"
    //     }
    
