// Datos (Mock) dos produtos
export const products = [
  {
    id: "urban-bloom",
    name: "URBAN BLOOM",
    designer: "David Prol Gómez",
    mainImage: "/seats/urban_bloom/NARANJA/01_AXO.png",

    // * Estrutura para imaxes por colores
    imageBasePath: "/seats/urban_bloom",
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
    mainImage: "/seats/nomad_01/ROSA/01_AXO.png",

    // * Estrutura para imaxes por colores
    imageBasePath: "/seats/nomad_01",
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
