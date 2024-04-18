import React, { useState } from 'react';
import './App.css';
import SpeciesCard from './SpeciesCard';
import Modal from './Modal';
import { speciesData } from './speciesData';

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm("");
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleCardClick = (species) => {
        setSelectedSpecies(species);
    };

    const handleCloseModal = () => {
        setSelectedSpecies(null);
    };

    let filteredSpecies = speciesData.filter(species =>
        (species.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         species.scientificName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedCategory === "" || species.category === selectedCategory)
    );

    return (
        <div>
            <h1 className="textCenter"><center><u>Endangered Species Explorer</u></center></h1>
            <div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search by species name or scientific name"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />&nbsp;&nbsp;
                    <button onClick={handleClearSearch}>Clear</button>
                </div>
                <div className="search-bar">
                    <label htmlFor="category"><b>Category:</b></label>&nbsp;&nbsp;
                    <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">All Categories</option>
                        <option value="Big Cats">Big Cats</option>
                        <option value="Bears">Bears</option>
                        <option value="Rhinoceros">Rhinoceros</option>
                        <option value="Aquatic">Aquatic</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="species-grid">
                    {filteredSpecies.map(species => (
                        <SpeciesCard
                            key={species.id}
                            species={species}
                            onClick={() => handleCardClick(species)}
                        />
                    ))}
                </div>
                {selectedSpecies && <Modal species={selectedSpecies} onClose={handleCloseModal} />}
            </div>
        </div>
    );
};

export default App;
