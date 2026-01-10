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

    // Crear a lista de imaxes para a galería segundo a cor seleccionada
    const galleryImages = product.imageFiles.map(file => ({
        itemImageSrc: `${product.imageBasePath}/${selectedColor.folder}/${file}`,
        thumbnailImageSrc: `${product.imageBasePath}/${selectedColor.folder}/${file}`,
        alt: product.name
    }));

    // Ruta da imaxe de dimensións
    const dimensionsImage = `${product.imageBasePath}/${product.dimensionsImage}`;

    // Agregar a imaxe de dimensións ao final da galería
    galleryImages.push({
        itemImageSrc: dimensionsImage,
        thumbnailImageSrc: dimensionsImage,
        alt: "Dimensiones"
    });

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
                src={item.itemImageSrc}
                alt={product.name}
                className="w-full border-round-sm"
            />
        );
    };

    // Plantilla para as miniaturas da galería
    const thumbnailTemplate = (item) => {
        return (
            <img
                src={item.thumbnailImageSrc}
                alt={product.name}
                className="w-full border-round-sm"
            />
        );
    };

    return (
        <section className="surface-0">
            <div className="max-w-screen-xl mx-auto p-5">
                <div className="grid pb-8">
                    {/* Galería de imaxes */}
                    <div className="col-12 md:col-6">
                        <Galleria value={galleryImages}
                            responsiveOptions={responsiveOptions}
                            numVisible={5}
                            circular
                            item={itemTemplate}
                            thumbnail={thumbnailTemplate}
                        />
                    </div>

                    {/* Información do produto */}
                    <div className="col-12 md:col-6 pl-8 mb-8">
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
                {/* Descripción extendida */}
                <div className="col-12 mt-8">
                    {/* Imagen y texto de fila 1 */}
                    <div className="grid align-items-center mb-8">
                        {/* Imagen 1 */}
                        <div className="col-12 md:col-6 flex justify-content-center">
                            <img src={`${product.imageBasePath}/01.jpg`} alt={product.name} className="w-full border-round-sm" />
                        </div>
                        {/* Texto 1 */}
                        <div className="col-12 md:col-6">
                            {product.longDescription
                                .slice(0, Math.ceil(product.longDescription.length / 2))
                                .map((paragraph, index) => (
                                    <p key={index} className="text-xl line-height-3" style={{ color: "var(--gray-900)" }}>
                                        {paragraph}
                                    </p>
                                ))}
                        </div>
                    </div>
                    {/* Imagen y texto de fila 2 */}
                    <div className="grid align-items-center">
                        {/* Imagen 2 */}
                        <div className="col-12 md:col-6 flex justify-content-center flex-order-2 md:order-1">
                            <img src={`${product.imageBasePath}/02.jpg`} alt={product.name} className="w-full border-round-sm" />
                        </div>
                        {/* Texto 2 */}
                        <div className="col-12 md:col-6">
                            {product.longDescription
                                .slice(Math.ceil(product.longDescription.length / 2), product.longDescription.length)
                                .map((paragraph, index) => (
                                    <p key={index} className="text-xl line-height-3 align-items-right" style={{ color: "var(--gray-900)" }}>
                                        {paragraph}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
