import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import  { addDays } from 'date-fns'
import format from 'date-fns/format';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {csv} from 'd3';
// import * as d3 from 'd3';
// import { timeFormat } from 'd3';
import { timeParse } from 'd3';


const csvURL= 'https://gist.githubusercontent.com/hafsasunshine/56e77a356af9ff76cfca17a5cc5a80bb/raw/bd5a43cabd4088aa0b27d2601ca8299999f6f3e1/engie1.csv';


export const Calendartest = () => {

    useEffect(()=>{
        const parseDate = timeParse("%Y/%m/%d");
        const row = d => {
            d.Matricule = +d.Matricule ;
            //d["Date INT Projet"]= +d["Date INT Projet"];
            d["Date INT Projet"]= parseDate(d["Date INT Projet"]);
            return d
          };
        csv(csvURL,row).then(data2 =>{
          console.log(data2);
        });
      },[]);

    //date state    
    const [range, setRange] = useState([
        {
        startDate: new Date(),
        endDate : addDays (new Date(), 7),
        key : 'selection'
    }])

    //open close
    const [open, setOpen] = useState (false)
    //get the trget element to toggle 
    const refOne = useRef(null)

    useEffect (()=> {
        //set the current date on component load 
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)

    }, [])

    // hide dropdown on esc press 
    // const hideOnEscape = (e) =>{
    //     console.log(e.key)
    //     if(e.key ==="Escape"){
    //         setOpen (false)
    //     }
    // }

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
    const test =(e) =>{
        if (refOne.current && !refOne.current.contains(e.target)){
            var input = document.getElementById("startingdate").value;
            console.log(input);
    }}


    return (
    <Box>
        
        <LocalizationProvider dateAdapter={AdapterDateFns}>
         <TextField
        value= {`${format(range[0].startDate, "yyyy/MM/dd")} to ${format(range[0].endDate, "yyyy/MM/dd")}`}
        readOnly
        onClick={ () => setOpen (open => !open)}
        id ="startingdate"
        />
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
    {/* <TextField id ="startingdate" value= {`${format(range[0].startDate, "dd/MM/yyyy")}`}/> */}
    <Button onClick={test} >Ok </Button>
    </Box>
    
   
  )}

export default Calendartest