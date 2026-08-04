/**
 * Official SEMOVI CDMX Network Datasets & High-Resolution Vector Diagram Sources
 */

const cdmxNetworks = [
  {
    id: "all",
    name: "Red Completa MI",
    icon: "layers",
    mapImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapa_Integrado_del_Sistema_de_Movilidad_Integrada_de_la_Ciudad_de_M%C3%A9xico.png",
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "06:00 - 00:00 hrs",
      sunFest: "07:00 - 00:00 hrs"
    },
    officialUrl: "https://www.semovi.cdmx.gob.mx",
    domainLabel: "semovi.cdmx.gob.mx"
  },
  {
    id: "metro",
    name: "Metro CDMX",
    icon: "train",
    mapImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapa_Integrado_del_Sistema_de_Movilidad_Integrada_de_la_Ciudad_de_M%C3%A9xico.png",
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "06:00 - 00:00 hrs",
      sunFest: "07:00 - 00:00 hrs"
    },
    officialUrl: "https://metro.cdmx.gob.mx",
    domainLabel: "metro.cdmx.gob.mx"
  },
  {
    id: "metrobus",
    name: "Metrobús",
    icon: "bus",
    mapImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapa_Integrado_del_Sistema_de_Movilidad_Integrada_de_la_Ciudad_de_M%C3%A9xico.png",
    hours: {
      monFri: "04:30 - 00:00 hrs",
      sat: "04:30 - 00:00 hrs",
      sunFest: "05:00 - 00:00 hrs"
    },
    officialUrl: "https://metrobus.cdmx.gob.mx",
    domainLabel: "metrobus.cdmx.gob.mx"
  },
  {
    id: "tren_ligero",
    name: "Tren Ligero",
    icon: "train-front",
    mapImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapa_Integrado_del_Sistema_de_Movilidad_Integrada_de_la_Ciudad_de_M%C3%A9xico.png",
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "06:00 - 00:00 hrs",
      sunFest: "07:00 - 00:00 hrs"
    },
    officialUrl: "https://ste.cdmx.gob.mx",
    domainLabel: "ste.cdmx.gob.mx"
  },
  {
    id: "trolebus",
    name: "Trolebús",
    icon: "bus-front",
    mapImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapa_Integrado_del_Sistema_de_Movilidad_Integrada_de_la_Ciudad_de_M%C3%A9xico.png",
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "05:00 - 00:00 hrs",
      sunFest: "05:00 - 00:00 hrs"
    },
    officialUrl: "https://ste.cdmx.gob.mx",
    domainLabel: "ste.cdmx.gob.mx"
  },
  {
    id: "cablebus",
    name: "Cablebús",
    icon: "cable-car",
    mapImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapa_Integrado_del_Sistema_de_Movilidad_Integrada_de_la_Ciudad_de_M%C3%A9xico.png",
    hours: {
      monFri: "05:00 - 23:00 hrs",
      sat: "06:00 - 23:00 hrs",
      sunFest: "07:00 - 23:00 hrs"
    },
    officialUrl: "https://ste.cdmx.gob.mx",
    domainLabel: "ste.cdmx.gob.mx"
  },
  {
    id: "rtp",
    name: "RTP CDMX",
    icon: "bus",
    mapImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapa_Integrado_del_Sistema_de_Movilidad_Integrada_de_la_Ciudad_de_M%C3%A9xico.png",
    hours: {
      monFri: "05:00 - 23:00 hrs",
      sat: "05:00 - 23:00 hrs",
      sunFest: "06:00 - 23:00 hrs"
    },
    officialUrl: "https://rtp.cdmx.gob.mx",
    domainLabel: "rtp.cdmx.gob.mx"
  },
  {
    id: "ecobici",
    name: "Ecobici",
    icon: "bike",
    mapImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapa_Integrado_del_Sistema_de_Movilidad_Integrada_de_la_Ciudad_de_M%C3%A9xico.png",
    hours: {
      monFri: "05:00 - 00:30 hrs",
      sat: "05:00 - 00:30 hrs",
      sunFest: "05:00 - 00:30 hrs"
    },
    officialUrl: "https://ecobici.cdmx.gob.mx",
    domainLabel: "ecobici.cdmx.gob.mx"
  },
  {
    id: "interurbano",
    name: "Tren El Insurgente",
    icon: "train",
    mapImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapa_Integrado_del_Sistema_de_Movilidad_Integrada_de_la_Ciudad_de_M%C3%A9xico.png",
    hours: {
      monFri: "06:00 - 23:00 hrs",
      sat: "06:00 - 23:00 hrs",
      sunFest: "06:00 - 23:00 hrs"
    },
    officialUrl: "https://trenelinsurgente.mx",
    domainLabel: "trenelinsurgente.mx"
  },
  {
    id: "suburbano",
    name: "Tren Suburbano",
    icon: "train-front",
    mapImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mapa_Integrado_del_Sistema_de_Movilidad_Integrada_de_la_Ciudad_de_M%C3%A9xico.png",
    hours: {
      monFri: "05:00 - 00:30 hrs",
      sat: "06:00 - 00:30 hrs",
      sunFest: "07:00 - 00:30 hrs"
    },
    officialUrl: "https://fsuburbanos.com",
    domainLabel: "fsuburbanos.com"
  }
];
