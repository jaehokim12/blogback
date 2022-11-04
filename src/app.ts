
import express from 'express';

// import Logger from './loaders/logger';

async function startServer() {
  const app = express();

  await require('./loaders').default({ expressApp: app });

  app.listen(4000, () => {
//     Logger.info(`
//       ################################################
//       🛡️  Server listening on port: ${config.port} 🛡️
//       ################################################
//     `);
//   }).on('error', err => {
//     Logger.error(err);
//     process.exit(1);
  });

}

startServer();
