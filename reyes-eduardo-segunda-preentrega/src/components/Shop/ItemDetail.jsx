// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getProduct } from '../asyncMock';
// import { useCart } from '../../Context/CartContext';
// import './ItemDetail.css';

// export default function ItemDetail() {
//     const { productId } = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         getProduct(productId).then((data) => {
//             setProduct(data);
//         });
//     }, [productId]);

//     if (!product) {
//         return <p>Cargando...</p>;
//     }

//     return (
//         <div className='item-detail'>
//             <img src={product.imagen} alt={product.producto} />
//             <div className="product-details">
//                 <h3>{product.producto}</h3>
//                 <p>{product.detalles}</p>
//                 <h5 className='tachado'>{product.sale}</h5>
//                 <p>Precio: ${product.precio}</p>
//                 <button>🛒</button>
//             </div>
//         </div>
//     );
// }
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/productService';
import { useCart } from '../../Context/CartContext';
import './ItemDetail.css';

const ItemDetail = () => {
    const { productId, category } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); 
    const [selectedSize, setSelectedSize] = useState(null); 
    const { addToCart } = useCart(); 

    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const productData = await getProductById(productId, category);
            setProduct(productData);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
        };
    
        fetchProduct();
    }, [productId, category]);
    
    const handleAddToCart = () => {
        addToCart({ id: product.id, producto: product.producto, categoria: product.categoria, sale: product.sale, precio: product.precio, imagen: product.imagen, detalles: product.detalles, quantity, selectedSize }); 
    };
    
    const handleSizeSelect = (size) => {
        setSelectedSize(size); 
    };
    
    return (
        <div className='item-detail'>
        {product ? (
            <>
            <img src={product.imagen} alt={product.producto} />
            <div className="product-details">
                <h3>{product.producto}</h3>
                <p>{product.detalles}</p>
                <h5 className='tachado'>{product.sale}</h5>
                <p>Precio: ${product.precio}</p>
                {product.talla && (
                <div>
                    <h2>Tallas:</h2>
                    <div className="size-buttons">
                    {product.talla.map((size) => (
                        <button key={size} onClick={() => handleSizeSelect(size)} className={selectedSize === size ? 'selected' : ''}>{size}</button>
                    ))}
                    </div>
                </div>
                )}
                <div className="quantity-controls">
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button onClick={handleAddToCart}>🛒 Agregar al Carrito</button>
            </div>
            </>
        ) : (
            <p>Cargando...</p>
        )}
        </div>
    );
    }
    
export default ItemDetail;