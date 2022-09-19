// Création du tableau pour stocker toutes les images
let tableau = [ "img2/nb1.png",
                "img2/nb2.png",
                "img2/nb3.png",
                "img2/nb4.png",
                "img2/nb5.png",
                "img2/nb6.png",
                "img2/nb7.png",
                "img2/nb8.png",
                "img2/nb9.png",
                "img2/nb10.png",
                "img2/nb11.png",
                "img2/nb12.png",
                "img2/nb13.png",
                "img2/nb14.png",
                "img2/nb15.png",
                "img2/nb16.png",
                "img2/nb17.png",
                "img2/nb18.png",
                "img2/nb19.png",
                "img2/nb20.png",
                "img2/nb21.png",
                "img2/nb22.png",
];

// Création de l'image pour stocker toutes les images
let img = document.createElement('img');
img.src = tableau[0]

// Création de la fonction qui va générer le saibaman
function generateSaibaman() {
    document.getElementById('body').appendChild(img);
    // Mettre dans 2 variables distinctes la longueur et la largeur de la fenêtre
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    
    // Définir un nombre aléatoire pour le placement du saibaman dans la fenêtre...
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    // ...pour le rattacher au css
    img.style.position = "absolute";
    img.style.top = randomTop +"px";
    img.style.left = randomLeft +"px";
}



// fonction qui permet d'incrémenter la séquence d'image à chaque fois que l'on appuie sur la touche espace
function spaceButton (i) {
    document.addEventListener('keypress', (event) => {
        var name = event.key;
        var code = event.code;
        if (code === "Space") {
            img.src = tableau[i];
            i++;
            if (i === 22 ) {
                i = 0;
                img = document.createElement('img');
                generateSaibaman()
                }
            }
            
        console.log(img.src) //juste pour voir que mes itérations fonctionnent
    }, false);
}
 

let saibaman = spaceButton(0);
saibaman ++;


// Fonction qui retourne un nombre aléatoire entre min et max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}