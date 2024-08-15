import { IoMenu } from "react-icons/io5";

import "./Header.css"

function Header() {
    return(
        <>
            <header className="Header">
                <IoMenu className="icon_menu"></IoMenu>
                <h1 className="title">GERENCIADOR DE NOTAS</h1>
            </header>   
        </>
    )
}  
export default Header