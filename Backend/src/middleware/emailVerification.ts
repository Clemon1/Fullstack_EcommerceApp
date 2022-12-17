import nodemailer from "nodemailer";
import dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
interface details {
  firstName: string;
  email: string;
  emailToken: string;
  _id: any;
}
export const sendVerifictionEmail = async (mail: details) => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.Email_ACCOUNT, // generated ethereal user
        pass: process.env.PASS_ACCOUNT, // generated ethereal password
      },
    });

    console.log(process.env.Email_ACCOUNT);

    const mailOption = {
      from: process.env.Email_ACCOUNT, // sender address
      to: mail.email, // list of receivers
      subject: "Verification Email", // Subject line
      // text: "Hello world?", // plain text body
      html: `<p>  Welcome ${mail.firstName} !!! <a href="${process.env.HOST_URL}login"> Please click here to verify your email</a></p>`, // html body
    };

    // send mail with defined transport object
    await transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log("Message sent: %s", info.response);
      }
    });

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  } catch (error) {
    console.log(error);
  }
};
