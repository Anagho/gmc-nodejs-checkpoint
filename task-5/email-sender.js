// nodemailer
import nodemailer from "nodemailer";

// Create a transporter using an SMTP server
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com", // Replace with your email
    pass: "your password or app_password", // Replace with your password
  },
});

// Setup email data
const mailOptions = {
  from: "your_email@gmail.com", // Sender address
  to: "your_email@gmail.com", // Receipient address
  subject: "Testing Email from Node.js",
  text: "Hello! testing email using nodemailer in node.j",
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error occurred: ", error);
  }

  console.log("Email sent successfully: ", info.response);
});
