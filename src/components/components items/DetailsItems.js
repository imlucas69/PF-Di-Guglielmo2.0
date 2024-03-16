import Image from "./Image";
import Description from "./Description";
import "../styles/detailsItems.css"
import ButtonDetails from "./ButtonDetails";
import fetchSimultion from "../../utils/fetchSimulation";
import products from "../../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MoonLoader from "react-spinners/ClipLoader";


const DetailsItems = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        setDatos([])

        fetchSimultion(products.filter( flt => flt.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    
    return(
        <div className="detailsItems">
            {
                (datos.length === 0) ? <MoonLoader color="#5b00fb" /> 
                : datos.map( items => (
                    <>
                        <div className="containerLeft">
                            <Image 
                                imagen={items.imageProduct.firtsImage}
                            />
                        </div>  

                        <div className="containerRigth">
                                <Description 
                                    title= {items.title}
                                    paragraph= {items.description}
                                    stock= {items.stock}
                                    precio={items.price}
                                />
                                
                            <div className="buttons">
                                    <ButtonDetails 
                                        txt="Agregar al carrito"
                                    />
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}
    export default DetailsItems;
