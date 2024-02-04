import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import NavigationBar from './layout/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from './pages/Episodes';
import Characters from './pages/Characters';
import Locations from './pages/Locations';
import CharacterDetails from './pages/CharacterDetails';
import LocationDetails from './pages/LocationDetails';
import EpisodeDetails from './pages/EpisodeDetails';

function App() {
 
  return (
    <Router>
      <div className="App">
        <div className='row'>
        <div className='col'>
        <NavigationBar></NavigationBar>
        </div>
        </div>
        <div className='row'>
          <div className='col-2'>
          </div>
          <div className='col-8'>
            <div className='row mt-5'>
              <Routes>
                <Route path="/" element={<Characters />} />
                <Route path="/anasayfa" element={<Characters />} />
                <Route path="/bolumler" element={<Episodes />} />
                <Route path="/bolum/:bolumId" element={<EpisodeDetails />} />
                <Route path="/karakterler" element={<Characters />} />
                <Route path="/karakter/:id" element={<CharacterDetails/>} />
                <Route path="/konumlar" element={<Locations />} />
                <Route path="/konum/:konumId" element={<LocationDetails />} />
              </Routes>
            </div>
          </div>
          <div className='col-2'>
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
