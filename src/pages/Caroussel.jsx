import { useEffect, useState } from "react";

let indexImage = 0;

export default function Caroussel({ images }) {
    const [imageCourante, setImageCourante] = useState(null);

    useEffect(() => {
        if (images && images.length > 0) {
            setImageCourante(images[0]);
        }
    }, [images]);

    function imageSuivante() {
        indexImage = (indexImage + 1) % images.length;
        setImageCourante(images[indexImage]);
    }

    function imagePrecedente() {
        if (indexImage === 0) {
            indexImage = images.length;
        }
        indexImage = indexImage - 1;
        setImageCourante(images[indexImage]);
    }

    return (
        <div className="caroussel">
            <img className="courante" src={imageCourante} />
            <div className="boutons">
                <div className="fleches">
                    <img onClick={imagePrecedente} src="/fleche_gauche.svg" />
                    <img onClick={imageSuivante} src="/fleche_droite.svg" />
                </div>
                <div className="page">
                    {indexImage + 1}/{images?.length}
                </div>
            </div>
        </div>
    );
}
