const WebSocket = require('uws');

const ws = new WebSocket('wss://localhost:3000/');

ws.on('open', () => {
    console.log ("Sucessful connected to the server");

    //send new message from user to server.
    ws.send('Hello my name is Bob');

    //Listen for any messgaes from the server. 
    ws.on('message', (message) =>{

        console.log("Server says: ", message);

        ws.send(message);

    });
});



