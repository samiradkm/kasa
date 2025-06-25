import Banner from "./Banner";
import Coolaps from "./coolaps";
import Footer from "./Footer";

export default function Apropos() {
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
                <Banner image={"image-apropos.svg"}></Banner>
                <Coolaps
                    titre="Fiabilité"
                    description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                ></Coolaps>
                <Coolaps
                    titre="Respect"
                    description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                ></Coolaps>
                <Coolaps
                    titre="Service"
                    description="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
                ></Coolaps>
                <Coolaps
                    titre="Securité"
                    description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                ></Coolaps>
            </main>
            <Footer></Footer>
        </>
    );
}
