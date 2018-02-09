
Site "One page" configurable  
========================================

#### [Visualiser la démo](https://wmalbos.github.io)


I) Cahier des charges
-------

L'objectif de ce projet est de réaliser un site web "**one page**" résponsive pour publier sur internet le **CV** et le **Portfolio** d'une personne. 

L'application doit être simple à mettre à jours par le client, car on part du principe qu'il n'est pas famillier avec le monde du développement.

Le client a besoin de son application rapidement.
 

II) Architecture de l'application
-------

*Le projet est hébergé par [Github](https://github.com/), de ce faite il n'y a pas accès aux languages serveur et aux base de donnée.* 

Pour simuler une interface backend, on demandera au client de modifier un **unique fichier** nommé *conf.json*.

L'application ira récuperer les données ainsi stocké (*simulation de base de donnée*) pour construire le site internet. Ainsi, le client aura juste à rajouter ou modifier des informations dans ce fichier pour gérer (son cursus, son portfolio, etc...). 

*Par exemple si ce dernier souhaitai rajouter un élement dans son portfolio il aurai juste à copier/coller et remplir le morceau de code ci-dessous:*


            {
              "project_name": "Nom du projet",             
              "project_images": [
                "01.png",
                "02.png",
                "03.png"
              ],
              "project_description": "La description du projet",
              "project_link": "Le lien pour visualiser le projet"
            },
 
 
III) Technologies utilisées
-------

Les technologies suivantes on été utilisée pour le développement de cet application:

* HTML5/CSS3
* Bootstrap/SASS
* Javascript/jQuery/AJAX


IV) Améliorations de l'application
-------

Ci-dessous quelques pistes d'améliorations possibles:
    
* Créer une page backend accessible via .htaccess (*identifiant et mot de passe*) qui permettra d'écrire automatiquement le fichier de configuration pour rendre transparent le système à l'aide de simples formulaires.
* Développer/utiliser un plugin pour miniaturiser les images et réduire le temps de chargement de la page
* Charger les images de manière asynchrones pour accélerer le temps de chargement de la page et faire patienter le visiteur à l'aide d'icônes.


Remerciements
-------

Merci d'avoir pris le temps de lire cet article, n'hesitez pas si vous avez des questions à me contacter via [Facebook](https://www.facebook.com/wmalbos) / [Twitter](https://twitter.com/wmalbos), mon adresse email, etc...


Licence
-------

Copyrights 2018 - William Malbos.
Sous licence [MIT license](https://github.com/wmalbos/Small_Carousel/blob/master/LICENSE).