import { useEffect, useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";
import "./style.css";
import { Link } from "react-router";

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
                        <div className="menu">
                            <u>
                                <a href="/">Accueil</a>
                            </u>
                            <a href="/apropos">A propos</a>
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
                        return (
                            <Link
                                to={"/fichelogement/" + logement.id}
                                key={logement.id}
                            >
                                <Card
                                    titre={logement.title}
                                    cover={logement.cover}
                                />
                            </Link>
                        );
                    })}
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}
