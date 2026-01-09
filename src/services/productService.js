import imageUrbanBloom1 from "../assets/seats/urban_bloom/NARANJA/01_AXO.png";
import imageUrbanBloom2 from "../assets/seats/urban_bloom/NARANJA/02_LATERAL.png";
import imageUrbanBloom3 from "../assets/seats/urban_bloom/NARANJA/03_FRONTAL.png";
import imageUrbanBloom4 from "../assets/seats/urban_bloom/NARANJA/04_TRASERA.png";
import imageUrbanBloom5 from "../assets/seats/urban_bloom/DIMENSIONES.jpg";

import imageNomad01 from "../assets/seats/nomad_01/ROSA/01_AXO.png";
import imageNomad02 from "../assets/seats/nomad_01/ROSA/02_ABIERTO.png";
import imageNomad03 from "../assets/seats/nomad_01/ROSA/03_CERRANDOSE.png";
import imageNomad04 from "../assets/seats/nomad_01/ROSA/04_CERRADO.png";
import imageNomad05 from "../assets/seats/nomad_01/ROSA/05_FRONTAL.png";
import imageNomad06 from "../assets/seats/nomad_01/ROSA/06_CENITAL.png";
import imageNomad07 from "../assets/seats/nomad_01/DIMENSIONES_01.jpg";

// Arrays de imaxes para cada produto
const imagesUrbanBloom = [
  imageUrbanBloom1,
  imageUrbanBloom2,
  imageUrbanBloom3,
  imageUrbanBloom4,
  imageUrbanBloom5
];

const imagesNomad01 = [
  imageNomad01,
  imageNomad02,
  imageNomad03,
  imageNomad04,
  imageNomad05,
  imageNomad06,
  imageNomad07
];

// Datos dos produtos
export const products = [
  {
    id: "urban-bloom",
    name: "URBAN BLOOM",
    designer: "David Prol Gómez",
    mainImage: imageUrbanBloom1,
    images: imagesUrbanBloom,
    dimensions: "115 x 40 x 95 cm",
    colors: [
      { name: "Naranja", hex: "#fe9e2e"},
      { name: "Amarillo", hex: "#fff44f"},
      { name: "Violeta", hex: "#8a36d2"},
      { name: "Azul", hex: "#3969be"},
      { name: "Rojo", hex: "#FF0000"}
    ]
  },
  {
    id: "nomad-01",
    name: "NOMAD 01",
    designer: "David Prol Gómez",
    mainImage: imageNomad01,
    images: imagesNomad01,
    dimensions: "35 x 37 cm",
    colors: [
      { name: "Rosa", hex: "#e302a6"},
      { name: "Naranja", hex: "#fe9e2e"},
      { name: "Azul", hex: "#328AF6FF"},
    ]
  }
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(product => product.id === id);
}
