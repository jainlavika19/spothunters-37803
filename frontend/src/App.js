import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapContainer from "./Components/Parking/MapContainer.js";
import MainTablewithsearch from "./Components/Tablewithsearch/MainTablewithsearch.js";
import Tablewithsearch from "./Components/Tablewithsearch/Tablewithsearch.js";
import Tablewithsearchsibling from "./Components/Tablewithsearch/Tablewithsearchsibling.js";
import AntdTablewithsearch from "./Components/Tablewithsearch/AntdTablewithsearch.js";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<MapContainer />} />
          <Route exact path="/table" element={<MainTablewithsearch />} />
          <Route exact path="/sample" element={<Tablewithsearchsibling />} />
          <Route exact path="/antdtable" element={<AntdTablewithsearch />} />
        </Routes>
      </Router>

      {/* <Parkingmap /> */}
      {/* <MapContainer /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
