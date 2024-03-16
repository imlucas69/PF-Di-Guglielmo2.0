import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/t-shirts">
                    {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/hoodies">
                    {props.itemDos}
                </Link>
            </li>
            <li>
                <Link to="category/sneakers">
                    {props.itemTres}
                </Link>    
            </li>
            <li>
                <Link to="category/caps">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    );
}

export default ItemListContainer;