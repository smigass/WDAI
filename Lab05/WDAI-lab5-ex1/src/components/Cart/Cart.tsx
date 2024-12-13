import Product from "./Product.tsx";
import styles from "../styles/Carts.module.css"


const Cart = () => {

    return (
        <div className={styles.cart}>
            <Product productName={'Pomarańcza'}/>
            <Product productName={'Jabłko'}/>
            <Product productName={'Gruszka'}/>
            <Product productName={'Czereśnia'}/>
            <Product productName={'Cytryna'}/>
        </div>
    )
}

export default Cart