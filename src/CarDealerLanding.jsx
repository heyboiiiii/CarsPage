import { useState } from "react";

import logo from "./assets/LOGO_AdrianFilosa.jpg";
import instagramIcon from "./assets/icons8-instagram-windows-11-color-32.png";
import tiktokIcon from "./assets/icons8-tiktok-ios-17-filled-32.png";
import facebookIcon from "./assets/icons8-facebook-32.png";
import youtubeIcon from "./assets/icons8-youtube-24.png";



export default function CarDealerLanding() {
  
  /* change */

  const whatsappLink = "https://wa.me/5491160623791";
  const igLink = "https://www.instagram.com/"; // no encontrado
  const facebookLink = "https://www.facebook.com/profile.php?id=100087230593968";
  const tiktokLink = "";
  const youtubeLink = "";

  const concs_phone = "+54 11 6062-3791";
  const concs_name = "Automotores Adrián Filosa";
  const concs_ubication = "Felipe Amoedo 746, Quilmes";

  /* change */

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(concs_ubication)}&output=embed`;

  const cars = 
[
  {
    "type" :"car",
    "name": "Peugeot Partner 1.4 Furgon Confort",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_845776-MLA110320555017_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1744043813-peugeot-partner-14-furgon-confort-_JM#polycard_client=search-desktop&search_layout=grid&position=1&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
    "type" :"pickup",
    "name": "Shineray Srm M7 Van Pasajeros 9 Asientos",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_918244-MLA98779938249_112025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2581217528-shineray-srm-m7-van-9-pasajeros-_JM#polycard_client=search-desktop&search_layout=grid&position=2&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
    "type" :"pickup",
    "name": "Shineray Swm M7",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_638535-MLA98886570875_112025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2529778074-shineray-swm-m7-furgon-20-_JM#polycard_client=search-desktop&search_layout=grid&position=3&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Baic Bj30 1.5t Bj30 2wd Hybrid",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_625012-MLA108653042237_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3044491770-baic-bj30-15t-bj30-2wd-hybrid-_JM#polycard_client=search-desktop&search_layout=grid&position=4&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
      "type" :"car",
    "name": "Toyota Rav4 Hibrid 2.5 Hv Limited 4x2 At",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_617271-MLA109095801486_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3051168468-toyota-rav4-hibrid-25-hv-limited-4x2-at-_JM#polycard_client=search-desktop&search_layout=grid&position=5&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
    "type" :"pickup",
    "name": "Jmc Grand Avenue 2.3 Gtdi Dadao Pro 4x4 At",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_889764-MLA87214464829_072025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1508320751-jmc-grand-avenue-23-gtdi-dadao-pro-4x4-at-_JM#polycard_client=search-desktop&search_layout=grid&position=6&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Renault Sandero Stepway 1.6 Dynamique 105cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_960381-MLA107817640319_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2911920080-renault-sandero-stepway-16-dynamique-105cv-_JM#polycard_client=search-desktop&search_layout=grid&position=7&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Fiat Fiorino 1.4 Fire Evo Confort 87cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_667730-MLA108366421910_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3082834120-fiat-fiorino-14-fire-evo-confort-87cv-_JM#polycard_client=search-desktop&search_layout=grid&position=8&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Chevrolet Tracker 1.8 Ltz 140cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_761818-MLA106594489170_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2847706008-chevrolet-tracker-18-ltz-140cv-_JM#polycard_client=search-desktop&search_layout=grid&position=9&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Ford Territory 1.8 Titanium At",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_678197-MLA108206692112_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1703750027-ford-territory-18-titanium-at-_JM#polycard_client=search-desktop&search_layout=grid&position=10&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",
    "name": "Shineray T30 1.6 Pick Up Cs",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_809465-MLA85725759626_062025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2113648438-shineray-t30-16-pick-up-cs-_JM#polycard_client=search-desktop&search_layout=grid&position=11&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Ford Kuga 1.6 Titanium At Awd T 180cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_967413-MLA107864405697_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2922652120-ford-kuga-16-titanium-at-awd-t-180cv-_JM#polycard_client=search-desktop&search_layout=grid&position=12&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Peugeot 208 1.6 Allure Tiptronic",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_784575-MLA110220218645_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1740728377-peugeot-208-16-allure-tiptronic-_JM#polycard_client=search-desktop&search_layout=grid&position=13&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Ford Focus Iii 1.6 S",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_997156-MLA108016975630_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1699703827-ford-focus-iii-16-s-_JM#polycard_client=search-desktop&search_layout=grid&position=14&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Mg Zs Hybrid+ 1.5 Hev Comfort At",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_823930-MLA108238889794_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1711440021-mg-zs-hybrid-15-hev-comfort-at-_JM#polycard_client=search-desktop&search_layout=grid&position=15&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Peugeot 208 1.6 Gt Thp",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_909617-MLA107815356535_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1651425919-peugeot-208-16-gt-thp-_JM#polycard_client=search-desktop&search_layout=grid&position=16&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Fiat Fiorino 1.4",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_635125-MLA109556749304_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1737989275-fiat-fiorino-14-_JM#polycard_client=search-desktop&search_layout=grid&position=17&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Fiat Argo 1.8 Hgt",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_793671-MLA108107497372_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2847719948-fiat-argo-18-hgt-_JM#polycard_client=search-desktop&search_layout=grid&position=18&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Citroën Berlingo Furgon 1.6 Hdi 92 Bussines",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_686740-MLA107889597128_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3044244356-citron-berlingo-furgon-16-hdi-92-bussines-_JM#polycard_client=search-desktop&search_layout=grid&position=19&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",
    "name": "Ford Ranger 3.2 Cd 4x4 Xlt Tdci 200cv At",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_913857-MLA110320263039_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1744084259-ford-ranger-32-cd-4x4-xlt-tdci-200cv-at-_JM#polycard_client=search-desktop&search_layout=grid&position=20&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Ford Fiesta 1.6 S",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_880227-MLA110128560903_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1738009039-ford-fiesta-16-s-_JM#polycard_client=search-desktop&search_layout=grid&position=21&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Renault Duster 2.0 Ph2 4x2 Privilege",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_889751-MLA109048356166_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3127845136-renault-duster-20-ph2-4x2-privilege-_JM#polycard_client=search-desktop&search_layout=grid&position=22&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Renault Duster 2.0 4x4 Privilege 143cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_721605-MLA108807944990_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1723844595-renault-duster-20-ph2-4x4-privilege-_JM#polycard_client=search-desktop&search_layout=grid&position=23&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Citroën C3 1.6 Feel Pk At 6",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_832013-MLA109555611902_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1738021755-citron-c3-16-feel-pk-at6-_JM#polycard_client=search-desktop&search_layout=grid&position=24&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Toyota Yaris 1.6 Gr",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_714015-MLA109276465371_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1699517445-toyota-yaris-16-gr-_JM#polycard_client=search-desktop&search_layout=grid&position=25&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Peugeot 2008 1.6 Thp Sport",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_917710-MLA109172113619_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3060080692-peugeot-2008-16-thp-sport-_JM#polycard_client=search-desktop&search_layout=grid&position=26&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Audi A1 Sportback 1.4 Tfsi Stronic 125cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_895135-MLA109377471429_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3069603744-audi-a1-sportback-14-tfsi-stronic-125cv-_JM#polycard_client=search-desktop&search_layout=grid&position=27&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Ford Fiesta 1.6 Titanium Mt",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_934462-MLA109554452700_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1737958589-ford-fiesta-16-titanium-mt-_JM#polycard_client=search-desktop&search_layout=grid&position=28&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Volkswagen Nivus 1.0 Tsi Tiptronic Highline",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_903517-MLA106783986186_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1679614225-volkswagen-nivus-10-tsi-tiptronic-highline-_JM#polycard_client=search-desktop&search_layout=grid&position=29&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",
    "name": "Shineray T30 1.6 Pick Up Ch Cs Duales",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_743327-MLA107724429953_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1501537981-shineray-t30-16-pick-up-ch-cs-duales-_JM#polycard_client=search-desktop&search_layout=grid&position=30&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    "name": "Renault Clio 1.2 Mio Confort Plus Abc",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_962036-MLA108991722709_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1703792059-renault-clio-12-mio-confort-plus-abc-_JM#polycard_client=search-desktop&search_layout=grid&position=31&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",
    "name": "Jeep Wrangler 3.6 Unlimited Rubicon 4x4 At8",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_675814-MLA109124762922_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1722001251-jeep-wrangler-36-unlimited-rubicon-4x4-at8-_JM#polycard_client=search-desktop&search_layout=grid&position=32&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",
    "name": "Ram Rampage 2.0 Rebel Gme At9 4x4",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_947115-MLA107638756440_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1692896287-ram-rampage-20-rebel-gme-at9-4x4-_JM#polycard_client=search-desktop&search_layout=grid&position=33&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",
    "name": "Ford Ranger 2.2 Cd Xl Tdci 150cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_978262-MLA107271555371_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2852256952-ford-ranger-22-cd-xl-tdci-150cv-_JM#polycard_client=search-desktop&search_layout=grid&position=34&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",
    "name": "Shineray T30 Box Refrigerado 1.6 Cadenero",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_671921-MLA107729714095_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1594146875-shineray-t30-box-refrigerado-16l-nafta-cadenero-_JM#polycard_client=search-desktop&search_layout=grid&position=35&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",
    "name": "Ford Maverick 2.0 Ecoboost Cd Lariat At8 4wd",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_735715-MLA107814482291_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1650201281-ford-maverick-20-ecoboost-cd-lariat-at8-4wd-_JM#polycard_client=search-desktop&search_layout=grid&position=36&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",
    "name": "Toyota 4runner 4.7 V8 Limited Sport",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_861157-MLA110237282697_042026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3169415088-toyota-4runner-47-v8-limited-sport-_JM#polycard_client=search-desktop&search_layout=grid&position=37&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",
    "name": "Ford Ranger 3.2 Cd Limited Tdci 200cv Automática",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_961585-MLA107201870940_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2922689930-ford-ranger-32-cd-limited-tdci-200cv-automatica-_JM#polycard_client=search-desktop&search_layout=grid&position=38&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",

    "name": "Ford Ranger Raptor 2.0l Biturbo Cabina Doble 4x4",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_968805-MLA105099645009_012026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1647168129-ford-ranger-raptor-20l-biturbo-cabina-doble-4x4-_JM#polycard_client=search-desktop&search_layout=grid&position=39&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",

    "name": "Fiat Cronos 1.3 Drive Mt",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_677120-MLA107119864562_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1650449475-fiat-cronos-13-drive-mt-_JM#polycard_client=search-desktop&search_layout=grid&position=40&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",

    "name": "Mini Cooper Countryman 1.6 S 184cv At All4",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_880358-MLA108956392579_032026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-3070986460-mini-cooper-countryman-16-s-184cv-at-all4-_JM#polycard_client=search-desktop&search_layout=grid&position=41&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",
    
    "name": "Fiat Punto 1.6 Sporting",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_855143-MLA107814501517_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1654281773-fiat-punto-16-sporting-_JM#polycard_client=search-desktop&search_layout=grid&position=42&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"pickup",

    "name": "Land Rover Range Rover Sport 5.0 V8 S/c Hse",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_726222-MLA105758583137_012026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2806934258-land-rover-range-rover-sport-50-v8-sc-hse-_JM#polycard_client=search-desktop&search_layout=grid&position=43&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",

    "name": "Volkswagen Vento 2.0 Tsi Gli 211cv App Connect + Nav",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_790839-MLA102301583945_122025-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1617734497-volkswagen-vento-20-tsi-gli-211cv-app-connect-nav-_JM#polycard_client=search-desktop&search_layout=grid&position=44&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",

    "name": "Chevrolet Tracker 1.8 Premier Awd At",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_898599-MLA104865321739_012026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1645543157-chevrolet-tracker-18-premier-awd-at-_JM#polycard_client=search-desktop&search_layout=grid&position=45&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",

    "name": "Toyota Etios 1.5 Xls",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_713633-MLA107166568690_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-2922626648-toyota-etios-15-xls-_JM#polycard_client=search-desktop&search_layout=grid&position=46&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",

    "name": "Renault Captur 2.0 Intens Manual",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_893357-MLA106784133214_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1679367349-renault-captur-20-intens-manual-_JM#polycard_client=search-desktop&search_layout=grid&position=47&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  },
  {
     "type" :"car",

    "name": "Renault Fluence 2.0 T Gt 190cv",
    "img": "https://http2.mlstatic.com/D_Q_NP_2X_681790-MLA107037318077_022026-E.webp",
    "link": "https://auto.mercadolibre.com.ar/MLA-1671677369-renault-fluence-20-t-gt-190cv-_JM#polycard_client=search-desktop&search_layout=grid&position=48&type=item&tracking_id=8a3b68c0-889a-40de-b573-ab2390a6edfa"
  }];

  const [displayInventory,setDisplayInventory] = useState(false);

  const showInventory = () => {
    setDisplayInventory(true);
  }
  const hideInventory = () => {
    setDisplayInventory(false);
  }

  const [filteredCars, setFilteredCars] = useState({
    car:true,
    pickup:true,
    motorcycle:true
  });

  const handleFilteredCar = () => {
    setFilteredCars(prevData => ({ ...prevData, car: !prevData.car }));
  }
  const handleFilteredPickup = () => {
    setFilteredCars(prevData => ({ ...prevData, pickup: !prevData.pickup }));
  }
  const handleFilteredMotorcycle = () => {
    setFilteredCars(prevData => ({ ...prevData, motorcycle: !prevData.motorcycle }));
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-gray-200 overflow-hidden">
              <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <span className="font-semibold text-lg">{concs_name}</span>
              <span className="text-gray-500 text-sm block">{concs_ubication}</span>
            </div>
            
          </div>
          <nav className="hidden md:flex gap-8 text-m">
            <a href="#begin" className="hover:text-black">Inicio</a>
            <a href="#inventory" className="hover:text-black">Inventario</a>
            <a href="#us" className="hover:text-black">Nosotros</a>
            <a href="#contact" className="hover:text-black">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id ="begin" className="text-center py-20 px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-slide">
          ENCUENTRA EL AUTO <br /> DE TUS SUEÑOS
        </h1>

        <p className="text-gray-600 mb-12 fade-slide">
          Explora nuestro inventario de vehículos de alta calidad.
        </p>

        <a href="#inventory">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-black transition fade-slide">
          Ver Inventario
          </button>
        </a>

        <div className="flex justify-center">
          <div className="border-t border-gray-300 mt-20 w-96 smooth-expand-center"></div>
        </div>
        
      </section>

      

      {/* Inventory */}
      <section id="inventory" className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Nuestro Inventario Destacado
        </h2>

        <FilterButtons 
          handleFilteredCar={handleFilteredCar} 
          handleFilteredPickup={handleFilteredPickup} 
          handleFilteredMotorcycle={handleFilteredMotorcycle} 
          filteredCars={filteredCars}
        />

        <Inventory displayInventory={displayInventory} cars={cars} filteredCars={filteredCars}/>

        <InventoryButton cars ={cars} displayInventory={displayInventory} showInventory={showInventory} hideInventory={hideInventory} />
    
        
      </section>

      {/* US */}
      <section id="us" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Nosotros
            </h2>
            <p className="text-gray-600 mb-6">
              Somos {concs_name}...
              <br />
              <br />
              Buscamos brindar la mejor experiencia de compra de autos 0km y usados de calidad en Quilmes y sus alrededores.
              <br />
              <br />
              📍Te esperamos en {concs_ubication} para brindarte la atención que te mereces !!! 
              <br />
              <br />
              👉🏼Consultanos por Amplia Financiación a tasa fija.
              <br />
              <br />
              ⚠️Evaluamos tu Usado para Permuta o Consignación via online.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-black transition">
                Contáctanos
              </button>
            </a>
          </div>

          <iframe src={mapSrc} className="rounded-2xl shadow w-full h-96 border-0" loading="lazy"/>
        </div>
      </section>
      
      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="flex text-center justify-center items-center gap-4 text-gray-600 border-2 border-gray-300 rounded-xl p-6 max-w-md mx-auto">
            <p>
              {/* PHONE NUMBER */}
              {concs_phone}
            </p>   
            <a href={whatsappLink} className="">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>  
            
            </a>
            
          </div>
          {/* Social media */}
          <div>
              <h3 className="text-lg font-semibold mt-8 mb-4">Seguinos en nuestras redes sociales</h3>
              <div className="flex justify-center gap-6 align-items-center">
                <div>
                  <a href={igLink} target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="w-12 h-12" />
                  </a>
                </div>
                
                <div>
                  <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="w-12 h-12" />
                  </a>
                </div>
    
                

                <div>
                  <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                    <img src={tiktokIcon} alt="TikTok" className="w-11 h-11" />
                  </a>
                </div>
                
              </div>
          </div>
        </div>
      </section>

      <a target="_blank" class="fixed right-5 bottom-5 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition duration-300 hover:bg-green-600" href={whatsappLink}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></a>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} {concs_name}. Todos los derechos reservados.
      </footer>
    </div>
  );
}






function InventoryButton({cars,displayInventory,showInventory,hideInventory}){
  if(displayInventory){

    return(
      <div className="text-center mt-10">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-black transition" onClick={hideInventory}>
          Ocultar Inventario
        </button>
      </div>
    );}
    else{
      if(cars.length > 6){
        return(
        <div className="text-center mt-10">
          <button className="bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-black transition" onClick={showInventory}>
            Ver Más
          </button>
        </div>
        );
      }else{
        return(null);
      }
      
    }
}

function Inventory({displayInventory,cars,filteredCars}){
  if(displayInventory){
    return(
      <div className="grid md:grid-cols-3 gap-8">
            {cars.map((car, i) => (
              <InventoryItems car={car} i={i} filteredCars={filteredCars} />
            ))}
          </div>  
    );
  }else{
    if (cars.length > 3){
       return(
        <div className="grid md:grid-cols-3 gap-8">
          {cars.slice(0, 3).map((car, i) => (
            <InventoryItems car={car} i={i} filteredCars={filteredCars}/>
          ))}
        </div> 
      );
    }else{
      return(
         <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <InventoryItems car={car} i={i} filteredCars={filteredCars}/>
          ))}
        </div>  
      );
    }
  }
}

function InventoryItems({car,i,filteredCars}){
  if(filteredCars[car.type] == true){
  return (
    <div
      key={i}
      className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <img
        src={car.img}
        alt={car.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-center">
        <h3 className="font-semibold text-lg">{car.name}</h3>
        <p className="text-gray-500 text-sm mb-4">{car.desc}</p>
        <a href={car.link} target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
            Ver Detalles
          </button>
        </a>
      </div>
  </div>
  );}

}


function FilterButtons({handleFilteredCar,handleFilteredPickup,handleFilteredMotorcycle,filteredCars}){
  const base = "px-4 py-2 rounded-lg transition";
  const active = "bg-black text-white";
  const inactive = "bg-gray-200 hover:bg-gray-300";
  
  return(
    <div className="flex justify-center gap-4 mb-16">
      <button className={`${base} ${filteredCars.car ? active : inactive}`} onClick={() => handleFilteredCar()}>
        Autos
      </button>
      <button className={`${base} ${filteredCars.pickup ? active : inactive}`} onClick={() => handleFilteredPickup()}>
        Pickups
      </button>
      <button className={`${base} ${filteredCars.motorcycle ? active : inactive}`} onClick={() => handleFilteredMotorcycle()}>
        Motos
      </button>
    </div>

  );
}