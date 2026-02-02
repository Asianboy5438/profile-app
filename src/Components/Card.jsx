import styles from "../styles/Card.module.css";

const Card = ({name, title, image, mode}) => {
    return (
        <div className ={`${styles.profileCard} ${mode === "dark" ? styles.darkCard : ""}`}>
            <div className={styles.top}>
                <img src={image} alt={name}/>
            </div>
            <div className={styles.bottom}>
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </div>
    ); 
}

export default Card;