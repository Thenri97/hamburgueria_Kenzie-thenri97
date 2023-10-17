import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss"

export const CartItemCard = ({ product, value, setValue, cartList, setCartList }) => {

   

   const valueUpdate = () => {
      if (value > 0) {
         setValue(cartList.length)
         const removedItem = cartList.filter(element => element !== product)
         setCartList(removedItem)
         setValue(value - 1)
      }
   }

   return (
      <li className={styles.listItem}>
         <div className={styles.img__container}>
            <img src={product.img} alt={product.name} />
         </div>

        <div className={styles.name__container}>
        <h3 className={`headingThree ${styles.name}`}>{product.name}</h3>
         <h4 className={`${styles.price}`}>{`R$ ${product.price.toFixed(2)}`}</h4>
        </div>

         <button aria-label="delete" title="Remover item"
            onClick={() => valueUpdate()}>
            <MdDelete size={21} />
         </button >
      </li>
   );
};
