const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
console.log(pieces);

const article = pieces[0];
const imageElement = document.createElement('img');
imageElement.src = article.image;
const nomElement = document.createElement('h2');
nomElement.innerText = article.nom;
const prixElement = document.createElement('p');
prixElement.innerText = `prix: ${article.prix}`;
const categorieElement = document.createElement('p');
categorieElement.innerText = article.categorie ?? ("aucune categorie ")
//opérateur nullish --> categorieElement.innerText = article.categorie ?? "("aucune categorie ") une valeur est null, et donc qu’elle n’a pas de valeur, ou bien lorsqu’elle est undefined
const sectionFiches = document.querySelector('.fiches');
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
