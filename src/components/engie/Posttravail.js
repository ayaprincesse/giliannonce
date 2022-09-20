import React ,{ useState,useEffect,useRef } from 'react'
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Posttravail = (props) =>{
    const [sonnerieSelect, setSonnerieSelect] = useState([]);
    const [plansdh, setEngie] = useState('');
    const [total4, setTotal]= useState();
  
    useEffect(() => {
      var total;
      var options5 = [];
      props.listPost.map((element) => {
        options5.push({label : element.Posttravail })
        total= options5.reduce((total, element) => total + element.label, 0)
      });
  
      setSonnerieSelect(options5);
      setTotal(total);
      //console.log("options5 test ",options5);
      //console.log("total Pause", total4)
    },[
      props.listPost
    ])
  
    return ( 
      <Box bgColor="white">
      <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
      {/* <Autocomplete disablePortal  id="combo-box-demo" options={sonnerieSelect}
     value={plansdh}
       sx={{ width: 300 }}
         renderInput={(params) => <TextField {...params} label="Pause"/>} 
      /> */}
      <TextField id ="totalPause" value= {"Post-Travail "+total4}
      readOnly
      sx={{bgcolor: '#ffc0cb'}}
      //label="sonnerie"
       />
     </Stack>
    </Box>
    );
  }


export default Posttravail