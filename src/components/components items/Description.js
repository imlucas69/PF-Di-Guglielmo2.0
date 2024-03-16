const Description = (props) =>{
    return(
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>

            <div className="description">
                <span className="descriptionTitle">Description:</span>
                    <p className="paragraph">
                        {props.paragraph}
                    </p>
            </div>
            
                <span className="cant">
                    Stock: {props.stock}
                </span>

                <span className="price">
                    ${props.precio}
                </span>
        </div>
    );
}

export default Description;