import man from "../assets/me.jpg";
import "../styles/Card1.css";

//const Card = ({name, title, iamge}) => {
//Remove other consts and replace first line with above

const Card1 = () => {
    const name = "Oscar Lieu";
    const title = "UX Designer"

    return (
        <div className ="profile-card">
            <div className="top">
                <img src={man} alt="{name}"/>
            </div>
            <div className="bottom">
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </div>
    ); 
}

export default Card1;