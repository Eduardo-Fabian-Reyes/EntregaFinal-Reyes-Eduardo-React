import { useCart } from "../../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import './CartView.css'

const CartView = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + parseFloat(item.precio.replace(".", "")) * item.quantity, 0);
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const handleContinueShopping = () => {
        navigate('/');
    };

    return(
        <div className="cart-page">
            <h1>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>Tu Carrito está vacío</p>
            ) : (
                <div>
                    {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                    <img src={item.imagen} alt={item.producto} />
                    <div>
                        <h3>{item.producto}</h3>
                        <p>Cantidad: {item.quantity} - Precio: ${parseFloat(item.precio).toLocaleString(undefined, { minimumFractionDigits: 3 })}</p>
                        {item.selectedSize && <p>Talla: {item.selectedSize}</p>}
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </div>
                </div>                
                    ))}
                    <div className="cart-summary">
                        <h3>Resumen del Carrito</h3>
                        <p>Cantidad Total de Productos: {getTotalQuantity()}</p>
                        <p>Precio Total:${getTotalPrice().toLocaleString()}</p>
                    </div>
                    <div className="cart-actions">
                        <button onClick={clearCart}>Vaciar Carrito</button>
                        <Link to="/checkout"><button>Finalizar Compra</button></Link>
                        <button onClick={handleContinueShopping}>Seguir Comprando</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartView;
