export const ColorLegend =({colorScale, tickSpacing= 20,tickSize= 10})=> 
     colorScale.domain().map((domainValue, i)=>(
            <g transform={`translate(0,${i * tickSpacing})`}>
                <circle fill = {colorScale (domainValue)} r={tickSize} />
                <text dy=".32em">{domainValue}</text>
            </g>
        ));

export default ColorLegend