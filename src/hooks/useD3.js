//Create a custom hook to use D3 js

import React from 'react';
import * as d3 from 'd3';

//this function is a hook that accepts two arguments
//renderChartFn : is a callback that contains your D3.js code to be executed
//dependencies is a fixed-length array to tell React when to run the "RenderCartFn". 
//this is useful for preventing unnecessary  re-endering and updating the chart correctly when new data arrives.

export const useD3 = (renderChartFn, dependencies) => {
 const ref = React.useRef();
React.useEffect(()=>{
    renderChartFn(d3.select(ref.current));
    return()=>{};
}, dependencies);
    return ref;
}

export default useD3