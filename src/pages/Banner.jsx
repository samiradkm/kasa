export default function Banner({ image, texte, sombre }) {
    let classSombre = "";
    if (sombre) {
        classSombre = "sombre";
    }
    return (
        <div className="contenu">
            <div className="photo">
                <img className="photo" src={image} />
                <div className={"photoText " + classSombre}>{texte}</div>
            </div>
        </div>
    );
}
