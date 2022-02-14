import "./menu.css";
import {BsGithub, BsLinkedin } from "react-icons/bs"; // https://react-icons.github.io/react-icons/search?q=git
import {Link} from "react-router-dom";


export default function Menu (){
    return(
        <div className="nav-bar menu">
            <a className="social" href="https://www.linkedin.com/in/mysiasantana/">
                <BsLinkedin color="white"size={24}/>
            </a>
            <a className="social" href="https://github.com/Mysia14">
                <BsGithub color="white"size={24}/>
            </a>
            <Link className="menu-item" to="/links">
            My Links
            </Link>

        </div>
    )
}