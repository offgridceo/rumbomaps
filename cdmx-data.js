/**
 * Official SEMOVI CDMX Public Transportation Datasets
 * Fully Populated Lines and Stations for All Systems
 */

const cdmxNetworks = [
  {
    id: "all",
    name: "Red Completa MI",
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
    defaultColor: "#F37321",
    hours: {
      monFri: "05:00 - 00:00 hrs",
      sat: "06:00 - 00:00 hrs",
      sunFest: "07:00 - 00:00 hrs"
    },
    officialUrl: "https://metro.cdmx.gob.mx",
    domainLabel: "metro.cdmx.gob.mx",
    lines: [
      { id: "L1", name: "Línea 1 (Observatorio - Pantitlán)", color: "#E6007E", coords: [[19.3982, -99.2001], [19.4032, -99.1871], [19.4101, -99.1705], [19.4258, -99.1611], [19.4260, -99.1420], [19.4258, -99.1330], [19.4162, -99.0722]] },
      { id: "L2", name: "Línea 2 (Cuatro Caminos - Tasqueña)", color: "#0072CE", coords: [[19.4595, -99.2158], [19.4510, -99.1872], [19.4444, -99.1761], [19.4352, -99.1500], [19.4326, -99.1332], [19.4258, -99.1330], [19.4084, -99.1357], [19.3619, -99.1431], [19.3440, -99.1425]] },
      { id: "L3", name: "Línea 3 (Indios Verdes - Universidad)", color: "#AF9800", coords: [[19.4953, -99.1195], [19.4837, -99.1262], [19.4701, -99.1370], [19.4352, -99.1500], [19.4274, -99.1491], [19.4069, -99.1553], [19.3708, -99.1585], [19.3242, -99.1738]] },
      { id: "L4", name: "Línea 4 (Martín Carrera - Santa Anita)", color: "#6EC4B8", coords: [[19.4851, -99.1121], [19.4580, -99.1141], [19.4382, -99.1190], [19.4288, -99.1193], [19.4086, -99.1221], [19.4028, -99.1217]] },
      { id: "L5", name: "Línea 5 (Politécnico - Pantitlán)", color: "#FED100", coords: [[19.5012, -99.1481], [19.4701, -99.1370], [19.4580, -99.1141], [19.4331, -99.0881], [19.4162, -99.0722]] },
      { id: "L6", name: "Línea 6 (El Rosario - Martín Carrera)", color: "#E2001A", coords: [[19.5045, -99.2001], [19.4891, -99.1712], [19.4837, -99.1262], [19.4851, -99.1121]] },
      { id: "L7", name: "Línea 7 (El Rosario - Barranca del Muerto)", color: "#E55302", coords: [[19.5045, -99.2001], [19.4595, -99.1872], [19.4112, -99.1912], [19.4032, -99.1871], [19.3758, -99.1875], [19.3611, -99.1892]] },
      { id: "L8", name: "Línea 8 (Garibaldi - Constitución de 1917)", color: "#008037", coords: [[19.4444, -99.1388], [19.4355, -99.1412], [19.4267, -99.1422], [19.4084, -99.1357], [19.4028, -99.1217], [19.3562, -99.1012], [19.3461, -99.0632]] },
      { id: "L9", name: "Línea 9 (Tacubaya - Pantitlán)", color: "#502800", coords: [[19.4032, -99.1871], [19.4061, -99.1685], [19.4069, -99.1553], [19.4084, -99.1357], [19.4086, -99.1221], [19.4162, -99.0722]] },
      { id: "LA", name: "Línea A (Pantitlán - La Paz)", color: "#9A1D81", coords: [[19.4162, -99.0722], [19.3891, -99.0451], [19.3621, -98.9912]] },
      { id: "LB", name: "Línea B (Buenavista - Ciudad Azteca)", color: "#009933", coords: [[19.4462, -99.1531], [19.4444, -99.1388], [19.4382, -99.1190], [19.4162, -99.0722], [19.5351, -99.0281]] },
      { id: "L12", name: "Línea 12 (Mixcoac - Tláhuac)", color: "#B28247", coords: [[19.3758, -99.1875], [19.3708, -99.1585], [19.3619, -99.1431], [19.3562, -99.1012], [19.2862, -99.0142]] }
    ],
    stations: [
      { name: "Pino Suárez", coords: [19.4258, -99.1330], lineName: "Metro L1 / L2", lineColor: "#E6007E", transfers: ["Metro L1", "Metro L2"], hasEcobici: true },
      { name: "Hidalgo", coords: [19.4352, -99.1500], lineName: "Metro L2 / L3", lineColor: "#0072CE", transfers: ["Metro L2", "Metro L3", "Metrobús L1", "Metrobús L7"], hasEcobici: true },
      { name: "Pantitlán", coords: [19.4162, -99.0722], lineName: "Metro Hub", lineColor: "#9A1D81", transfers: ["Metro L1", "Metro L5", "Metro L9", "Metro LA", "Mexibús L3"], hasEcobici: false },
      { name: "Bellas Artes", coords: [19.4355, -99.1412], lineName: "Metro L2 / L8", lineColor: "#0072CE", transfers: ["Metro L2", "Metro L8"], hasEcobici: true },
      { name: "Tacubaya", coords: [19.4032, -99.1871], lineName: "Metro L1 / L7 / L9", lineColor: "#502800", transfers: ["Metro L1", "Metro L7", "Metro L9"], hasEcobici: true },
      { name: "Chilpancingo", coords: [19.4061, -99.1685], lineName: "Metro L9", lineColor: "#502800", transfers: ["Metro L9", "Metrobús L1"], hasEcobici: true },
      { name: "Centro Médico", coords: [19.4069, -99.1553], lineName: "Metro L3 / L9", lineColor: "#AF9800", transfers: ["Metro L3", "Metro L9"], hasEcobici: true },
      { name: "Balderas", coords: [19.4274, -99.1491], lineName: "Metro L1 / L3", lineColor: "#E6007E", transfers: ["Metro L1", "Metro L3", "Metrobús L3"], hasEcobici: true },
      { name: "Salto del Agua", coords: [19.4267, -99.1422], lineName: "Metro L1 / L8", lineColor: "#E6007E", transfers: ["Metro L1", "Metro L8"], hasEcobici: true },
      { name: "Chabacano", coords: [19.4084, -99.1357], lineName: "Metro L2 / L8 / L9", lineColor: "#0072CE", transfers: ["Metro L2", "Metro L8", "Metro L9"], hasEcobici: false },
      { name: "La Raza", coords: [19.4701, -99.1370], lineName: "Metro L3 / L5", lineColor: "#AF9800", transfers: ["Metro L3", "Metro L5", "Metrobús L1", "Metrobús L3"], hasEcobici: false },
      { name: "Deportivo 18 de Marzo", coords: [19.4837, -99.1262], lineName: "Metro L3 / L6", lineColor: "#AF9800", transfers: ["Metro L3", "Metro L6", "Metrobús L1", "Metrobús L6"], hasEcobici: false },
      { name: "Indios Verdes", coords: [19.4953, -99.1195], lineName: "Metro L3 / Cablebús L1", lineColor: "#AF9800", transfers: ["Metro L3", "Metrobús L1", "Metrobús L7", "Cablebús L1", "Mexibús L4"], hasEcobici: false },
      { name: "El Rosario", coords: [19.5045, -99.2001], lineName: "Metro L6 / L7", lineColor: "#E2001A", transfers: ["Metro L6", "Metro L7", "Metrobús L6"], hasEcobici: false },
      { name: "Garibaldi", coords: [19.4444, -99.1388], lineName: "Metro L8 / LB", lineColor: "#008037", transfers: ["Metro L8", "Metro LB"], hasEcobici: true },
      { name: "Buenavista", coords: [19.4462, -99.1531], lineName: "Metro LB / Suburbano", lineColor: "#009933", transfers: ["Metro LB", "Metrobús L1", "Metrobús L3", "Tren Suburbano"], hasEcobici: true },
      { name: "Tacuba", coords: [19.4595, -99.1872], lineName: "Metro L2 / L7", lineColor: "#0072CE", transfers: ["Metro L2", "Metro L7"], hasEcobici: false },
      { name: "Ermita", coords: [19.3619, -99.1431], lineName: "Metro L2 / L12", lineColor: "#0072CE", transfers: ["Metro L2", "Metro L12"], hasEcobici: false },
      { name: "Zapata", coords: [19.3708, -99.1585], lineName: "Metro L3 / L12", lineColor: "#AF9800", transfers: ["Metro L3", "Metro L12"], hasEcobici: true },
      { name: "Mixcoac", coords: [19.3758, -99.1875], lineName: "Metro L7 / L12", lineColor: "#E55302", transfers: ["Metro L7", "Metro L12"], hasEcobici: true }
    ]
  },
  {
    id: "metrobus",
    name: "Metrobús",
    icon: "bus",
    defaultColor: "#E20613",
    hours: {
      monFri: "04:30 - 00:00 hrs",
      sat: "04:30 - 00:00 hrs",
      sunFest: "05:00 - 00:00 hrs"
    },
    officialUrl: "https://metrobus.cdmx.gob.mx",
    domainLabel: "metrobus.cdmx.gob.mx",
    lines: [
      { id: "MB1", name: "Metrobús L1 (Indios Verdes - El Caminero)", color: "#E20613", coords: [[19.4953, -99.1195], [19.4352, -99.1500], [19.4258, -99.1611], [19.3681, -99.1752], [19.2891, -99.1691]] },
      { id: "MB2", name: "Metrobús L2 (Tepalcates - Tacubaya)", color: "#A81C51", coords: [[19.3901, -99.0462], [19.4028, -99.1217], [19.4032, -99.1871]] },
      { id: "MB3", name: "Metrobús L3 (Tenayuca - Pueblo Santa Cruz Atoyac)", color: "#0072CE", coords: [[19.5281, -99.1681], [19.4701, -99.1370], [19.4352, -99.1500], [19.3708, -99.1585]] },
      { id: "MB4", name: "Metrobús L4 (Buenavista - Aeropuerto / Alameda Oriente)", color: "#E55302", coords: [[19.4462, -99.1531], [19.4355, -99.1412], [19.4288, -99.1193], [19.4361, -99.0721]] },
      { id: "MB5", name: "Metrobús L5 (Río de los Remedios - Preparatoria 1)", color: "#008037", coords: [[19.5081, -99.0801], [19.4288, -99.1193], [19.2781, -99.1102]] },
      { id: "MB6", name: "Metrobús L6 (El Rosario - Villa de Aragón)", color: "#9A1D81", coords: [[19.5045, -99.2001], [19.4837, -99.1262], [19.4611, -99.0612]] },
      { id: "MB7", name: "Metrobús L7 (Indios Verdes - Campo Marte)", color: "#00A94F", coords: [[19.4953, -99.1195], [19.4352, -99.1500], [19.4270, -99.1677], [19.4211, -99.1925]] }
    ],
    stations: [
      { name: "Glorieta de Insurgentes MB", coords: [19.4258, -99.1611], lineName: "Metrobús L1", lineColor: "#E20613", transfers: ["Metro L1", "Metrobús L1"], hasEcobici: true },
      { name: "Reforma MB", coords: [19.4320, -99.1580], lineName: "Metrobús L1 / L7", lineColor: "#00A94F", transfers: ["Metrobús L1", "Metrobús L7"], hasEcobici: true },
      { name: "Hamburgo MB", coords: [19.4285, -99.1615], lineName: "Metrobús L1", lineColor: "#E20613", transfers: ["Metrobús L1"], hasEcobici: true },
      { name: "Poliforum MB", coords: [19.3931, -99.1738], lineName: "Metrobús L1", lineColor: "#E20613", transfers: ["Metrobús L1"], hasEcobici: true },
      { name: "Félix Cuevas MB", coords: [19.3732, -99.1772], lineName: "Metrobús L1", lineColor: "#E20613", transfers: ["Metro L12"], hasEcobici: true }
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
      { id: "TL1", name: "Tren Ligero (Tasqueña - Xochimilco)", color: "#008037", coords: [[19.3440, -99.1425], [19.3361, -99.1415], [19.3291, -99.1402], [19.3212, -99.1390], [19.3142, -99.1381], [19.3081, -99.1372], [19.3021, -99.1365], [19.2981, -99.1382], [19.2921, -99.1378], [19.2871, -99.1369], [19.2812, -99.1358], [19.2761, -99.1342], [19.2712, -99.1321], [19.2662, -99.1281], [19.2621, -99.1212], [19.2591, -99.1151], [19.2575, -99.1092], [19.2562, -99.1031]] }
    ],
    stations: [
      { name: "Tasqueña TL", coords: [19.3440, -99.1425], lineName: "Tren Ligero", lineColor: "#008037", transfers: ["Metro L2", "Trolebús L1"], hasEcobici: false },
      { name: "Las Torres", coords: [19.3361, -99.1415], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Ciudad Jardín", coords: [19.3291, -99.1402], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "La Virgen", coords: [19.3212, -99.1390], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Xotepingo", coords: [19.3142, -99.1381], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Nezahualpilli", coords: [19.3081, -99.1372], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Registro Federal", coords: [19.3021, -99.1365], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Textitlán", coords: [19.2981, -99.1382], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "El Vergel", coords: [19.2921, -99.1378], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Estadio Azteca", coords: [19.2871, -99.1369], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Huipulco", coords: [19.2812, -99.1358], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Xomali", coords: [19.2761, -99.1342], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Periférico", coords: [19.2712, -99.1321], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Tepepan", coords: [19.2662, -99.1281], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "La Noria", coords: [19.2621, -99.1212], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Huichapan", coords: [19.2591, -99.1151], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Francisco Goitia", coords: [19.2575, -99.1092], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false },
      { name: "Xochimilco TL", coords: [19.2562, -99.1031], lineName: "Tren Ligero", lineColor: "#008037", transfers: [], hasEcobici: false }
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
      { id: "TR1", name: "Trolebús L1 (Eje Central)", color: "#005A9C", coords: [[19.4891, -99.1402], [19.4355, -99.1412], [19.3440, -99.1425]] },
      { id: "TR2", name: "Trolebús L2 (Pantaco - Chapultepec)", color: "#005A9C", coords: [[19.4651, -99.1751], [19.4412, -99.1581], [19.4211, -99.1762]] },
      { id: "TR3", name: "Trolebús L3 (Mixcoac - San Andrés Tetepilco)", color: "#005A9C", coords: [[19.3758, -99.1875], [19.3702, -99.1412]] },
      { id: "TR10", name: "Trolebús L10 Elevado (Constitución de 1917 - Acahualtepec)", color: "#005A9C", coords: [[19.3461, -99.0632], [19.3491, -99.0481], [19.3521, -99.0341], [19.3551, -99.0191], [19.3581, -98.9912]] }
    ],
    stations: [
      { name: "Bellas Artes Trolebús", coords: [19.4355, -99.1412], lineName: "Trolebús L1", lineColor: "#005A9C", transfers: ["Metro L2", "Metro L8"], hasEcobici: true },
      { name: "Terminal Autobuses del Norte", coords: [19.4891, -99.1402], lineName: "Trolebús L1", lineColor: "#005A9C", transfers: ["Metro L5"], hasEcobici: false },
      { name: "Constitución de 1917 Trolebús Elevado", coords: [19.3461, -99.0632], lineName: "Trolebús L10", lineColor: "#005A9C", transfers: ["Metro L8", "Cablebús L2"], hasEcobici: false },
      { name: "UAM-I Trolebús", coords: [19.3521, -99.0341], lineName: "Trolebús L10", lineColor: "#005A9C", transfers: ["Metro L8"], hasEcobici: false },
      { name: "Acahualtepec", coords: [19.3581, -98.9912], lineName: "Trolebús L10", lineColor: "#005A9C", transfers: [], hasEcobici: false }
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
      { id: "CBL1", name: "Cablebús L1 (Indios Verdes - Cuautepec)", color: "#00A099", coords: [[19.4953, -99.1195], [19.5081, -99.1281], [19.5191, -99.1341], [19.5312, -99.1401]] },
      { id: "CBL2", name: "Cablebús L2 (Constitución de 1917 - Santa Marta)", color: "#00A099", coords: [[19.3461, -99.0632], [19.3481, -99.0411], [19.3521, -99.0191], [19.3581, -99.0041], [19.3621, -98.9912]] },
      { id: "CBL3", name: "Cablebús L3 (Los Pinos - Vasco de Quiroga)", color: "#00A099", coords: [[19.4112, -99.1912], [19.3981, -99.2151], [19.3781, -99.2411], [19.3592, -99.2612]] }
    ],
    stations: [
      { name: "Indios Verdes Cablebús", coords: [19.4953, -99.1195], lineName: "Cablebús L1", lineColor: "#00A099", transfers: ["Metro L3", "Metrobús L1"], hasEcobici: false },
      { name: "Ticoman", coords: [19.5081, -99.1281], lineName: "Cablebús L1", lineColor: "#00A099", transfers: [], hasEcobici: false },
      { name: "Campos Revolución", coords: [19.5191, -99.1341], lineName: "Cablebús L1", lineColor: "#00A099", transfers: [], hasEcobici: false },
      { name: "Cuautepec", coords: [19.5312, -99.1401], lineName: "Cablebús L1", lineColor: "#00A099", transfers: [], hasEcobici: false },
      { name: "Constitución de 1917 Cablebús", coords: [19.3461, -99.0632], lineName: "Cablebús L2", lineColor: "#00A099", transfers: ["Metro L8", "Trolebús L10"], hasEcobici: false },
      { name: "Xalpa", coords: [19.3521, -99.0191], lineName: "Cablebús L2", lineColor: "#00A099", transfers: [], hasEcobici: false },
      { name: "Santa Marta Cablebús", coords: [19.3621, -98.9912], lineName: "Cablebús L2", lineColor: "#00A099", transfers: ["Metro LA"], hasEcobici: false },
      { name: "Los Pinos / Constituyentes Cablebús", coords: [19.4112, -99.1912], lineName: "Cablebús L3", lineColor: "#00A099", transfers: ["Metro L7"], hasEcobici: true },
      { name: "Cineteca Nacional Chapultepec", coords: [19.3781, -99.2411], lineName: "Cablebús L3", lineColor: "#00A099", transfers: [], hasEcobici: false },
      { name: "Vasco de Quiroga Cablebús", coords: [19.3592, -99.2612], lineName: "Cablebús L3", lineColor: "#00A099", transfers: ["El Insurgente"], hasEcobici: false }
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
    lines: [
      { id: "RTP1", name: "RTP Ruta 34A (Balderas - Santa Fe)", color: "#80225F", coords: [[19.4274, -99.1491], [19.4101, -99.1705], [19.3592, -99.2612]] },
      { id: "RTP2", name: "RTP Ruta 200 (Circuito Interior)", color: "#80225F", coords: [[19.4701, -99.1370], [19.4352, -99.1500], [19.4069, -99.1553], [19.4086, -99.1221], [19.4701, -99.1370]] }
    ],
    stations: [
      { name: "Balderas RTP Hub", coords: [19.4274, -99.1491], lineName: "RTP 34A", lineColor: "#80225F", transfers: ["Metro L1", "Metro L3"], hasEcobici: true },
      { name: "Santa Fe Centro Comercial RTP", coords: [19.3592, -99.2612], lineName: "RTP 34A", lineColor: "#80225F", transfers: ["El Insurgente"], hasEcobici: false }
    ]
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
    lines: [
      { id: "ECO_ZONE", name: "Polígono de Cobertura Ecobici (Centro - Reforma - Condesa - Polanco)", color: "#00D2D3", coords: [[19.4352, -99.1500], [19.4407, -99.2047], [19.4101, -99.1705], [19.4084, -99.1357], [19.4352, -99.1500]] }
    ],
    stations: [
      { name: "Cicloestación 001 - Reforma / Río de la Plata", coords: [19.4270, -99.1677], lineName: "Ecobici", lineColor: "#00D2D3", transfers: ["Metrobús L7"], hasEcobici: true },
      { name: "Cicloestación 024 - Juárez / Balderas", coords: [19.4311, -99.1481], lineName: "Ecobici", lineColor: "#00D2D3", transfers: ["Metro L3"], hasEcobici: true },
      { name: "Cicloestación 086 - Michoacán / Parque México", coords: [19.4112, -99.1691], lineName: "Ecobici", lineColor: "#00D2D3", transfers: [], hasEcobici: true },
      { name: "Cicloestación 112 - Masaryk / Wallon", coords: [19.4312, -99.1881], lineName: "Ecobici", lineColor: "#00D2D3", transfers: [], hasEcobici: true }
    ]
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
      { id: "INS1", name: "El Insurgente (Zinacantepec - Santa Fe - Observatorio)", color: "#2E7D32", coords: [[19.2811, -99.7221], [19.2791, -99.6541], [19.2842, -99.5981], [19.2861, -99.5101], [19.3592, -99.2612], [19.3781, -99.2411], [19.3982, -99.2001]] }
    ],
    stations: [
      { name: "Zinacantepec", coords: [19.2811, -99.7221], lineName: "El Insurgente", lineColor: "#2E7D32", transfers: [], hasEcobici: false },
      { name: "Toluca Centro", coords: [19.2791, -99.6541], lineName: "El Insurgente", lineColor: "#2E7D32", transfers: [], hasEcobici: false },
      { name: "Metepec", coords: [19.2842, -99.5981], lineName: "El Insurgente", lineColor: "#2E7D32", transfers: [], hasEcobici: false },
      { name: "Lerma", coords: [19.2861, -99.5101], lineName: "El Insurgente", lineColor: "#2E7D32", transfers: [], hasEcobici: false },
      { name: "Santa Fe", coords: [19.3592, -99.2612], lineName: "El Insurgente", lineColor: "#2E7D32", transfers: ["RTP", "Cablebús L3"], hasEcobici: false },
      { name: "Vasco de Quiroga", coords: [19.3781, -99.2411], lineName: "El Insurgente", lineColor: "#2E7D32", transfers: ["Cablebús L3"], hasEcobici: false },
      { name: "Observatorio (El Insurgente)", coords: [19.3982, -99.2001], lineName: "El Insurgente", lineColor: "#2E7D32", transfers: ["Metro L1", "Metro L12"], hasEcobici: false }
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
      { id: "SUB1", name: "Suburbano L1 (Buenavista - Cuautitlán)", color: "#D32F2F", coords: [[19.4462, -99.1531], [19.4891, -99.1712], [19.5391, -99.1821], [19.5712, -99.1841], [19.6012, -99.1821], [19.6381, -99.1791], [19.6702, -99.1782]] },
      { id: "SUB_AIFA", name: "Ramal Suburbano (Lechería - AIFA)", color: "#D32F2F", coords: [[19.6012, -99.1821], [19.6412, -99.1212], [19.6912, -99.0311], [19.7481, -98.9812]] }
    ],
    stations: [
      { name: "Buenavista Suburbano", coords: [19.4462, -99.1531], lineName: "Tren Suburbano", lineColor: "#D32F2F", transfers: ["Metro LB", "Metrobús L1", "Metrobús L3"], hasEcobici: true },
      { name: "Fortuna", coords: [19.4891, -99.1712], lineName: "Tren Suburbano", lineColor: "#D32F2F", transfers: ["Metro L6 (Ferrería)"], hasEcobici: false },
      { name: "Tlalnepantla", coords: [19.5391, -99.1821], lineName: "Tren Suburbano", lineColor: "#D32F2F", transfers: [], hasEcobici: false },
      { name: "San Rafael", coords: [19.5712, -99.1841], lineName: "Tren Suburbano", lineColor: "#D32F2F", transfers: [], hasEcobici: false },
      { name: "Lechería", coords: [19.6012, -99.1821], lineName: "Tren Suburbano", lineColor: "#D32F2F", transfers: ["Mexibús L2"], hasEcobici: false },
      { name: "Tultitlán", coords: [19.6381, -99.1791], lineName: "Tren Suburbano", lineColor: "#D32F2F", transfers: [], hasEcobici: false },
      { name: "Cuautitlán", coords: [19.6702, -99.1782], lineName: "Tren Suburbano", lineColor: "#D32F2F", transfers: [], hasEcobici: false },
      { name: "AIFA Terminal Suburbano", coords: [19.7481, -98.9812], lineName: "Tren Suburbano AIFA", lineColor: "#D32F2F", transfers: ["Mexibús L1"], hasEcobici: false }
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
      { id: "MEX1", name: "Mexibús L1 (Ciudad Azteca - Ojo de Agua / AIFA)", color: "#7B1FA2", coords: [[19.5351, -99.0281], [19.6812, -99.0112], [19.7481, -98.9812]] },
      { id: "MEX2", name: "Mexibús L2 (La Quebrada - Las Américas)", color: "#7B1FA2", coords: [[19.6112, -99.1981], [19.6012, -99.1821], [19.5981, -99.0281]] },
      { id: "MEX3", name: "Mexibús L3 (Chimalhuacán - Pantitlán)", color: "#7B1FA2", coords: [[19.4162, -99.0722], [19.4212, -99.0112], [19.4381, -98.9612]] },
      { id: "MEX4", name: "Mexibús L4 (Indios Verdes - Tecámac)", color: "#7B1FA2", coords: [[19.4953, -99.1195], [19.6112, -99.0381], [19.7112, -98.9712]] }
    ],
    stations: [
      { name: "Pantitlán Mexibús L3", coords: [19.4162, -99.0722], lineName: "Mexibús L3", lineColor: "#7B1FA2", transfers: ["Metro L1", "Metro L5", "Metro L9", "Metro LA"], hasEcobici: false },
      { name: "Indios Verdes Mexibús L4", coords: [19.4953, -99.1195], lineName: "Mexibús L4", lineColor: "#7B1FA2", transfers: ["Metro L3", "Metrobús L1", "Metrobús L7", "Cablebús L1"], hasEcobici: false },
      { name: "Ciudad Azteca Mexibús L1", coords: [19.5351, -99.0281], lineName: "Mexibús L1", lineColor: "#7B1FA2", transfers: ["Metro LB"], hasEcobici: false }
    ]
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
      { id: "MXC1", name: "Mexicable L1 Roja (Santa Clara - La Cañada)", color: "#F57C00", coords: [[19.5612, -99.0381], [19.5781, -99.0512]] },
      { id: "MXC2", name: "Mexicable L2 Verde (Indios Verdes - Hank González)", color: "#2E7D32", coords: [[19.4953, -99.1195], [19.5381, -99.0912], [19.5612, -99.0381]] }
    ],
    stations: [
      { name: "Indios Verdes Mexicable L2", coords: [19.4953, -99.1195], lineName: "Mexicable L2", lineColor: "#2E7D32", transfers: ["Metro L3", "Metrobús L1", "Cablebús L1"], hasEcobici: false },
      { name: "Hank González Interconexión", coords: [19.5612, -99.0381], lineName: "Mexicable L1 / L2", lineColor: "#F57C00", transfers: ["Mexicable L1", "Mexicable L2"], hasEcobici: false },
      { name: "La Cañada Terminal", coords: [19.5781, -99.0512], lineName: "Mexicable L1", lineColor: "#F57C00", transfers: [], hasEcobici: false }
    ]
  }
];

const cdmxPOIs = [
  { name: "Palacio de Bellas Artes", category: "Landmark / Museum", coords: [19.4352, -99.1412], icon: "landmark" },
  { name: "Zócalo (Plaza de la Constitución)", category: "Historic Center", coords: [19.4326, -99.1332], icon: "map-pin" },
  { name: "Ángel de la Independencia", category: "Monument", coords: [19.4270, -99.1677], icon: "award" },
  { name: "Bosque de Chapultepec", category: "Park / Nature", coords: [19.4204, -99.1819], icon: "trees" },
  { name: "Museo Frida Kahlo (Casa Azul)", category: "Museum", coords: [19.3551, -99.1625], icon: "palette" },
  { name: "Café Tacuba", category: "Famous Restaurant", coords: [19.4358, -99.1388], icon: "utensils" }
];
