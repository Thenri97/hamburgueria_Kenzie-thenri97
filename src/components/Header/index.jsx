
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss"

export const Header = ({value,setValue,setVisible}) => {

   return (
      <header className={styles.header}>
         <img src={Logo} alt="Logo Kenzie Burguer" />

         <button onClick={() => setVisible(false)}>
            <MdShoppingCart size={21} />
            <span>{value}</span>
         </button>
         {/* <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form> */}

      </header>
   );
};
