import styles from "./styles.module.scss"

export const ProductCard = ({ product, setValue, value, productList, setCartList, cartList,updatedCartList   }) => {


    const cartArray = () => {

        const updatedCartList = cartList.filter((element) => element !== product)

        setCartList([...updatedCartList, product]);

        setValue(updatedCartList.length+1)


    }


    return (
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
    )
}