export const products = [
  {
    id: "asiento-01",
    name: "URBAN BLOOM",
    description: "Lámpara de diseño minimalista para interiores contemporáneos.",
    // image: "/assets/images/products/lamp-01.jpg",
    dimensions: "45 x 30 x 30 cm",
    colors: ["Negro", "Blanco", "Gris"]
  },
  {
    id: "asiento-02",
    name: "NOMAD 01",
    description: "Iluminación cálida con acabados premium.",
    // image: "/assets/images/products/lamp-02.jpg",
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
