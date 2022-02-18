import {useState} from "react";
import {FiLink} from "react-icons/fi";
import "./home.css";

import Menu from "../../components/Menu"
import LinkItem from "../../components/LinkItem";


export default function Home(){

  const[link, setLink] = useState("");

  const [showModal, setShowModal] = useState(false);  //para controlar o aparecimento do modal - boolean////o seShowModal é para trocar o valor que estará dentro//
  // o useState(false) nao exibe o modal//

  function handleShortLink(){
  
    setShowModal(true); // para exibir o modal//

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

    {showModal && (<LinkItem/>)} 

    </div>
  )
  }
  // {showModal && (<LinkItem/>)}  = o showModal acessa o valor true or false.
  //                               =  O <Linkitem/> é o que queremos renderizar 
  // Entao se o showModal for true ele vai renderizar o componente(modal). 
  //Se for falso nao vai renderizar(exibir) o modal na tela.                         