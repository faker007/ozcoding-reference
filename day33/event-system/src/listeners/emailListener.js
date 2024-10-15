const nodemailer = require('nodemailer');
const logger = require('../logger');

// 이메일 전송 설정
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

function sendWelcomeEmail(user) {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: user.email,
    subject: '환영합니다!',
    text: `안녕하세요, ${user.name}님!\n환영합니다.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      logger.error(`이메일 전송 오류: ${error.message}`);
    } else {
      logger.info(`환영 이메일이 전송되었습니다: ${info.response}`);
    }
  });
}

module.exports = sendWelcomeEmail;