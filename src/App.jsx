
import { Route, Routes } from 'react-router';
import ModuleOne from './components/ModuleOne/ModuleOne';
import ModuleTwo from './components/ModuleTwo/ModuleTwo';

const App = () => {
  return (
        <div className="">
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path='/' element={<ModuleOne/>}></Route>
            <Route path='/love' element={<ModuleTwo/>}></Route>
          </Routes>
        </div>
  );
};

export default App;
