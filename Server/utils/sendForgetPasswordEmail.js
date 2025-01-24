import nodemailer from "nodemailer";

const sendForgetPasswordEmail = (email) => {
  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ibrahimjamiu026@gmail.com",
      pass: "hudr klps qjay ofuy",
    },
  });

  const verificationLink = `https://hotel-pal-frontend.vercel.app/reset-passwrd/${email}`;
  const mailOptions = {
    from: "ibrahimjamiu026",
    to: email,
    subject: "Reset Password email",
    html: `<p>Click the following link to reset your password:</p><a href='${verificationLink}' target='_blank'>Link</a>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending reset email:", error);
    } else {
      console.log("Reset email sent:", info.response);
    }
  });
};

export default sendForgetPasswordEmail;
