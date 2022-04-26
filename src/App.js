import './App.css';
import { CardWidget } from './components/CardWidget';
import Contador from './components/contador';
import ItemListContainer from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

function App() {
  return (< >
  <div className='container mx-auto'>
    <Navbar/>
    <ItemListContainer titulo='Coder House' greeting='Bienvenidos al curso de react!'></ItemListContainer>
    <Contador></Contador>
   
</div>
</>)
}

export default App;
