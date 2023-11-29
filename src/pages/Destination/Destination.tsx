import * as React from "react";
import { useState } from "react";
import data from "../../assets/data/data.json";
import "./index.scss";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    data.destinations[0]
  );

  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (destinationIndex: number, index: number) => {
    setSelectedDestination(data.destinations[destinationIndex]);
    setActiveButton(index);
  };

  return (
    <div className="destination destination_background-img">
      <div className="destination__block">
        <h3 className="destination__block-title">
          <span className="destination__text-bold">01</span> pick your
          destination
        </h3>
        <div className="destination__info">
          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
            className="destination__image"
          />
          <div className="destination__text">
            <div className="destination__buttons">
              {data.destinations.map((destination, index) => (
                <button
                  key={index}
                  onClick={() => handleButtonClick(index, index)}
                  className={`destination__btn ${
                    activeButton == index ? "active" : ""
                  }`}
                >
                  {destination.name}
                </button>
              ))}
            </div>
            <h2 className="destination__title">{selectedDestination.name}</h2>
            <p className="destination__subtitle">
              {selectedDestination.description}
            </p>
            <hr className="destination__hr" />
            <div className="destination__distance-block">
              <div className="destination__distance">
                <p className="destination__distance-title">avg. distance</p>
                <h4 className="destination__distance-subtitle">
                  {selectedDestination.distance}
                </h4>
              </div>
              <div className="destination__distance">
                <p className="destination__distance-title">est. travel time</p>
                <h4 className="destination__distance-subtitle">
                  {selectedDestination.travel}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
