import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './CartWidget.css'

const CartWidget = () => {
    const { cartQuantity } = useCart();

    return (
    <Link to='cart'> 
        <div className="cart-widget">
            <span className="cart-icon">🛒</span>
            {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
        </div>
    </Link>
    );
};

export default CartWidget;