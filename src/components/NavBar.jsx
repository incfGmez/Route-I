import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone} from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="menu">
                {/* Link Home */}
                <li>
                    <Link to={"/"} className="link-react">
                        <FontAwesomeIcon icon={faHome} className="icon"/> Home
                    </Link>
                </li>
                {/* Link Contacto */}
                <li>
                    <Link to={"/Contacto"} className="link-react">
                        <FontAwesomeIcon icon={faPhone} className="icon"/> Contacto
                    </Link>
                </li>
            </ul>
            <p>
                 Happy Cake
            </p>
        </nav>
    );
};
