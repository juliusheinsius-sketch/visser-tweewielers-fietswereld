const M = "https://www.vissertweewielers.nl/storage/app/media/";

export const contact = {
  name: "Visser Tweewielers",
  street: "Hoofdstraat 214",
  city: "2071 EN Santpoort-Noord",
  phone: "023 539 3221",
  phoneHref: "tel:+31235393221",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Hoofdstraat+214+Santpoort-Noord",
};

export const hours: [string, string][] = [
  ["Maandag", "Gesloten"],
  ["Dinsdag", "08:30–12:30 · 13:30–17:30"],
  ["Woensdag", "08:30–12:30 · 13:30–17:30"],
  ["Donderdag", "08:30–12:30 · 13:30–20:00"],
  ["Vrijdag", "08:30–12:30 · 13:30–17:30"],
  ["Zaterdag", "08:30–17:00"],
  ["Zondag", "Gesloten"],
];

export type Bike = { brand: string; name: string; text: string; img: string };

export const bikes: Bike[] = [
  { brand: "Flyer", name: "Upstreet 5 (comfort)", img: M + "webimage-79fe13a8-c0e1-4c75-a9c1-373fab2af1fb.png", text: "Net zo overtuigend in het woon-werkverkeer als op een tocht door de natuur. Met de extra grote accu rijdt u zorgeloos vele kilometers." },
  { brand: "Flyer", name: "Upstreet (comfort of cruiser)", img: M + "webimage-45a56662-f4cd-4fbc-b177-7f0eef71735b.png", text: "Elegante e-bike voor elke gelegenheid: comfortabel en in stijl naar werk, winkel of restaurant." },
  { brand: "Flyer", name: "Gotour 6 (comfort of cruiser)", img: M + "webimage-9e57d3eb-05a2-4832-9aa5-a0afb15c9b36.png", text: "De ideale toerfiets. Design, rijcomfort en ergonomie in één goed afgestemd geheel." },
  { brand: "Flyer", name: "Upstreet 1 / Upstreet 2 (vouwfiets)", img: M + "csm_FLYER_Upstreet1_5.40_LichenGreenSatin_b987c9aaca.jpg", text: "Wendbaar op 20-inch wielen. Eén maat voor iedereen tussen 1,50 en 1,90 meter." },
  { brand: "Flyer", name: "Tandem", img: M + "csm_FLYER_Tandem_7.83_SilverDarkCool_3dcfd8f116.jpg", text: "Veilig fietsplezier voor twee. De trapkracht van beide berijders is op elkaar af te stemmen." },
  { brand: "Flyer", name: "Gotour (comfort of cruiser)", img: M + "Gotour%20comfort.png", text: "Comfortabel op korte en lange ritten, met motor- en accuprestaties van topklasse." },
  { brand: "Flyer", name: "Gotour 3 family bike", img: M + "webimage-BA29D3F2-C037-4624-B57ACD8B3ECCAF5B.png", text: "Gezinsfiets die nauwelijks onderhoud vraagt. Voor boodschappen, uitjes en de rit naar school." },
  { brand: "Flyer", name: "Upstreet SL cruiser", img: M + "webimage-533777E9-C19F-46B2-A384AA2FCE81E8D3.png", text: "Lichtgewicht, maar compleet uitgerust met verlichting, bagagedrager en spatborden." },
  { brand: "Flyer", name: "Upstreet SL mixed", img: M + "webimage-89C5190F-C3F2-4E71-9130C4A0A2A3DD2A.png", text: "Lichtgewicht en flexibel voor dagelijks gebruik, met lage instap." },
  { brand: "Advanced", name: "Tour Plus (dames of heren)", img: M + "IMG1030193_10346.jpg", text: "Onze best verkochte fiets. Accu eenvoudig uitneembaar, kabels netjes in het frame. Brengt u extreem ver." },
  { brand: "Advanced", name: "Tour Pro (dames of heren)", img: M + "Advanced%20Pro%202024.png", text: "Accu mooi geïntegreerd in de voorbuis. Leverbaar met ketting of met riemaandrijving." },
  { brand: "Gocycle", name: "G4i", img: M + "fietsen/Gocycle-G4i-with-mudguards-lights_new-seat.jpg", text: "Snel opvouwbaar, slimme techniek en een uitgesproken ontwerp." },
];

export const rentals: Bike[] = [
  { brand: "Huurfiets", name: "Flyer T8 zilver", img: M + "Naamloos.jpg", text: "Elektrische fiets met 3 ondersteuningsstanden." },
  { brand: "Huurfiets", name: "Flyer T8 wit", img: M + "unnamed-1.jpg", text: "Elektrische fiets met 3 ondersteuningsstanden." },
  { brand: "Huurfiets", name: "Flyer Upstreet5 7.43 L", img: M + "PNG-Print-FLYER_Upstreet5_7.43_Comfort_PearlWhiteGloss-min.png", text: "Elektrische fiets met 4 ondersteuningsstanden." },
  { brand: "Huurfiets", name: "Das Original C007", img: M + "download-1.png", text: "Elektrische fiets (26 inch) met 4 ondersteuningsstanden." },
  { brand: "Huurfiets", name: "Flyer Gotour 7.23 L", img: M + "pxl202405211155550512.jpg", text: "3 ondersteuningsstanden, Bosch Performance Line CX." },
];

export const heroImg = M + "nieuwsfiets-showroom-flyer-met-drie-nieuwe-modellen-naar-eurobike-2-600x600.jpg";
export const advancedImg = M + "Advanced_MY24_Tour-Pro_Crushed-Berry-3-scaled-e1708005827447-957x547.jpg";
export const starlyImg = M + "260422starlybikes43.jpg";
