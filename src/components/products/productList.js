import { getProducts } from "../../services/productService";
import ProductCard from "./productCard";

export default function ProductList() {
    const productList = getProducts();

    return (
        <section className="surface-0">
            <div className="max-w-screen-xl mx-auto p-5">
                {/* Productos */}
                <h1 className="text-3xl text-900 text-center mb-6">Productos</h1>

                {/* Lista de productos */}
                <div className="grid justify-content-center">
                    {productList.map(product => (
                        <div key={product.id} className="col-12 sm:col-6 md:col-4 lg:col-3">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}