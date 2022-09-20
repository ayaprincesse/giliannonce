import React from 'react'
import * as d3 from 'd3';
import {useData } from '../components/charts2/useData';
import {csv, arc , pie, scaleBand, scaleLinear, max, format, ticks } from 'd3';
import {BrowserRouter as Router, Route, Routes , useLocation} from "react-router-dom";
import { useLayoutEffect } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
<script src="https://unpkg.com/d3@7.6.1/dist/d3.min.js"></script>


const width = 700; 
const height = 300; 
const margin = {top:50, bottom:20, left:150, right:20 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right ; 

const Barchart2 = () => {
  const data= useData();

  if (!data) {return <pre>Loading ...</pre>}
 

  const xScale = scaleLinear()
  .domain([0,max(data.manager.values())])
  .range([0, innerWidth]);
  //console.log(xScale.ticks(3))

  const yScale= scaleBand()
  .domain(data.manager.keys())
  .range([0, innerHeight])
  .padding(0.1);

  return (
    <>
    <>
    {/* <Typography width= {width} >H.Planifiées</Typography> */}
    <svg width={width} height={height}>  
    <g transform = {`translate(${margin.left},${margin.top})`}>
      
      <AxisLeft yScale={yScale}/>
      <AxisBottom xScale={xScale} innerHeight={innerHeight} />
      <Marks data={data} yScale={yScale} xScale={xScale} formatRect={format(",.2r")}/>
    </g>
    </svg></>
    {/* <svg>
    <TestMap data={data} yScale={yScale}/></svg> */}
    </>
)
}
export default Barchart2

const AxisBottom = ({xScale, innerHeight}) => 
   xScale.ticks().map(tickValue => (
     <g className ="ticks" key={tickValue} transform={`translate(${xScale(tickValue)},0)`} >
       <line 
       y2={innerHeight}
       stroke={"#c7c7c7"}
       />
       <text style={{ textAnchor: 'middle'}} dy=".71em" y = {innerHeight+4} >
       {tickValue}
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


// const Marks = ({data, yScale, xScale, formatRect}) =>(

// <rect
//   className="mark"
//    x={0}
//    fill = {"#ffb8e2"}
//    y={d=>yScale(d.Manager)} 
//    width={xScale(data.manager.get("Mareme"))}
//    height={yScale.bandwidth()} >
//   <title>{formatRect(data.manager.values()) }</title>
// </rect>);

// const Marks = ({data, yScale, xScale, formatRect}) =>(
//     data.manager2.map(function(key){
//   return(<><rect x={0} fill = {"#ffb8e2"} y={yScale(key[0])} width={xScale(key[1])} height={yScale.bandwidth()/2} >
//   <title>{key[0]}</title>
//   </rect>
//   <rect x={0} fill = {"blue"} y={(data.manager3.forEach(function(key){return yScale(key[0])}))} width={data.manager3.forEach(function(key){return xScale(key[1])})} height={yScale.bandwidth()/2} >
//   <title>{data.manager3.keys([0])}</title>
//   </rect></>)}));

// const Marks = ({data, yScale, xScale, formatRect}) =>(
//   data.manager2.map(function(key){
// return(<><rect x={0} fill = {"#ffb8e2"} y={yScale(key[0])} width={xScale(key[1])} height={yScale.bandwidth()/2} >
// <title>{key[0]}</title>
// </rect>
// <rect x={0} fill = {"blue"} y={(data.manager3.forEach(function(key){return yScale(key[0])}))} width={data.manager3.forEach(function(key){return xScale(key[1])})} height={yScale.bandwidth()/2} >
// <title>{data.manager3.keys([0])}</title>
// </rect></>)}));
const Marks = ({data, yScale, xScale, formatRect}) =>(
<><rect x={0} fill = {"#ffb8e2"} y={yScale(data.manager2[0][0])} width={xScale(data.manager2[0][1])} height={yScale.bandwidth()/3} >
<title>{"Planifie mareme"}</title>
</rect><rect x={0} fill = {"#ffb8e2"} y={yScale(data.manager2[1][0])} width={xScale(data.manager2[1][1])} height={yScale.bandwidth()/3} >
<title>{"Planifie rACHAD"}</title>
</rect>
<rect x={0} fill = {"#a7d7ff"} y={yScale(data.hrealise[0][0])+33} width={xScale(data.hrealise[0][1])} height={yScale.bandwidth()/3} >
<title>{"realise mareme"}</title>
</rect><rect x={0} fill = {"#a7d7ff"} y={yScale(data.hrealise[1][0])+33} width={xScale(data.hrealise[1][1])} height={yScale.bandwidth()/3} >
<title>{"realise rACHAD"}</title>
</rect>
<rect x={0} fill = {"#9DD89D"} y={yScale(data.habsente[0][0])+66} width={xScale(data.habsente[0][1])} height={yScale.bandwidth()/3} >
<title>{"absente mareme"}</title>
</rect><rect x={0} fill = {"#9DD89D"} y={yScale(data.habsente[1][0])+66} width={xScale(data.habsente[1][1])} height={yScale.bandwidth()/3} >
<title>{"absente rACHAD"}</title>
</rect></>);
