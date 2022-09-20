import React from 'react'
import * as d3 from 'd3';
import {useData } from '../components/charts2/useData';
import {csv, arc , pie, scaleBand, scaleLinear, max, format, ticks, scaleOrdinal } from 'd3';
import { Box } from '@mui/material';
import ColorLegend from './ColorLegend';
import Typography from '@mui/material/Typography';
<script src="https://unpkg.com/d3@7.6.1/dist/d3.min.js"></script>

const width = 700; 
const height = 300; 
const margin = {top:20, bottom:30, left:80, right:20 };
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right ; 


const Barchart3 = () => {
    const data= useData();
  if (!data) {return <pre>Loading ...</pre>}

  const xScale = scaleBand()
  .domain(data.elec.map(function(key){return key[0]}))
  .range([0, innerWidth])
  .padding(0.1);

  const yScale= scaleLinear()
  .domain([ max(data.elec.map(function(key){return key[1]})),0 ])
  .range([0, innerHeight]);
  
    const colorScale = scaleOrdinal()
    .domain(['ELEC', 'GAZ','DUALE'])
    .range(['#ffb8e2','#a7d7ff','#9DD89D' ])

  return (
   <>{/*<Typography width= {width}>Ventes Nettes</Typography>*/}
   <svg width={width} height={height}>  
    <g transform = {`translate(${margin.left},${margin.top})`}>
        <g  transform = {`translate(${innerWidth-70},0)`}><ColorLegend colorScale={colorScale}/></g>
    <AxisLeft yScale={yScale} innerHeight={innerHeight} innerWidth={innerWidth}/>
    <AxisBottom xScale={xScale} innerHeight={innerHeight} />
    <Marks data={data} yScale={yScale} xScale={xScale} innerHeight= {innerHeight} formatRect={format(",.2r")}/>
         </g>
    </svg></> 
  )
}

export default Barchart3

const AxisBottom = ({xScale, innerHeight}) => 
   xScale.domain().map(tickValue => (
    <g className = "ticks" key={tickValue}>   
    <text key={tickValue} style={{ textAnchor: 'end'}} 
    y ={innerHeight + 20}
    x={xScale(tickValue)+ xScale.bandwidth()/2}>
    {tickValue}
    </text>
    </g>
));

const AxisLeft = ({yScale, innerHeight , innerWidth})=>
    yScale.ticks(5).map(tickValue =>(
        <g className ="ticks" key={tickValue} transform={`translate(0,${yScale(tickValue)})`} >
       <line 
       x2={innerWidth-60}
       stroke={"#c7c7c7"}
       />
       <text style={{ textAnchor: 'middle'}} dy=".31em" y={yScale} >
       {(tickValue)}
       </text>
     </g>
    ));


const Marks = ({data, yScale, xScale, formatRect, innerHeight}) =>(
    data.elec.map(function(key){
  return(<><rect x={xScale(key[0])+ 10} fill = {"#ffb8e2"} y ={ yScale(key[1])} height={yScale(0) - yScale(key[1])} width={xScale.bandwidth()/4} >
  <title>{"ELEC "+key[0] +" "+ key[1]}</title>
  </rect>
  <rect x={xScale(data.gaz[0][0])+75} fill = {"#a7d7ff"} y ={ yScale(data.gaz[0][1])} height={yScale(0) - yScale(data.gaz[0][1])} width={xScale.bandwidth()/4} >
  <title>{"GAZ "+data.gaz[0][0] + " " + data.gaz[0][1]}</title>
  </rect><rect x={xScale(data.gaz[1][0])+67} fill = {"#a7d7ff"} y ={ yScale(data.gaz[1][1])} height={yScale(0) - yScale(data.gaz[1][1])} width={xScale.bandwidth()/4} >
  <title>{"GAZ "+data.gaz[1][0] + " " + data.gaz[1][1]}</title>
  </rect>
  <rect x={xScale(data.duale[0][0])+140} fill = {"#9DD89D"} y ={ yScale(data.duale[0][1])} height={yScale(0) - yScale(data.duale[0][1])} width={xScale.bandwidth()/4} >
  <title>{"DUALE "+data.duale[0][0] + " " + data.duale[0][1]}</title>
  </rect><rect x={xScale(data.duale[1][0])+124} fill = {"#9DD89D"} y ={ yScale(data.duale[1][1])} height={yScale(0) - yScale(data.duale[1][1])} width={xScale.bandwidth()/4} >
  <title>{"DUALE "+data.duale[1][0] + " " + data.duale[1][1]}</title>
  </rect>
  </>)}));
