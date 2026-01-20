import man from "../assets/me.jpg";

const Card1 = () => {
    const name = "Oscar Lieu";
    const title = "UX Designer"

    return (
        <div className ="profile-card">
            <img src="{man}" alt="{name}"/>
            <p>{name}</p>
            <p>{title}</p>
        </div>
    ); 
}

export default Card1;