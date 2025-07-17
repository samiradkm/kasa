export default function Card({ titre, cover }) {
    return (
        <div className="card">
            <img className="cover" src={cover} />
            <div className="cardTitre">{titre}</div>
        </div>
    );
}
