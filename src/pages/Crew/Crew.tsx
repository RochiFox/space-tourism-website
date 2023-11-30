import * as React from "react";
import { useState } from "react";
import data from "../../assets/data/data.json";
import "./index.scss";

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(data.crew[0]);

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (crewIndex: number, index: number) => {
    setSelectedCrew(data.crew[crewIndex]);
    setActiveButton(index);
  };

  return (
    <div className="crew crew_background-img">
      <div className="crew__block">
        <h3 className="crew__block-title">
          <span className="crew__text-bold">02</span> meet your crew
        </h3>
        <div className="crew__info">
          <div className="crew__text">
            <p className="crew__pretitle">{selectedCrew.role}</p>
            <h2 className="crew__title">{selectedCrew.name}</h2>
            <p className="crew__subtitle">{selectedCrew.bio}</p>
            <div className="crew__buttons">
              {data.crew.map((crew, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index, index)}
                  className={`crew__btn ${
                    activeButton == index ? "active" : ""
                  }`}
                ></button>
              ))}
            </div>
          </div>
          <img
            src={selectedCrew.image}
            alt={selectedCrew.name}
            className="crew__image"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
