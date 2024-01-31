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
  




/* Validación del formulario */
  function validarFormulario() {
    // Obtén todos los elementos de entrada del formulario
    var inputs = document.querySelectorAll('input');
    
    // Itera sobre cada elemento de entrada
    inputs.forEach(function(input) {
      var feedbackElement = input.nextElementSibling; // Suponiendo que el elemento de retroalimentación sigue inmediatamente al input
  
      // Verifica si el campo está vacío
      if (input.value.trim() === '') {
        // Si está vacío, agrega las clases correspondientes
        input.classList.add('is-invalid');
        feedbackElement.classList.remove('d-none');
        feedbackElement.textContent = 'Ingresa un dato válido';
      } else {
        // Si no está vacío, quita las clases correspondientes y ajusta el texto
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        feedbackElement.classList.add('valid-feedback');
        feedbackElement.textContent = 'Dato válido';
      }
    });
  }
  

  /* Script para el switch */
  function cambiarTexto() {
    var miSwitch = document.getElementById("okSwitch");
    var label = document.querySelector('label[for="okSwitch"]');

    // Cambia el texto del label basado en el estado del switch
    label.textContent = miSwitch.checked ? "Sí" : "No";
}