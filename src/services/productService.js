import imageUrbanBloom from "../assets/seats/urban_bloom/AXO.png";
import imageNomad01 from "../assets/seats/nomad_01/02.png";

export const products = [
  {
    id: "urban-bloom",
    name: "URBAN BLOOM",
    description: "Lámpara de diseño minimalista para interiores contemporáneos.",
    image: imageUrbanBloom,
    dimensions: "45 x 30 x 30 cm",
    colors: ["Negro", "Blanco", "Gris"]
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
