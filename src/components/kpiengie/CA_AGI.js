import React ,{ useState,useEffect,useRef } from 'react'
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CA_AGI = (props) =>{
    const [caagiSelect, setcaagiSelect]  = useState([]);
    const [total5, setTotal]= useState();

    useEffect(() => {
        var total;
        var options8 = [];
        props.listCaAgi.map((element) => {
          options8.push({label : element.CA_Agi })
          total= options8.reduce((total, element) => total + element.label, 0)
        });
        setcaagiSelect(options8);
        setTotal(total);
      },[
        props.listCaAgi
      ])
    
      return ( 
        <Box bgColor="white">
        <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
       
        <TextField id ="totalPause" value= {"CA_Agi "+total5 + " €"}
        readOnly
        sx={{bgcolor: '#b84dff'}}
        //label="sonnerie"
         />
       </Stack>
      </Box>
      );
    }
export default CA_AGI;