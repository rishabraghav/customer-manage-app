import './App.css';
import Home from './Components/Home';
import Customers from './Components/Customers';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBar';



function App() {
  return (

    <div className="App flex h-screen">
      <NavBar />

      <div className='flex w-full flex-col'>

        <SearchBar />

        <div className='w-full h-5/6 flex justify-center'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/customers' element={<Customers />} />
          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;
