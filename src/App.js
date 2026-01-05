import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Layout from './components/layout/layout'

// CSS de PrimeReact
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter forceRefresh>

        <Routes>
          {/* Ruta con el layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home/>} />
            {/* Otras rutas pueden ir aquí */}
          </Route>
        </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
