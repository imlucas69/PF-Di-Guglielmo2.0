import Cart from "../../img/cart.svg"

const CartWidget = () => {
    return (
        <div className="containerCart">
            <img src={Cart} alt="cart" ></img>
            <span className="cantCart">
                1
            </span>
        </div> 
    );
}

export default CartWidget;