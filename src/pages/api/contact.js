import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message, captchaToken } = req.body;

    /* ---------------------------
       BASIC VALIDATION
    ----------------------------*/
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    if (!captchaToken) {
      return res.status(400).json({ error: "Captcha missing" });
    }

    /* ---------------------------
       VERIFY CAPTCHA
    ----------------------------*/
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      },
    );

    const captchaData = await verifyRes.json();

    if (!captchaData.success) {
      return res.status(403).json({
        error: "Captcha verification failed",
      });
    }

    /* ===========================
       1️⃣ ADMIN EMAIL (TO SALES)
       =========================== */
    const adminResponse = await resend.emails.send({
      from: "Yuvabe Studios <noreply@mail.yuvabe.com>",
      to: ["sales@yuvabe.com"],
      reply_to: email,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    if (adminResponse.error) {
      console.error("Admin Email Error:", adminResponse.error);
      return res.status(500).json({ error: "Failed to send admin email" });
    }

    /* ===========================
       2️⃣ USER AUTO REPLY
       =========================== */
    const userResponse = await resend.emails.send({
      from: "Yuvabe Sales Team <sales@mail.yuvabe.com>",
      to: [email],
      subject: "Thank you for contacting Yuvabe Studios 🙌",
      html: `
      <div style="text-align:center;">
        <img src="https://www.yuvabestudios.com/images/profile/logo.png" width="200" />
        <h2>Thank you for contacting Yuvabe Studios!</h2>
      </div>

      <div style="background:#0f172a;padding:40px 20px;font-family:Arial,sans-serif;">
        <table align="center" width="100%" style="max-width:600px;background:#111827;border-radius:12px;padding:30px;color:#e5e7eb;">
          
          <tr>
            <td style="text-align:center;padding-bottom:20px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;">Yuvabe Studios</h1>
              <p style="margin:5px 0 0;color:#9ca3af;font-size:14px;">
                Digital • Design • AI • Innovation
              </p>
            </td>
          </tr>

          <tr>
            <td>
              <h2 style="color:#ffffff;">
                Hi ${name}, thanks for reaching out! 🙌
              </h2>
              <p style="color:#d1d5db;line-height:1.6;">
                We've received your message and our team will get back to you shortly.
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#020617;border-radius:8px;padding:15px;">
              <p style="margin:0;color:#9ca3af;font-size:13px;">Your Message:</p>
              <p style="margin:8px 0 0;color:#e5e7eb;">"${message}"</p>
            </td>
          </tr>

          <tr>
            <td style="padding-top:25px;">
              <a href="https://yuvabestudios.com/"
                 style="display:inline-block;background:#7c3aed;color:white;
                 text-decoration:none;padding:12px 18px;border-radius:6px;
                 font-size:14px;font-weight:bold;">
                Visit Yuvabe Studios
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding-top:30px;border-top:1px solid #1f2937;">
              <p style="margin:0;color:#9ca3af;font-size:13px;">
                — Yuvabe Studios Sales Team<br/>
                Auroville, Tamil Nadu
              </p>
            </td>
          </tr>

        </table>
      </div>
      `,
    });

    if (userResponse.error) {
      console.error("User Email Error:", userResponse.error);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
