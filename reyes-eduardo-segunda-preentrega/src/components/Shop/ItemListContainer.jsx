import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/productService';
import ProductCard from '../Common/ProductCard';
import './ItemListContainer.css'; 

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productList = await getProducts(category); 
                setProducts(productList);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [category]);

    return (
        <div className="item-list-container">
            <h1>{category ? `${category}` : 'Productos'}</h1>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        idProd={product.id}
                        producto={product.producto}
                        precio={product.precio}
                        imagen={product.imagen}
                        sale={product.sale}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;