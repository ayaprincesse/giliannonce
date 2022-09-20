import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Stack from '@mui/material/Stack';
import React, { useEffect, useRef, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import  { addDays } from 'date-fns'
import format from 'date-fns/format';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import {csv} from 'd3';
import * as d3 from 'd3';
import { timeParse } from 'd3';



const Calendar1 = (props) => {
    const [dateSelect, setdateSelect] = useState([]);
   // const [datej, setDatej] = useState('');
   
    var options1=[];
    // console.log(this.prisma.$queryRaw`SELECT * FROM "engie"`)
    useEffect(() => {
      
      props.listDate.map((element,i) => {
        options1.push({label:element.Datej,id:element.Id})
      });
      setdateSelect(options1);
      //console.log("options1",options1);
    },[props.listDate])

// test calendrier 
const [range, setRange] = useState([
  {
  startDate: new Date(),
  endDate : addDays (new Date(), 7),
  key : 'selection'
}])

//test 
const [datej, setDatej] = useState([
  {
  startDate: new Date(),
  key : 'selection'
}])

//open close
const [open, setOpen] = useState (false)
//get the trget element to toggle 
const refOne = useRef(null)
const refTwo = useRef(null)

useEffect (()=> {
  //set the current date on component load 
  document.addEventListener("keydown", hideOnEscape, true)
  document.addEventListener("click", hideOnClickOutside, true)

}, [])


//hide on enter press
const hideOnEscape = (e) =>{
  console.log(e.key)
  if(e.keyCode ===13){
      setOpen (false)
  }
}  


//hide on outside click 
const hideOnClickOutside = (e) =>{
  //console.Log(refOne.current)
  //console.Log(e.target)
  if (refOne.current && !refOne.current.contains(e.target)){
      setOpen(false)
     
  }
}
//function pour tester l affichage de la date 
const displaydate =(e) =>{
  if (refOne.current && !refOne.current.contains(e.target)){
      var input = document.getElementById("startingdate2").value;
      console.log(input);
     
} }
const displaydatej  =(e) =>{
  if (refTwo.current && !refTwo.current.contains(e.target)){
      var input2 = document.getElementById("testtest").value;
      console.log(input2);
     
} }
// fin test 

    return ( 
      <Box bgColor="white">
     
        <LocalizationProvider dateAdapter={AdapterDateFns} >
        <TextField id ="startingdate2" value= {`${format(range[0].startDate, "yyyy/MM/dd")}`}
    readOnly
   
    onClick={ () => setOpen (open => !open)}
     />
      {/* <TextField
        value= {`${format(range[0].startDate, "yyyy/MM/dd")} to ${format(range[0].endDate, "yyyy/MM/dd")}`}
        readOnly
        onClick={ () => setOpen (open => !open)}
        id ="startingdate3"
        /> */}
       <Stack mt={2} ref={refOne}> 
        {open &&
        <DateRangePicker
        onChange={item => setRange ([item.selection])} 
        editableDataInputs={true}
        moveRangeOnFirstSelection = {false}
        ranges = {range} 
        months = {2}
        views={['year', 'month', 'day']}
        direction = "horizontal"
        rangeColors={['#E67C66', '#E67C66', '#E67C66']}
        /> 
        }
     </Stack>
  </LocalizationProvider>
    {/* <Button onClick={displaydate} >Ok</Button> */}
    
    </Box>
    
    );
}

export default Calendar1

{/* <Stack ref={refTwo}><Autocomplete disablePortal  id="combo-box-demo" options={dateSelect}
//ref={refTwo}
sx={{ width: 300 }}
renderInput={(params) => <TextField {...params} label="Date"/>} 
onChange={item=>setDatej([item.selection])}
/>
<TextField id ="testtest" sx={{width: 300}} />
<Button onClick={displaydatej}>OK1</Button>
</Stack> */}