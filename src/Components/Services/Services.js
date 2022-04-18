import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('services.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
    return (
     <div>
        <h1 className='text-center text-primary mt-3'>Services</h1>
        <div className='service'>
            {
              data.map(data=><Service key={data.id} data={data}></Service>)
            }
        </div>
     </div>
    );
};

export default Services;