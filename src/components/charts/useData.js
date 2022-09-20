import React, {useState, useEffect} from 'react';
import {csv} from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/performautodev/ab00b6300b1a235cde9c57600992b86d/raw/9c2f36181b2f090e91dac0b072405b6fe033e60d/UN_Population_2019.csv';

export const useData = () =>{
    const [data, setdata] = useState(null);
    useEffect(()=>{
      const row = d => {
        d.Population = +d['2020']*10000;
        return d; 
      };
      csv(csvUrl, row).then (data =>{
        setdata(data.slice(0,10));
      });
    },[]);
   return data; 
  }; 