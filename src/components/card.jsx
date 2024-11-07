import "/src/targetas.css";
export const Cards = ({ data }) => {
    console.log(data);  // Verifica qué datos estás recibiendo

    // Validamos que 'data' y 'data.breeds' existan y que 'breeds' tenga al menos un elemento
    const breed = (data && data.breeds && Array.isArray(data.breeds) && data.breeds.length > 0) ? data.breeds[0] : {};

    // Asegúrate de que 'breed' tenga propiedades válidas
    const name = breed.name || "Breed Name";
    const temperament = breed.temperament || "Sin temperamento.";
    const breedGroup = breed.breed_group || "Sin grupo de raza.";
    const lifeSpan = breed.life_span || "Sin tiempo de vida.";
    const weight = breed.weight?.imperial || "Sin dato";
    const height = breed.height?.imperial || "Sin dato";

    return (
        <div className="maincontainer card" style={{ width: "18rem" }}>
            {/* Parte frontal */}
            <div className="front">
                <img
                    src={data.url || "default_image_url"} // Usar imagen por defecto si no hay URL
                    alt="Card image cap"
                    className="card-img-top"
                    style={{ width: "100%", height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5> {/* Título de la tarjeta */}
                    <p className="card-text">
                        {breed.temperament}
                    </p>
                </div>
            </div>
            
            {/* Parte trasera */}
            <div className="back">
                <h2>{name}</h2>
                <p className="p">Grupo de raza: {breedGroup}</p>
                <p className="p">Tiempo de vida: {lifeSpan}</p>
                <p className="p">
                    Tamaño en cm: 
                    <br />
                    Ancho: {weight} cm 
                    <br />
                    Alto: {height} cm
                </p>
            </div>
        </div>
    );
};
