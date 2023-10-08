import Navbar from './components/navbar/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import NavbarOptions from './components/navbar/navbar_options';
import './App.css'
import Body from './components/body/body';
import {Route,Routes} from 'react-router-dom';
import FullSolar from './components/solar/full_solar';
import PartialSolar from './components/solar/partial_solar';
import FullLunar from './components/solar/full_lunar';
import PartialLunar from './components/solar/partial_lunar';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Navbar/>
      <NavbarOptions/>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/full_solar" element={<FullSolar/>}/>
        <Route path="/partial_solar" element={<PartialSolar/>}/>
        <Route path="/full_lunar" element={<FullLunar/>}/>
        <Route path="/partial_lunar" element={<PartialLunar/>}/>
      </Routes>

      </ChakraProvider>
    </div>
  );
}

export default App;
