import "/src/targetas.css"; // Asegúrate de que la ruta sea correcta

export const Cards = ({ data }) => {
    const breed = data.breeds[0] || {};

    return (
        <div className="maincontainer card" style={{ width: "18rem" }}>
            {/* Parte frontal */}
            <div className="front">
                <img 
                    src={data.url} 
                    alt="Card image cap" 
                    className="card-img-top" 
                    style={{ width: "100%", height: "200px", objectFit: "cover" }} 
                />
                <div className="card-body">
                    <h5 className="card-title">{breed.name || "Breed Name"}</h5> {/* Título de la tarjeta */}
                    <p className="card-text">
                        {breed.temperament || "f."}
                    </p>
                </div>
            </div>
            
            {/* Parte trasera */}
            <div className="back">
            <h2>{breed.name || "Breed Name"}</h2>
                <p className="p">Raza: {breed.breed_group || "sin raza."}</p>
                <p className="p">Tiempo de vida: {breed.life_span || "sin tiempo de vida."}</p>
                <p className="p">Origen: {breed.origin || "sin origen."}</p>
                <p className="p">
                    Tamaño en cm: 
                    <br />
                    Ancho: {breed.weight?.imperial || "sin dato"} cm 
                    <br />
                    Alto: {breed.height?.imperial || "sin dato"} cm
                </p>
                
            </div>
        </div>
    );
};