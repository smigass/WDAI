import styles from '../styles/Products.module.css'
import {MdPerson} from "react-icons/md";
import {AiFillDislike, AiFillLike} from "react-icons/ai";
import ICommentComponent from "./ICommentComponent.ts";
export default function Comment({comment, like, dislike}: ICommentComponent) {
    const {user, likes, body, id} = comment
    return (
        <div className={styles.comment}>
            <div className={styles.topBar}>
                <div style={{display: 'flex'}}>
                    <div className={styles.icon}>
                        <MdPerson size={40}/>
                    </div>

                    <h2>{user.fullName}</h2>
                </div>

                <div style={{justifySelf: 'end', padding: '5px'}}>
                    <h5 className={styles.icon}>{user.username}</h5>
                </div>

            </div>

            <div className={styles.body}>
                {body}
            </div>
            
            <div className={styles.botBar}>
                <div className={styles.likes}>
                    <AiFillLike size={20} onClick={() => like(id)} className={styles.ic}/>
                    <AiFillDislike size={20}  className={styles.ic} onClick={() => dislike(id)}/>
                    {likes}
                </div>
            </div>

        </div>
    )
}