import "./linkitem.css";
import {FiX, FiClipboard} from "react-icons/fi";

export default function LinkItem(){
    return (
    <div className="modal-container">

       <div className=" modal-header" >
           <h2>Shortened Link</h2>
           <button>
               <FiX size={28} color="black"/>
           </button>
           </div>  
           <span>https://github.com/Mysia14 </span>

           <button className="modal-link">
           shorturl.at/glvFI
           <FiClipboard size={20} color="white" />
           </button>
    </div>
    )
}