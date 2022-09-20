import React from 'react'
import * as d3 from 'd3';
import {useData } from '../components/charts2/useData';
import {csv, arc , pie, scaleBand, scaleLinear, max, format, ticks , scaleOrdinal} from 'd3';
import {BrowserRouter as Router, Route, Routes , useLocation} from "react-router-dom";
import { useLayoutEffect } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ColorLegend from './ColorLegend';

<script src="https://unpkg.com/d3@7.6.1/dist/d3.min.js"></script>


const width = 600; 
const height = 300; 
const margin = {top:50, bottom:20, left:100, right:20 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right ; 
const Barchart1 = () => {
  const data= useData();

  if (!data) {return <pre>Loading ...</pre>}
 

  const xScale = scaleLinear()
  .domain([0,data.total1])
  .range([0, innerWidth]);
  //console.log(xScale.ticks(3))

  const yScale= scaleBand()
  .domain(data.test.keys())
  .range([0, innerHeight])
  .padding(0.1);

  const colorScale = scaleOrdinal()
  .domain(['Offre_Verte_Elec', 'Offre_Verte_Gaz'])
  .range(['#ffb8e2','#CCB4FB'])


  return (
    <svg width={width} height={height}>  
    <g transform = {`translate(${margin.left},${margin.top})`}>
    <g  transform = {`translate(${innerWidth-150},-30)`}><ColorLegend colorScale={colorScale}/></g>
      <AxisLeft yScale={yScale}/>
      <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={format('')}/>
      <Marks data={data} yScale={yScale} xScale={xScale} formatRect={format(",.2r")}/>
    </g>
    </svg>
)
}

export default Barchart1;

const AxisBottom = ({xScale, innerHeight, tickFormat}) => 
   xScale.ticks().map(tickValue => (
     <g className ="ticks" key={tickValue} transform={`translate(${xScale(tickValue)},0)`} >
       <line 
       y2={innerHeight}
       stroke={"#c7c7c7"}
       />
       <text style={{ textAnchor: 'middle'}} dy=".71em" y = {innerHeight+4} >
       {tickFormat(tickValue)}
       </text>
     </g>
   ));

const AxisLeft=({yScale})=>
   yScale.domain().map(tickValue => (
    <g className = "ticks" key={tickValue}>   
   <text key={tickValue} style={{ textAnchor: 'end'}} 
   y ={yScale(tickValue)+ yScale.bandwidth()/2}
   x={-5}>
   {tickValue}
   </text>
   </g>));

const Marks = ({data, yScale, xScale, formatRect}) =>(
    <g> 
  {/* <rect
  className="mark"
   x={0}
   fill = {"#ffb8e2"}
   y={20} 
   width={xScale(data.total1)}
   height={yScale.bandwidth()/3} >
      <title>{"Offre Verte Gaz " + formatRect(data.total1)}</title>
      </rect>
      <rect
  className="mark2"
   x={0}
   fill = {"#d8edf0"}
   y={60} 
   width={xScale(data.total2)}
   height={yScale.bandwidth()/3} >
      <title>{"Offre Verte Elec " + formatRect(data.total2)}</title>
      </rect> */}
      <rect x={0} fill = {"#ffb8e2"} y={yScale(data.total3[0][0])} width={xScale(data.total3[0][1])} height={yScale.bandwidth()/3} >
<title>{"Gaz2"}</title></rect>
<rect x={0} fill = {"#ffb8e2"} y={yScale(data.total3[1][0])} width={xScale(data.total3[1][1])} height={yScale.bandwidth()/3} >
<title>{"Gaz2"}</title></rect>
<rect x={0} fill = {"#CCB4FB"} y={yScale(data.total4[0][0])+33} width={xScale(data.total3[0][1])} height={yScale.bandwidth()/3} >
<title>{"ELEC2"}</title></rect>
<rect x={0} fill = {"#CCB4FB"} y={yScale(data.total4[1][0])+33} width={xScale(data.total3[1][1])} height={yScale.bandwidth()/3} >
<title>{"ELEC2"}</title></rect>
</g>
);

