import React,{useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import './CardDetail.css';

const CardDetail = () => {
    let {id}=useParams();
    let [fetchedData, updateFetchData]=useState([]);
    let api=`https://rickandmortyapi.com/api/character/${id}`;
    let{name,image, location, origin, gender, species, status, type}=fetchedData

    useEffect(()=>{

        (async function(){
          let data=await fetch(api).then((res)=>res.json());
          updateFetchData(data);
        })();
    
      },[api]);

  return (
    <div className="character-card-container">
      <div className="character-card-content">
        <h1 className="character-name">{name}</h1>
        <img src={image} alt={name} className="character-image img-fluid" />
        <h3 className="character-info">Species: {species}</h3>
        <h3 className="character-info">Gender: {gender}</h3>
        <h3 className="character-info">Location: {location?.name}</h3>
        <h3 className="character-info">Origin: {origin?.name}</h3>
        <h3 className="character-info">Status: {status}</h3>
      </div>
    </div>
  )
}

export default CardDetail
