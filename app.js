const express = require('express'); 
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => { 
  res.send('Witaj w zkonteneryzowanej aplikacji! Wersja 1.0'); 
}); 
app.listen(port, () => { 
console.log(`Serwer działa na porcie ${port}`); 
});

