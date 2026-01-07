import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.id}`} className="block no-underline text-900 transition-colors transition-duration-200 hover:text-900">
            {/* Imagen del producto */}
            <div className="mb-3">
                <img src={product.image} alt={product.name} className="w-full border-round-sm" />
            </div>

            {/* Información del producto */}
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>

            <p className="text-sm text-700 line-height-3">
                {product.description}
            </p>
        </Link>
    );
}
