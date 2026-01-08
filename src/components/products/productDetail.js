import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    const product = getProductById(id);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    // Si no se encuentra el producto, mostrar un mensaje
    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <section className="surface-0">
            <div className="max-w-screen-xl mx-auto p-5">
                <div className="grid">
                    {/* Imagen */}
                    <div className="col-12 md:col-6">
                        <img src={product.image} alt={product.name} className="w-full border-round-sm" />
                    </div>

                    {/* Información del producto */}
                    <div className="col-12 md:col-6 pl-8">
                        <h1 className="text-8xl font-medium mb-4">
                            {product.name}
                        </h1>

                        <p className="mb-4" style={{ color: "black" }}>
                            <strong>Diseño </strong>
                            <Link to={'/about'} className="hover:underline cursor-pointer" style={{ color: "#555", marginLeft: "0.5rem" }}>
                                {product.designer}
                            </Link>
                        </p>

                        <p className="text-900 mb-4">
                            <strong>Dimensiones:</strong> {product.dimensions}
                        </p>

                        {/* Colores */}
                        <div>
                            <p className="text-900 mb-2">
                                <strong>Acabados:</strong>
                            </p>

                            <div className="flex gap-3 flex-wrap">
                                {product.colors.map(color => (
                                    <button key={color.name} onClick={() => setSelectedColor(color)}
                                        className={`w-2rem h-2rem cursor-pointer border-circle border-none
                      ${selectedColor === color.name ? "border-900" : "border-300"} hover:border-500`}
                                        style={{ backgroundColor: color.hex }}
                                        title={color.name}
                                        aria-label={color.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
