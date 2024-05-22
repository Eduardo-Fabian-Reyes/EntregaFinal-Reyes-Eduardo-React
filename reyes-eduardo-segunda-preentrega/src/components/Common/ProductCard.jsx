import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({producto, precio, imagen, idProd, sale}) => {
    return(
        <div className='product-card'>
            <Link to={`/product/${idProd}`}><img src={imagen} alt={producto} /></Link>
            <div className="product-details">
                <h4>{producto}</h4>
                <p>{sale && <span className="tachado">${sale}</span>} ${precio}</p>
            </div>
        </div>
    );
};

export default ProductCard;