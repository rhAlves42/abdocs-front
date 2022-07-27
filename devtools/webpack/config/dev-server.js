const defaultPort = 8080;
const path = require('path');
const devServerHost = 'localhost';

const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

const devServerConfig = {
  static: path.join(__dirname, '/'),
  port: defaultPort,
  historyApiFallback: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true,
  host: devServerHost,
};

// allowedHosts?,
// bonjour?, client?, compress?, devMiddleware?, headers?,
// historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?,
// magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?,
// onListening?, open?, port?, proxy?, server?, setupExitSignals?,
// setupMiddlewares?, static?, watchFiles?, webSocketServer?

module.exports = {
  devServerUrl,
  devServerConfig,
};
