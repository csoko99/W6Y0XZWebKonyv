const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'real-madrid'
});

// Home Page betöltése
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home-page.html'));
});

// Real Madrid Page betöltése
app.get('/real-madrid', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'real-madrid-page.html'));
});

// Golden State Warriors Page betöltése
app.get('/golden-state', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'golden-state-page.html'));
});

// Mercedes Page betöltése
app.get('/mercedes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'f1-mercedes-page.html'));
});

// Kérdőív Page betöltése
app.get('/kerdoiv', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'kerdoiv.html'));
});

// Real Madrid adatok lekérése
app.get('/real-madrid-data', (req, res) => {
  connection.query('SELECT * FROM squad', (err, rows, fields) => {
    if (err) {
      console.log("Hiba a lekérdezés során: " + err);
      res.sendStatus(500);
      return;
    }
    console.log(rows);
    res.send(rows);
  });
});

// Player részletes adatainak lekérése
app.get('/player-details', (req, res) => {
  const playerName = req.query.playerName;

  connection.query('SELECT * FROM squad WHERE nev = ?', [playerName], (err, rows, fields) => {
    if (err) {
      console.log("Hiba a lekérdezés során: " + err);
      res.sendStatus(500);
      return;
    }
    console.log(rows);
    res.send(rows[0]);
  });
});

app.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port} címen`);
});