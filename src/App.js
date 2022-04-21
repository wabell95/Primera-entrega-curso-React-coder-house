import './App.css';
import ItemListContainer from './components/ItemListContainer';
import { Navbar } from './components/Navbar';

function App() {
  return (< >
  <div className='container mx-auto'>
    <Navbar/>
    <ItemListContainer titulo='Coder House' greeting='Bienvenidos al curso de react!'></ItemListContainer>
</div>
</>)
}

export default App;
