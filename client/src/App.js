import './styles/common.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout.jsx';
import Main from './pages/Main.jsx';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            {/* <Route path='/'/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

