import Product from "./Product.tsx";
import styles from "../styles/Carts.module.css"


const Cart = () => {
    const products: string[] = [
        'Pomarańcza', 'Jabłko', 'Gruszka', 'Czereśnia', 'Cytryna'
    ]

    return (
        <div className={styles.cart}>
            {products.map((product, i) => (
                <Product productName={product} key={i}/>
            ))}
        </div>
    )
}

export default Cart