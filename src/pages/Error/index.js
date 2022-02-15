import './error.css';
import {Link} from "react-router-dom";

export default function Error(){
    return(
        <div className='container-error'>
            <img src='assets/notfound.png' alt='Error 404'/>
            <h1>Page Not Found</h1>
            <Link to="/">
                Go Back Home
            </Link>
        </div>
    )
}