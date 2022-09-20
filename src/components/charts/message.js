import * as d3 from 'd3';
export const message = data2 =>{
    let message = '';
     message = message + Math.round(d3.csvFormat(data2).length /1024 )+' KB';
     message = message +data2.length + ' rows';
     message = message +data2.columns.length + ' columns';
     return message;
  };