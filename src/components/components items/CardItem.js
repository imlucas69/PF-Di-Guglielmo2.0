import Image from "./Image";
import { Link } from "react-router-dom";
import "../styles/cardItems.css"
import Description from "./Description";
import ButtonDetails from "./ButtonDetails";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = (props) => {
    return(
        <div className="cardItems">
            <Image image={props.image}/>
            <Description
                title={props.title} 
                stock= {props.stock}
                precio={props.price}
            />
            <div className="buttons">
                <Link to={ `/item/${props.id}`}>
                    <ButtonDetails
                        txt="Ver detalles" 
                    />
                </Link>
                <ButtonAddCart />
            </div>
        </div>
    );
}

export default CardItem;