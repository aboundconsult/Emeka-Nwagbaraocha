import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './containers/layout/Layout';
import Homepage from './routes/home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage /> } />
          <Route path="/about" element={<h1> HELLO ABOUT PAGE </h1>} />
          <Route path="/gallery" element={<h1> HELLO GALLERY </h1>} />
          <Route path="/media" element={<h1> MEDIA </h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
