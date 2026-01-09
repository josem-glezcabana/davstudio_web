import imageUrbanBloom1 from "../assets/seats/urban_bloom/Principal.png";
import imageUrbanBloom2 from "../assets/seats/urban_bloom/FRONTAL.png";
import imageUrbanBloom3 from "../assets/seats/urban_bloom/LATERAL.png";
import imageUrbanBloom4 from "../assets/seats/urban_bloom/TRASERA.png";
import imageUrbanBloom6 from "../assets/seats/urban_bloom/DIMENSIONES_page-0001.jpg";

import imageNomad01 from "../assets/seats/nomad_01/02.png";
import imageNomad02 from "../assets/seats/nomad_01/01.png";
import imageNomad03 from "../assets/seats/nomad_01/03.png";
import imageNomad04 from "../assets/seats/nomad_01/04.png";
import imageNomad05 from "../assets/seats/nomad_01/05.png";
import imageNomad06 from "../assets/seats/nomad_01/DIMENSIONES_01_page-0001.jpg";

const imagesUrbanBloom = [
  imageUrbanBloom1,
  imageUrbanBloom2,
  imageUrbanBloom3,
  imageUrbanBloom4,
  imageUrbanBloom6
];

const imagesNomad01 = [
  imageNomad01,
  imageNomad03,
  imageNomad02,
  imageNomad04,
  imageNomad05,
  imageNomad06
];

export const products = [
  {
    id: "urban-bloom",
    name: "URBAN BLOOM",
    designer: "David Prol Gómez",
    image: imageUrbanBloom1,
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
    image: imageNomad01,
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
