// require("dotenv").config();
// const nodemailer = require("nodemailer");
// var express = require("express");
// var router = express.Router();

// const transport = nodemailer.createTransport({
//   service: "gmail",
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   debug: true,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

// const transporter = nodemailer.createTransport(transport);

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready");
//   }
// });
// router.post("/", (req, res, next) => {
//   const { firstname, lastname, subject, message, email } = req.body;

//   const mail = {
//     from: `<${email}>, ${lastname} ${firstname}`,
//     to: process.env.EMAIL,
//     subject: subject || "[No subject]",
//     html: message || "[No message]",
//   }

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       console.log("Error Occurs", err);
//     } else {
//       console.log("Email has been send !");
//     }
//   });
// });

// module.exports = router;
