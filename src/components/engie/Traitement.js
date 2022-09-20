import React ,{ useState,useEffect,useRef } from 'react'
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
 
export function Traitement(props) {
    const [traitementSelect, setTraitementSelect] = useState([]);
    const [plansdh, setEngie] = useState('');
    const [total3, setTotal]= useState();
  
    useEffect(() => {
      var total;
      var options4 = [];
      props.listTrait.map((element) => {
        options4.push({label : element.Traitement })
        total= options4.reduce((total, element) => total + element.label, 0)
      });
  
      setTraitementSelect(options4);
      setTotal(total);
   //   console.log("options4 test ",options4);
     // console.log("total Pause", total3)
    },[
      props.listTrait
    ])
  
    return ( 
      <Box bgColor="white">
      <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
      {/* <Autocomplete disablePortal  id="combo-box-demo" options={traitementSelect}
     value={plansdh}
       sx={{ width: 300 }}
         renderInput={(params) => <TextField {...params} label="Pause"/>} 
      /> */}
      <TextField id ="totalPause" value= {"traitement "+total3}
      readOnly
      sx={{bgcolor: '#ffc0cb'}}
     // label="traitement"
       />
     </Stack>
    </Box>
    );
  }
  export default Traitement