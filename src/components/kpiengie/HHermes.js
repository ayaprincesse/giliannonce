import React ,{ useState,useEffect,useRef } from 'react'
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const HHermes = (props) =>{
    const [hhermesSelect, setHhermesSelect]  = useState([]);
    const [hhermes, setEngie] = useState('');
    const [total5, setTotal]= useState();

    useEffect(() => {
        var total;
        var options5 = [];
        props.listHher.map((element) => {
          options5.push({label : element.HHermes })
          total= options5.reduce((total, element) => total + element.label, 0)
        });
    
        setHhermesSelect(options5);
        setTotal(total);
       // console.log("options5 test ",options5);
        //console.log("total Pause", total5)
      },[
        props.listHher
      ])
    
      return ( 
        <Box bgColor="white">
        <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
       
        <TextField id ="totalPause" value= {"hhermes "+total5}
        readOnly
        sx={{bgcolor: '#daeeff'}}
        //label="sonnerie"
         />
       </Stack>
      </Box>
      );
    }
export default HHermes;