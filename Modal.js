import React from 'react';

const Modal = ({ species, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="modal-body">
                    <div className="image-container">
                        <img src={species.imageUrl} alt={species.name} />
                    </div>
                    <div className="species-details">
                        <h2><u>{species.name}</u></h2>
                        <p><b>Scientific Name: </b>{species.scientificName}</p>
                        <p><b>Habitat: </b>{species.habitat}</p>
                        <p><b>Threats: </b>{species.threats.join(", ")}</p>
                        <p><b>Conservation Efforts: </b>{species.conservationEfforts.join(", ")}</p>
                        <p>{species.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
