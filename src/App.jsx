import Buttons from "./components/Buttons";
import Table from "./components/Table";
import React, { useState } from "react";
import satData from "./components/satData";
import Banner from "./components/Banners";

 
function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const filteredSats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats);
  };

  return (
    <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </>
  );
}
export default App;