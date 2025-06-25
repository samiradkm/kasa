import { useEffect, useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";
import "./style.css";

export default function Home() {
    const [logements, setLogements] = useState([]);

    useEffect(function () {
        fetch("http://localhost:8080/api/properties")
            .then((response) => response.json())
            .then((data) => setLogements(data));
    }, []);

    return (
        <>
            <main>
                <div>
                    <header>
                        <img className="logo" src="/logo.svg" />
                        <div className="test">
                            <u>
                                <a>Accueil</a>
                            </u>
                            <a>A propos</a>
                        </div>
                    </header>
                </div>
                <Banner
                    image={"image.svg"}
                    texte={"Chez vous, partout et ailleurs"}
                    sombre={true}
                ></Banner>

                <div className="logements">
                    {logements.map(function (logement) {
                        return <Card titre={logement.title} />;
                    })}
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}
