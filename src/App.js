import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Listado from './Components/Listado';
import Detail from './Components/Detail';
import { useState } from 'react';

function App() {
  
  const [user, setUser] = useState([])

  return (
    <div>
      
      <Routes>
        <Route path="/" element={!user.length > 0
          ? <Login setUser={setUser} />
          : <Listado user={user} setUser={setUser} />} />

        <Route path="/listado" element={<Listado />} />
        <Route path="/detail/:name/:image/:type/:tags/:town/:description" element={<Detail />} />
      </Routes>

    </div>
  );
}

export default App;
