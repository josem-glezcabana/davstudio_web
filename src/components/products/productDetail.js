import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";
import { useState } from "react";

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
                    <div className="col-12 md:col-6">
                        <h1 className="text-3xl text-900 mb-4">
                            {product.name}
                        </h1>

                        <p className="text-700 line-height-3 mb-4">
                            {product.description}
                        </p>

                        <p className="text-900 mb-4">
                            <strong>Dimensiones:</strong> {product.dimensions}
                        </p>

                        {/* Colores */}
                        <div>
                            <p className="text-900 mb-2">
                                <strong>Acabados:</strong>
                            </p>

                            <div className="flex gap-2 flex-wrap">
                                {product.colors.map(color => (
                                    <button key={color} onClick={() => setSelectedColor(color)}
                                        className={`px-3 py-2 border-1 border-round-sm cursor-pointer
                      ${selectedColor === color ? "border-900 text-900" : "border-300 text-700"} hover:border-500`}>
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
