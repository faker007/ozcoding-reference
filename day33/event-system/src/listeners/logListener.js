const logger = require('../logger');

function logUserRegistration(user) {
  logger.info(`새로운 사용자 등록: ID=${user.id}, 이름=${user.name}, 이메일=${user.email}`);
}

module.exports = logUserRegistration;