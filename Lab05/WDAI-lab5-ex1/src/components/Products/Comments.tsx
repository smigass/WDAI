import {useEffect, useState} from "react";
import styles from '../styles/Products.module.css'
import Comment from "./Comment.tsx";
import IComment from "./IComment.ts";

export default function Comments() {
    const [comments, setComments] = useState<IComment[]>([]);
    const [posts, setPosts] = useState(new Map<number, IComment[]>());

    useEffect(() => {
        fetch('https://dummyjson.com/comments')
            .then(response => response.json())
            .then(data => {
                setComments(data.comments);
                a(data.comments)
            })

    }, []);

    useEffect(() => {
        handlePosts()
    }, [comments]);

    const like = (id: number) => {
        setComments(comments.map(c => {
            if (c.id === id) {
                return {...c, likes: c.likes + 1}
            }
            return c
        }))
    }

    const dislike = (id: number) => {
        setComments(comments.map(c => {
            if (c.id === id) {
                return {...c, likes: Math.max(c.likes - 1, 0)}
            }
            return c
        }))
    }


    const handlePosts = () => {
        const p = new Map();
        comments.forEach(c => {
            if (!p.has(c.postId)) {
                p.set(c.postId, [c])
            } else {
                p.set(c.postId, [...p.get(c.postId), c])
            }
        })
        setPosts(p)
    }

    const a = (contents: IComment[]) => {
        contents.forEach(c => {
            console.log(contents.filter(c1 => c1.postId === c.postId))
        })
    }

    return (
        <>
            <h1>Facebook</h1>
            <div className={styles.commentsContainer}>
                {[...posts.keys()].map((k, i) => <div
                    style={{border: '3px solid', padding: '10px', marginBottom: '50px'}}>
                    <div className={styles.post} key={i}>POST ID: {k}</div>
                    {posts.get(k)?.map(c => <Comment key={c.id} comment={c} like={like} dislike={dislike}/>)}
                </div>)
                }
            </div>
        </>
    )
}
