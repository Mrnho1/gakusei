import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Company from "./components/pages/Company";
import Contacts from './components/pages/Contacts';
import Home from "./components/pages/Home";
import Products from './components/pages/Products';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/gk/src/components/pages/Home.jsx" element={<Home/>}/>
          <Route path="/gk/src/components/pages/Company.jsx" element={<Company/>}/>
          <Route path="/gk/src/components/pages/Contacts.jsx" element={<Contacts/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
