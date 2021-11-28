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
      //type d'offre (nouvelle ou non)
      false,
      new Date(2021,11,17),
      new Date(2021,11,25),
      //declaration du tableau de destination
      [new Séjour(1,"Tunis-paris","test.jpg","Décollage vers PARIS à 08H35 sur  la compagnie aérienne Tunisienne(rendez-vous à l’aéroport à 05h35) Parvenue à 10h10. Transport à l’hôtel *** HOTEL PARIS ou équivalent Installation dans les pièces. Après midi libre.  "),
       new Séjour(2,"PARIS / JOURNEE DE SHOPPING A VAL D'EUROPE","https://www.booking-tunisie.com/wp-content/uploads/2018/02/Product-4425-20150130-0233321.jpg","Petit déjeuner à l'hôtel. Journée libre pour une journée de shopping à Val d'Europe le plus grand centre commercial en France. Cérémonie libre et nuitée à l’hôtel."),
       new Séjour(3,"Disney Land ","test.jpg","Petit déjeuner à l'hôtel, départ pour une lumière entière de 10h à 22h00  à Disney Land. Avec accès libres aux deux parcs. Rentrée et nuitée à l’hôtel."),
       new Séjour(4,"Chateau de Versailles","test.jpg","Petit déjeuner à l'hôtel. Journée libre ou départ par bus pour la visite du château de Versailles, la visite des grands appartements du château, la chambre du roi, la galerie des glaces et les jardins."),
       new Séjour(5,"Montmartre","test.jpg","Petit déjeuner, départ pour la visite de Montmartre, Sacré Cœur, le quartier des peintres (le transport en métro est à la charge du client). Après midi libre pour la aperçue personnelle. Retour et nuitée à l'hôtel."),    
       new Séjour(6,"free day","test.jpg","bla bla bla"),
       new Séjour(7,"paris-Tunis","test.jpg","Nous vous proposerons un petit-déjeuner le matin et nous vous transférerons à l'aéroport international du france afin de rentrer en Tunisie.")],
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
        //type d'offre (nouvelle ou non)
        true,
        new Date(2022,1,5),
        new Date(2022,1,11),
        //declaration du tableau de destination
        [new Séjour(1,"Tunis-Instanbul","test.jpg","RDV à l’aéroport, assistance et embarquement à Destination Istanbul.Arrivée, accueil et transfert à l’hôtel (selon votre choix).Diner et logement à l’hotel."),
         new Séjour(2,"Bosphore et Asie","test.jpg","Petit déjeuner à l’hôtel. Excursion d'une journée qui commence par une croisière sur le Bosphore : le poumon vert d’Istanbul, ce détroit magnifique qui relie la mer noire à la mer de Marmara. Durant votre croisière, vous pourrez admirer un splendide panorama de la ville et de nombreux monuments qui ne sont visibles que par bateau comme les grands palaces de DOLMABAHCE et de BEYLERBEYI, l’université de GALATASARAY..... On descend après  vers Üsküdar , découverte du quartier de la partie Asiatique en marchant jusqu’au la tour de Léandre. Arrêt pour prise des photos et dégustation du Simit (Fameux Bagel Turc) sur place inclus. On Continue vers   Kadiköy, le quartier le plus animé du même partie Asiatique avec ses cafés, bistro, restaurants ainsi que  des grandes magasins de marques 2 heures de temps libre pour sentir et vivre l’expérience comme un vrai Stambouliote. Continuation vers la colline de Çamlıca (colline des amoureux) pour savourer la vue panoramique sur Istanbul et visite de la Mosquée Camlica. Enfin , on termine la journée par le centre commercial “ optimum” l’un des top Outlet de la partie asiatique.Retour à l’Hôtel , diner et nuitée."),
         new Séjour(3,"Dolmabahce et Suleymaniye","test.jpg","Petit-déjeuner à l’hôtel. Visite du Palais de Dolmabahçe, la dernière résidence des Sultans ottomans qui date de 19eme siècle pour la partie de Selamlık, vous allez admirer les escaliers en marbre, les lustres en Crystal géants qui ornent l’intérieur du palais ainsi que les salles d’expositions qui nous montreront le changement de la vie à la dernière époque de l’Empire Ottomane (la partie du harem non-inclus dans le programme). Continuation vers le quartier de Pera pour arrêt photos et temps libre autour de la Tour de Galata, la fameuse tour construite par des Génois situé à la fin de l’avenue İstiklal. Par la suite, continuation vers la vieille ville pour visiter la Mosquée Bleue, la place Hippodrome et la Mosquée de Sainte Sophie, construite au 6eme siècle par les Grecques et transformé après à une mosquée par le fameux Sultan Ottoman Mohammed Fatih c’est le bâtiment symbolique de la ville ou vous pouvez voir l’héritage multiculturelle et tolérant de l’Istanbul. Retour à l’hôtel, Diner et logement."),
         new Séjour(4,"La Corne D’or + Diner Croisière","test.jpg","Petit-déjeuner à l’hôtel. Le commencement de la journée à partir de Café Pierre Loti qui se trouve au milieu de la colline d’Eyup et non loin de la Mosquée d’Eyup avec la vue panoramique 360 degré sur toute la corne d’or qui divise la partie européenne d’Istanbul en deux parties. La montée sera en téléphérique et la descente sera à pieds en passant par la colline d’Eyup. Continuation pour Shopping au Centre Commercial: “Venezia Mall ”, l’un des top Outlets shopping Mall de la ville avec ces magasins et les grandes marques. Un choix illimité pour les obsèdes de shopping avec des prix raisonnables, vous avez 2 heures de temps libre sur place. Enfin de la journée,départ vers le quartier Eminönü, arret devant la mosquée de Rüstem Paşa, prise des photos et continuation à pieds jusqu’au Bazar Egyptien (marché des épices) en passant par ses petites ruelles attractives. Temps libre et retour à l’hôtel.La nuit , départ pour une soirée à Istanbul en naviguant sur le somptueux Bosphore, tout en profitant d’un dîner et d’un spectacle folklorique Anatolien avec danse du ventre. (option 30$)."),
         new Séjour(5,"Sapanca Et Masukiye ","test.jpg","Petit-déjeuner à l’hôtel. Départ tôt le matin vers Sapanca, 2 heures de route via l’autoroute qui relie İstanbul à Ankara. Troquez l'agitation de la ville pour les eaux tranquilles et la silhouette des montagnes au lac Sapanca. Pause photos et temps libre de 20 min au bord du lac ,par la suite vous allez visitez un endroit agricole fameux par la cultivation des noix et par la production du miel. On continue vers le village de Maşukiye fameux par ses rivières et son cascade d’eau, temps libre pour la promenade ou pour des activités facultatives comme les Quads ou Les Ziplines. Déjeuner dans un restaurant situé au bord de la rivière avec un menu fixe. Après on prendre la route vers İstanbul.  Arret shopping au Centre commercial: “Viaport Tuzla Marina” connu avec ces parcs d’attractions comme L’aquarium, le parc des lions etc ... (les activités sur place sont facultatives). 2 heures de temps libre et retour à l’Istanbul. Diner et Logement à l’hotel."),
         new Séjour(6," Les Merveilles Du Bosphore","test.jpg","Petit-déjeuner à l’hôtel. Départ vers Ortaköy, l’un des quartiers les plus populaires de Besiktas situé juste à coté de bosphore et sous son pont,  nommé le Montmartre d’İstanbul. Fameux par ses cafés, les vendeurs de Kumpir (pomme de terre fourrée et mélangée avec plusieurs ingrédients) et sa mosquée de Grand Mecidiye (Mosquée Ortaköy). Temps libre de 30 min pour prise des  photos sur place et achats des souvenirs.Continuation vers quartier de Rumelihisarı, situé au point le plus étroit du Bosphore entre L’Europe et L’Asie,  et aussi au nord de quartier BEBEK à Istanbul , une impressionnante forteresse de 250 mètres de long, voisine du pont “ fatih sultan Mehmet” qui enjambre le détroit du Bosphore. Après départ  pour shopping au Centre commercial: “İstinye Park” , immense Mall rempli de magasins  de toutes sortes et des plus grandes marques de vêtements comme Louis Vuitton, Gucci etc ...2 heures de temps libre sur place. Par la suıte, vous traversez le Bosphore par le pont du Mehmet Le conquérant pour aller vers la partie Asiatique et découvrir le quartier de Kanlıca (La capitale de yaourt). On termine enfin les visites avec Kuzguncuk, un paradis secret situé sur la rive anatolienne loin de l’agitation urbaine, avec ses maisons typiques dans les jardins, une véritable retrouvaille de la nature, le panorama et l’histoire.Retour, Diner et nuit à l’hôtel ."),
         new Séjour(7,"free day","test.jpg","Petit-déjeuner à l’hotel , vous avez une journée libre pour le shopping et les  derniers achats."),
         new Séjour(8,"Istanbul-Tunis","test.jpg","Petit déjeuner à l'hôtel, transfert à l'aéroport et embarquement vers Tunis.")],
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
          //type d'offre (nouvelle ou non)
          false,
          new Date(2021,12,20),
          new Date(2021,12,26),
          //declaration du tableau de destination
          [new Séjour(1,"Tunis / Dubaï","test.jpg","Départ de Tunis vers Dubaï sur vol Émirats, Arrivée à l'aéroport,  Accueil et transfert à l’hôtel Golden Tulip Media Hôtel ★★★★  .Répartition des chambres et nuitée à l’hôtel."),
           new Séjour(2,"Visite de Dubaï","test.jpg","Petit déjeuner à l’hôtel, départ pour une excursion d'une journée; une visite panoramique guidée de la ville du Dubaï avec sa fabuleuse architecture et ses monuments démesurés, tels que : Visite Avenue Sheikh Zayed, Burj El Arab, Palm Island, Atlantis Hôtel, et Burj Khalifa (le plus haut gratte-ciel de monde), visite de Gold Souk, spice Souk, visite Fram Dubaï, water taxi, musée de Dubai et Al Bastakiya .Après continuation vers Dubaï Mall et soirée libre autour du spectacle de la fontaine dansante."),
           new Séjour(3,"Sharjah et Ajman","test.jpg","Petit déjeuner à l’Hôtel et départ pour une excursion à SHARJAH et AJMANSharjah, la capitale culturelle des Émirats arabes unis, est la troisième plus grande des sept émirats qui composent les Émirats arabes unis (EAU). Traversez les plus petits émirats du pays d'Ajman. Cette visite d'une demi-journée de la ville au départ de Dubaï vous donne une brève introduction aux émirats de Sharjah et d'Ajman. La meilleure façon d'en apprendre davantage sur les traditions, la culture, l'histoire et les arts émiratis. Visitez les attractions les plus populaires telles que le souk Al Majarrah, le musée de Sharjah, le souk bleu et le musée Ajman, visite de mosquée king Faisel, corniche …etc Déjeuner libre Retour à l’hôtel fin de la journée et nuitée"),
           new Séjour(4,"Miracle Garden et Global Village ticket inclut","test.jpg","Petit Déjeuner à l'hôtel et départ pour découvrir  une combinaison unique d l’une des deux attractions de DUBAI ou vous découvrirez la plus grande collection mondiale de 50 millions de fleurs au Miracle Garden ; un parcours en fleurs pas ordinaire ou les structures telles que des pyramides et un Airbus 380 sont couvertes de fleurs, sans oublier le jardin des papillons pour vous perdre dans un monde plein de couleurs et de senteurs.Après continuation vers Global village, une curieuse zone de loisirs formée de pavillons de plus de 40 pays qui visent à présenter leur culture grâce aux spectacles et produits typiques comme l’alimentation et l’artisanat.Temps libre pour prise des photos et achats. Le soir retour à l’hôtel et nuitée."),
           new Séjour(5,"Journée libre pour shopping","test.jpg","Petit déjeuner à Hôtel. Journée libre pour shopping: plusieurs centres commerciaux disponible tels que : Mall City centre, Dubaï Mall, Merdif City Centre, Emirates Mall, Ibn Batouta Mall, Merkato Mall ..."),
           new Séjour(6,"Diner bateau ou safari 4*4","test.jpg","Petit déjeuner à l’hôtel, matinée libre. L’après-midi départ vers la marina de Dubaï considérée comme l’une des Ports de plaisance les plus luxueux du monde entourée par les Gratte-ciel futuristes et les somptueux hôtels de luxe et de charme.Embarquement sur un bateau 5 vers le long de la côte de Dubaï ou vous pourrez admirer au loin l'hôtel Burj Al Arab 7* et les lumières de l'Atlantis et Palm Island.Dîner à bord, vous serez surpris par la variété des spécialités préparés par des chefs sélectionnés des 4 coins du monde (cuisine Asiatique, Indienne, Européenne et Orientale).,Un Show Folklorique spectaculaire accompagnera ce diner et rendra votre soirée inoubliable.Vous avez aussi la possibilité de partir pour l’aventure safari 4*4 au coucher de soleil ; vous serez accueillis dans des tentes en plein désert avec un café arabe, des dattes et des tatouages au henné.Profitez d’une balade à dos de chameaux ou de sortie en Quad et terminez votre safari avec un diner barbecue sous les étoiles en assistant à un spectacle de danse traditionnelle Tannoura."),
           new Séjour(7,"Journée à l’Expo 2020","test.jpg","Petit déjeuner à L’Hôtel, Découvrez la merveilleuse histoire de l’Expo 2020. Cet événement s’apprendre un thème  » Un rendez-vous incontournable pour les acteurs mondiaux des technologies et de l’innovation qui compte attirer environ 25 millions de visiteurs, entre entrepreneurs et investisseurs du monde entier. plus de 190 pays participantes jusqu'au aujourd'hui avec des stands énormes représentants leurs cuisines, tourismes locales, innovations, immobiliers ,richesses et créations.....des stars du monde entier assistent L'EXPO et animent des soirées chaque soir, transport gratuit assurée du stand au stand ....cafés, restaurants de plus de 20 cuisines internationales et même des espaces  enfants et des jardins avec cascades d'eaux."),
           new Séjour(8,"Retour à Tunis","test.jpg","Petit déjeuner à l’hôtel,  transfert à l'aéroport et embarquement  vers Tunis.")],
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
            //type d'offre (nouvelle ou non)
            false,
            new Date(2021,11,14),
            new Date(2021,11,20),
            //declaration du tableau de destination
            [new Séjour(1,"Tunis-Caire","test.jpg","Agglomérat à l’aéroport et embarquement sur le vol EGYPTAIR. Une fois arrivé au Caire, nous vous transférerons au Méridien Héliopolis, un hôtel 5 étoiles où vous pourrez vous enregistrer et vous détendre après un voyage fatigant. Le soir, un Open buffet sera proposé avec danse orientale et animations dans un bateau 5 étoiles sur le Nil. Rentrée à l’hôtel."),
             new Séjour(2,"pyramides!","test.jpg","Petit-déjeuner. Excursion aux Pyramides de Giza & le Musée Egyptien: Se distraire aux Pyramides de Khéops, Khéphren et Mykérinos, visiter le formidable Sphinx. En outre, vous pouvez découvrir les antiquités de la période pharaonique en visitant le musée égyptien. Retour à l’hôtel."),
             new Séjour(3,"Sharm el sheikh par avion","test.jpg","Petit déjeuner à l’hôtel. Nous serons en charge de vous transférer à l'aéroport et nous distribuerons les chambres de l'Elisir qui est un hôtel 5 étoiles. Diner à l’hôtel.Le soir, vous pouvez vous rendre à SOHO Square où vous trouverez des bars, un centre de relaxation positionné au cœur de Savoy resort et des cafés avec musique live et animations."),
             new Séjour(4,"free day","test.jpg","Après avoir pris votre petit-déjeuner, vous pourrez vous reposer et vous détendre toute la journée."),
             new Séjour(5,"Diner a Steack House ","test.jpg","Petit déjeuner à l’hôtel. Excursion d’une journée en bateau à l’île de Tiran (+/-15$) avec déjeuner, une journée inoubliable à la mer rouge : baignade, plongée sous marine à la découverte du fond marin et des multiples espèces de poissons et des coraux … Le soir Diner au Célèbre restaurant à la carte « Petrus Steak house »"),
             new Séjour(6,"Temple Philae","test.jpg","Avec une petite barque à moteur, vous fréquentez le Temple Philae, dédié à la Reine Isis, sur l'île Agilkia. Ensuite régie vers le haut barrage d'Assouan et après l'Obélisque imparfaite. Dans l'après-midi, vous pourrez vous divertir avec un voyage sur le Nil à bord d'une felouque. Le soir vous avez la éventualité de voir le spectacle son et lumières au Temple Philae (option). Repas et nuitée à bord."),
             new Séjour(7,"Caire ","test.jpg","Petit déjeuner, départ pour chalandage au meilleur centre commercial du Caire «  Mall Masr ». Retour à l'hôtel et nuitée."),
             new Séjour(8,"Caire-Tunis","test.jpg","Nous vous proposerons un petit-déjeuner le matin et nous vous transférerons à l'aéroport international du Caire afin de rentrer en Tunisie. ")],
            
           
             //declaration du tableau des ServicesNonInculs
            ["Le timbre de voyage",
            "l’assurance et les options",
            "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
            //*************** voyage numero 5  ***********************
            new Voyage(
              "5",
              //pays destination
              "thailande",
              "https://images.moneycontrol.com/static-mcnews/2021/10/phuket-770x433.png?impolicy=website&width=770&height=431",
              4500,
              //type d'offre (nouvelle ou non)
              false,
              new Date(2021,2,19),
              new Date(2021,2,26),
              //declaration du tableau de destination
              [new Séjour(1,"Envol de Tunis","test.jpg","Rassemblement à l'aéroport direction Kuala Lumpur"),
               new Séjour(2,"kuala lumpur ","test.jpg","Arrivée à l’aéroport de Kuala Lumpur, accueil et assistance par notre agent localTransfert et installation à l’hôtel, soirée libre."),
               new Séjour(3,"kuala lumpur - City Tours","test.jpg","Petit déjeunée à l’hôtel, 9h30 départ pour une journée pour découvrir le Palais Royale, la Mosquée National, visite du Tour Jumelles Petronas et les cascade du temple Park.Vous pouvez découvrir la mosaïque religieuse et culturelle de la Malaisie grâce à notre circuit.Nuit et hébergement à l’hôtel."),
               new Séjour(4," kuala lumpur - Genting highlands","test.jpg","Petit déjeunée à l’hôtel à 10h départ pour l'excursion (Tout une journée) vers le Temple Indien Batu Caves puis continuation vers genting highlands theme park, genting highlands cable car, et genting highlands casino. Le soir départ pour dîner-buffet au restaurent tournent de la tour Kuala Lumpur le plus haut restaurent tournent 276 mètres de haut.Nuit et hébergement à l’hôtel."),
               new Séjour(5,"kuala lumpur- Bangkok ","test.jpg","Notre agence s'engagera à vous proposer un transfert aéroport de Kuala Lumpur et un petit déjeuner à l'établissement.Lorsque vous arriverez à l'aéroport international de Bangkok, nos agents locaux seront là pour vous aider et vous accueillir puis ils vous déplaceront à l'hôtel où vous pourrez vous reposer.Nuit et hébergement à l’hôtel."),
               new Séjour(6,"Bangkok - City & Temples​","test.jpg","Petit déjeuner à l’hôtel, excursion ½ journée : CITY & TEMPLES“Cette visite saisit trois des temples bouddhistes les plus insolites à Bangkok: Wat Trimitr avec ses précieux Bouddhad'or (5 ½ tonnes d'or massif) - Wat Po, le temple le plus vaste de Bangkok, avec ses colossales Bouddha couché & le Chedisdes Rois - Wat Benjamaborpitr, le temple de marbre blanc, l'un des plus beaux exemples de l'architecture thaïe”.Nuit et hébergement à l’hôtel."),
               new Séjour(7,"Bangkok - Phuket","test.jpg","Petit déjeuner à l’hôtel, transfert à l’aéroport de Bangkok pour vol à Phuket Accueil et assistance par notre agent local, transfert et installation à l’hôtel Soirée libre & nuit à l’hôtel."),
               new Séjour(8," Phuket - Phi phi Island Tour","test.jpg","Petit déjeuner à l’hôtel Excursion : Phi phi Island Tour,Découvrez deux joyaux de la Thaïlande avec les îles Phi Phi Ley et Phi Phi Don. Passez une journée de plongée sous-marine agréable, d'eaux tropicales claires et de plages de sable blanc.Commencez votre journée par une croisière de 90 minutes à travers des eaux céruléennes, puis prenez la direction de l'île de Phi Phi Ley pour une plongée avec tuba à la baie de Maya. Nourrissez les poissons exotiques tandis que vous explorez les récifs coralliens et les eaux profondes de cette crique, également réputée comme lieu de tournage du film La Plage. Admirez la Viking Cave (grotte du viking), ainsi appelée en raison des fresques rupestres énigmatiques illustrant des navires qui ressemblent à ceux des vikings.Dans cette magnifique grotte, soyez attirés par les multiples nids d'hirondelles que les habitants collectent quotidiennement pour la soupe au nid d'oiseaux, spécialité gastronomique chinoise. Découvrez tout sur les échafaudages en bambou que les résidents emploient pour bâtir des murs de calcaire de 9 à 15 mètres de haut.Nuit et hébergement à l’hôtel."), 
               new Séjour(9,"Petit déjeuner à l’hôtel, journée libre","test.jpg","bla bla bla"),
               new Séjour(10,"Petit déjeuner à l’hôtel, journée libre","test.jpg","bla bla bla"),
               new Séjour(11,"thailande-tunis, journée libre","test.jpg","Transfert à l’aéroport de Phuket selon votre heure de vol, aide à l'embarquement.Arrivée à Tunis")],
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
                //type d'offre (nouvelle ou non)
                false,
                new Date(2021,1,13),
                new Date(2021,1,19),
                //declaration du tableau de destination
                [new Séjour(1,"Tunis-Marrakech","test.jpg","Accueil et assemblée à l’aéroport Mohamed V Casablanca  Transfert avec un minibus ver un hôtel 4 étoiles à Marrakech Check in et diner à l’hôtel"),
                 new Séjour(2,"ville toursitique-palais el Bahia","test.jpg","Petit déjeuner a l’hôtel.Départ pour la découverte de la ville touristique de Marrakech.Visite du palais el Bahia.Un déjeuner prévu sur près Palais de la Bahia.Dîner et Nuit à votre hôtel à Marrakech."),
                 new Séjour(3,"Fes City Tour","test.jpg","Petit déjeuner à l’hôtel et après une Matinée consacrée à la visite de Fès avec tout d'abord Bab Boujeloud, la porte monumentale et la plus remarquable de la ville, La place En-Nejjarine ornée d'une très belle fontaine aux jolis décors de zelliges et derrière laquelle se dresse la façade magnifiquement décorée du caravansérail, la Zaouïa de Moulay Idriss, mausolée qui renferme le tombeau du fondateur et la ville, symbole d'élégance orientale. Visite des souks, parmi les beaux du Maroc et particulièrement authentiques avec le quartier des tanneurs. Retour à l’hôtel et nuitée."),   
                 new Séjour(4," Moulay Yacoub (Sources chaudes) ","test.jpg"," Petit déjeuner à l’hôtel.  Excursion Moulay Yacoub offre une station thermale avec des sources naturelles d’eaux chaudes à 54°C chose rare, provenant d’une profondeur de 1500 mètres et au PH neutre. Il s’agit d’une eau de mer soufrée et salée que vous ne croyiez pas à vos yeux, riche en magnésium donc à vertu thérapeutique qui soulage les maladies de la peau, les rhumatismes et problèmes gynécologiques, ça vous tente non...? Une station thermale a été inaugurée en 1993 à côté du site thermal traditionnel qui fonctionne toujours Arrivons dans notre programme d’excursion à la visite de moulay yacoub auquel vous prendrez le départ à n’importe quel moment de la journée concernée pour l’atteindre après une durée de 40min.Là-bas, vous profiterez d’un luxueux service de hammam traditionnel et de massage relaxant afin de vous permettre le rafraichissement de votre esprit qui sera produit après une détente corporelle et morale avant de retourner à la ville de fes .     Retour et nuitée à l’hôtel"),
                 new Séjour(5,"free day et dîner comprit","test.jpg","Petit déjeuner à l’hôtel. Journée libre pour bénéficier de la magnifique ville de Marrakech.   Le soir dîner spectacle CHEZ ALI sous tentes berbères dans une atmosphère envoûtante. Retour vers minuit à l’hôtel."),
                 new Séjour(6,"Marrakech-tunis ","test.jpg","Nous vous proposerons un petit-déjeuner le matin et nous vous transférerons à l'aéroport international du Marrakech afin de rentrer en Tunisie."),],
                 //declaration du tableau des ServicesNonInculs
                ["Le timbre de voyage",
                "l’assurance et les options",
                "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
                //*************** voyage numero 7  ***********************
                new Voyage(
                  "7",
                  //pays destination
                  "london",
                  "https://media.istockphoto.com/photos/madrid-spain-on-gran-via-picture-id514769480?k=20&m=514769480&s=612x612&w=0&h=vQ1NbztcLP1Rr7irt5MPq-A387sYkkD7eNGFaH3Uv6k=",
                  2000,
                  //type d'offre (nouvelle ou non)
                  true,
                  new Date(2021,1,1),
                  new Date(2021,1,7),
                  //declaration du tableau de destination
                  [new Séjour(1,"Londre: Tour Panoramique","test.jpg","Matin : Rassemblement à l’aéroport de Tunis Carthage pour envol vers Londres (8h05)9h50 : Arrivée à Londres Heathrow. Accueil et assistance par notre conseiller francophone local Tour panoramique de Londres avec guide francophone (4h)Transfert et installation à l’hôtel Après-midi : Libre"),
                   new Séjour(2,"Découverte de Londres à Pied","test.jpg","Petit déjeuner à l’hôtel Découverte de Londres à pied : Piccadilly Circus, Trafalgar Square, Buckingham Palace (changing of the guard) etc"),
                   new Séjour(3,"Visite et attractions","test.jpg","Petit déjeuner à l’hôtel Matin: Visite de Westminster, Big Ben Après-midi : Attraction London Eye, Croisière sur la Thames"),
                   new Séjour(4,"Musées","test.jpg","Petit déjeuner à l’hôtel ,Matin : Visite du Science Museum Et Natural History Museum, Après-midi : Visite de Madame Tussaud"),
                   new Séjour(5," Shopping","test.jpg","Petit déjeuner à l’hôtel Shopping, Kensington High Street et Oxford Street"),
                   new Séjour(6,"Détente","test.jpg","Petit déjeuner à l’hôtel Matinée libre ou visite de Kensington Palace (40 dt). Après-midi : Jeu de Bowling, Queensway Promenade à Hyde Park"),
                   new Séjour(7,"Retour à Tunis","test.jpg","Petit Déjeuner à L’hôtel. Matin : Libre. Transfert vers l’aéroport, assistance et départ vers Tunis.")],
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
                    //type d'offre (nouvelle ou non)
                    true,
                    new Date(2022,2,3),
                    new Date(2022,2,11),
                    //declaration du tableau de destination
                    [new Séjour(1,"TUNIS - NEW  YORK","test.jpg","Rendez-vous à l’aéroport Tunis Carthage à 09H00 pour prendre le vol AZ 863 à 11H45 vers ROME  puis continuation à 14h35 vers New York Arrivée estimée à New York .18H40 , transfert par bus vers Hotel NEW YORKER www.newyorkerhotel.com  à Times Square pour passer 03 nuits en logement avec petit déjeuner Nuit à l'hotel "),
                     new Séjour(2,"NEW YORK","test.jpg","Petit déjeuner dans un restaurant local 09.30 départ en bus avec notre guide francophone Marie pour découverte de la ville (durée 4 h), vous vous dirigerez vers Manhattan du centre visitant certaines des attractions les plus importantes le long de la route comprenant: Times Square, Broadway, secteur de théâtre, Nations Unies, l'Empire State Building et les voisinages de Chinatown, de Little Italy, de Soho et du Greenwich Village.Vous atteindrez alors le secteur financier, le parc de Battery et World Trade Center. La visite continuera vers le dépassement supérieur de côté Ouest: Construction de Time Warner, Lincoln Center, la cathédrale de St John le divin et Central Park. Vous atteindrez alors Harlem où vous verrez la célèbre «ligne de Strivers». Retournant vers le sud de Manhattan vous verrez le Museums Mile, qui obtient son nom des nombreux musées situés le long de ce bout droit de l'avenue, telle que le musée de Guggenheim, le musée métropolitain, la collection de Frick et beaucoup d'autres. Alors vous continuerez vers la partie la plus célèbre de la 5ème avenue où vous verrez les boutiques les plus élégantes, la cathédrale de St Patrick, le Rockefeller Center, la bibliothèque publique de New York. L'excursion comprend également une courte promenade à pied de Strawberry Fields à Central Park et dans le site de World Trade Center.A la fin de cette visite spéciale retour vers l’hôtel par bus.Dîner et Soirée libre a Times Square Nuit à l’hôtel"),
                     new Séjour(3,"NEW YORK ","test.jpg","Petit Déjeuner à l'hotel Journée libre a programmer sur place avec le chef de Groupe Nuit à l'hotel"),
                     new Séjour(4,"NEW YORK-LAS VEGAS","test.jpg","Petit déjeuner dans un restaurant local Demi journée libre et vers 14h  Transfert vers aéroport JFK pour envol vers Las Vegas Arrivée vers 20H et transfert à  l’Hôtel EXCALIBUR  pour passer 04 nuits en logement avec petit déjeuner Soirée et dîner libre à l'hôtel Nuit à l’hôtel  "),
                     new Séjour(5,"LAS VEGAS","test.jpg","Petit déjeuner à l’hôtel Départ pour demi-journée Découverte de las Vegas à pied avec l’assistant, vous visitez les Casino : Cesar Palace , Bellagio, Mirage , Paris etc …Après Midi direction premium Ourlet pour le shopping  pas loin de l’hôtel 21h30 Tour de las Vegas par limousine ( 08 personnes par limousine pour une Heure ), Visitez le Strip et assister devant Hotel Bellagio ou se déroule tous les soirs, à peu près toutes les demi-heures , un spectacle de jets d'eau magnifique puis passage par Fremont Street le centre ville de Las Vegas Nuit à l’hôtel "),
                     new Séjour(7," LAS VEGAS","test.jpg","Petit déjeuner à l’hôtel Journée Shopping au premium Outlet Nuit à l’hôtel"),
                     new Séjour(8," LAS VEGAS- LOS ANGELES ","test.jpg","Petit déjeuner à l'hôtel 08h transfert  par bus  vers Los Angeles Arrivée et Transfert vers l’hôtel Best Western sun set plaza pour passer 2 nuits en logement avec petit déjeuner. 14H départ pour une demi journée visite de los Angeles Ce circuit est le plus complet pour visiter Los Angeles. Notre guide vous fera découvrir tous les lieux incontournables de Los Angeles en bus confortable et climatisé. Nous vous présenterons :• HOLLYWOOD - lieu mythique de tournage des plus grands films et où les stars de cinéma vivent. Hollywood est aussi connu comme la capitale mondiale du divertissement.• WALK OF FAME - où les empreintes des stars sont immortalisées dans le ciment.•Boulevard Santa Monica et Venice Beach • HOLLYWOOD & HIGHLAND - Ici vous pouvez faire du shopping dans les magasins les plus prestigieux de Hollywood, c'est aussi un des lieux les plus populaires à visiter. GRAUMAN'S CHINESE THEATRE - Les empreintes des mains et des pieds des plus grandes  stars de cinéma du monde.A partir de 20h retour libre par taxi vers l’hôtel Nuit à l’hôtel."),
                     new Séjour(9,"UNIVERSAL STUDIO OU SAN DIEGO","test.jpg","Petit déjeuner à l’hôtel Journée Complete Universel Studio (en extra)  ou Excursion San Diego ( En extra )  avec Soirée à Hollywood Boulevard Nuit à l’hôtel."), 
                     new Séjour(10,"LOS ANGELES-ROME-TUNIS","test.jpg","Petit déjeuner à l’hôtel 13h30Transfert vers  l’Aéroport international de Los Angeles pour prendre le vol a 16H15 vers ROME , Nuit à Bord  "), 
                     new Séjour(11,"Tunis","test.jpg","Arrivée à Tunis 18H00")],
                     //declaration du tableau des ServicesNonInculs
                    ["Le timbre de voyage",
                    "l’assurance et les options",
                    "PCR Covid-19 avant départ : 170 Dt / Avant retour : 35$"]),
                  
    ]
    getVoyage(){
      return this.lesVoyages;
    }
    getVoyageById(id:string){
      return this.lesVoyages.filter(voyage =>voyage.id==id);  
    }
  constructor() { }
}
