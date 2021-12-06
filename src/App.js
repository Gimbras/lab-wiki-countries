import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom'
import countriesJson from './countries.json';
import {useState} from 'react'
import Navbar from './components/Navbar';



  

function App() {
  
  return (
    <div className="App">
     <Navbar />         
     <CountriesList />
     <Routes>
       <Route path="countries/:cca3" element={ <CountryDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
