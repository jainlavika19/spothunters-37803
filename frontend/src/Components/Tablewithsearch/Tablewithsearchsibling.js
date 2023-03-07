import React from "react";
import { useSelector } from 'react-redux';

const Tablewithsearchsibling =()=>{
    const sampledataresp = useSelector((state) => state.sampleSliceData.value.data);
    console.log('sampledataresp in sibling component', sampledataresp);
return(
    <>
    <div>{sampledataresp?.map((data, key)=>(
        <h2 key={key}>{data?.name}</h2>
    ))}</div>
    </>
)
}

export default Tablewithsearchsibling;