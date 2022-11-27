import './App.css';
import Home from './Pages/Home';
import Donate from './Pages/Donate';
import Adopt from './Pages/Adopt';
import Analytics from './Pages/Analytics';
import Rescue from './Pages/Rescue';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/donate' element={< Donate />}></Route>
        <Route exact path='/adopt' element={< Adopt />}></Route>
        <Route exact path='/rescue' element={< Rescue />}></Route>
        <Route exact path='/community' element={< Rescue />}></Route>
        <Route exact path='/analytics' element={< Analytics />}></Route>

        </Routes>
      </Router>
    </div>

  );
}

export default App;
