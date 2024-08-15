import { FaCircle } from "react-icons/fa";

import "./Card.css"

function Card() {
    return(
        <div className="Card">
            <div>
                <div className="Card_menu">
                    <FaCircle className="red"></FaCircle>                
                    <FaCircle className="yelow"></FaCircle>                
                    <FaCircle className="blue"></FaCircle>                
                </div>
            </div>
        </div>
    )
}
export default Card