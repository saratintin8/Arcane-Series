import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Item.css";

export default function Item(props) {

    return (
        <Link className="Link" to={"/detail/" + props.name + "/" + props.image2 + "/" + props.type + "/" + props.tags + "/" + props.town + "/" + props.description}>

            <div className="ContentCharacter">
                <h1 className="Title">{props.name}</h1>
                <div className="ContentImage">
                    <img className="Image"
                        src={require(`../Assets/Images/${props.image}.jpg`)}
                        alt={props.name}
                    />
                </div>
            </div>

        </Link>
    );
}

