<?php
    $destino="aanchundia@nissiware.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $descripcion = $_POST["descripcion"];

    $contenido = "Nombre: " . $nombre .
                 "\nTelefono: " . $telefono .
                 "\nCorreo: " . $correo .
                 "\nDescripcion: " . $descripcion;
    

    //Funcion para enviar el mensaje
    mail($destino, "Contacto", $contenido);
    header("Location:index.html")

    

?>