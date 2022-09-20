import React ,{ useState,useEffect,useRef } from 'react'
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import * as urls from 'apis';

//SPH LOG = (ELEC+GAZ+(DUALE*2))/(PRESENCE*24)
const SphLog = (props) =>{
    const [SphLogSelect, setSphLogSelect]  = useState([] );
    const [totalsph, setTotal]= useState();
    //elec
    const[elecselect, setelecselect] = useState([] );
    const [elec, setelecselects]=useState([]);
    const [totalelec, setTotalelec]= useState();
    //duale
    const [dualeselect, setdualeselect] = useState([] );
    const [duale, setdualeselects]=useState([]);
    const [totalduale, setTotalduale]= useState();
    //presence
    const [presenceselect, setpresenceselect] = useState([] );
    const [presence, setpresenceselects]=useState([]);
    const [totalpresence, setTotalpresence]= useState();

    useEffect(async () => {    
        // get elec
        await axios.get(urls.url_main+"/kpiengie")
        .then((response) => {
         setelecselects(response.data.list_kpiengie);
         setdualeselects(response.data.list_kpiengie);
         setpresenceselects(response.data.list_kpiengie);
        })
       .catch((error) => {
        alert("une erreur s'est produite sph");
            })
      },[]);

      //elec
      useEffect(() => {
        var total1;
        var options7 = [];
        elec.map((element) => {
          options7.push({label : element.ELEC })
          total1= options7.reduce((total1, element) => total1 + element.label, 0)
        });
        setelecselect(options7);
        setTotalelec(total1);
      },[elec]);

      //duale
      useEffect(() => {
        var total2;
        var options8 = [];
        duale.map((element) => {
          options8.push({label : element.DUALE })
          total2= options8.reduce((total2, element) => total2 + element.label, 0)
        });
        
        setdualeselect(options8);
        setTotalduale(total2);
      },[duale]);

      //presence
      useEffect(() => {
        var total3;
        var options9 = [];
        duale.map((element) => {
          options9.push({label : element.HPresence })
          total3= options9.reduce((total3, element) => total3 + element.label, 0)
        });
        
        setpresenceselect(options9);
        setTotalpresence(total3);
      },[presence]);

    
    //SPH LOG
    useEffect(() => {
        var total; 
        var options6 = [];
        props.listSph.map((element) => {
          options6.push({label : element.GAZ })
          total= options6.reduce((total, element) => total + element.label  ,0)
        });
        
        setSphLogSelect(options6);
        setTotal((total+totalelec+(totalduale*2))/(totalpresence*24));
      },[
        props.listSph
      ])
      
      return ( 
        <Box bgColor="white">
        <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
        <TextField id ="totalSph" value= {"SPH Log "+totalsph}
        readOnly
        sx={{bgcolor: '#ffaa00'}}
         />
       </Stack>
      </Box>
      );
    }
export default SphLog;