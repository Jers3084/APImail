// using Twilio SendGrid's v3 Node.js Library
const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendmail = async (req, res) => {
  response = { message: '', data: [], success: true }
  const mensaje = req.body
  try {
    const msg = {
      to: process.env.TO_EMAIL, // Destino
      from: mensaje.email, // correo del interesado
      subject: 'Mensaje de Portafolio',
      text: mensaje.comentario, // mensaje
      html: mensaje.comentario,
    }
    console.log(msg);
    await sgMail.send(msg).then(() => {
      const result = 'Email sent' // response.body
      response.data = result
      response.messages = 'Ok'
      return res.json(response)
    })
  } catch (error) {
    response.message = 'lo siento hubo un error'
    response.success = false
    return res.status(500).json(response)
  }
}
module.exports = { sendmail }
