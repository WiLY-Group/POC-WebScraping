import { useState } from "react";
import convertFromUSDA from "../utils/USDAtranslator";
import FoodInfoModal from "./foodInfo";

const FoodItem = (props) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = (e) => {
        // console.log("Everything is awesome!");
        // console.log(e.target.innerHTML);
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
      }  

    return (
        <div>
            <p onClick={openModal} className="clickable">{props.item.description}</p>
            <FoodInfoModal showModal={showModal} closeModal={closeModal} item={props.item} model={convertFromUSDA(props.item, props.thresholds)}/>
        </div>
    )
}

export default FoodItem;