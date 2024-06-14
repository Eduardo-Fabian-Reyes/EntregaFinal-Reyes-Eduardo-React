import { useState } from 'react';
import { useCart } from '../../Context/CartContext';
import { db } from '../../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cart, clearCart, total } = useCart();
    const [buyer, setBuyer] = useState({name: '', phone: '', email: '', emailConfirm: ''});
    const [orderId, setOrderId] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handlebackToStore = () => {
        navigate('/');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBuyer({ ...buyer, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (buyer.email !== buyer.emailConfirm) {
            setError('La direccion de e-mail ingresa no coincide')
            return;
        }

        if (cart.length === 0) {
            setError('No hay productos en el Carrito para Comprar.');
            return;
        }

        const getTotalPrice = () => {
            return cart.reduce((total, item) => total + (parseFloat(item.precio) * item.quantity), 0);
        };

        const total= getTotalPrice();

    const newOrder = {
        buyer: {
            name: buyer.name,
            phone: buyer.phone,
            email: buyer.email
        },
        items: cart.map(item => ({
            id: item.id,
            title: item.producto,
            price: item.precio,
            quantity: item.quantity
        })),
        total,
        date: new Date().toISOString(),
    };

    try{
        const docRef = await addDoc(collection(db, 'orders'), newOrder);
        setOrderId(docRef.id);
        clearCart();
    } catch (error) {
        console.error('Error al finalizar compra', error);
        setError('Lo sentimos, hubo un error al procesar tu compra. Por favor, intentalo de nuevo.');
    }
};

    return (
        <div className="checkout-container">
            {orderId ? (
                <div className="order-confirmation">
                    <h2>Tu compra se ha completado, Gracias por comprar en Bad Wave Recs!</h2>
                    <p>Tu numero de orden es: {orderId}</p>
                    <button onClick={handlebackToStore}>Volver al Inicio</button>
                </div>
            ):(
                <form onSubmit={handleSubmit}>
                    <h2>Finalizar Compra</h2>
                    {error && <p className="error">{error}</p>}
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name="name" value={buyer.name} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label>Telefono:</label>
                        <input type="text" name="phone" value={buyer.phone} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" name="email" value={buyer.email} onChange={handleInputChange} required />
                    </div>
                    <div>
                        <label>Confirmar Email:</label>
                        <input type="text" name="emailConfirm" value={buyer.emailConfirm} onChange={handleInputChange} required />
                    </div>
                    <div className="order-summary">
                        <h3>Resumen de la Orden</h3>
                        <ul>
                            {cart.map(item => (
                                <li key={item.id}>
                                    {item.producto} - Cantidad: {item.quantity} - Precio: ${parseFloat(item.precio).toFixed(3)} each - Total: ${(parseFloat(item.precio) * item.quantity).toFixed(3)}
                                </li>
                            ))}
                        </ul>
                        {total && typeof total === 'number' && ( 
                        <h3>Total: ${total.toFixed(2)}</h3>
                        )}
                    </div>
                    <button type="submit">Confirmar Compra</button>
                </form>
            )}
        </div>
    );
};

export default Checkout;