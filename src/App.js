import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import AddEdit from './Pages/AddEdit';
import Home from './Pages/Home';
import View from './Pages/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add from './Pages/Add';
import Search from './Pages/Search';
import Dashboard from './Dashboard';
import Menu from './Menu';
import EmpContactMgr from './Pages/Home';

//Packages

//npm install react-router-dom
//npm install react-toastify
//npm install firebase

function App() {
  return (
        <>
          <BrowserRouter>
      <Menu />
  
      <ToastContainer position='top-center' />
      <Routes>
      
        <Route path="/" element={<Home />} />
        
        <Route path="/add" element={<AddEdit />} />
        <Route path="/update/:id" element={<AddEdit />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        
      </Routes>
      
      </BrowserRouter>  
        </>
         
    
  );
}

export default App;
