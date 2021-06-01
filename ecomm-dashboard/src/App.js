import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <h1>Ecomm Project</h1>
      <button>Simple Button </button>
      <Button>Bootstrap</Button>
      </BrowserRouter>
    </div>
  );
}

export default App;
