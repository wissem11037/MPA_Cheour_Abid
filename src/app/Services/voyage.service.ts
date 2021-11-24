import { Injectable } from '@angular/core';
import { Séjour } from '../Models/séjour';
import { Voyage } from '../Models/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private lesVoyages: Voyage[]=[
    new Voyage(
      "1",
      //pays destination
      "paris",
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
      1500,
      //type d'offre (nouvel ou non)
      false,
      new Date(2021,11,17),
      new Date(2021,11,25),
      //declaration du tableau de destination
      [new Séjour(1,"Tunis-paris","test.jpg","bla bla bla"),
       new Séjour(2,"louvre","test.jpg","bla bla bla"),
       new Séjour(3,"tour eiffel","test.jpg","bla bla bla"),
       new Séjour(4,"Chateau de Versailles","test.jpg","bla bla bla"),
       new Séjour(5,"centre ville de paris","test.jpg","bla bla bla"),
       new Séjour(6,"Cathédrale Notre-Dame de Reims","test.jpg","bla bla bla"),
       new Séjour(7,"free day","test.jpg","bla bla bla"),
       new Séjour(8,"paris-Tunis","test.jpg","bla bla bla")],
       //declaration du tableau des ServicesNonInculs
      ["Le timbre de voyage",
      "l’assurance et les options",
      "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
  //*************** voyage numero 2  ***********************

      new Voyage(
        "2",
        //pays destination
        "istanbul",
        "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/04/17/thumbs/800x531/31299.jpg",
        1350,
        //type d'offre (nouvel ou non)
        true,
        new Date(2022,1,5),
        new Date(2022,1,11),
        //declaration du tableau de destination
        [new Séjour(1,"Tunis-Instanbul","test.jpg","bla bla bla"),
         new Séjour(2,"Bosphore et Asie","test.jpg","Petit déjeuner à l’hôtel. Excursion d'une journée qui commence par une croisière sur le Bosphore : le poumon vert d’Istanbul, ce détroit magnifique qui relie la mer noire à la mer de Marmara. Durant votre croisière, vous pourrez admirer un splendide panorama de la ville et de nombreux monuments qui ne sont visibles que par bateau comme les grands palaces de DOLMABAHCE et de BEYLERBEYI, l’université de GALATASARAY..... On descend après  vers Üsküdar , découverte du quartier de la partie Asiatique en marchant jusqu’au la tour de Léandre. Arrêt pour prise des photos et dégustation du Simit (Fameux Bagel Turc) sur place inclus. On Continue vers   Kadiköy, le quartier le plus animé du même partie Asiatique avec ses cafés, bistro, restaurants ainsi que  des grandes magasins de marques 2 heures de temps libre pour sentir et vivre l’expérience comme un vrai Stambouliote. Continuation vers la colline de Çamlıca (colline des amoureux) pour savourer la vue panoramique sur Istanbul et visite de la Mosquée Camlica. Enfin , on termine la journée par le centre commercial “ optimum” l’un des top Outlet de la partie asiatique.Retour à l’Hôtel , diner et nuitée."),
         new Séjour(3,"Dolmabahce et Suleymaniye","test.jpg","bla bla bla"),
         new Séjour(4,"La Corne D’or + Diner Croisière","test.jpg","bla bla bla"),
         new Séjour(5,"Sapanca Et Masukiye ","test.jpg","bla bla bla"),
         new Séjour(6," Les Merveilles Du Bosphore","test.jpg","bla bla bla"),
         new Séjour(7,"free day","test.jpg","bla bla bla"),
         new Séjour(8,"Istanbul-Tunis","test.jpg","bla bla bla")],
         //declaration du tableau des ServicesNonInculs
        ["Le timbre de voyage",
        "l’assurance et les options",
        "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
         //*************** voyage numero 3  ***********************
        new Voyage(
          "3",
          //pays destination
          "dubai",
          "https://media.istockphoto.com/photos/dubai-marina-picture-id467829216?k=20&m=467829216&s=612x612&w=0&h=W1NGHMkLoYcPxb-RKqbe0jnH8-W35c0hcoxaN29PqMA=",
          2250,
          //type d'offre (nouvel ou non)
          false,
          new Date(2021,12,20),
          new Date(2021,12,26),
          //declaration du tableau de destination
          [new Séjour(1,"Tunis-Dubai","test.jpg","bla bla bla"),
           new Séjour(2,"louvre","test.jpg","bla bla bla"),
           new Séjour(3,"tour eiffel","test.jpg","bla bla bla"),
           new Séjour(4,"Chateau de Versailles","test.jpg","bla bla bla"),
           new Séjour(5,"centre ville de paris","test.jpg","bla bla bla"),
           new Séjour(6,"Cathédrale Notre-Dame de Reims","test.jpg","bla bla bla"),
           new Séjour(7,"free day","test.jpg","bla bla bla"),
           new Séjour(8,"Dubai-Tunis","test.jpg","bla bla bla")],
           //declaration du tableau des ServicesNonInculs
          ["Le timbre de voyage",
          "l’assurance et les options",
          "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
          //*************** voyage numero 4  ***********************
          new Voyage(
            "4",
            //pays destination
            "egypt",
            "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/09/egypt_cairo_pyramids-camels.jpg",
            1950,
            //type d'offre (nouvel ou non)
            false,
            new Date(2021,11,14),
            new Date(2021,11,20),
            //declaration du tableau de destination
            [new Séjour(1,"Tunis-Caire","test.jpg","bla bla bla"),
             new Séjour(2,"louvre","test.jpg","bla bla bla"),
             new Séjour(3,"tour eiffel","test.jpg","bla bla bla"),
             new Séjour(4,"Chateau de Versailles","test.jpg","bla bla bla"),
             new Séjour(5,"centre ville de paris","test.jpg","bla bla bla"),
             new Séjour(6,"Cathédrale Notre-Dame de Reims","test.jpg","bla bla bla"),
             new Séjour(7,"free day","test.jpg","bla bla bla"),
             new Séjour(8,"Caire-Tunis","test.jpg","bla bla bla")],
             //declaration du tableau des ServicesNonInculs
            ["Le timbre de voyage",
            "l’assurance et les options",
            "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
            //*************** voyage numero 5  ***********************
            new Voyage(
              "5",
              //pays destination
              "malaisie",
              "https://image.resabooking.com/images/images_og/img_malaisie.jpg",
              3500,
              //type d'offre (nouvel ou non)
              false,
              new Date(2021,2,19),
              new Date(2021,2,26),
              //declaration du tableau de destination
              [new Séjour(1,"Tunis-malaisie","test.jpg","bla bla bla"),
               new Séjour(2,"louvre","test.jpg","bla bla bla"),
               new Séjour(3,"tour eiffel","test.jpg","bla bla bla"),
               new Séjour(4,"Chateau de Versailles","test.jpg","bla bla bla"),
               new Séjour(5,"centre ville de paris","test.jpg","bla bla bla"),
               new Séjour(6,"Cathédrale Notre-Dame de Reims","test.jpg","bla bla bla"),
               new Séjour(7,"free day","test.jpg","bla bla bla"),
               new Séjour(8,"malaisie-Tunis","test.jpg","bla bla bla")],
               //declaration du tableau des ServicesNonInculs
              ["Le timbre de voyage",
              "l’assurance et les options",
              "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
              //*************** voyage numero 6  ***********************
              new Voyage(
                "6",
                //pays destination
                "Marrakech",
                "https://blog.radissonblu.com/wp-content/uploads/2015/10/Marrakech-souk.jpg",
                2380,
                //type d'offre (nouvel ou non)
                false,
                new Date(2021,1,13),
                new Date(2021,1,19),
                //declaration du tableau de destination
                [new Séjour(1,"Tunis-Marrakech","test.jpg","bla bla bla"),
                 new Séjour(2,"louvre","test.jpg","bla bla bla"),
                 new Séjour(3,"tour eiffel","test.jpg","bla bla bla"),
                 new Séjour(4,"Chateau de Versailles","test.jpg","bla bla bla"),
                 new Séjour(5,"centre ville de paris","test.jpg","bla bla bla"),
                 new Séjour(6,"Cathédrale Notre-Dame de Reims","test.jpg","bla bla bla"),
                 new Séjour(7,"free day","test.jpg","bla bla bla"),
                 new Séjour(8,"Marrakech-Tunis","test.jpg","bla bla bla")],
                 //declaration du tableau des ServicesNonInculs
                ["Le timbre de voyage",
                "l’assurance et les options",
                "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
                //*************** voyage numero 7  ***********************
                new Voyage(
                  "7",
                  //pays destination
                  "madrid",
                  "https://media.istockphoto.com/photos/madrid-spain-on-gran-via-picture-id514769480?k=20&m=514769480&s=612x612&w=0&h=vQ1NbztcLP1Rr7irt5MPq-A387sYkkD7eNGFaH3Uv6k=",
                  1200,
                  //type d'offre (nouvel ou non)
                  true,
                  new Date(2021,1,1),
                  new Date(2021,1,7),
                  //declaration du tableau de destination
                  [new Séjour(1,"Tunis-Madrid","test.jpg","bla bla bla"),
                   new Séjour(2,"louvre","test.jpg","bla bla bla"),
                   new Séjour(3,"tour eiffel","test.jpg","bla bla bla"),
                   new Séjour(4,"Chateau de Versailles","test.jpg","bla bla bla"),
                   new Séjour(5,"centre ville de paris","test.jpg","bla bla bla"),
                   new Séjour(6,"Cathédrale Notre-Dame de Reims","test.jpg","bla bla bla"),
                   new Séjour(7,"free day","test.jpg","bla bla bla"),
                   new Séjour(8,"Madrid-Tunis","test.jpg","bla bla bla")],
                   //declaration du tableau des ServicesNonInculs
                  ["Le timbre de voyage",
                  "l’assurance et les options",
                  "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
                  //*************** voyage numero 8 ***********************
                  new Voyage(
                    "8",
                    //pays destination
                    "etas unit",
                    "https://static.toiimg.com/photo/77757963.cms",
                    6790,
                    //type d'offre (nouvel ou non)
                    true,
                    new Date(2022,2,3),
                    new Date(2022,2,11),
                    //declaration du tableau de destination
                    [new Séjour(1,"Tunis-New York","test.jpg","bla bla bla"),
                     new Séjour(2,"louvre","test.jpg","bla bla bla"),
                     new Séjour(3,"tour eiffel","test.jpg","bla bla bla"),
                     new Séjour(4,"Chateau de Versailles","test.jpg","bla bla bla"),
                     new Séjour(5,"centre ville de paris","test.jpg","bla bla bla"),
                     new Séjour(6,"Cathédrale Notre-Dame de Reims","test.jpg","bla bla bla"),
                     new Séjour(7,"free day","test.jpg","bla bla bla"),
                     new Séjour(8,"New York-Tunis","test.jpg","bla bla bla")],
                     //declaration du tableau des ServicesNonInculs
                    ["Le timbre de voyage",
                    "l’assurance et les options",
                    "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
                  
    ]
    getVoyage(){
      return this.lesVoyages;
    }
    
  constructor() { }
}
