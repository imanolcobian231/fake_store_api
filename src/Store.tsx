import { useEffect } from "react";
import { useProductsStore } from "./productStore";

type ProductoType = {
    id: number;
    title: string;
    images?: string[];
};

export function Productos() {
    const { productos, loading, fetchProducts } = useProductsStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <ul>
                {productos.map((producto: ProductoType) => (
                    <li key={producto.id}>
                        {producto.id} {producto.title}
                        {producto.images && producto.images[0] && (
                            <img src={producto.images[0]} alt={producto.title} style={{ width: 50 }} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}