'use strict';

var WebSocket = require('uws');

var ws = new WebSocket('wss://localhost:3000/');

ws.on('open', function () {
    console.log("Sucessful connected to the server");

    //send new message from user to server.
    ws.send('Hello my name is Bob');

    //Listen for any messgaes from the server. 
    ws.on('message', function (message) {

        ws.send(message);
    });
});
//# sourceMappingURL=user.js.map