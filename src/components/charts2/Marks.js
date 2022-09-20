export const Marks = ({data, yScale, xScale, formatRect}) =>(
   data.map(d=> 
     <g>  <rect
   className="mark"
    x={0}
    y={80} 
    width={xScale(data.total1)}
    height={yScale.bandwidth()/6} >
       <title>{formatRect(data.total1)}</title>
       </rect>
       <rect
   className="mark2"
    x={0}
    fill = {"red"}
    y={120} 
    width={xScale(data.total2)}
    height={yScale.bandwidth()/6} >
       <title>{formatRect(data.total2)}</title>
       </rect></g>
 ));