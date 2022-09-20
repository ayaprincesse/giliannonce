import React ,{ useState,useEffect,useRef } from 'react'
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import * as urls from 'apis';

//CA/H= CA/(Presence*24)
const CAperH = (props) =>{
    const [CAh, setCAh]  = useState([] );
    const [totalcah, setTotal]= useState();
    //presence
    const [presenceselect, setpresenceselect] = useState([] );
    const [presence, setpresenceselects]=useState([]);
    const [totalpresence, setTotalpresence]= useState();

  

    useEffect(async () => {    
        // get elec
        await axios.get(urls.url_main+"/kpiengie")
        .then((response) => {
        setpresenceselects(response.data.list_kpiengie);
        })
       .catch((error) => {
        console.log(error.response);
        alert("une erreur s'est produite sph");
            })
      },[]);

    //presence
      useEffect(() => {
        var total3;
        var options9 = [];
        presence.map((element) => {
          options9.push({label : element.HPresence })
          total3= options9.reduce((total3, element) => total3 + element.label, 0)
        });
        
        setpresenceselect(options9);
        setTotalpresence(total3);
      },[presence]);

    
    //CA/H
    useEffect(() => {
        var total; 
        var options6 = [];
        props.listCAH.map((element) => {
          options6.push({label : element.CA })
          total= options6.reduce((total, element) => total + element.label  ,0)
        });
        setCAh(options6);
        setTotal(total/(totalpresence*24));
      },[
        props.listCAH
      ])
      
      return ( 
        <Box bgColor="white">
        <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
        <TextField id ="totalSph" value= {"CA/H "+totalcah}
        readOnly
        sx={{bgcolor: '#00b300'}}
         />
       </Stack>
      </Box>
      );
    }
export default CAperH;