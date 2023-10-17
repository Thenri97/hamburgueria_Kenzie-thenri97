import styles from "./styles.module.scss"
import { toast } from 'react-toastify';

export const ProductCard = ({ product, setValue, setCartList, cartList }) => {

    const cartArray = () => {

        const updatedCartList = cartList.filter((element) => element !== product);
        const productVerify = cartList.find((element) => element === product)

        if (updatedCartList) {
            setCartList([...updatedCartList, product]);
            setValue(updatedCartList.length + 1)
        }


        if (productVerify) {
            toast.error("Produto já adicionado!")
        }else{
            toast.success("produto adicionado!")
        }
    }


    return (
        <>

            <li className={styles.list__item}>
                <div className={styles.img__container}>
                    <img src={product.img} alt={product.name} />
                </div>
                <div>
                    <h3 className={`headingThree`}>{product.name}</h3>
                    <span className={`caption  ${styles.productCategory}`}>{product.category}</span>
                    <span className={`body600 ${styles.productPrice}`}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                    <button className={`body600 ${styles.productName}`}
                        onClick={() => cartArray()}
                    >Adicionar</button>
                </div>
            </li>
        </>
    )
}