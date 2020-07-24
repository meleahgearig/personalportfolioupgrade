import { films } from './films.js';

const filmsul = document.getElementById('filmsul');

console.log(films)

films.map(film => {
    console.log(film)
    
    let li = createNode('li'),
    img= createNode('img'),
    span= createNode('span');


    span.innerHTML = `${film.title},
     ${film.director}`

    append(li, span);
    append(filmsul, li);

})

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}
