const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path'); // Módulo path para manejar rutas

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración para servir archivos estáticos desde el directorio raíz
app.use(express.static(__dirname));

const transporter = nodemailer.createTransport({
  host: 'email-smtp.us-west-2.amazonaws.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'AKIAR4NVGLRXQK67MDPE',
    pass: 'BLLq9LPW+SWS+oBPVl4MnL4sWOwljbK6DfVhLbwQXdtH'
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, phone, description } = req.body;

  const mailOptions = {
    from: {email}, // Cambia esto por tu dirección de correo verificada en Amazon SES
    to: 'jromero@nissiware.com',
    subject: 'Nuevo mensaje de contacto',
    html: `<p>Nombre: ${name}</p>
           <p>Correo Electrónico: ${email}</p>
           <p>Número Teléfono: ${phone}</p>
           <p>Descripción: ${description}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error al enviar el correo');
    }
    res.status(200).send('Correo enviado correctamente');
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
