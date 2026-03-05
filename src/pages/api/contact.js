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
<div style="background:#f5f7fb;padding:40px 20px;font-family:Arial,Helvetica,sans-serif;">

  <table align="center" width="100%" style="max-width:600px;background:#ffffff;border-radius:10px;padding:40px;border:1px solid #e5e7eb;">

    <!-- Logo -->
    <tr>
      <td style="text-align:center;padding-bottom:25px;">
        <img src="https://www.yuvabestudios.com/images/profile/logo.png" width="180" alt="Yuvabe Studios" />
      </td>
    </tr>

    <!-- Heading -->
    <tr>
      <td style="text-align:center;padding-bottom:20px;">
        <h1 style="margin:0;color:#111827;font-size:24px;font-weight:600;">
          Thank you for contacting Yuvabe Studios
        </h1>
        <p style="margin-top:8px;color:#6b7280;font-size:14px;">
          Digital • Design • AI • Innovation
        </p>
      </td>
    </tr>

    <!-- Greeting -->
    <tr>
      <td style="padding-top:10px;">
        <p style="color:#374151;font-size:15px;line-height:1.6;margin:0;">
          Hi <strong>${name}</strong>,
        </p>

        <p style="color:#374151;font-size:15px;line-height:1.6;margin-top:10px;">
          Thank you for reaching out to <strong>Yuvabe Studios</strong>. 
          We have successfully received your message and our team will review it shortly. 
          One of our specialists will get back to you as soon as possible.
        </p>
      </td>
    </tr>

    <!-- Message box -->
    <tr>
      <td style="padding-top:25px;">
        <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:18px;">
          <p style="margin:0;color:#6b7280;font-size:13px;">Your Message</p>
          <p style="margin-top:8px;color:#111827;font-size:14px;line-height:1.6;">
            "${message}"
          </p>
        </div>
      </td>
    </tr>

    <!-- CTA -->
    <tr>
      <td style="padding-top:30px;text-align:center;">
        <a href="https://yuvabestudios.com/"
          style="display:inline-block;background:#2563eb;color:#ffffff;
          text-decoration:none;padding:12px 22px;border-radius:6px;
          font-size:14px;font-weight:600;">
          Visit Our Website
        </a>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding-top:35px;border-top:1px solid #e5e7eb;text-align:center;">
        <p style="margin:0;color:#6b7280;font-size:13px;">
          Yuvabe Studios Sales Team
        </p>
        <p style="margin:5px 0 0;color:#9ca3af;font-size:12px;">
          Auroville, Tamil Nadu, India
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
