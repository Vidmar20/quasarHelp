const ENV = require('dotenv').config().parsed

module.exports = (QENV) => {
  if (!['DEV', 'PROD'].includes(QENV)) {
    throw Error('Unknown or not supplied environment variable')
  }
  return {
    FIREBASE_CONFIG: {
      apiKey: ENV[`${QENV}_API_KEY`],
      authDomain: ENV[`${QENV}_AUTH_DOMAIN`],
      locationId: ENV[`${QENV}_LOCATION_ID`],
      projectId: ENV[`${QENV}_PROJECT_ID`],
      storageBucket: ENV[`${QENV}_STORAGE_BUCKET`],
      messagingSenderId: ENV[`${QENV}_MESSAGING_SENDER_ID`],
      appId: ENV[`${QENV}_APP_ID`]
    }
  }
}
