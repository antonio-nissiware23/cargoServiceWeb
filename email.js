document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario

    let formData = new FormData(this);

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "send_mail.php", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Correo enviado correctamente");
                document.getElementById("myModal").style.display = "block"; // Mostrar modal de éxito
                setTimeout(function() {
                    document.getElementById("myModal").style.display = "none"; // Ocultar modal después de cierto tiempo
                }, 3000); // 3 segundos
            } else {
                console.error("Error al enviar el correo: " + xhr.status);
                // Mostrar mensaje de error si es necesario
            }
        }
    };

    xhr.send(formData);
});
