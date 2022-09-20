export const AxisBottom = ({xScale, innerHeight, tickFormat}) => 
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