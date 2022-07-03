import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Cards from './components/Cards';
import Footer from './components/Footer';
import City from './components/City';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Link} from 'react-router-dom';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(cities.filter(ciudad => ciudad.id !== id));

  }

 

  function onSearch(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then((resource) => {
      if(resource.main !== undefined){
          const city = 
          {
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: resource.main.temp,
            name: resource.name,
            weather: resource.weather[0].main,
            clouds: resource.clouds.all,
            latitud: resource.coord.lat,
            longitud: resource.coord.lon
          };
          setCities(cities => [...cities, city]);
          
          } else {
          alert("Ciudad no econtrada.")
        }})
  }
  return ( 
   <BrowserRouter>
    <Nav onSearch={onSearch}></Nav> 
    <Routes>
      <Route path='/' element={
        <Cards 
          cities={cities}
          onClose={onClose}></Cards>}>
      </Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path={`/ciudad/:cityId`} element={<City cities={cities} ></City>}></Route>
      {/* Necesito pasar solo una ciudad */}
      <Route path='*' element={<h2>Upps!!</h2>}></Route>
      
    </Routes>
    <Footer></Footer>
   </BrowserRouter>
   );
}

export default App
