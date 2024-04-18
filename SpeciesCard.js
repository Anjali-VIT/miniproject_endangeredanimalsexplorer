import React from 'react';

const SpeciesCard = ({ species, onClick }) => {
    return (
        <div className="species-card" onClick={onClick}>
            <h3><u>{species.name}</u></h3>
            <img src={species.imageUrl} alt={species.name} />
            <p><b>Scientific Name: </b>{species.scientificName}</p>
        </div>
    );
};

export default SpeciesCard;
