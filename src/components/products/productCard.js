import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <Link to={`/products/${product.id}`} className="block no-underline text-600 transition-duration-200 hover:text-900">
            {/* Imagen del producto */}
            <div className="mb-3">
                <img src={product.image} alt={product.name} className="w-full border-round-sm" />
            </div>

            {/* Información del producto */}
            <h3 className="text-xl text-center font-bold">{product.name}</h3>
        </Link>
    );
}
