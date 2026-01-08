import imageUrbanBloom from "../assets/seats/urban_bloom/Principal.png";
import imageNomad01 from "../assets/seats/nomad_01/02.png";

export const products = [
  {
    id: "urban-bloom",
    name: "URBAN BLOOM",
    product_group: "Asiento",
    image: imageUrbanBloom,
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
    product_group: "Iluminación cálida con acabados premium.",
    image: imageNomad01,
    dimensions: "60 x 35 x 35 cm",
    colors: [
      { name: "Rosa", hex: "#e302a6"},
      { name: "Naranja", hex: "#fe9e2e"},
      { name: "Azul", hex: "#3969be"},
    ]
  }
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(product => product.id === id);
}
