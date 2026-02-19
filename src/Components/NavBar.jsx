import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/add-profile">Add Profile</Link></li>
                <li><Link to="/fetched-profiles">Other Profiles</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;