
import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  
  if (req.method === 'POST') {
    
    const body = JSON.parse(req.body);

    const message = `
      Email: ${body.email}\r\n
      \r\n
      ${body.message}
    `;

    const data = {
      to: 'gijs.huitenga@gmail.com',
      from: 'contact@gijs-huitenga.nl',
      subject: `New message from ${body.email}`,
      text: message,
      html: message.replace(/\r\n/g, '<br />')
    };

    await mail.send(data);

    res.status(200).json({ status: 'OK' });

  }

}