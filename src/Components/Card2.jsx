import artist from "../assets/VG0.jpg";
import "../styles/Card2.css";

const Card2 = () => {
    const name = "Van Gogh";
    const title = "Painter"

    return (
        <div className ="profile-card">
            <img src={artist} alt="{name}"/>
            <p>{name}</p>
            <p>{title}</p>
        </div>
    ); 
}

export default Card2;