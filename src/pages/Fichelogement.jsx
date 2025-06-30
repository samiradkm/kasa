import Footer from "./Footer";
import Caroussel from "./Caroussel";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function Fichelogement() {
    const { id } = useParams();
    const [logement, setLogement] = useState();

    useEffect(
        function () {
            fetch("http://localhost:8080/api/properties/" + id)
                .then((response) => response.json())
                .then((data) => {
                    setLogement(data);
                });
        },
        [id]
    );

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
            </main>
            <Footer></Footer>
        </>
    );
}
