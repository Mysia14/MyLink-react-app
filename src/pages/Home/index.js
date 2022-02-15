import {FiLink} from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu"

export default function Home(){
    return (
    <div className="container-home">

    <div className="logo">
      <img src="./assets/Logo.png" alt=" Subject Link logo"></img>
      <h1>Your Links</h1>
      <span>✨ Paste your link here ✨</span>
    </div>

    <div className="area-input">
      <div>
        <FiLink size={24} color="#FFF" />
        <input placeholder="Paste your link here ..."/>
    </div>  
    <button> Short Link</button>
    </div>
    <Menu/>
    </div>
  )
  }