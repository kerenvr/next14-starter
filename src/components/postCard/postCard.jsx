import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css"

const PostCard = ({post}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/208560/pexels-photo-208560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}/>
                </div>
                <span className={styles.date}>05.17.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link href={`/blog/${post.id}`} className={styles.link}>READ MORE</Link>
            </div>
        </div>
    );
};

export default PostCard;