// Exercice 1

console.log('--------- EXERCICE ------------------------------')

var div_container = document.getElementById('container')

console.log('---- Contenu de la div --------------------------')
console.log(div_container)
console.log('-------------------------------------------------')

// Changons le nom Pete en Richard
var ul_content = document.getElementsByTagName('li')
ul_content[1].textContent = "Richard"

var all_ul = document.getElementsByTagName('ul')


// modification du contenu du premier li de chaque ul
for (let elem of all_ul) {
    elem.children[0].textContent = 'mr banks'
}


// ajout de la classe student_list aux ul

for (let elem of all_ul) {
    elem.className= 'student_list'
}


// ajout de la classe classList et attendance au premier ul

all_ul[0].classList.add('classList' , 'attendance')

// Exercice 2