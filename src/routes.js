import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Busca from './pages/Busca';
import Loja from './pages/Loja';


function RoutesApp(){
    return(
        <BrowserRouter>
         <Header/>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/busca" element={ <Busca/> } />
            <Route path="/loja" element={ <Loja/> } />

        
        </Routes>   
        </BrowserRouter>
    )
}

export default RoutesApp;