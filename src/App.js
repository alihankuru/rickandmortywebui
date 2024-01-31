import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import FavoriteCharactersPage from "./components/Favorites/FavoriteCharacterPage";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import backgroundImage from './Photos/rick-and-morty.jpg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Episodes from './Pages/Episodes';
import CardDetail from './components/Cards/CardDetail';
function App(){
  return(
    <Router>
      <div className="app">
        <Navbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetail/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/episodes/:id" element={<CardDetail/>}/>
      </Routes>

    </Router>
  )
}

const Home=() =>{
  
  
  let [pageNumber, setPageNumber]=useState(1);
  let [fetchedData, updateFetchData]=useState([]);
  let {info, results}=fetchedData;
  let [search, setSearch] = useState("");
  const totalPages = info ? info.pages : 1;
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  // let api = `http://localhost:14941/api/Character`;
  useEffect(()=>{

    (async function(){
      let data=await fetch(api).then((res)=>res.json());
      updateFetchData(data);
    })();

  },[api]);



  return (
    <div className="App">
      
      
      
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div className="container">
        <div className="row">
          <div className="col-3">
          <FavoriteCharactersPage />
            
          </div>
          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results}/>
              
            </div>

          </div>
        </div>
        
      </div>



      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} />
    </div>
  );
}

export default App;
