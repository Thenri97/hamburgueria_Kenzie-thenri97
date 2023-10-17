import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss"

export const ProductList = ({ productList, setValue, value, setCartList, cartList, cartArray, setRenderedCart }) => {
   setRenderedCart(false)

   return (
      <ul className={`${styles.list} productlist`}>
         {productList.map((product) => (
            <ProductCard key={product.id}
               product={product}
               setValue={setValue}
               value={value}
               productList={productList}
               setCartList={setCartList}
               cartList={cartList}
               cartArray={cartArray} 
              />
         ))}
      </ul>
   );
};
