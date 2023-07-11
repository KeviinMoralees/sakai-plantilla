const ipStations = "http://139.177.204.169:8090/crud-station/api/v1.0";
const ipRegistry = "http://139.177.204.169:8090/crud-registry/api/v1.0/registry";
const ipNotify = "http://139.177.204.169:8090/notification/api/v1.0";
const ipEvents = "http://139.177.204.169:8090";
const ipRegistryNotify = "http://139.177.204.169:8090/crud-registry"
const ipTelemetria = "http://139.177.204.169:8090/crud-telemetry/api/v1.0"
const ipAudio = "http://139.177.204.169:8090/crud-audio/api/v1.0/"
const ipSecurity = "http://139.177.204.169:8050/api"
const ipUsers = "http://139.177.204.169:8050/api"
const ipEventsSock = "http://139.177.204.169:8090/crud-events";

const PROXY_CONFIG = {
  //Estaciones
  "/station": {
    target: `${ipStations}`,
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
  },
  //Estaciones sin registrar
  "/withoutRegistry": {
    target: `${ipRegistry}`,
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
  },
  //notificacion de estaciones
  "/notify": {
    target: `${ipNotify}`,
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
  },
  //events
  "/crud-events": {
    target: `${ipEvents}`,
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
  },
    // //eventsSocket
    // "/events": {
    //   target: `${ipEventsSock}`,
    //   changeOrigin: true,
    //   secure: false,
    //   logLevel: "debug",
    // },
  //socket1
  "/registry": {
    target: `${ipRegistryNotify}`,
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
  },
  //socket2
  "/crud-telemetry": {
    target: `http://139.177.204.169:8090`,
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
  },
  //security
  "/auth": {
    target: `${ipSecurity}`,
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
  },
  //audio
  "/audio": {
    target: `${ipAudio}`,
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
  },
  //users
  "/users/": {
    target: `${ipUsers}`,
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
  },

};

module.exports = PROXY_CONFIG;
