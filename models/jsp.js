// Utilisation de la Fetch API
fetch('/enfants')
  .then(response => response.json())
  .then(data => {
    // Les informations des enfants sont maintenant disponibles dans la variable "data"
    // On peut les afficher sur notre interface utilisateur
    console.log(data);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des informations des enfants depuis le serveur :', error);
  });
