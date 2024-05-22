import CartWidget from './CartWidget.jsx';
import ButtonComponent from './ButtonComponent.jsx';
import Logo from '/img/logohome.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
        return (
        <header className='navContainer'>
            <Link className='anchor-style' to={"/"}><img src={Logo} alt="" /></Link>
            <nav className='navmenu'>
                <Link to="/Vinilos"><ButtonComponent nombre='Vinilos' /></Link>
                <Link to="/CDs"><ButtonComponent nombre='CDs' /></Link>
                <Link to="/Sale"><ButtonComponent nombre='Sale' /></Link>
                <Link to="Accesorios"><ButtonComponent nombre='Accesorios' /></Link>
            </nav>
            <CartWidget /> 
        </header>
        );
}