var config = {};

config.debug = process.env.DEBUG || false;

config.mqtt = {};
config.mqtt.namespace = process.env.MQTT_NAMESPACE || "cadastro/id";
config.mqtt.hostname = process.env.MQTT_HOSTNAME || "broker.mqttdashboard.com";
config.mqtt.port = process.env.MQTT_PORT || 1883;

config.mongodb = {};
config.mongodb.hostname = process.env.MONGODB_HOSTNAME || "localhost";
config.mongodb.port = process.env.MONGODB_PORT || 27017;
config.mongodb.database = process.env.MONGODB_DATABSE || "mqtt";
config.mongodb.collection = process.env.MONGODB_COLLECTION || "message";
config.mongodb.stringConexaoRemota =
  "mongodb+srv://gustavo:mongo@mqttrecorder-by16d.mongodb.net/test?retryWrites=true";

module.exports = config;
