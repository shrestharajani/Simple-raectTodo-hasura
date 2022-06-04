import './App.css';
import Form from './components/Form';
import DisplayComponent from './components/DiaplayComponent'

function App() {
  return (
    <div className="App">
      <header>React Todo</header>
      {/* <h1 style={{textAlign:'center'}}>Todo Lists</h1>
      <div className='card'>
        <div className='card-body'>
          <Form/>
        </div>
      </div> */
      <DisplayComponent/>
      }
    </div>
  );
}

export default App;