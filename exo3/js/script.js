// modifiez la valeur de l'attribut id de navBar à socialNetworkNavigation
var divIdNavBar = document.getElementById('navBar')
divIdNavBar.setAttribute('id' , 'socialNetworkNavigation')

// créer un nouvel élément li
const newLi = document.createElement('li');

// créer un nouveau nœud de texte avec "Déconnexion" comme texte spécifié
const newTextNode = document.createTextNode('Déconnexion');

// ajouter le nœud de texte au nœud de liste nouvellement créé
newLi.appendChild(newTextNode);

// ajouter ce nœud de liste mis à jour à la liste non ordonnée
const ul = document.querySelector('ul');
ul.appendChild(newLi);

// prime : afficher le texte des premier et dernier éléments li de la liste
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;
console.log(firstLi.textContent); // affiche "Profile"
console.log(lastLi.textContent); // affiche "Déconnexion"