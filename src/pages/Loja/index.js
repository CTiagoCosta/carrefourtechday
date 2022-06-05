
import {  useState } from 'react';
import apiProd from '../../services/apiProd';
import { FiSearch } from 'react-icons/fi';
import './loja.css';

// base api: https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode={cep}

function Loja(){
    const [loja, setLoja] = useState([]);
    const [products, setProducts] = useState([]);
   
   async function buscaProduto(e){
    //e.preventDefault();
   // alert('CLICOU')
       try{
        const { data } = await apiProd.get(`products?sellerName=${loja}`, {
            loja: loja
        })
        const res = data
        setProducts(res);
        console.log(res)
       }
       catch(error){
           console.log(error)
       }
    }

    //URL BASE: https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq={seller_name}

    return(
        <div className="container">
            <label> Digite o Nome da Loja: 
            <input name="nome_loja" placeholder="Letras e números juntos" value={loja} onChange={(e) => setLoja(e.target.value) }/>   
            <button className="busca-btn" onClick={ buscaProduto }>Buscar Loja</button>   
            </label>

        <form action="">
         <h2>Lista de Produtos da loja</h2>
        <table>
              <thead>
                <tr>
                  <th scope="col">Código do Produto</th>
                  <th scope="col">Produto</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Consultar Disponibilidade</th>
                </tr>
              </thead>
              <tbody>
                 {products.map(product => (
                      <tr key={product.productId}>
                      <td data-label="Id_Produto">{product.productId}</td>
                      <td data-label="Nome">{product.productName}</td>
                      <td data-label="marca">{product.brand}</td>
                      <td data-label="description">{product.metaTagDescription}</td>
                      <td data-label="#">
                      <button className="action" style={{color:"#FFF" }}>
                      <a href="https://mercado.carrefour.com.br/" target="_blank"><FiSearch color="#FFF" size={19} /> Ver na Loja</a>
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

export default Loja;