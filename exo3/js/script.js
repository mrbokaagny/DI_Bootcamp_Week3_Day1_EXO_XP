// modifiez la valeur de l'attribut id de navBar à socialNetworkNavigation
var divIdNavBar = document.getElementById('navBar')
divIdNavBar.setAttribute('id' , 'socialNetworkNavigation')

// créer un nouvel élément li
const newLi = document.createElement('li');

// créer un nouveau nœud de texte avec "Déconnexion" comme texte spécifié
const nouveauTextNode = document.createTextNode('Déconnexion');

// ajouter le nœud de texte au nœud de liste nouvellement créé
newLi.appendChild(nouveauTextNode);

// ajouter ce nœud de liste mis à jour à la liste non ordonnée
const currentUl = document.querySelector('ul');
currentUl.appendChild(newLi);

// prime : afficher le texte des premier et dernier éléments li de la liste
const premierLi = currentUl.firstElementChild;
const dernierLi = currentUl.lastElementChild;
console.log(premierLi.textContent); // affiche "Profile"
console.log(dernierLi.textContent); // affiche "Déconnexion"