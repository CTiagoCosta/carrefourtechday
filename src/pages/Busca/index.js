
import {  useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from '../../services/api';
import './busca.css';

// base api: https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode={cep}

function Busca(){
    const [cep, setCep] = useState([]);
    const [sellers, setSellers] = useState([]);
   

   async function buscaCep(e){
       try{
        const { data } = await api.get(`/postalcode?postalCode=${cep}`, {
            cep: cep
        })
        const resp = data [0].sellers
        setSellers(resp);
        console.log(resp)
       }
       catch(error){
           console.log(error)
       }
    }

    return(
        <div className="container">
            <label> Digite o CEP: 
            <input name="cep" placeholder="Somente números" value={cep} onChange={(e) => setCep(e.target.value) }/>   
            <button className="busca-btn" onClick={ buscaCep }>Buscar Cep</button>   
            </label>

        <form action="">
         <h2>Loja mais Próxima</h2>
      
        <table>
              <thead>
                <tr>
                  <th scope="col">ID da Loja</th>
                  <th scope="col">nome da Loja</th>
                  <th scope="col">Logo da Loja</th>
                  <th scope="col">Opções</th>
                </tr>
              </thead>
              <tbody>
                  {sellers.map(seller => (
                      <tr key={seller.id}>
                      <td data-label="Id_Loja">{seller.id}</td>
                      <td data-label="Nome">{seller.name}</td>
                      <td data-label="Logo">{seller.logo}</td>
                      <td data-label="#">
                      <button className="action" style={{color:"#FFF" }}>
                      <a href="https://www.carrefour.com.br/localizador-de-lojas" target="_blank"><FiSearch color="#FFF" size={19} /> Encontre a Loja</a>
                      </button><br/><br/>           
                      </td>
                    </tr>
                  ))}
                
              </tbody>
            </table>
            </form>
        </div>
    )
}

export default Busca;