import nodemailer from "nodemailer";

const sendBookingOwnerEmail = (email) => {
  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ibrahimjamiu026@gmail.com",
      pass: "hudr klps qjay ofuy",
    },
  });

  const verificationLink = `https://rental-8yem.onrender.com/api/verify?email=${encodeURIComponent(
    email
  )}`;
  const mailOptions = {
    from: "ibrahimjamiu026",
    to: email,
    subject: "Property book email",
    html: `<p>Someone booked for property</p><a href='${verificationLink}' target='_blank'>Link</a>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending verification email:", error);
    } else {
      console.log("Verification email sent:", info.response);
    }
  });
};

export default sendBookingOwnerEmail;
