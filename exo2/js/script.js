const div = document.querySelector('div');

// ajouter une couleur d'arrière-plan "bleu clair" et un peu de rembourrage à la div
div.setAttribute('style' , 'backgroundColor:lightblue;padding:10px')

// cacher le premier élément li
const premierLi = document.querySelector('li');
premierLi.setAttribute('style','display:none')

// ajouter une bordure au second élément li
const deuxiemeLi = document.querySelectorAll('li')[1];
deuxiemeLi.setAttribute('style' , 'border:1px solid black')

// modifier la taille de la police de tout le corps
document.body.style.fontSize = '20px';

// bonus : afficher une alerte si la couleur de fond de la div est "bleu clair"
if (div.style.backgroundColor === 'lightblue') {
  alert(`Bonjour ${firstLi.textContent} et ${secondLi.textContent}`);
}






