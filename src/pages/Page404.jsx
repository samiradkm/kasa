import Footer from "./Footer";

export default function Page404() {
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
                    {" "}
                    <div className="erreur">404 </div>
                    <div className="texte">
                        Oups! La page que vous demandez n'existe pas.
                    </div>
                    <div className="pageaccueil">
                        {" "}
                        <a href="/">
                            <u> Retourner sur la page d’accueil</u>
                        </a>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}
