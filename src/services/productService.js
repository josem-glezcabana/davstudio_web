// Datos (Mock) dos produtos
export const products = [
  {
    id: "urban-bloom",
    name: "URBAN BLOOM",
    designer: "David Prol Gómez",
    mainImage: "/assets/seats/urban_bloom/NARANJA/01_AXO.png",
    longDescription: [
      "Urban Bloom es un asiento urbano que nace del encuentro entre funcionalidad, pausa y ciudad.",
      "Su silueta vertical y contenida se eleva con naturalidad en el espacio público, invitando a detenerse, sentarse y habitar el entorno desde otra velocidad.",
      "Diseñado con una ergonomía intuitiva, Urban Bloom ofrece apoyo en los puntos justos: un asiento cómodo que libera tensión, una superficie auxiliar que acompaña el gesto de leer, apoyar o trabajar brevemente, y una altura pensada para favorecer una postura relajada pero activa.",
      "Todo en él está pensado para el cuerpo en movimiento, para el uso cotidiano y espontáneo.",
      "Su geometría clara y amable dialoga con el paisaje urbano sin imponerse, aportando color, identidad y una sensación de orden sereno.",
      "Urban Bloom transforma rincones de paso en pequeños oasis de descanso, donde la ciudad se vuelve más humana y cercana. Robusto, versátil y atemporal, este asiento no solo cumple una función práctica: crea una experiencia. Un lugar donde florece el descanso urbano, la concentración breve y el placer de sentarse un momento más."
    ],

    // * Estrutura para imaxes por colores
    imageBasePath: "/assets/seats/urban_bloom",
    imageFiles: [
      "01_AXO.png",
      "02_LATERAL.png",
      "03_FRONTAL.png",
      "04_TRASERA.png",
    ],
    
    dimensionsImage: "DIMENSIONES.jpg",
    dimensions: "115 x 40 x 95 cm",
    colors: [
      { name: "Naranja", folder: "NARANJA", hex: "#fe9e2e"},
      { name: "Amarillo", folder: "AMARILLO", hex: "#fff44f"},
      { name: "Violeta", folder: "VIOLETA", hex: "#8a36d2"},
      { name: "Azul", folder: "AZUL", hex: "#3969be"},
      { name: "Rojo", folder: "ROJO", hex: "#FF0000"}
    ]
  },
  {
    id: "nomad-01",
    name: "NOMAD 01",
    designer: "David Prol Gómez",
    mainImage: "/assets/seats/nomad_01/ROSA/01_AXO.png",

    longDescription: [
      "Nomad 01 es más que un asiento: es un compañero de viaje, una extensión de tu estilo de vida dinámico.",
      "Diseñado para moverse contigo, se cuelga al hombro con naturalidad y te acompaña allá donde vayas, listo para desplegarse en cualquier momento de pausa, contemplación o encuentro.",
      "Su estructura ligera pero resistente combina diseño ergonómico con una estética audaz.",
      "Las curvas envolventes y los detalles en madera natural ofrecen una experiencia de confort intuitivo, mientras que su forma escultórica lo convierte en una pieza que no pasa desapercibida.",
      "Ideal para festivales, parques, terrazas urbanas o interiores creativos, Nomad 01 se adapta a cada entorno con soltura.",
      "Su presencia colorida y su funcionalidad nómada invitan a redescubrir el acto de sentarse como un gesto libre, espontáneo y lleno de intención.",
      "Con Nomad 01, el asiento va contigo. Tú decides dónde empieza el descanso."
    ],

    // * Estrutura para imaxes por colores
    imageBasePath: "/assets/seats/nomad_01",
    imageFiles: [
      "01_AXO.png",
      "02_ABIERTO.png",
      "03_ABRIENDOSE.png",
      "04_CERRADO.png",
      "05_FRONTAL.png",
      "06_CENITAL.png",
    ],

    dimensionsImage: "DIMENSIONES.jpg",
    dimensions: "35 x 37 cm",
    colors: [
      { name: "Rosa", folder: "ROSA", hex: "#e302a6"},
      { name: "Naranja", folder: "NARANJA", hex: "#fe9e2e"},
      { name: "Azul", folder: "AZUL", hex: "#328AF6FF"},
    ]
  }
];

// Funcións para obter os produtos
export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(product => product.id === id);
}
