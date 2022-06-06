import './App.css';
import './components/FlexBox/Flexbox.css';
import FlexBox from './components/FlexBox/FlexBox'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoFrontPage } from './components/Todo/TodoFrontPage';
import { Navbar } from './components/Navbar';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
      <BrowserRouter>
      <Navbar/>
      <ToastContainer/>

        <Routes>
          <Route path='/' element={<TodoFrontPage/>}/>
          <Route path='/flexbox-demo' element={<FlexBox/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;