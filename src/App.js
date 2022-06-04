import './App.css';
import './components/FlexBox/Flexbox.css';
import FlexBox from './components/FlexBox/FlexBox'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoFrontPage } from './components/TodoFrontPage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<TodoFrontPage/>}/>
          <Route path='/flexbox-demo' element={<FlexBox/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;