import React, {useState, useEffect} from 'react';
import {csv, sum} from 'd3';
import * as d3 from 'd3';
//import {nest} from 'd3-collection'

const csvUrl = 'https://gist.githubusercontent.com/hafsasunshine/8664b1f0e141a844f2f7a8b3d0f09971/raw/893a27909374d9e2dcef4ba48606ee13219b2b5d/kpiengie.csv';
var	parseDate = d3.isoParse

export const useData = () =>{
    const [data, setdata] = useState(null);
  
    useEffect(()=>{
      const row = d => {
        d.Offre_Verte_Gaz=+d.Offre_Verte_Gaz;
        d.Offre_Verte_Elec=+d.Offre_Verte_Elec;
        d.Date = parseDate(d.Date);
        d.H_Planifiees=+d.H_Planifiees;
        d.H_Realisees=+d.H_Realisees;
        d.H_Absentees=+d.H_Absentees;
        d.ELEC=+d.ELEC;
        d.GAZ=+d.GAZ;
        d.DUALE=+d.DUALE;
        return d; 
      };
      csv(csvUrl, row).then (data =>{
      data.total1 = sum(data, d => d.Offre_Verte_Gaz);
      data.total2= sum(data, d => d.Offre_Verte_Elec);
      data.total3=(d3.rollups(data,v => d3.sum(v, d => d.Offre_Verte_Gaz), d => d3.timeFormat("%b")(d.Date)));
      data.total4= (d3.rollups(data,v => d3.sum(v, d => d.Offre_Verte_Elec), d => d3.timeFormat("%b")(d.Date)));


       data.test=d3.group(data, d => d3.timeFormat("%b")(d.Date));
       data.manager=d3.rollup(data,v => d3.sum(v, d => d.H_Planifiees), d => (d.Manager));
       //to convert the map to an array
       data.manager2=(d3.rollups(data,v => d3.sum(v, d => d.H_Planifiees), d => (d.Manager)));
       data.hrealise=(d3.rollups(data,v => d3.sum(v, d => d.H_Realisees), d => (d.Manager)));
       data.habsente=(d3.rollups(data,v => d3.sum(v, d => d.H_Absentees), d => (d.Manager)));

       data.elec=(d3.rollups(data,v => d3.sum(v, d => d.ELEC), d => d3.timeFormat("%b")(d.Date)));
       data.gaz= (d3.rollups(data,v => d3.sum(v, d => d.GAZ), d => d3.timeFormat("%b")(d.Date)));
       data.duale= (d3.rollups(data,v => d3.sum(v, d => d.DUALE), d => d3.timeFormat("%b")(d.Date)));
       data.txAbs1 = sum(data, d => d.H_Absentees);
       data.txAbs2= sum(data, d => d.H_Planifiees);
       data.txAbs = data.txAbs1/data.txAbs2;
       setdata(data);
       console.log(data.txAbs)
      });
    },[]);
   return data; 
  }; 

  // csv(csvURL)
  // .then(data => {
  //   const total = sum(data, d => d.Offre_Verte_Gaz);
  // });

  // csv(csvURL)
  // .then(data => {
  //   const total = sum(data, d => d.Offre_Verte_Gaz);
  // });