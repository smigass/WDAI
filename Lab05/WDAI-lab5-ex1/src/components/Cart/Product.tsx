import styles from '../styles/Carts.module.css'

const Product = (props: {
    productName: string;
}) => {
    const {productName} = props;
    return (
        <div className={styles.product}>
            {productName}
        </div>

    )
}

export default Product