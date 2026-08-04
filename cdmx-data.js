/**
 * Official SEMOVI CDMX Public Transportation Datasets
 * Fully Mapped CDMX MI Network
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
    geojsonUrl: "https://raw.githubusercontent.com/sc3/cdmx-transit-data/main/metro.geojson",
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "06:00 - 00:00 hrs",
      sunFest: "07:00 - 00:00 hrs"
    },
    officialUrl: "https://metro.cdmx.gob.mx",
    domainLabel: "metro.cdmx.gob.mx",
    lines: [
      { id: "L1", name: "Línea 1 (Observatorio - Pantitlán)", color: "#E2001A" },
      { id: "L2", name: "Línea 2 (Cuatro Caminos - Tasqueña)", color: "#0072CE" },
      { id: "L3", name: "Línea 3 (Indios Verdes - Universidad)", color: "#AF9800" },
      { id: "L4", name: "Línea 4 (Santa Anita - Martín Carrera)", color: "#6EC4B8" },
      { id: "L5", name: "Línea 5 (Pantitlán - Politécnico)", color: "#FED100" },
      { id: "L6", name: "Línea 6 (El Rosario - Martín Carrera)", color: "#E2001A" },
      { id: "L7", name: "Línea 7 (El Rosario - Barranca del Muerto)", color: "#E55302" },
      { id: "L8", name: "Línea 8 (Garibaldi - Garibaldi / Constitución de 1917)", color: "#008037" },
      { id: "L9", name: "Línea 9 (Pantitlán - Tacubaya)", color: "#502800" },
      { id: "LA", name: "Línea A (Pantitlán - La Paz)", color: "#9A1D81" },
      { id: "LB", name: "Línea B (Buenavista - Ciudad Azteca)", color: "#009933" },
      { id: "L12", name: "Línea 12 (Mixcoac - Tláhuac)", color: "#B28247" }
    ],
    stations: [
      { name: "Pino Suárez", coords: [19.4258, -99.1330], transfers: ["Metro L1", "Metro L2"], hasEcobici: true },
      { name: "Hidalgo", coords: [19.4352, -99.1500], transfers: ["Metro L2", "Metro L3", "Metrobús L1", "Metrobús L7"], hasEcobici: true },
      { name: "Pantitlán", coords: [19.4162, -99.0722], transfers: ["Metro L1", "Metro L5", "Metro L9", "Metro LA", "Mexibús L3"], hasEcobici: false },
      { name: "Bellas Artes", coords: [19.4355, -99.1412], transfers: ["Metro L2", "Metro L8"], hasEcobici: true },
      { name: "Tacubaya", coords: [19.4032, -99.1871], transfers: ["Metro L1", "Metro L7", "Metro L9"], hasEcobici: true },
      { name: "Chilpancingo", coords: [19.4061, -99.1685], transfers: ["Metro L9", "Metrobús L1"], hasEcobici: true },
      { name: "Centro Médico", coords: [19.4069, -99.1553], transfers: ["Metro L3", "Metro L9"], hasEcobici: true },
      { name: "Balderas", coords: [19.4274, -99.1491], transfers: ["Metro L1", "Metro L3", "Metrobús L3"], hasEcobici: true },
      { name: "Salto del Agua", coords: [19.4267, -99.1422], transfers: ["Metro L1", "Metro L8"], hasEcobici: true },
      { name: "Chabacano", coords: [19.4084, -99.1357], transfers: ["Metro L2", "Metro L8", "Metro L9"], hasEcobici: false },
      { name: "La Raza", coords: [19.4701, -99.1370], transfers: ["Metro L3", "Metro L5", "Metrobús L1", "Metrobús L3"], hasEcobici: false },
      { name: "Deportivo 18 de Marzo", coords: [19.4837, -99.1262], transfers: ["Metro L3", "Metro L6", "Metrobús L1", "Metrobús L6"], hasEcobici: false },
      { name: "Indios Verdes", coords: [19.4953, -99.1195], transfers: ["Metro L3", "Metrobús L1", "Metrobús L7", "Cablebús L1", "Mexibús L4"], hasEcobici: false },
      { name: "El Rosario", coords: [19.5045, -99.2001], transfers: ["Metro L6", "Metro L7", "Metrobús L6"], hasEcobici: false },
      { name: "Garibaldi", coords: [19.4444, -99.1388], transfers: ["Metro L8", "Metro LB"], hasEcobici: true },
      { name: "Buenavista", coords: [19.4462, -99.1531], transfers: ["Metro LB", "Metrobús L1", "Metrobús L3", "Tren Suburbano"], hasEcobici: true },
      { name: "Tacuba", coords: [19.4595, -99.1872], transfers: ["Metro L2", "Metro L7"], hasEcobici: false },
      { name: "Consulado", coords: [19.4580, -99.1141], transfers: ["Metro L4", "Metro L5"], hasEcobici: false },
      { name: "Morelos", coords: [19.4382, -99.1190], transfers: ["Metro L4", "Metro LB"], hasEcobici: false },
      { name: "Candelaria", coords: [19.4288, -99.1193], transfers: ["Metro L1", "Metro L4"], hasEcobici: false },
      { name: "Jamaica", coords: [19.4086, -99.1221], transfers: ["Metro L4", "Metro L9"], hasEcobici: false },
      { name: "Santa Anita", coords: [19.4028, -99.1217], transfers: ["Metro L4", "Metro L8"], hasEcobici: false },
      { name: "Ermita", coords: [19.3619, -99.1431], transfers: ["Metro L2", "Metro L12"], hasEcobici: false },
      { name: "Zapata", coords: [19.3708, -99.1585], transfers: ["Metro L3", "Metro L12"], hasEcobici: true },
      { name: "Mixcoac", coords: [19.3758, -99.1875], transfers: ["Metro L7", "Metro L12"], hasEcobici: true },
      { name: "Atlantal", coords: [19.3562, -99.1012], transfers: ["Metro L8", "Metro L12"], hasEcobici: false }
    ]
  },
  {
    id: "metrobus",
    name: "Metrobús",
    icon: "bus",
    defaultColor: "#E20613", // Official Red
    geojsonUrl: "https://raw.githubusercontent.com/sc3/cdmx-transit-data/main/metrobus.geojson",
    hours: {
      monFri: "04:30 - 00:00 hrs",
      sat: "04:30 - 00:00 hrs",
      sunFest: "05:00 - 00:00 hrs"
    },
    officialUrl: "https://metrobus.cdmx.gob.mx",
    domainLabel: "metrobus.cdmx.gob.mx",
    lines: [
      { id: "MB1", name: "Línea 1 (Indios Verdes - El Caminero)", color: "#E20613" },
      { id: "MB2", name: "Línea 2 (Tepalcates - Tacubaya)", color: "#A81C51" },
      { id: "MB3", name: "Línea 3 (Tenayuca - Pueblo Santa Cruz Atoyac)", color: "#0072CE" },
      { id: "MB4", name: "Línea 4 (Buenavista - Alameda Oriente / Aeropuerto)", color: "#E55302" },
      { id: "MB5", name: "Línea 5 (Río de los Remedios - Preparatoria 1)", color: "#008037" },
      { id: "MB6", name: "Línea 6 (El Rosario - Villa de Aragón)", color: "#9A1D81" },
      { id: "MB7", name: "Línea 7 (Indios Verdes - Campo Marte)", color: "#00A94F" }
    ],
    stations: [
      { name: "Glorieta de Insurgentes", coords: [19.4258, -99.1611], transfers: ["Metro L1", "Metrobús L1"], hasEcobici: true },
      { name: "Reforma", coords: [19.4320, -99.1580], transfers: ["Metrobús L1", "Metrobús L7"], hasEcobici: true },
      { name: "Hamburgo", coords: [19.4285, -99.1615], transfers: ["Metrobús L1"], hasEcobici: true },
      { name: "Durango", coords: [19.4192, -99.1652], transfers: ["Metrobús L1"], hasEcobici: true },
      { name: "Álvaro Obregón", coords: [19.4141, -99.1658], transfers: ["Metrobús L1"], hasEcobici: true },
      { name: "Sonora", coords: [19.4101, -99.1668], transfers: ["Metrobús L1"], hasEcobici: true },
      { name: "Campeche", coords: [19.4062, -99.1678], transfers: ["Metrobús L1"], hasEcobici: true }
    ]
  },
  {
    id: "tren_ligero",
    name: "Tren Ligero",
    icon: "train-front",
    defaultColor: "#008037",
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "06:00 - 00:00 hrs",
      sunFest: "07:00 - 00:00 hrs"
    },
    officialUrl: "https://ste.cdmx.gob.mx",
    domainLabel: "ste.cdmx.gob.mx",
    lines: [
      { id: "TL1", name: "Tren Ligero (Tasqueña - Xochimilco)", color: "#008037" }
    ],
    stations: [
      { name: "Tasqueña TL", coords: [19.3440, -99.1425], transfers: ["Metro L2", "Trolebús L1"], hasEcobici: false },
      { name: "Las Torres", coords: [19.3361, -99.1415], transfers: [], hasEcobici: false },
      { name: "Ciudad Jardín", coords: [19.3291, -99.1402], transfers: [], hasEcobici: false },
      { name: "La Virgen", coords: [19.3212, -99.1390], transfers: [], hasEcobici: false },
      { name: "Xochimilco", coords: [19.2562, -99.1031], transfers: [], hasEcobici: false }
    ]
  },
  {
    id: "trolebus",
    name: "Trolebús",
    icon: "bus-front",
    defaultColor: "#005A9C",
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "05:00 - 00:00 hrs",
      sunFest: "05:00 - 00:00 hrs"
    },
    officialUrl: "https://ste.cdmx.gob.mx",
    domainLabel: "ste.cdmx.gob.mx",
    lines: [
      { id: "TR1", name: "Línea 1 (Corredor Cero Emisiones Eje Central)", color: "#005A9C" },
      { id: "TR2", name: "Línea 2 (Pantaco - Chapultepec)", color: "#005A9C" },
      { id: "TR3", name: "Línea 3 (San Andrés Tetepilco - Mixcoac)", color: "#005A9C" },
      { id: "TR10", name: "Línea 10 (Trolebús Elevado Constitución de 1917 - Acahualtepec)", color: "#005A9C" }
    ],
    stations: [
      { name: "Bellas Artes Trolebús", coords: [19.4355, -99.1412], transfers: ["Metro L2", "Metro L8"], hasEcobici: true },
      { name: "Constitución de 1917 Trolebús Elevado", coords: [19.3461, -99.0632], transfers: ["Metro L8", "Cablebús L2"], hasEcobici: false }
    ]
  },
  {
    id: "cablebus",
    name: "Cablebús",
    icon: "cable-car",
    defaultColor: "#00A099",
    hours: {
      monFri: "05:00 - 23:00 hrs",
      sat: "06:00 - 23:00 hrs",
      sunFest: "07:00 - 23:00 hrs"
    },
    officialUrl: "https://ste.cdmx.gob.mx",
    domainLabel: "ste.cdmx.gob.mx",
    lines: [
      { id: "CBL1", name: "Línea 1 (Indios Verdes - Cuautepec)", color: "#00A099" },
      { id: "CBL2", name: "Línea 2 (Constitución de 1917 - Santa Marta)", color: "#00A099" },
      { id: "CBL3", name: "Línea 3 (Los Pinos / Metro Constituyentes - Vasco de Quiroga)", color: "#00A099" }
    ],
    stations: [
      { name: "Indios Verdes Cablebús", coords: [19.4953, -99.1195], transfers: ["Metro L3", "Metrobús L1"], hasEcobici: false },
      { name: "Constitución de 1917 Cablebús", coords: [19.3461, -99.0632], transfers: ["Metro L8", "Trolebús L10"], hasEcobici: false },
      { name: "Los Pinos / Constituyentes Cablebús", coords: [19.4112, -99.1912], transfers: ["Metro L7"], hasEcobici: true }
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
      { id: "INS1", name: "El Insurgente (Zinacantepec - Santa Fe - Observatorio)", color: "#2E7D32" }
    ],
    stations: [
      { name: "Santa Fe", coords: [19.3592, -99.2612], transfers: ["RTP"], hasEcobici: false },
      { name: "Observatorio (Conexión Metro)", coords: [19.3982, -99.2001], transfers: ["Metro L1"], hasEcobici: false }
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
      { id: "SUB1", name: "Suburbano 1 (Buenavista - Cuautitlán / AIFA)", color: "#D32F2F" }
    ],
    stations: [
      { name: "Buenavista Suburbano", coords: [19.4462, -99.1531], transfers: ["Metro LB", "Metrobús L1", "Metrobús L3"], hasEcobici: true },
      { name: "Fortuna", coords: [19.4891, -99.1712], transfers: ["Metro L6 (Ferrería)"], hasEcobici: false },
      { name: "Lechería", coords: [19.6012, -99.1821], transfers: ["Mexibús L2"], hasEcobici: false }
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
    lines: [
      { id: "MEX1", name: "Mexibús L1 (Ciudad Azteca - Ojo de Agua)", color: "#7B1FA2" },
      { id: "MEX2", name: "Mexibús L2 (La Quebrada - Las Américas)", color: "#7B1FA2" },
      { id: "MEX3", name: "Mexibús L3 (Chimalhuacán - Pantitlán)", color: "#7B1FA2" },
      { id: "MEX4", name: "Mexibús L4 (Indios Verdes - Tecámac)", color: "#7B1FA2" }
    ],
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
    lines: [
      { id: "MXC1", name: "Mexicable Línea 1 (Santa Clara - La Cañada)", color: "#F57C00" },
      { id: "MXC2", name: "Mexicable Línea 2 (Indios Verdes - Hank González)", color: "#F57C00" }
    ],
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
  { name: "Café Tacuba", category: "Famous Restaurant", coords: [19.4358, -99.1388], icon: "utensils" },
  { name: "Coyoacán Centro", category: "Historic Neighborhood", coords: [19.3497, -99.1625], icon: "map-pin" },
  { name: "Museo Soumaya", category: "Art Museum", coords: [19.4407, -99.2047], icon: "landmark" },
  { name: "Basílica de Guadalupe", category: "Religious Landmark", coords: [19.4846, -99.1176], icon: "landmark" }
];
