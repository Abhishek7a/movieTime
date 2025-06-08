import './App.css';
import Navigation from './components/Navigation';
import Fotter from './components/Fotter';
import Home from './pages/Home';
import SoloMovie from './components/SoloMovie';
import Pagetemplate from './components/PageTemplate';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router basename="/movieTime">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/movies/:id' element={<SoloMovie url="/movie" />} />
          <Route exact path='/tv/:id' element={<SoloMovie url="/tv" type="tv" />} />
          <Route exact path='/tvShow' element={<> <Navigation /> <Pagetemplate url="discover/tv" type="tv" /> </>} />
          <Route exact path='/movies' element={<> <Navigation /> <Pagetemplate url="discover/movie" /> </>} />
          <Route exact path='/plays' element={<> <Navigation /> <Pagetemplate url="movie/now_playing" /> </>} />
        </Routes>
        <Fotter />
      </Router>

    </>
  );
}

export default App;
