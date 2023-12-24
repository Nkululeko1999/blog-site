import { transporter } from "../configurations/emails/emails.config.js";

export const signupEmailTemplate = () => {
    let emailTemplate;
    emailTemplate = `<h1>Successfully Signed up to travel blog</h1>`;
    return emailTemplate;
};

export const resetPasswordLink = (resetPasswordLink) => {
    let emailTemplate;
    emailTemplate = `
    <h1>Reset Password</h1>
    <p>Follow this link to reset your password</p>
    <p>${resetPasswordLink}</p>
    `;
    return emailTemplate;
};

export const sendEmail = async (req, emailTemplate, emailSubject ) => {
    try {
      const {email} = req.body;
  
      console.log(`Recipient Email: ${email}`);
      console.log(`Email Template: ${emailTemplate}`);
      console.log(`Email Subject: ${emailSubject}`);
      
      const mailOptions = {
        from: process.env.NODEMAILER_USER,
        to: email,
        subject: emailSubject,
        html: emailTemplate
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  