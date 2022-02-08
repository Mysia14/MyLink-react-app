import{BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Links from "./pages/Links/links"

function RoutesApp(){ 
    // configuracao das rotas
    return(
         // para renderizar
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path= "/links" element={<Links/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;