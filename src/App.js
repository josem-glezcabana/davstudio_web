import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Layout from './components/layout/layout'
import ProductList from './components/products/productList';
import ProductDetail from './components/products/productDetail';
import Contact from './components/contact/contact';
// import About from './components/about/about';

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
            <Route path="/" element={<Home />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<ProductDetail />} />
            <Route path='/contact' element={<Contact />} />
            {/*<Route path='/about' element={<About/>} /> */}
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
