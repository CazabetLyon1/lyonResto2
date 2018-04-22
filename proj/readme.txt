Qu’est-ce que c’est ?

C’est un site Web gratuit mettant en avant les restaurants de Lyon. Il permet notamment de faire une recherche par critères.  

Développeurs :
LOUM Mouhamed p1514727
DIENG Mamadou Siny p1712817
TASSADIT OUDIAI p1512717

FAQ :

Quel est le fichier contenant la page web de l’interface ? 
index.html qui est à la racine du fichier. 

Avec quel navigateur peut-on ouvrir index.html ?
Mozilla Firefox. 

Comment zoomer ou se déplacer sur la carte ? 
En haut à gauche de la carte, vous découvrirez deux boutons « + » et « - ». Ces boutons vous permettent d’adapter la carte en fonction de vos besoins. 
Eventuellement, il est possible de zoomer ou de diminuer sa taille à l’aide de la souris. Il suffit de placer le curseur à l’intérieur de la carte et ensuite, en fonction du type de souris utilisée, soit élargir les deux doigts ou faire avancer le curseur. 

Pour se déplacer sur la carte, il faudra cliquer sur une zone de la carte et la maintenir et se déplacer avec la souris.     

Comment trouver un restaurant dans la barre de recherche ? 
Il suffit de taper deux lettres dans la barre et vous aurez une autocomplétions. Ainsi, tous les restaurants qui contiennent ces deux caractères vont apparaître dans une liste et vous n’aurez qu’à vous déplacer à l’aide des flèches du bas et du haut et cliquer sur un restaurant. Enfin cliquer sur le bouton rechercher ou taper sur la touche « Entrée ».

Comment afficher des restaurants selon un critère ?
Pour affiner les critères de recherche de restaurants, vous pouvez : 
-soit rechercher un nom de restaurant ou un type de cuisine dans la barre de recherche
-soit cliquer sur un bouton Rating dans le menu à gauche
-soit cliquer sur un arrondissement dans le menu à gauche    

Comment afficher les informations sur un restaurant ?
Dirigez-vous vers la carte. Cliquez sur un marker de restaurant et dans le menu à droite vous verrez toutes les informations disponibles sur ce restaurant. Au-dessus du marqueur, vous verrez affiché quelques informations si vous avez juste besoin du numéro de téléphone, du rating ou du nom de restaurant. Pour afficher les informations d’un autre restaurant, vous n’avez pas besoin de recharger la page, il faut juste cliquer sur un autre marker de restaurant. 

Fonctions implémentées
- en jQuery
--> Récupération des données contenues dans les fichiers. json.
- en jQuery-ui
--> Gestion de l’évènement « appui sur la touche ‘Entrée’ » --> Autocomplétions de la barre de recherche
- en JavaScript
-->Initialisation des variables Map, des tableaux de données et booléens
--> Initialisation de la carte avec Leaflet
--> Ajout des markers et des popups : function DisplayDots (restochoisi)
-->suppression des doublons dans le tableau resto : function deleteDoublons () 
--> Suppression des markers de la map en cas de sélection de critère : function supprimer ()
--> Coloration d'étoile lorsqu'on passe la souris dessus : function slide_star (level)
--> Remet toutes les étoiles en blanc : function sup_etoile ()
-->Affichage des restaurants qui ont un certain rating choisi : function etoile (val)
-->Décocher un bouton radio d’arrondissement : function sup_arrondissement ()
--> Change le collapse selon s'il est déplié ou non : function changementBoutton(pointer)
--> Gestion de l'évènement sur la touche Entree : function toucheEntree (event)
--> Recherche d'un genre de cuisine, d’un nom de restaurant dans la base de données : function rechercher ()
--> Récupération des restaurants d’un arrondissement sélectionné sous forme de tableau : function ajouterResto (arrondissement) 
--> Affichage des restaurants d’un arrondissement sélectionné : function choixarrondissement (arrondissement) 
-->Gestion de l’évènement « clic sur un marker de restaurant » : function markerOnClick (e)
--> Vider le tableau qui contient les précédents résultats : function deleteTableResultats () 
-->createfile.js : Génération du fichier qui contient toutes les données restaurants de Lyon 
-->setfile.js : Regroupement de tous les restaurants sous forme d’un seul tableau

Possibilité de mettre à jour la base de données avec la commande node createfile.js puis la commande node setfile.js .

Contenu du répertoire principal : 
1.images
2.jquery-ui
3.node_modules
4.src
5.styles
index.html
Readme.docx

Contenu du répertoire src :
1.createfile.js
2.properResto.json
3.restaurant.json
4.setfile.js

Contenu du répertoire images
->Toutes les images utilisées dans le site. 
Contenu du répertoire jquery-ui
->Bibliothèques nécessaires pour utiliser jquery

Contenu du répertoire node_modules
->Bibliothèques nécessaires pour utiliser NodeJs. 
Contenu du répertoire styles
->Feuille de styles personnalisée avec style.css

 


