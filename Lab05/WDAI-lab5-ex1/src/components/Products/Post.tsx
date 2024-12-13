import styles from '../styles/Products.module.css'


export default function Post({id}: {id: number}) {
    return (
        <div className={styles.post}>
            Post {id}
        </div>
    )
}