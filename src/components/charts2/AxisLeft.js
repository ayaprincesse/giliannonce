export const AxisLeft=({yScale})=>
   yScale.domain().map(tickValue => (
    <g className = "ticks" key={tickValue}>   
   <text key={tickValue} style={{ textAnchor: 'end'}} 
   y ={yScale(tickValue)+ yScale.bandwidth()/2}
   x={-5}>
   {tickValue}
   </text>
   </g>));