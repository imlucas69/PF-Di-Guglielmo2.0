import brand from "../../img/brand.svg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="FullDrip Store" title="FullDrip Store"></img>
        </Link>
        
    );
}

export default Brand;