import { useParams } from "react-router-dom";
import "../Styles/Detail.css";

export default function Detail() {
    let { name } = useParams()
    let { image } = useParams()
    let { type } = useParams()
    let { tags } = useParams()
    let { town } = useParams()
    let { description } = useParams()
    return (
        <div className="ContentImageDetail">
        <div className="ContentDetail">
            <div className="FirstContent">
                <div className="ContentCharacter">
                    <h1>{name}</h1>
                    <div className="ContentImage">
                        <img className="Image"
                            src={require(`../Assets/Images/${image}.jpg`)}
                            alt={name} />
                    </div>
                    <h3>Type: {type}</h3>
                    <h3>Tags: {tags}</h3>
                    <h3>Twon: {town}</h3>
                </div>
            </div>
            <div className="ContentDesc">
                <h3>Description</h3>
                <h2>{description}</h2>
            </div>
        </div>
        </div>
    );
}
