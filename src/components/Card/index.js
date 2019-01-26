import React from "react";
import "./style.css";

function Card(props){
    return(
        
        <div className="col-md-2 card-container" onClick={()=>props.clickedCard(props.id)}>
                <img className="img-thumbnail" alt={props.id} src={"./images/"+props.image}/>
        </div>
    );
};

export default Card;