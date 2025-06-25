import { useState } from "react";

export default function Coolaps({ titre, description }) {
    const [visible, updateVisible] = useState(false);
    let classVisible = "";
    let imageFleche = "fleche_haut.svg";

    if (visible) {
        classVisible = " visible";
        imageFleche = "fleche_bas.svg";
    }

    function changerVisible() {
        console.log(visible);
        updateVisible(!visible);
    }

    return (
        <div className="coolaps">
            <div className="titre">
                {titre} <img src={imageFleche} onClick={changerVisible}></img>
            </div>
            <div className={"description" + classVisible}>{description}</div>
        </div>
    );
}
