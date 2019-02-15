var mqtt = require("mqtt");
var mongodb = require("mongodb");
var config = require("./config");

var mqttUri = "mqtt://" + config.mqtt.hostname + ":" + config.mqtt.port;
var client = mqtt.connect(mqttUri);

client.on("connect", function() {
  client.subscribe(config.mqtt.namespace);
});

// var mongoUri =
//   "mongodb://" +
//   config.mongodb.hostname +
//   ":" +
//   config.mongodb.port +
//   "/" +
//   config.mongodb.database;
var mongoUri = config.mongodb.stringConexaoRemota;
mongodb.MongoClient.connect(
  { useNewUrlParser: true },
  mongoUri,
  function(error, database) {
    if (error != null) throw error;

    var collection = database.collection(config.mongodb.collection);
    collection.createIndex({ topic: 1 });

    client.on("message", function(topic, message) {
      var messageObject = {
        topic: topic,
        message: message.toString()
      };

      if (messageObject.topic === "cadastro/id") {
        var ID = messageObject.message;
        client.subscribe("mensagem/" + ID);
        console.log("tópico: " + messageObject.topic);
        console.log("mensagem: " + ID);
      } else {
        collection.insert(messageObject, function(error, result) {
          console.log("feedou a base");
          if (error != null) console.log("Error: " + error);
        });
      }
    });
  }
);
