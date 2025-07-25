import Footer from "./Footer";
import Caroussel from "./Caroussel";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Coolaps from "./coolaps";
import { Navigate } from "react-router";

export default function Fichelogement() {
    const { id } = useParams();
    const [logement, setLogement] = useState();
    const [etoiles, setEtoiles] = useState([]);
    const [logementIntrouvable, setLogementIntrouvable] = useState(false);

    useEffect(
        function () {
            fetch("http://localhost:8080/api/properties/" + id)
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 404) {
                        // Si on a pas trouver de logement
                        setLogementIntrouvable(true);
                    }
                    return response.json();
                })
                .then((data) => {
                    const listeEtoiles = [];
                    for (let i = 1; i <= 5; i++) {
                        if (i <= data.rating) {
                            listeEtoiles.push("/etoile.svg");
                        } else {
                            listeEtoiles.push("/etoilegris.svg");
                        }
                    }

                    setEtoiles(listeEtoiles);
                    setLogement(data);
                });
        },
        [id]
    );

    if (logementIntrouvable) {
        return <Navigate to="/404" />;
    }

    return (
        <>
            <main>
                <div>
                    <header>
                        <img className="logo" src="/logo.svg" />
                        <div className="menu">
                            <a href="/">Accueil</a>
                            <a href="/apropos">A propos</a>
                        </div>
                    </header>
                </div>
                <div className="page">
                    <Caroussel images={logement?.pictures} />
                </div>
                <div className="properties">
                    <div className="bas">
                        <div className="grand">{logement?.title}</div>
                        <div className="petit">{logement?.location}</div>
                        <div className="tags">
                            {logement?.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div class="hostAndRate">
                        <div className="host">
                            {logement?.host.name}
                            <img src={logement?.host.picture} />
                        </div>
                        <div class="rate">
                            {etoiles.map((lien, index) => (
                                <img key={index} src={lien} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="propertie">
                    <Coolaps
                        titre={"Description"}
                        description={logement?.description}
                    ></Coolaps>
                    <Coolaps
                        titre={"Equipements"}
                        description={logement?.equipments.join("<br/>")}
                    ></Coolaps>
                </div>
            </main>

            <Footer></Footer>
        </>
    );
}
