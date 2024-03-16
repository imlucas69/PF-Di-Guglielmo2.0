// import CardItem from "./CardItem";
import fetchSimultion from "../../utils/fetchSimulation";
import products from "../../utils/products";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";
import "../styles/containerCardItems.css"
import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/ClipLoader";

const ContainerCardItems = () => {
    const [ datos, setDatos ] = useState( [] );
    let {idCategory} = useParams()

    useEffect(() => {

        setDatos( [] );

        if(idCategory === undefined){
            fetchSimultion(products, 1000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        } else {
            fetchSimultion(products.filter(filter => filter.type === idCategory ), 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
        }

    }, [idCategory])
    
    return(
        <div className="containerCardItems">
            {
                (datos.length === 0 ) ? <div className="containerSpinner"> <MoonLoader color="#5b00fb" /> </div>
                : datos.map( product => (
                    <CardItem 
                        key={product.id}
                        id={product.id}
                        imagen={product.imageProduct.firtsImage}
                        title={product.title}
                        stock={product.stock}
                        price={product.price}
                    />  
                ))
            }
        </div>      
    )
}

export default ContainerCardItems;