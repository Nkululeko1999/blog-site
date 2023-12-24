import { transporter } from "../configurations/emails/emails.config.js";

export const signupEmailTemplate = () => {
    let emailTemplate;
    emailTemplate = `<h1>Successfully Signed up to travel blog</h1>`;
    return { emailTemplate };
};

export const sendEmail = async (req) => {
    try {
      const {email} = req.body;
      const emailSubject  = 'Signup to Travel Blog';
  
      console.log(`Recipient Email: ${email}`);
      
      const { emailTemplate } = await signupEmailTemplate();
      
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
  