import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import WebSocketServer, {Server} from 'uws';

const PORT = 3000;
const app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors({
    exposedHeaders:"*"
}));

app.use(bodyParser.json({
    limit: '50mb'
}));

//app.set('root', __dirname);

app.use((req, res) =>{
    res.send("Hello!")
});

app.wss = Server({
    server: app.server

});

app.wss.on('connection', (connection) =>{
    console.log("New user connected");

    //listen event new message from user.
    connection.on('message', (message) =>{

        console.log('User says: ', message);

        connection.send("Hey user how are you?");

    });
});

app.server.listen(process.env.PORT || PORT, () =>{
    console.log('App is running on port $(app.server.address().port)');
});

export default app;