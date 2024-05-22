import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../asyncMock';
import './ItemDetail.css';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProduct(productId).then((data) => {
            setProduct(data);
        });
    }, [productId]);

    if (!product) {
        return <p>Cargando...</p>;
    }

    return (
        <div className='item-detail'>
            <img src={product.imagen} alt={product.producto} />
            <div className="product-details">
                <h3>{product.producto}</h3>
                <p>{product.detalles}</p>
                <p>Precio: ${product.precio}</p>
                <button>🛒</button>
            </div>
        </div>
    );
}
