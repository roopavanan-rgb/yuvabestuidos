import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use other services or SMTP details
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Email to Admin
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO, // Admin email
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      // Confirmation Email to User
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank you for contacting Yuvabe Studios",
        html: `
          <h3>Hi ${name},</h3>
          <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
          <br>
          <p>Best Regards,</p>
          <p>Yuvabe Studios Team</p>
        `,
      });

      return res.status(200).json({ message: "Emails sent successfully" });
    } catch (error) {
      console.error("Email Error:", error);
      return res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
