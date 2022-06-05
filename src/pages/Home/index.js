import { Link } from 'react-router-dom';
import './home.css';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.jpg'


function Home(){
    return(
        <div className="container">
            
            <img src={logo1} alt="logo do carrefour"></img>
            <Link to="/busca">Buscar Pontos de Venda Por CEP</Link>
            <br></br>
            <img src={logo2} alt="produtos do carrefour"></img>
            <Link to="/loja">Buscar Produtos Por Pontos de Vendas</Link>
        </div>
    )
}

export default Home;