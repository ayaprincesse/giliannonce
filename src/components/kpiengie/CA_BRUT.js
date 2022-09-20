import React ,{ useState,useEffect,useRef } from 'react'
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CA_BRUT = (props) =>{
    const [cabrutSelect, setcabrutSelect]  = useState([]);
    const [total5, setTotal]= useState();

    useEffect(() => {
        var total;
        var options8 = [];
        props.listCaBrut.map((element) => {
          options8.push({label : element.CA_Brut })
          total= options8.reduce((total, element) => total + element.label, 0)
        });
        setcabrutSelect(options8);
        setTotal(total);
      },[
        props.listCaBrut
      ])
    
      return ( 
        <Box bgColor="white">
        <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
       
        <TextField id ="totalPause" value= {"CA_Brut "+total5 + " €"}
        readOnly
        sx={{bgcolor: '#e0b3ff'}}
        //label="sonnerie"
         />
       </Stack>
      </Box>
      );
    }
export default CA_BRUT;