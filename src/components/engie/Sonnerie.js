import React ,{ useState,useEffect,useRef } from 'react'
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Sonnerie = (props) =>{
    const [sonnerieSelect, setSonnerieSelect] = useState([]);
    const [plansdh, setEngie] = useState('');
    const [total4, setTotal]= useState();
  
    useEffect(() => {
      var total;
      var options5 = [];
      props.listSonn.map((element) => {
        options5.push({label : element.Sonnerie })
        total= options5.reduce((total, element) => total + element.label, 0)
      });
  
      setSonnerieSelect(options5);
      setTotal(total);
     //console.log("options5 test ",options5);
      //console.log("total Pause", total4)
    },[
      props.listSonn
    ])
  
    return ( 
      <Box bgColor="white">
      <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
      {/* <Autocomplete disablePortal  id="combo-box-demo" options={sonnerieSelect}
     value={plansdh}
       sx={{ width: 300 }}
         renderInput={(params) => <TextField {...params} label="Pause"/>} 
      /> */}
      <TextField id ="totalPause" value= {"sonnerie "+total4}
      readOnly
      sx={{bgcolor: '#ffc0cb'}}
      //label="sonnerie"
       />
     </Stack>
    </Box>
    );
  }

export default Sonnerie