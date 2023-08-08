import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleShowPage from './pages/SingleShowPage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:showId" element={<SingleShowPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
