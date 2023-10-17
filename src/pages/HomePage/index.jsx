import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burgersApi } from "../../services/api";
import styles from "./styles.module.scss"

export const HomePage = ({ setVisible, visible, cartArray, setCartList, cartList, value, setValue }) => {
   const [productList, setProductList] = useState([]);
   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva
   
   useEffect(() => {
      const getBurgers = async () => {
         try {
            const { data } = await burgersApi.get("/products");
            setProductList(data);
         } catch (error) {
            console.log(error)
         }
      }
      getBurgers();

   }, [])

   useEffect(() => {
      return () => {
         // console.log("ocorreu uma desmontagem!");
      }
   }, [])

   const [RenderedCart, setRenderedCart] = useState(false);

   return (
      <>
         <Header value={value}
            setValue={setValue}
            setVisible={setVisible}
            setCartList={setCartList} />
         <main className={RenderedCart ? styles.newMain : null}>
           
            
            {
               visible ? <ProductList
                  productList={productList}
                  setValue={setValue}
                  value={value}
                  setCartList={setCartList}
                  cartList={cartList}
                  cartArray={cartArray}
                  setRenderedCart={setRenderedCart} 
                  />
                  : <CartModal
                     setCartList={setCartList}
                     cartList={cartList}
                     setVisible={setVisible}
                     setValue={setValue}
                     value={value}
                     setRenderedCart={setRenderedCart} />
            }

         </main>
      </>
   );
};
