const userEvents = require('./events/userEvents');
const sendWelcomeEmail = require('./listeners/emailListener');
const logUserRegistration = require('./listeners/logListener');
const readline = require('readline');
const logger = require('./logger');

// 이벤트 리스너 등록
userEvents.on('userRegistered', sendWelcomeEmail);
userEvents.on('userRegistered', logUserRegistration);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function registerUser() {
  try {
    const name = await askQuestion('사용자 이름을 입력하세요: ');
    const email = await askQuestion('사용자 이메일을 입력하세요: ');
    
    rl.close();

    if (!name || !email) {
      logger.error('이름과 이메일은 필수 입력 사항입니다.');
      return;
    }

    const user = {
      id: Date.now(),
      name,
      email,
    };

    // 사용자 등록 이벤트 발생
    userEvents.emit('userRegistered', user);

    logger.info(`사용자 등록 완료: ${JSON.stringify(user)}`);
  } catch (error) {
    logger.error(`사용자 등록 오류: ${error.message}`);
  }
}

registerUser();