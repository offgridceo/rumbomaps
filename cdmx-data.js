/**
 * Official SEMOVI CDMX Public Transportation Datasets
 * Includes: Metro, Metrobús, Tren Ligero, Trolebús, Cablebús, RTP, Ecobici, Tren Interurbano, Suburbanos, Mexibús & Mexicable.
 */

const cdmxNetworks = [
  {
    id: "all",
    name: "Red Completa",
    icon: "layers",
    defaultColor: "#ff5e57",
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
    defaultColor: "#F37321", // Official Orange
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "06:00 - 00:00 hrs",
      sunFest: "07:00 - 00:00 hrs"
    },
    officialUrl: "https://metro.cdmx.gob.mx",
    domainLabel: "metro.cdmx.gob.mx",
    lines: [
      {
        id: "L1",
        name: "Línea 1 (Observatorio - Pantitlán)",
        color: "#E2001A",
        coords: [
          [19.3982, -99.2001], [19.4032, -99.1871], [19.4101, -99.1705],
          [19.4258, -99.1611], [19.4260, -99.1420], [19.4258, -99.1330], [19.4162, -99.0722]
        ]
      },
      {
        id: "L2",
        name: "Línea 2 (Cuatro Caminos - Tasqueña)",
        color: "#0072CE",
        coords: [
          [19.4595, -99.2158], [19.4444, -99.1761], [19.4352, -99.1500],
          [19.4326, -99.1332], [19.4180, -99.1350], [19.3440, -99.1425]
        ]
      },
      {
        id: "L3",
        name: "Línea 3 (Indios Verdes - Universidad)",
        color: "#AF9800",
        coords: [
          [19.4953, -99.1195], [19.4701, -99.1210], [19.4352, -99.1500],
          [19.4101, -99.1580], [19.3242, -99.1738]
        ]
      }
    ],
    stations: [
      { name: "Pino Suárez", coords: [19.4258, -99.1330], transfers: ["Metro L1", "Metro L2"], hasEcobici: true },
      { name: "Hidalgo", coords: [19.4352, -99.1500], transfers: ["Metro L2", "Metro L3", "Metrobús L1", "Metrobús L7"], hasEcobici: true },
      { name: "Pantitlán", coords: [19.4162, -99.0722], transfers: ["Metro L1", "Metro L5", "Metro L9", "Metro LA", "Mexibús L3"], hasEcobici: false },
      { name: "Bellas Artes", coords: [19.4355, -99.1412], transfers: ["Metro L2", "Metro L8"], hasEcobici: true },
      { name: "Tasqueña", coords: [19.3440, -99.1425], transfers: ["Tren Ligero L1", "Trolebús L1"], hasEcobici: false }
    ]
  },
  {
    id: "metrobus",
    name: "Metrobús",
    icon: "bus",
    defaultColor: "#E20613", // Official Red
    hours: {
      monFri: "04:30 - 00:00 hrs",
      sat: "04:30 - 00:00 hrs",
      sunFest: "05:00 - 00:00 hrs"
    },
    officialUrl: "https://metrobus.cdmx.gob.mx",
    domainLabel: "metrobus.cdmx.gob.mx",
    lines: [
      {
        id: "MB1",
        name: "Metrobús Línea 1 (El Rosario - El Caminero)",
        color: "#E20613",
        coords: [
          [19.5045, -99.1178], [19.4352, -99.1500], [19.4182, -99.1633], [19.2891, -99.1691]
        ]
      },
      {
        id: "MB7",
        name: "Metrobús Línea 7 (Indios Verdes - Campo Marte)",
        color: "#00A94F",
        coords: [
          [19.4953, -99.1195], [19.4352, -99.1500], [19.4258, -99.1611], [19.4211, -99.1925]
        ]
      }
    ],
    stations: [
      { name: "Glorieta de Insurgentes", coords: [19.4258, -99.1611], transfers: ["Metro L1", "Metrobús L1"], hasEcobici: true },
      { name: "Reforma", coords: [19.4320, -99.1580], transfers: ["Metrobús L1", "Metrobús L7"], hasEcobici: true }
    ]
  },
  {
    id: "tren_ligero",
    name: "Tren Ligero",
    icon: "train-front",
    defaultColor: "#008037", // Official Green
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "06:00 - 00:00 hrs",
      sunFest: "07:00 - 00:00 hrs"
    },
    officialUrl: "https://ste.cdmx.gob.mx",
    domainLabel: "ste.cdmx.gob.mx",
    lines: [
      {
        id: "TL1",
        name: "Tren Ligero (Tasqueña - Xochimilco)",
        color: "#008037",
        coords: [
          [19.3440, -99.1425], [19.2981, -99.1382], [19.2562, -99.1031]
        ]
      }
    ],
    stations: [
      { name: "Tasqueña TL", coords: [19.3440, -99.1425], transfers: ["Metro L2"], hasEcobici: false },
      { name: "Xochimilco", coords: [19.2562, -99.1031], transfers: [], hasEcobici: false }
    ]
  },
  {
    id: "trolebus",
    name: "Trolebús",
    icon: "bus-front",
    defaultColor: "#005A9C", // Official Blue
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "05:00 - 00:00 hrs",
      sunFest: "05:00 - 00:00 hrs"
    },
    officialUrl: "https://ste.cdmx.gob.mx",
    domainLabel: "ste.cdmx.gob.mx",
    lines: [
      {
        id: "TR1",
        name: "Trolebús L1 (Eje Central)",
        color: "#005A9C",
        coords: [
          [19.4891, -99.1402], [19.4355, -99.1412], [19.3440, -99.1425]
        ]
      }
    ],
    stations: [
      { name: "Bellas Artes Trolebús", coords: [19.4355, -99.1412], transfers: ["Metro L2", "Metro L8"], hasEcobici: true }
    ]
  },
  {
    id: "cablebus",
    name: "Cablebús",
    icon: "cable-car",
    defaultColor: "#00A099", // Official Teal
    hours: {
      monFri: "05:00 - 23:00 hrs",
      sat: "06:00 - 23:00 hrs",
      sunFest: "07:00 - 23:00 hrs"
    },
    officialUrl: "https://ste.cdmx.gob.mx",
    domainLabel: "ste.cdmx.gob.mx",
    lines: [
      {
        id: "CBL1",
        name: "Cablebús Línea 1 (Indios Verdes - Cuautepec)",
        color: "#00A099",
        coords: [
          [19.4953, -99.1195], [19.5312, -99.1401]
        ]
      }
    ],
    stations: [
      { name: "Indios Verdes Cablebús", coords: [19.4953, -99.1195], transfers: ["Metro L3", "Metrobús L1"], hasEcobici: false }
    ]
  },
  {
    id: "rtp",
    name: "RTP CDMX",
    icon: "bus",
    defaultColor: "#80225F",
    hours: {
      monFri: "05:00 - 23:00 hrs",
      sat: "05:00 - 23:00 hrs",
      sunFest: "06:00 - 23:00 hrs"
    },
    officialUrl: "https://rtp.cdmx.gob.mx",
    domainLabel: "rtp.cdmx.gob.mx",
    lines: [],
    stations: []
  },
  {
    id: "ecobici",
    name: "Ecobici",
    icon: "bike",
    defaultColor: "#00D2D3",
    hours: {
      monFri: "05:00 - 00:30 hrs",
      sat: "05:00 - 00:30 hrs",
      sunFest: "05:00 - 00:30 hrs"
    },
    officialUrl: "https://ecobici.cdmx.gob.mx",
    domainLabel: "ecobici.cdmx.gob.mx",
    lines: [],
    stations: []
  },
  {
    id: "interurbano",
    name: "Tren El Insurgente",
    icon: "train",
    defaultColor: "#2E7D32",
    hours: {
      monFri: "06:00 - 23:00 hrs",
      sat: "06:00 - 23:00 hrs",
      sunFest: "06:00 - 23:00 hrs"
    },
    officialUrl: "https://trenelinsurgente.mx",
    domainLabel: "trenelinsurgente.mx",
    lines: [
      {
        id: "INS1",
        name: "El Insurgente (Zinacantepec - Lerma / Santa Fe)",
        color: "#2E7D32",
        coords: [
          [19.2811, -99.7221], [19.2842, -99.5101], [19.3592, -99.2612]
        ]
      }
    ],
    stations: [
      { name: "Santa Fe", coords: [19.3592, -99.2612], transfers: ["RTP"], hasEcobici: false }
    ]
  },
  {
    id: "suburbano",
    name: "Tren Suburbano",
    icon: "train-front",
    defaultColor: "#D32F2F",
    hours: {
      monFri: "05:00 - 00:30 hrs",
      sat: "06:00 - 00:30 hrs",
      sunFest: "07:00 - 00:30 hrs"
    },
    officialUrl: "https://fsuburbanos.com",
    domainLabel: "fsuburbanos.com",
    lines: [
      {
        id: "SUB1",
        name: "Suburbano (Buenavista - Cuautitlán)",
        color: "#D32F2F",
        coords: [
          [19.4462, -99.1531], [19.6702, -99.1782]
        ]
      }
    ],
    stations: [
      { name: "Buenavista Suburbano", coords: [19.4462, -99.1531], transfers: ["Metro LB", "Metrobús L1", "Metrobús L3"], hasEcobici: true }
    ]
  },
  {
    id: "mexibus",
    name: "Mexibús",
    icon: "bus",
    defaultColor: "#7B1FA2",
    hours: {
      monFri: "04:30 - 00:00 hrs",
      sat: "04:30 - 00:00 hrs",
      sunFest: "05:00 - 00:00 hrs"
    },
    officialUrl: "https://sitramytem.edomex.gob.mx",
    domainLabel: "sitramytem.edomex.gob.mx",
    lines: [],
    stations: []
  },
  {
    id: "mexicable",
    name: "Mexicable",
    icon: "cable-car",
    defaultColor: "#F57C00",
    hours: {
      monFri: "05:00 - 23:00 hrs",
      sat: "06:00 - 23:00 hrs",
      sunFest: "07:00 - 23:00 hrs"
    },
    officialUrl: "https://sitramytem.edomex.gob.mx",
    domainLabel: "sitramytem.edomex.gob.mx",
    lines: [],
    stations: []
  }
];

// Key POIs aligned with Google Maps
const cdmxPOIs = [
  { name: "Palacio de Bellas Artes", category: "Landmark / Museum", coords: [19.4352, -99.1412], icon: "landmark" },
  { name: "Zócalo (Plaza de la Constitución)", category: "Historic Center", coords: [19.4326, -99.1332], icon: "map-pin" },
  { name: "Ángel de la Independencia", category: "Monument", coords: [19.4270, -99.1677], icon: "award" },
  { name: "Bosque de Chapultepec", category: "Park / Nature", coords: [19.4204, -99.1819], icon: "trees" },
  { name: "Museo Frida Kahlo (Casa Azul)", category: "Museum", coords: [19.3551, -99.1625], icon: "palette" },
  { name: "Café Tacuba", category: "Famous Restaurant", coords: [19.4358, -99.1388], icon: "utensils" }
];
