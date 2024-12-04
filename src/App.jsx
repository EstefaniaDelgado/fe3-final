import { Route, Routes } from 'react-router-dom';
import Layout from './Views/Layout/Layout';
import Contact from './Views/Contact';
import Detail from './Views/Detail';
import Home from './Views/Home';
import Favs from './Views/Favs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dentista/:id" element={<Detail />} />
          <Route path="/fav" element={<Favs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
