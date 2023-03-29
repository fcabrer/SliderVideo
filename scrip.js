function toggleMenu() {
    const menuIcon = document.querySelector (".menuIcon");
    const navBar = document.getElementById("navBar");

    menuIcon.classList.toggle("active");
    navbar.classList.toggle("active");
}



const slideShow = document.getElementById ("slideShow");
const slides = slideShow.getElementsByTagName ("video");

var index = 0;
function nexSlide(){
    slides[index].classList.remove("active");//se remueve y queda en el modulo 0
    //voy a enlistar todas las classlist y decirle que remueva aquellos que tengan como parametro active
    index = (index + 1) % slides.length;
    //vamos a decirle que el idex va a hacer igual a un idex +1, vamos a sacar un modulo (%) con el total de videos que tenemos (conteo) .length cantidad de elementos que se tenga// 
    slides[index].classList.add("active")
    //guardamos nuevamente la clase active, Para que cuando esté en esa clase active otra vez se empiece a reproducir nuestro videíto.
}

function preSlide(){
    slides[index].classList.remove("active");
    index = (index - 1 +slides.length)% slides.length;
    //En lugar de sumar, pues vamos a regresar el index, así que lo vamos a restar la unidad y además de esto vamos a sumarle la cantidad de slides que tengamos.
    slides[index].classList.add("active")
}


const slideShowText = document.getElementById ("slideShowText");

const slideText = slideShowText.getElementsByTagName("div");

var i = 0
function nextSlideText(){
    slideText[i].classList.remove("active");
    i=(i + 1) % slideText.length;
    slideText[i].classList.add("active")
}
function prevSlideText(){
    slideText[i].classList.remove("active");
    i=(i - 1 +slideText.length ) % slideText.length;
    slideText[i].classList.add("active")
}