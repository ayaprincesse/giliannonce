
// import About component
// import ContactUs component
import './App.css';
import Barchart1 from './pages/Barchart1';
import Barchart2 from './pages/Barchart2';
import Barchart3 from './pages/Barchart3';
import Home from "./pages/Home";
//import Arc from "./pages/Arc";
//import BarChart from './components/charts2/BarChart.js';
import * as d3 from 'd3';
import {useData } from './components/charts2/useData';
import {AxisBottom } from './components/charts2/AxisBottom';
import {AxisLeft } from './components/charts2/AxisLeft';
import {Marks } from './components/charts2/Marks';
import {csv, arc , pie, scaleBand, scaleLinear, max, format } from 'd3';
import {BrowserRouter as Router, Route, Routes , useLocation} from "react-router-dom";
import { useLayoutEffect } from 'react';
<script src="https://unpkg.com/d3@7.6.1/dist/d3.min.js"></script>
//fetch data from git gist

const width = 960; 
const height = 500; 
// const margin = {top:50, bottom:20, left:200, right:20 };
// const innerHeight = height - margin.top - margin.bottom;
// const innerWidth = width - margin.left - margin.right ; 

// const Wrapper = ({children}) => {
//   const location = useLocation();
//   useLayoutEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, [location.pathname]);
//   return children
// } 


// function App() {  

  
//   const data= useData();
//   const xScale = scaleLinear()
//   .domain([0,data.total1])
//   .range([0, innerWidth]);
//   //console.log(xScale.ticks(3))

//   const yScale= scaleBand()
//   .domain(data.test.keys())
//   .range([0, innerHeight])
//   .padding(0.1);
  

//   return (
//     <div>
//     <svg width={width} height={height}>  
//     <g transform = {`translate(${margin.left},${margin.top})`}>
//       <AxisLeft yScale={yScale}/>
//       <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={format('')}/>
//       <Marks data={data} yScale={yScale} xScale={xScale} formatRect={format(",.2r")}/>
//     </g>
//     </svg>

//   <div className="App">

//     <Router >
//        <Wrapper>
//       {/* <Navbar /> */}
//       <Routes>
//          {/* <Route  index  element={<Home />}/> */}

//       </Routes>
//       </Wrapper>
//     </Router>
    
    
//     </div></div>
//     );
//     }
function App(){
  return (
   <div>
      <Router >
    <Routes>
    <Route  index  element={<Home />}/>
    </Routes>
    </Router>
    <Barchart1/>
    <Barchart2/>
    <Barchart3/>
    {/* <FaceContainer  width={width}  height ={height } centerx = {width/2} 
                centery = {height/2} eyex = {15} eyey = {17 }/> */}
   {/*  <Arc/>*/}
    </div>
  ) 
}
export default App;