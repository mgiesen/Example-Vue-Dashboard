const express = require('express');
const WebSocket = require('ws');
const http = require('http');

const app = express();
const restPort = 3000;
const wssPort = 3001;

// Erstelle einen HTTP-Server für Express
const server = http.createServer(app);

// WebSocket-Server auf Port 3001
const wss = new WebSocket.Server({ port: wssPort });

wss.on('connection', function connection(ws)
{
    console.log('Ein neuer Client hat sich verbunden!');

    const intervalId = setInterval(() =>
    {
        const value = Math.floor(Math.random() * 101);

        const message = JSON.stringify({
            id: 'wss_temperature',
            data: {
                value: value,
                unit: '°C'
            }
        });

        ws.send(message);
    }, 1000);

    ws.on('close', () =>
    {
        console.log('Client hat die Verbindung getrennt.');
        clearInterval(intervalId);
    });

});

app.get('/temperature', (req, res) =>
{
    const value = Math.floor(Math.random() * 101);
    res.json({ value: value, unit: '°C' });
});

app.get('/humidity', (req, res) =>
{
    const value = Math.floor(Math.random() * 101);
    res.json({ value: value, unit: '%' });
});

// Nutze den HTTP-Server, um Express zu starten
server.listen(restPort, () =>
{
    console.log(`Server läuft auf http://localhost:${restPort}`);
});
