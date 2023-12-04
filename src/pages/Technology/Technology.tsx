import * as React from "react";
import { useState } from "react";
import data from "../../assets/data/data.json";
import "./index.scss";

const Technology = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(
    data.technology[0]
  );

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (technologyIndex: number, index: number) => {
    setSelectedTechnology(data.technology[technologyIndex]);
    setActiveButton(index);
  };

  return (
    <div className="technology technology_background-img">
      <div className="technology__block">
        <h3 className="technology__block-title">
          <span className="technology__text-bold">03</span> space launch 101
        </h3>
        <div className="technology__info">
          <div className="technology__block-buttons">
            {data.technology.map((technology, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index, index)}
                className={`technology__btn ${
                  activeButton == index ? "active" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="technology__block-info">
            <p className="technology__pretitle">the terminology</p>
            <h2 className="technology__title">{selectedTechnology.name}</h2>
            <p className="technology__subtitle">
              {selectedTechnology.description}
            </p>
          </div>
          <img
            src={selectedTechnology["image-portrait"]}
            alt={selectedTechnology.name}
            className="technology__image"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
