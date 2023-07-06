import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Listado from './Components/Listado';
import Detail from './Components/Detail';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />} >
        <Route path="/listado" element={<Listado />} />
        <Route path="/detail/:name/:image/:type/:tags/:town/:description" element={<Detail />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
