
export const Marks = ({data, yScale, xScale, formatRect}) =>(
/*rendering marks; for each data element we are producing a rectangle*/
data.map(d=> 
<rect
className="mark"
 x={0}
 //yScale controls the spacing betweeen the bars(app.js)
 y={yScale(d.Country)} 
 width={xScale(d.Population)}
 height={yScale.bandwidth()} >
    <title>{formatRect(d.Population)}</title>
    </rect>));