/* Script ocultar password */

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.querySelector(".toggle-password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.innerHTML = '<img src="img/openeye.svg" alt="Ojo abierto">'; // Icono de ojo abierto

    } else {
      passwordInput.type = "password";
      toggleIcon.innerHTML = '<img src="img/closeye.svg" alt="Ojo abierto">'; // Icono de ojo cerrado
    }
  }
  






  /* Script para el switch */
  function cambiarTexto() {
    var miSwitch = document.getElementById("okSwitch");
    var label = document.querySelector('span[for="okSwitch"]');

    // Cambia el texto del label basado en el estado del switch
    label.textContent = miSwitch.checked ? "Sí" : "No";
}



/* Canvas */


var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var painting = false;

canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", startPainting);
canvas.addEventListener("touchend", stopPainting);
canvas.addEventListener("touchmove", draw);

function startPainting(e) {
    painting = true;
    draw(e);
}

function stopPainting() {
    painting = false;
    context.beginPath();
}

function draw(e) {
    e.preventDefault(); // Evita el comportamiento táctil predeterminado (por ejemplo, hacer zoom en la página)

    var x, y;

    if (e.touches) {
        x = e.touches[0].clientX - canvas.offsetLeft;
        y = e.touches[0].clientY - canvas.offsetTop;
    } else {
        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;
    }

    if (!painting) return;

    context.lineWidth = 2;
    context.lineCap = "round";
    context.strokeStyle = "black";

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
}

function mostrarImagen() {
    var lista = document.getElementById("lista");

    // Rutas de las imágenes según la opción seleccionada
    var imagenes = {
        Cabeza_cuello: "img/canva/cabeza_cuello.svg",
        Tronco: "img/canva/tronco.svg",
        Rodillas: "img/canva/rodillas.svg",
        Miembros_superiores: "img/canva/miembros_superiores.svg",
        Miembros_inferiores: "img/canva/miembros_inferiores.svg",
    };

    // Limpia el canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Carga la imagen seleccionada en el canvas
    var imagenSeleccionada = new Image();
    imagenSeleccionada.src = imagenes[lista.value];

    imagenSeleccionada.onload = function () {
        context.drawImage(imagenSeleccionada, 0, 0, canvas.width, canvas.height);
    };
}