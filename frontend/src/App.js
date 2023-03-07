import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MapContainer from "./Components/Parking/MapContainer.js"
import MainTablewithsearch from "./Components/Tablewithsearch/MainTablewithsearch.js"
import Tablewithsearch from "./Components/Tablewithsearch/Tablewithsearch.js"
import Tablewithsearchsibling from "./Components/Tablewithsearch/Tablewithsearchsibling.js"
import AntdTablewithsearch from "./Components/Tablewithsearch/AntdTablewithsearch.js"
import Navbar from "./Components/Navbar/index.js"
import GuestPopup from "./Components/GuestPopup/index"
import OnboardingSlides from "./Components/OnboardingSlides/index"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/sass/Common/custom.scss"

const App = () => {
  return (
    <div className="App section-inner">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainTablewithsearch />} />
          <Route exact path="/table" element={<MainTablewithsearch />} />
          <Route exact path="/sample" element={<Tablewithsearchsibling />} />
          <Route exact path="/antdtable" element={<AntdTablewithsearch />} />
          <Route exact path="/blog" element={<GuestPopup />} />
          <Route exact path="/projects" element={<OnboardingSlides />} />
        </Routes>
      </Router>

      {/* <Parkingmap /> */}
      {/* <MapContainer /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
    </div>
  )
}

export default App
