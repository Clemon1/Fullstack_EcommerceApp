import nodemailer from "nodemailer";

export const sendVerifictionEmail = async (
  firstName: string,
  email: string,
  _id: any,
) => {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp-relay.sendinblue.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "clemonezeh@gmail.com", // generated ethereal user
        pass: "4vAMaGQpJw9nkhY2", // generated ethereal password
      },
    });

    const mailOption = {
      from: "clemonezeh@gmail.com", // sender address
      to: email, // list of receivers
      subject: "Verification Email", // Subject line
      // text: "Hello world?", // plain text body
      html: `<p>  Welcome ${firstName} !!! <a href="http://localhost:5000/verify?id=${_id}"> Please click here to verify your email</a></p>`, // html body
    };

    // send mail with defined transport object
    await transporter.sendMail(mailOption, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent: %s", info.response);
      }
    });

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  } catch (error) {
    console.log(error);
  }
};
