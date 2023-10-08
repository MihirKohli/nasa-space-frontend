import Navbar from './components/navbar/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import NavbarOptions from './components/navbar/navbar_options';
import './App.css'
import Body from './components/body/body';
import {Route,Routes} from 'react-router-dom';
import PartialSolar from './components/solar/partial_solar';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Navbar/>
      <NavbarOptions/>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/solar" element={<PartialSolar/>}/>
      </Routes>

      </ChakraProvider>
    </div>
  );
}

export default App;
