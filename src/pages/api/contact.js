import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message, captchaToken } = req.body;

    console.log("Incoming captchaToken:", captchaToken);
    console.log("Secret key exists:", !!process.env.RECAPTCHA_SECRET_KEY);

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

    console.log("captchaData from Google:", captchaData);

    if (!captchaData.success) {
      return res.status(403).json({
        error: "Captcha verification failed",
        googleResponse: captchaData,
      });
    }

    /* ---------------------------
       MAILER
    ----------------------------*/
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // _tls: {
      //   rejectUnauthorized: false,
      // },
      get tls() {
        return this._tls;
      },
      set tls(value) {
        this._tls = value;
      },
    });

    await transporter.sendMail({
      from: `"Yuvabe Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p>${message}</p>
      `,
    });

    /* -------------------------
   2️⃣ USER AUTO-REPLY EMAIL
--------------------------*/
    await transporter.sendMail({
      from: `"Yuvabe Studios" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Yuvabe Studios 🙌",
      html: `
  <div style="text-align:center;">
    <img src="https://yuvabestudios.com/images/yb-icon.png" width="120" />
    <h2>Thank you for contacting Yuvabe Studios!</h2>
  </div>

  <div style="background:#0f172a;padding:40px 20px;font-family:Arial,sans-serif;">
    <table align="center" width="100%" style="max-width:600px;background:#111827;border-radius:12px;padding:30px;color:#e5e7eb;">
      
      <tr>
        <td style="text-align:center;padding-bottom:20px;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;">
            Yuvabe Studios
          </h1>
          <p style="margin:5px 0 0;color:#9ca3af;font-size:14px;">
            Digital • Design • AI • Innovation
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:10px 0;">
          <h2 style="color:#ffffff;margin:0 0 10px;">
            Hi ${name}, thanks for reaching out! 🙌
          </h2>

          <p style="color:#d1d5db;line-height:1.6;">
            We've received your message and truly appreciate you taking the time
            to connect with Yuvabe Studios. Our team will review your enquiry
            and get back to you as soon as possible.
          </p>
        </td>
      </tr>

      <tr>
        <td style="background:#020617;border-radius:8px;padding:15px;margin-top:15px;">
          <p style="margin:0;color:#9ca3af;font-size:13px;">Your Message:</p>
          <p style="margin:8px 0 0;color:#e5e7eb;">
            "${message}"
          </p>
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
            — Yuvabe Studios Team<br/>
            Auroville, Tamil Nadu
          </p>
        </td>
      </tr>

    </table>
  </div>
`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return res.status(500).json({ error: "Mail failed" });
  }
}
