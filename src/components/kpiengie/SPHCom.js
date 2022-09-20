import React ,{ useState,useEffect,useRef } from 'react'
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import * as urls from 'apis';

//SPH LOG = (ELEC+GAZ+(DUALE*2))/(TRAITEMENT*24)
const SphCom = (props) =>{
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
    //traitement
    const [traitementselect, settraitementselect] = useState([] );
    const [traitement, settraitementselects]=useState([]);
    const [totaltraitement, setTotaltraitement]= useState();

    useEffect(async () => {    
        // get elec
        await axios.get(urls.url_main+"/kpiengie")
        .then((response) => {
         setelecselects(response.data.list_kpiengie);
         setdualeselects(response.data.list_kpiengie);
         settraitementselects(response.data.list_kpiengie);
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

      //traitement
      useEffect(() => {
        var total3;
        var options9 = [];
        duale.map((element) => {
          options9.push({label : element.Traitement })
          total3= options9.reduce((total3, element) => total3 + element.label, 0)
        });
        
        settraitementselect(options9);
        setTotaltraitement(total3);
      },[traitement]);

    
    //SPH COM
    useEffect(() => {
        var total; 
        var options6 = [];
        props.listSphC.map((element) => {
          options6.push({label : element.GAZ })
          total= options6.reduce((total, element) => total + element.label  ,0)
        });
        setSphLogSelect(options6);
        setTotal((total+totalelec+(totalduale*2))/(totaltraitement*24));
      },[
        props.listSphC
      ])
      
      return ( 
        <Box bgColor="white">
        <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
        <TextField id ="totalSph" value= {"SPH Com "+totalsph}
        readOnly
        sx={{bgcolor: '#ffe6b3'}}
         />
       </Stack>
      </Box>
      );
    }
export default SphCom;