import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burgersApi } from "../../services/api";
import styles from "./styles.module.scss"
import { TRUE } from "sass";


export const HomePage = ({ setVisible, visible, cartArray }) => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   console.log(cartList);


   // console.log(productList)

   // console.log(productList);
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
            console.log(error);

         }
      }
      getBurgers();
      console.log("Ocorreu uma montagem");
   }, [])

   useEffect(() => {
      console.log("Ocorreu uma atualização");
   }, [performance])

   useEffect(() => {
      return () => {
         console.log("ocorreu uma desmontagem!");
      }
   }, [])


   const [value, setValue] = useState(0);

   const [CartModalRenderizado, setCartModalRenderizado] = useState(false);

   // const onRenderCartModal = () => {
   //    setCartModalRenderizado(true);
   // };

   return (
      <>
         <Header value={value} setValue={setValue} setVisible={setVisible} setCartList={setCartList} />
         <main className={CartModalRenderizado? styles.newMain : null}>
            {
               visible ? <ProductList
                  productList={productList}
                  setValue={setValue}
                  value={value}
                  setCartList={setCartList}
                  cartList={cartList}
                  cartArray={cartArray}
                  setCartModalRenderizado={setCartModalRenderizado} />
                  : <CartModal
                     setCartList={setCartList}
                     cartList={cartList}
                     setVisible={setVisible}
                     setValue={setValue}
                     value={value}
                     setCartModalRenderizado={ setCartModalRenderizado} />
            }

         </main>
      </>
   );
};
