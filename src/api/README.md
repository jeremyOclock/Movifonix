## Installer et lancer le projet
A la racine du projet, taper :
* npm install
* npm run server
=> l'API est disponible sur localhost port 3000

## API
* POST /users => crée un nouvel utilisateur et lui attribue un token.
    * Body : username, password
* POST /login => Authentifie l'utilisateur si les identifiants sont corrects.
    * Body : username, password
    * Return : id, token

Pour consulter et modifier son utilisateur, une API REST complète est disponible sur /users. Pour pouvoir la consulter
il faut passer le header "Authorization" avec comme valeur le token retourné lors du login.

## But du projet
Le but du projet est de créer une plateforme de création, gestion, enrichissement de profil utilisateur. La plateforme sera intégralement réalisée à l'aide des technologies suivantes :
* ES6
* React
* Redux

Aucune autre librairie n'est autorisée.

## Liste des pages
* Création
* Login
* Consultation (même qu'édition mais en lecture seule)
* Edition

## Champs disponibles
* Nom
* Prénom
* Email
* Numéro de téléphone
* Adresse
* Code Postal
* Ville

## Vérifications
* Nom => lettres uniquement
* Prénom => lettres uniquement
* Email => something@somedomain.someextension
* Numéro de téléphone => chiffres uniquement
* Adresse => aucune
* Code Postal => chiffres uniquement et pas plus de 5
* Ville => aucune