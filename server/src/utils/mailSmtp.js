const nodemailer = require("nodemailer");

const otpSender = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.nodeMailer_user,
      pass: process.env.nodeMailer_password,
    },
  });

  let otp = "";

  for (let index = 0; index < 6; index++) {
    const generateOtp = parseInt(Math.random() * 10);
    otp += generateOtp.toString();
  }

  const mailoption = {
    from: "security@stylelust.in",
    to: email,
    subject: "Verification Code for Account Registration",
    text: "Hello world?",
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <h2 style="color: #333;">Verify Your Email Address</h2>
    <p style="color: #333;">Dear User,</p>
    <p style="color: #333;">Thank you for signing up with our service. To complete the registration process, please use the following verification code:</p>
    <div style="background-color: #f5f5f5; padding: 10px; margin-bottom: 20px;">
        <p style="font-size: 18px; color: #333; margin: 0;">Your OTP: <strong style="color: #0066cc;">${otp}</strong></p>
    </div>
    <p style="color: #333;">Please enter this code in the appropriate field to verify your email address. This code will expire after a short period of time. <strong style="color: #ff0000;">Do not share this with anyone.</strong></p>
    <p style="color: #333;">Thank you,</p>
    <p style="color: #333;">StyleLust.in</p>
</div>`,
  };

  transporter.sendMail(mailoption, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email Sent");
    }
  });

  return { otp, email };
};
module.exports = otpSender;
