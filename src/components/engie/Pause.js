import React ,{ useState,useEffect,useRef } from 'react'
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
 
export function Pause(props) {
    const [planSelect, setplanSelect] = useState([]);
    const [total2, setTotal]= useState();
  
    useEffect(() => {
      var total;
      var options3 = [];
      props.listPlan.map((element) => {
        options3.push({label : element.Pause })
        total= options3.reduce((total, element) => total + element.label, 0)
      });
      setplanSelect(options3);
      setTotal(total);
    },[
      props.listPlan
    ])
  
    return ( 
      <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
      <TextField id ="totalPause" value= {"pause "+total2}
      readOnly
      sx={{bgcolor: '#ffc0cb'}}
       />
     </Stack>
    );
  }
  export default Pause