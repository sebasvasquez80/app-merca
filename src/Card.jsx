function Card({ type, prop }) {
    return (
        <section className="card">
            <div>
                {
                    (type === 'envios') ? (
                        <div>
                            <p>Origin: {prop.origen}</p>
                            <p>Destination: {prop.destino}</p>
                        </div>
                    ) : (
                        <div>
                            <p>Name: {prop.nombre}</p>
                            <p>Age: {prop.edad}</p>
                            <p>City: {prop.ciudad}</p>
                        </div>
                    )}
            </div>
            <div>
                <p>Look</p>
            </div>
        </section>
    )
}

export default Card;