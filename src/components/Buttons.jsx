import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  const handleSatClick = (sat) => {
    filterByType(sat);
  };

  return (
    <div className="flex-container">
      {displaySats.map((sat) => (
        <button
          onClick={() => handleSatClick(sat)}
          key={sat}
        >
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;