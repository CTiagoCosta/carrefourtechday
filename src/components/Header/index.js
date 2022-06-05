import './header.css';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';


function Header(){
    return(
        <header>
            <Link className="logo" to="/">Carrefour</Link>
            <Link className="favoritos" to="/"><FiHome color="rgba(4, 61, 167, 0.904)" size={14 } />  Início</Link>
        </header>
    )
}

export default Header;