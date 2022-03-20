const client = require("./client/client.js");
const message = require("./services/command.js");

client.on ("ready", () => {
    console.log("Github Bot Online");
});

client.on("message", message);
