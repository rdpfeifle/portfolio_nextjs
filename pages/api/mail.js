const email = require("@sendgrid/mail");

email.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  // email message object
  const msg = {
    to: "raquelpfeifle@gmail.com",
    from: "raquelpfeifle@gmail.com",
    subject: "New Message from Portfolio Website!",
    // set the plain text version of the email content
    text: `
      ${body.name}\n
      ${body.email}\n
      ${body.subject}\n
      ${body.message}
    `,
    // set the HTML version of the email content
    html: `
      <strong>Name:</strong> ${body.name}
      <br>
      <strong>Email:</strong> ${body.email}
      <br>
      <strong>Subject:</strong> ${body.subject}
      <br>
      <strong>Message:</strong> ${body.message}
    `,
  };

  try {
    // send the email using SendGrid
    await email.send(msg);
    res.status(200).json({ status: "Ok" });
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
    // send an error response to the client if there was a failure
    res.status(500).json({ error: "Failed to send email" });
  }
}
