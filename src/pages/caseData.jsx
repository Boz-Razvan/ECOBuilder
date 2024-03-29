import React from 'react';
import { casa1, casa2, casa3, casa4, casa5 } from '../components/assets/casa 1/casa1';
import { casa2_1, casa2_2, casa2_3, casa2_4 } from '../components/assets/casa2/casa2';
import { casa3_1, casa3_2, casa3_3, casa3_4, casa3_5 } from '../components/assets/casa3/casa3';
import { casa4_1, casa4_2, casa4_3, casa4_4, casa4_5 } from '../components/assets/casa4/casa4';
import { casa5_1, casa5_2, casa5_3, casa5_4, casa5_5 } from '../components/assets/casa 5 cu etaj/casa5';
import { casa6_1, casa6_2, casa6_3, casa6_4, casa6_5 } from '../components/assets/casa 6 cu etaj/casa6';
import { casa7_1, casa7_2, casa7_3, casa7_4, casa7_5, casa7_6, casa7_7 } from '../components/assets/casa 7 cu etaj/casa7';
import { casa8_1, casa8_2, casa8_3, casa8_4, casa8_5 } from '../components/assets/casa8 cu etaj/casa8';
import { casa9_1, casa9_2, casa9_3, casa9_4, casa9_5 } from '../components/assets/casa 9 cu mansarda/casa9';
import {casa10_1, casa10_2, casa10_3, casa10_4, casa10_5} from '../components/assets/casa 10 cu mansarda/casa10';
import {casa11_1, casa11_2, casa11_3, casa11_4, casa11_5} from '../components/assets/casa 11 cu mansarda/casa11';
import {casa12_1, casa12_2, casa12_3, casa12_4, casa12_5} from '../components/assets/casa 12 cu mansarda/casa12';



const casaData = {
    casa1: {
      nume: 'Geneva Zeleno',
      images: [casa1, casa2, casa3, casa4, casa5],
      image: casa1,
      description: 'Casa ecologică de la Eco-Builder, cu un singur nivel, îmbină armonios eleganța și sustenabilitatea. Cu designul său funcțional, această locuință maximizează eficiența spațiului, oferind în același timp confort și prietenie față de mediul înconjurător. Construită cu materiale ecologice și tehnologii inovatoare de eficiență energetică, casa asigură un consum redus de resurse. Grădina cu plante native și sistemul de colectare a apei pluviale completează eforturile noastre de conservare a mediului. Interiorul ergonomic și iluminarea naturală transformă această casă într-un sanctuar de trai eco-friendly, reflectând angajamentul nostru pentru un viitor mai verde.',
      sup: 89.64,
      suputil: 71.71,
      ter: 13.00,
      vol: 204.75,
      dim: '10.4x11.4',
      id: 'casa1',
      supacop: 148.00,
      terneacop: 50.00,
      liv: 1,
      buc: 1,
      hol: 1,
      ccam: 1,
      gar: "-",
      baie: 2,
      dorm: 2,
    },
    casa2: {
      nume: 'Geneva Verd',
      images: [casa2_1, casa2_2, casa2_3, casa2_4],
      description: 'Casa ecologică cu parter de la EcoBuilder încântă prin simplitate și sustenabilitate. Cu un design funcțional, materiale prietenoase cu mediul și panouri solare integrate, această casă aduce confort și eficiență energetică. Grădina ecologică și sistemele de reciclare subliniază angajamentul nostru față de un stil de viață verde. Interiorul spațios și luminoasă integrează soluții moderne pentru eficiența resurselor și se îmbină armonios cu natura din jur. EcoBuilder vă invită să experimentați o viață sustenabilă în această casă practică și rafinată, unde funcționalitatea și ecologia se întâlnesc într-o simfonie de eleganță. ',
      sup: 152.1,
      vol: 364.80,
      dim: '17.3x11.6',
      supacop: 237.50,
      ter: 55.94,
      gar: 1,
      id: 'casa2',
      liv: 1,
      image: casa2_1,
      buc: 1,
      hol: 1,
      cam: 1,
      baie: 2,
      dorm: 3,
    },
    casa3: {
      nume: 'Geneva Prasinos',
      images: [casa3_1, casa3_2, casa3_3, casa3_4],
      description: 'Casa ecologică cu parter de la EcoBuilder este o oază de sustenabilitate și confort. Cu designul său modern, materialele ecologice și sistemul eficient de izolare, această casă redefinește eleganța în construcțiile verzi. Ferestrele mari aduc abundentă lumină naturală, contribuind la economia de energie. Grădina ecologică și gestionarea inteligentă a resurselor completează angajamentul nostru pentru un stil de viață durabil. Interiorul spațios și prietenos cu mediul oferă un refugiu relaxant, iar tehnologiile avansate asigură eficiența energetică. EcoBuilder vă invită să descoperiți rafinamentul și beneficiile ecologice ale acestei case la parter, unde natura se îmbină perfect cu inovația.',
      sup: 113.84,
      suputil: 91.07,
      ter: 26,
      vol: 258.05,
      image: casa3_1,
      dim: '13.3 × 12.9',
      supacop: 206,
      terneacope: 30,
      gar: 1,
      liv: 22.04,
      buc: 1,
      id: 'casa3',
      hol: 1,
      cam: 1,
      baie: 2,
      dorm: 2,
    },
    casa4: {
      nume: 'Geneva Grun',
      images: [casa4_1, casa4_2, casa4_3, casa4_4, casa4_5],
      description: 'Casa ecologică de la EcoBuilder, cu un singur nivel, redefinește eleganța și sustenabilitatea. Cu designul său funcțional, această locuință integrează în mod inteligent elemente precum panouri solare și sisteme eficiente de izolare. Materialele prietenoase cu mediul și utilizarea eficientă a luminii naturale evidențiază angajamentul nostru pentru o construcție responsabilă. O grădină ecologică și soluții de reciclare completează armonios această oază verde. Spațiul interior, primitoare și bine iluminat, reflectă dorința noastră de a oferi un confort superior într-un cadru sustenabil. Cu EcoBuilder, această casă reprezintă o experiență echilibrată între stilul de viață modern și responsabilitatea față de mediul înconjurător.',
      sup: 228.2,
      suputil: 182.56,
      ter: 37.20,
      vol: 575.89,
      dim: '17.5x19',
      supacop: 344.40,
      terneacop: 60,
      gar: 1,
      id: 'casa4',
      liv: 1,
      buc: 1,
      baie: 1,
      hol: 1,
      image: casa4_1,
      cori: 1,
      baie: 1,
      dorm: 3,
      dress: 1,
      gar: "-",
    },
    casa5: {
      nume: 'Hera Zelená',
      images: [casa5_1, casa5_2, casa5_3, casa5_4, casa5_5],
      description: 'Descoperiți eleganța și eficiența în această casă ecologică cu un etaj. Cu un design modern și materiale durabile, aceasta aduce laolaltă confortul și respectul față de mediu. Geamurile generoase permit luminii naturale să inunde spațiul, iar tehnologia de eficiență energetică asigură un mediu sustenabil. Curtea verde și grădina ecologică completează perfect atmosfera naturală. O locuință care nu oferă doar confort, ci și o contribuție semnificativă la protejarea planetei. Bine ați venit într-o casă unde stilul de viață modern se împletește armonios cu responsabilitatea față de mediu! ',
      sup: 202.39,
      suputil: 149.92,
      image: casa5_1,
      ter: 24.75,
      volt: 490.87,
      dim: '9.4x14.2',
      id: 'casa5',
      supacop: 181.70,
      terneacop: 34.50,
      parter: 1,
      liv: 1,
      buc: 1,
      baie: 1   ,
      hol: 1,
      dep: 1,
      cor: 1,
      ccam: 1,
      etaj: 1,
      gar: "-",
      spal: 1,
      dor: 3,
    },
    casa6: {
      nume: 'Hera Grin',
      images: [casa6_1, casa6_2, casa6_3, casa6_4, casa6_5],
      description: 'Casa noastră ecologică cu un etaj, proiectată de EcoBuilder, îmbină perfecțiunea designului modern cu sustenabilitatea. Cu materiale reciclabile și tehnologii eficiente energetic, casa optimizează consumul de resurse. Grădina ecologică și sistemele avansate de reciclare subliniază angajamentul nostru față de mediu. Interiorul, plin de lumină naturală, oferă un spațiu primitor, amenajat cu mobilier ecologic și culori naturale. Tehnologia avansată pentru gestionarea energiei și conectivitatea inteligentă completează experiența modernă și durabilă. Această casă reprezintă un loc ideal, echilibrând armonios confortul cu responsabilitatea față de mediul înconjurător. ',
      sup: 211.61,
      suputil: 156.75,
      ter: 8.76,
      vol: 436.96,
      dim: '13.1x12.5',
      terneacop: 42.55,
      id: 'casa6',
      garaj: 1,
      image: casa6_1,
      parter: 1,
      liv: 1,
      dinn: 1,
      buc: 1,
      hol: 1,
      ccam: 1,
      gar: "-",
      baie: 1,
      etaj: 1,
      spal: 1,
      dorm: 2,
    },
    casa7: {
      nume: 'Hera Vèt',
      images: [casa7_1, casa7_2, casa7_3, casa7_4, casa7_5, casa7_6, casa7_7],
      description: 'Casa ecologică cu un etaj de la EcoBuilder emană eleganță și durabilitate. Cu un design modern și materiale sustenabile, casa integrează eficient tehnologii eco, inclusiv panouri solare și izolare avansată. Iluminată generos de lumina naturală, interiorul spațios și aerisit promovează un stil de viață confortabil și eco-friendly. O curte verde și o grădină biodiversă completează ansamblul, accentuând angajamentul nostru pentru mediu. Cu sisteme inteligente și facilități moderne, această casă reprezintă un spațiu prietenos cu natura, oferind un loc ideal pentru viața urbană sustenabilă. ',
      sup: 236.02,
      suputil: 174.83,
      ter: 29.70,
      id: 'casa7',
      vol: 547.42,
      dim: '17.0x12.5',
      supacop: 202.00,
      terneacop: 47.00,
      garaj: 1,
      parter: 1,
      liv: 1,
      dinn: 1,
      image: casa7_1,
      buc: 1,
      ccam: 1,
      birou: 1,
      hol: 1,
      baie: 1,
      etaj: 1,
      coridor: 1,
      dorm: 3,
      gar: 1,
    },
    casa8: {
      nume: 'Hera Zalias',
      images: [casa8_1, casa8_2, casa8_3, casa8_4, casa8_5],
      description: 'Casa noastră ecologică cu un etaj, proiectată de EcoBuilder, îmbină perfecțiunea designului modern cu sustenabilitatea. Cu materiale reciclabile și tehnologii eficiente energetic, casa optimizează consumul de resurse. Grădina ecologică și sistemele avansate de reciclare subliniază angajamentul nostru față de mediu. Interiorul, plin de lumină naturală, oferă un spațiu primitor, amenajat cu mobilier ecologic și culori naturale. Tehnologia avansată pentru gestionarea energiei și conectivitatea inteligentă completează experiența modernă și durabilă. Această casă reprezintă un loc ideal, echilibrând armonios confortul cu responsabilitatea față de mediul înconjurător. ',
      sup: 242.14,
      suputil: 178.68,
      ter: 16.50,
      vol: 609.91,
      dim: '15.2x11.9',
      terneacop: 45.00,
      gar: 1,
      parter: 1,
      liv: 1,
      id: 'casa8',
      dinn: 1,
      buc: 1,
      hol: 1,
      image: casa8_1,
      ccam: 1,
      baie: 1,
      dorm: 4,
    },

    casa9: {
        nume: 'Helios Kore',
        images: [casa9_1, casa9_2, casa9_3, casa9_4, casa9_5],
        description: 'Casa ecologică cu mansardă de la EcoBuilder reprezintă o sinteză perfectă între eleganță și sustenabilitate. Cu un design inovator, această locuință integrează eficient panouri solare, sistem de izolare avansat și materiale eco-friendly. Mansarda oferă un spațiu suplimentar bine iluminat, aducând un plus de funcționalitate și confort. Grădina ecologică și sistemele de reciclare completează angajamentul nostru pentru un mediu înconjurător sănătos. Interiorul, proiectat cu grijă, reflectă eleganța și tehnologia modernă, oferind un stil de viață confortabil și sustenabil. Cu EcoBuilder, această casă cu mansardă devine un simbol al armoniei între design sofisticat și responsabilitatea față de planetă. ',
        sup: 163.2,
        suputil: 130.56,
        ter: 20.36,
        vol: 372.12,
        dim: '10.1x9.2',
        supacop: 169.50,
        terneacop: 121.10,
        parter: 1,
        image: casa9_1,
        id: 'casa9',
        living: 1,
        buc: 1,
        baie: 1,
        hol: 1,
        mansarda: 1,
        dress: 1,
        cor: 1,
        gar: "-",
        cam: 1,
        dormitor: 1,
      },
      casa10: {
        nume: 'Helios Hring ',
        images: [casa10_1, casa10_2, casa10_3, casa10_4, casa10_5],
        description: 'Casa ecologică cu mansardă de la EcoBuilder emană eleganță și sustenabilitate. Cu un design atrăgător, această locuință integrează cu inteligență tehnologii eficiente și materiale ecologice, reflectând preocuparea noastră pentru mediu. Grădina ecologică și sistemele de reciclare adaugă un plus de armonie. Mansarda spațioasă aduce un farmec aparte, oferind flexibilitate în utilizarea spațiului. Interiorul, bine iluminat și prietenos cu mediul, reprezintă angajamentul nostru de a oferi confort și stil într-un cadru responsabil. Cu EcoBuilder, această casă cu mansardă devine un refugiu rafinat, unde natura și inovația se întâlnesc pentru a crea un loc unic, adaptat nevoilor moderne. ',
        sup: 188.8,
        suputil: 151.04,
        ter: 4.35,
        vol: 359.42,
        dim: '11.9x9.6',
        supacop: 179.00,
        garaj: 1,
        parter: 1,
        id: 'casa10',
        liv: 1,
        buc: 1,
        cor: 1,
        ccam: 1,
        baie: 1,
        gar: "-",
        image: casa10_1,
        mansarda: 1,
        dep: 1,
        dorm: 3,
      },
      casa11: {
        nume: 'Helios Groente',
        images: [casa11_1, casa11_2, casa11_3, casa11_4, casa11_5],
        description: 'Casa ecologică cu mansardă de la EcoBuilder combină rafinamentul arhitectural cu sustenabilitatea. Cu un design distinctiv, această locuință utilizează eficient lumină naturală și dispune de tehnologii ecologice, inclusiv panouri solare și izolație avansată. Materialele ecologice și atenția la detalii reflectă angajamentul nostru pentru mediul înconjurător. O mansardă spațioasă oferă un spațiu suplimentar și poate fi adaptată la nevoile dumneavoastră. Cu o grădină ecologică și facilități de reciclare integrate, această casă reprezintă un echilibru perfect între confort modern și responsabilitate ecologică. Cu EcoBuilder, vă invităm să descoperiți o locuință care îmbină cu armonie eleganța și grijă față de mediu. ',
        sup: 153.05,
        suputil: 122.44,
        ter: 6.50,
        vol: 317.24,
        dim: '10.3x8.9',
        supacop: 163.00,
        id: 'casa11',
        terneacop: 11.22,
        parter: 1,
        image: casa11_1,
        liv: 1,
        buc: 1,
        hol: 1,
        baie: 1,
        mansarda: 1,
        cor: 1,
        dorm: 3,
        gar: "-",
      },
      casa12: {
        nume: 'Helios Viridis ',
        images: [casa12_1, casa12_2, casa12_3, casa12_4, casa12_5],
        description: 'Casa ecologică cu mansardă de la EcoBuilder îmbină eleganța și sustenabilitatea într-un mod armonios. Cu un design contemporan și tehnologii avansate, această locuință oferă un mediu de trai confortabil și prietenos cu mediul. Mansarda spațioasă aduce un plus de funcționalitate și flexibilitate, oferind posibilități variate de amenajare conform nevoilor dumneavoastră. Materialele ecologice și sistemele de eficiență energetică reflectă angajamentul nostru pentru un viitor mai verde. O grădină cu plante native și soluții de reciclare completează peisajul sustenabil al acestei case. Cu EcoBuilder, vă invităm să descoperiți o locuință care integrează perfect eleganța și grijă față de mediu. ',
        sup: 175.19,
        suputil: 140.15,
        vol: 342.30,
        dim: '9.6x8.6',
        supacop: 113.00,
        id: 'casa12',
        image: casa12_1,
        parter: 1,
        liv: 1,
        buc: 1,
        hol: 1,
        baie: 1,
        dorm: 1,
        gar: "-",
        mansarda: 1,
        cor: 1,
      },
  };
  
  export default casaData;