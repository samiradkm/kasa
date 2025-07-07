import { useEffect, useRef, useState } from "react";

export default function Coolaps({ titre, description }) {
    const [visible, updateVisible] = useState(false);
    const descriptionDiv = useRef();
    let classVisible = "";
    let imageFleche = "fleche_haut.svg";

    useEffect(() => {
        if (descriptionDiv.current) {
            descriptionDiv.current.innerHTML = description;
        }
    });

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
                {titre}
                <img src={"/" + imageFleche} onClick={changerVisible}></img>
            </div>
            <div
                ref={descriptionDiv}
                className={"description" + classVisible}
            />
        </div>
    );
}
