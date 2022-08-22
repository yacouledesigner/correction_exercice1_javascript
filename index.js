// on desire creer un logiciel pour l'enregistrement des clients d'une boutique. 
// Sachant qu'un client a un nom, un prenom, une adresse email , un numero de telephone et une adreesse constituée 
// de ville, quartier, maison, rue et une preference des produits tels que le riz, la maÏs, l'avocat
// en tant que developpeur javascript, ecrire un algorithme permettant de representer les informations du clients 
// sous le format d'un object javascript dans lequel le nom, le prenom, l'adresse email et le numero de telephone sont 
// directement accessible via des clés de l'objet tandis que les informations de l'adresse sont accessibles via des 
// clés d'un sous objet adresse  de l'objet parent et les produits sont regroupés dans un tableau dans l'objet 
// accessible via une clé produits. 
// Mettre en place un système qui va permettre d'enregistrer ces informations via un formulaire de la boite d'alert 
// javascript avec verification c-a-d tant que la donnée n'existe pas, on ne peut pas passer à l'enregistrement suivant.
// parcourer les données du tableau produit puis afficher toutes ces valeurs en majuscules et ensuite ajouter cinq 
// produits en debut et la fin du tableau ensuite reafficher l'ensemble des produits du tableau et l'ensemble du tableau.
// supprimer le premier et le dernier element du tableau puis reafficher le contenu et la taille du tableau.


// creation de l'algorithme de representation
var person = {
    nom: " ",
    prenom: " ",
    email: " ",
    telephone: " ",
    adresse:{
        ville: " ",
        quartier: " ",
        maison: " ",
        rue: " ",
    },
    produits: ['riz', 'maïs', 'avocat']
}

var affichage;

// Mise en place du système d'neregistrement et de verification du nom
// do {
//     person.nom = prompt('Entrez votre nom:');
//     if (!person.nom) {
//         alert("vous n'avez pas entré de nom");
//     }
//     if (person.nom == 'ouattara') {
//         alert('Ce nom existe déjà');
//     }
// } while (!person.nom || person.nom == 'ouattara');

// Mise en place du système d'neregistrement et de verification du prenom
// do {
//     person.prenom = prompt('Entrez votre prenom:');
//     if (!person.prenom) {
//         alert("vous n'avez pas entré de prenom");
//     }
// } while (!person.prenom);

// // Mise en place du système d'neregistrement et de verification de l'email
// do {
//     person.email = prompt('Entrez votre email:');
// } while (person.email && person.email.length > 10);

// // Mise en place du système d'neregistrement et de verification du telephone
// do {
//     person.telephone = prompt('Entrez votre numero de telephone:');
// } while (person.telephone && person.telephone.length == 10);

// // Mise en place du système d'neregistrement et de verification de la ville
// do {
//     person.adresse.ville = prompt('Entrez votre ville:');
// } while (person.adresse.ville);

// // Mise en place du système d'neregistrement et de verification du quartier
// do {
//     person.adresse.quartier = prompt('Entrez votre quartier:');
// } while (person.adresse.quartier);

// // Mise en place du système d'neregistrement et de verification de la maison
// do {
//     person.adresse.maison = prompt('Entrez votre maison:');
// } while (person.adresse.maison);

// // Mise en place du système d'neregistrement et de verification de la rue
// do {
//     person.adresse.rue = prompt('Entrez votre rue:');
// } while (person.adresse.rue);

// Parcous du tableau et affichage de ces valeurs en majuscules
// for (const key in person.produits) {
//      affichage += `produit${key}: ${person.produits[key].toLocaleUpperCase()}\n` 
// }

// alert(affichage);


// ajout de produits et reaffichage
person.produits.push(prompt("Votre premier produit: "));
person.produits.unshift(prompt("Votre second produit"));
person.produits.push(prompt("Votre troisième produit:"));
person.produits.push(prompt("Votre quatrième produit: "));
person.produits.unshift(prompt("Votre cinquième produit"));

// for (const key in person.produits) {
//     affichage += `produit${key}: ${person.produits[key].toLocaleUpperCase()}\n` 
// }

// alert(affichage);

//suppresion des elements du tableau et reaffichage

person.produits.pop();
for (const key in person.produits) {
    affichage += `produit${key}: ${person.produits[key].toLocaleUpperCase()}\n` 
}

alert(affichage);
