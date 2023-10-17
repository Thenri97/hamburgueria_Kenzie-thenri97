import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./styles.module.scss"

export const CartModal = ({ cartList, setCartList, setVisible, setValue, value, setRenderedCart }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   setRenderedCart(true)

   const clearCart = () => {
      setCartList([])
      setValue(0)
      setVisible(true)
   }

   return (
      <div role="dialog" className={styles.modal}>
         <div className={styles.cartName}>
            <h2 className={`headingThree ${styles.title}`}>Carrinho de compras</h2>
            <button aria-label="close" title="Fechar"
               onClick={() => setVisible(true)}>
               <MdClose size={21} />
            </button>
         </div>
         <div className={styles.list__container}>
            <ul className={`${styles.list} cartlist`}>
               {cartList.map((product) => (
                  <CartItemCard key={product.id}
                     product={product}
                     setVisible={setVisible}
                     setValue={setValue}
                     value={value}
                     setCartList={setCartList}
                     cartList={cartList} />
               ))}
            </ul>
         </div>
         <div>
            <div className={styles.total__container}>
               <span className={styles.totalSpan}>Total</span>
               <span className={styles.totalPrice}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
            <button className={styles.remove}
               onClick={() => clearCart()}>Remover todos</button>
         </div>
      </div>
   );
};
