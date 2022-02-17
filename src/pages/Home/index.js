import {useState} from "react";
import {FiLink} from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu"
import LinkItem from "../../components/LinkItem";


export default function Home(){
  const[link, setLink] = useState("")

  function handleShortLink(){
    alert ("ta funcionando" + link)

  }
    return (
    <div className="container-home">

    <div className="logo">
      <img src="./assets/Logo.png" alt=" Subject Link logo"></img>
      <h1>Your Links</h1>
      <span>✨Paste the URL to be shortened✨</span>
    </div>

    <div className="area-input">
      <div>
        <FiLink size={24} color="#FFF" />
        <input placeholder="Paste your link here ..." value={link} onChange={(e) => setLink(e.target.value)}/>
    </div>  
    <button onClick={handleShortLink}> Short URL</button>
    </div>
    <Menu/>
    <LinkItem/>
    </div>
  )
  }