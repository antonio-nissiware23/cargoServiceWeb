<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
/*
require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';
*/
require 'vendor/autoload.php';

// Recoger datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$description = $_POST['description'];

// Configurar PHPMailer
$mail = new PHPMailer(true);

try {
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'email-smtp.us-west-2.amazonaws.com';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->SMTPAuth = true;
    $mail->Username = 'AKIAR4NVGLRXQK67MDPE';
    $mail->Password = 'BLLq9LPW+SWS+oBPVl4MnL4sWOwljbK6DfVhLbwQXdtH';

    // Destinatario y contenido del mensaje
    $mail->setFrom('donotreply@nissiware.com'); //DESDE
    $mail->addAddress('jromero@nissiware.com'); //HASTA
    $mail->Subject = 'Nuevo mensaje de contacto';
    $mail->Body    = "Nombre: $name\nCorreo: $email\nTeléfono: $phone\nDescripción: $description";

    // Enviar correo
    $mail->send();
    
    // Redirigir después de enviar el correo
    header('Location: gracias.html');
    exit;
} catch (Exception $e) {
    echo 'Error al enviar el mensaje: ', $mail->ErrorInfo;
}
?>
