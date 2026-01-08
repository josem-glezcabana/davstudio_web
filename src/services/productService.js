import imageUrbanBloom from "../assets/seats/urban_bloom/Principal.png";
import imageNomad01 from "../assets/seats/nomad_01/02.png";

export const products = [
  {
    id: "urban-bloom",
    name: "URBAN BLOOM",
    description: "Asiento",
    image: imageUrbanBloom,
    dimensions: "115 x 40 x 95 cm",
    colors: ["Naranja", "Amarillo", "Violeta", "Azul", "Rojo"]
  },
  {
    id: "nomad-01",
    name: "NOMAD 01",
    description: "Iluminación cálida con acabados premium.",
    image: imageNomad01,
    dimensions: "60 x 35 x 35 cm",
    colors: ["Madera", "Negro"]
  }
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(product => product.id === id);
}
