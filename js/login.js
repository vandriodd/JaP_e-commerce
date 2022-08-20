//declaro una función para el feedback
function validationError(text) {
    alert("Ingresa tu " + text);
}

/*
-Al hacer click en el botón "Ingresar" se toman los datos ingresados, suprimiendo los espacios iniciales y finales
-Inicializo un booleano con "true", que será usado para validar el inicio de sesión
-Se hace uso de la condicional if para evaluar que los campos no estén vacíos, y en caso de estarlo, se muestra
la alerta con validationError(), pasándole por parámetro un string
-Finalmente, si todo es correcto, se redirige al home 
*/

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("regBtn").addEventListener("click", function(){
        let email = document.getElementById("email").value.trim("");
        let password = document.getElementById("password").value.trim("");
        let loginValidation = true;

        if(email==""){
            loginValidation = false;
            validationError("email");
        }

        if(password==""){
            loginValidation = false;
            validationError("contraseña");
        }

        if(loginValidation){
            location.href = "home.html";
        }
    })
});