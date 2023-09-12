const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configuration des routes ici
app.use(express.static('public')); 
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
app.get('/', (req, res) => {
    res.send('Bonjour, monde !');
  });
  