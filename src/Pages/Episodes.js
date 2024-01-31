import React,{useState, useEffect} from 'react'
import Cards from '../components/Cards/Cards';
import InputGroup from './InputGroup';

const Episodes = () => {
    let [id, setID] = useState(1);
    let [info, setInfo]=useState([]);
    let [results,setResults] = useState([]);
    let {air_date, name, episode} =info;
    let api =`https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(()=>{
        (async function(){
            let data = await fetch(api).then((res)=>res.json());
            setInfo(data);
            let a = await Promise.all(
                data.characters.map((x)=>{
                    return fetch(x).then((res)=>res.json());
                })

            );
            setResults(a);
        })();
    },[api]);

  return (
    <div className="container">
        <div className="row">
            <h1 className="text-center">{name}</h1>
            <h4 className="text-center">Episode : {episode}</h4>
            <h5 className="text-center">Air Date {air_date}</h5>
        </div>
        <div className="row">
        <div className="col-8">
                <div className="row">

                    <Cards page="/episodes/" results={results}/>
                </div>
            </div>
            <div className="col-3">
                <h4 className="text-center mb-4">
                    Episodes
                </h4>
                <InputGroup setID={setID} total={51}/>
            
            </div>
            


        </div>
    </div>
  )
}

export default Episodes
