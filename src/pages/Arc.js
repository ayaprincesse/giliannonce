import React from 'react'
//import {arc, pie} from 'd3';
import { Box } from '@mui/material';
import {useData } from '../components/charts2/useData';
import * as d3 from 'd3';
import {
  select,
  json,
  pie,
  arc,
  scaleOrdinal,
  format,
  csv
} from 'd3';
const Arc = () => {
  const data= useData();
  if (!data) {return <pre>Loading ...</pre>}
    const mouth = arc()
    .innerRadius(150)
    .outerRadius(100)
    .startAngle(Math.PI *3/2)
    .endAngle(Math.PI *5/2);

} 
//   return (<Box><svg width= {900} ><g transform={`translate(400, 150)`} ><path d={mouth()}/></g></svg></Box>
//   )
// }
export default Arc
