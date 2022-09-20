export const AxisBottom = ({xScale, innerHeight, tickFormat}) => 
    /*we want to make one rectangle for each element of the data 
       take each row d and turn it into svg rect*/
       xScale.ticks().map(tickValue => (
         <g className ="ticks" key={tickValue} transform={`translate(${xScale(tickValue)},0)`} >
           <line 
          /* x1={xScale(tickValue)}
           x2={xScale(tickValue)}
           y1={0}*/
           y2={innerHeight}
           stroke={"black"}
           />
           <text style={{ textAnchor: 'middle'}} dy=".71em" y = {innerHeight + 4} >
           {tickFormat(tickValue)}
           </text>
         </g>
       ));
 