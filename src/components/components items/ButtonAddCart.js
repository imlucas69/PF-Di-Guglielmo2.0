import shoppingCart from "../../img/shopping-cart.svg"

const ButtonAddCart = () => {
    return(
        <button id="addCart">
            <img src={shoppingCart} alt="add"></img>
        </button>
    );
}

export default ButtonAddCart;