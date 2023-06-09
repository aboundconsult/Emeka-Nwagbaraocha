import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import About from "./routes/about";
import Contact from './routes/contact';
import Gallery from './routes/gallery';
import Homepage from './routes/home';
import Layout from './containers/layout/Layout';
import Media from './routes/media';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage /> } />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
