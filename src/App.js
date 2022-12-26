
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Bar'
import About from './component/About'
import Projects from './component/Proj'
import Sort from './component/Sort'



function App() {
  return (
 <div class = "back">

    <div class = "Default">
   



      <Router>
      <Navbar />
    
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Sort' element={ <Sort /> } />

        </Routes>
      
    </Router>
    </div>



    
    </div>

  );
}

export default App;
