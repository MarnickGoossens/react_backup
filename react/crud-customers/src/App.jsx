import './App.css';

import Detail from './components/detail';
import List from './components/list';
import { Outlet, BrowserRouter, Route, Routes } from 'react-router-dom';


function Main() {
  return (
    <div className="content">
      <h2 className="main-header">React Crud Customers</h2>
      <Routes>
      <Route path={'/create'} element={<Detail/>}></Route>
        <Route path={'/'} element={<Outlet />}>
          <Route index element={<List />} />
          <Route path={':id'} element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;