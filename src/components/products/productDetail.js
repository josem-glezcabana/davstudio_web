import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productService";
import { useState } from "react";
import { Link } from "react-router-dom";
// galeria de imaxes
import { Galleria } from 'primereact/galleria';

export default function ProductDetail() {
    const { id } = useParams();
    const product = getProductById(id);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    // Si non se encontra o produto, mostrar un mensaxe
    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    // Opciones responsivas para a galería de imaxes
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    // Plantilla para a imaxe principal da galería
    const itemTemplate = (item) => {
        return (
            <img
                src={item}
                alt={product.name}
                className="w-full border-round-sm"
            />
        );
    };

    // Plantilla para as miniaturas da galería
    const thumbnailTemplate = (item) => {
        return (
            <img
                src={item}
                alt={product.name}
                className="w-full border-round-sm"
            />
        );
    };

    return (
        <section className="surface-0">
            <div className="max-w-screen-xl mx-auto p-5">
                <div className="grid">
                    {/* Galería de imaxes */}
                    <div className="col-12 md:col-6">
                        <Galleria value={product.images}
                            responsiveOptions={responsiveOptions}
                            numVisible={5}
                            circular
                            showItemNavigators
                            showThumbnails
                            item={itemTemplate}
                            thumbnail={thumbnailTemplate}
                            className="border-none"
                        />
                    </div>

                    {/* Información do produto */}
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
                    {/* TODO: descripción tocha coas fotos chulas */}

                </div>
            </div>
        </section>
    );
}
