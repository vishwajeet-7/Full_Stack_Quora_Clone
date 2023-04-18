import { Stack } from '@chakra-ui/react';
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Stack bg={'#eeefef'}>
      <Navbar/>
     <AllRoutes/>
    </Stack>
  );
}

export default App;
