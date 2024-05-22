import React, { useState, useEffect } from 'react';
import { getProductsStock } from '../asyncMock.js';
import ProductCard from '../Common/ProductCard';


export default function ItemListContainer({ greeting, category }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsStock().then((data) => {
            if (category) {
                setProducts(data.filter(product => product.categoria === category));
            } else {
                setProducts(data);
            }
        });
    }, [category]);

    return (
        <section className='container-item'>
            <h1>{greeting}</h1>
            <div className="item-list-container">
                {/* <h2></h2> */}
                <div className="product-list">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            idProd={product.id}
                            producto={product.producto}
                            categoria={product.categoria}
                            precio={product.precio}
                            imagen={product.imagen}
                            detalles={product.detalles}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
