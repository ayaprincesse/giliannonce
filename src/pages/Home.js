import * as React from 'react';
import { useState,useEffect,useRef } from 'react'
import Pause from '../components/engie/Pause'
import Traitement from '../components/engie/Traitement'
import Sonnerie from '../components/engie/Sonnerie'
import Posttravail from '../components/engie/Posttravail'
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Calendartest  from "../components/Calendar.js";
import Calendar1 from "../components/Calendar1.js";
///import { createStyles, makeStyles } from '@mui/styles';
// import MyCalendar from "../components/calendar3"
import Barchart from '../components/charts2/BarChart'
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";


//import DefaultFooter from "examples/Footers/DefaultFooter";


/*import Carousel from 'react-material-ui-carousel'*/

import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import axios from 'axios';
import * as urls from 'apis';
import {Link} from "react-router-dom";
import HHermes from 'components/kpiengie/HHermes';
import SPHLog from 'components/kpiengie/SPHLog';
import SPHCom from 'components/kpiengie/SPHCom';
import CA_AGI from 'components/kpiengie/CA_AGI';
import CA_BRUT from 'components/kpiengie/CA_BRUT';
import CAperH from 'components/kpiengie/CAperH';
import FTperH from 'components/kpiengie/FTperH';
const Home1 = function Home() {
  const [engie, setEngieList]= useState([]);
  const [datej, setDatejSelect] = useState([]);
  const [plansdh, setPlanSelect] = useState([]);
  const [traitement, setTraitementSelect]= useState([]);
  const [sonnerie, setSonnerieSelect]= useState([]);
  const [posttravail, setPosttravailSelect]= useState([]);
  const [hhermes, setHhermesSelect]= useState([]);
  const [sphlog, setSphLogSelects]= useState([]);
  const [sphcom, setSphComSelects]= useState([]);
  const [caagi, setCaAgiSelects] = useState([]);
  const [cabrut, setCaBrutSelects]= useState([]);
  const [cah, setCAHSelects]= useState([]);
  const [fth , setFTHSelects]= useState([]);
  useEffect(async () => {
    //get engie 
    await axios.get(urls.url_main+"/engie")
    .then((response) => {
        setEngieList(response.data.list_engie)
        setDatejSelect(response.data.list_engie)
        setTraitementSelect(response.data.list_engie)
        setPlanSelect(response.data.list_engie)
        setSonnerieSelect(response.data.list_engie)
        setPosttravailSelect(response.data.list_engie);
    })
    .catch((error) => {
        console.log(error.response);
        alert("une erreur s'est produite home.js ligne 59");
    })

        
    // get hhermes
    await axios.get(urls.url_main+"/kpiengie")
    .then((response) => {
     setHhermesSelect(response.data.list_kpiengie);
     setSphLogSelects(response.data.list_kpiengie);
     setSphComSelects(response.data.list_kpiengie);
     setCaAgiSelects(response.data.list_kpiengie);
     setCaBrutSelects(response.data.list_kpiengie);
     setCAHSelects(response.data.list_kpiengie);
     setFTHSelects(response.data.list_kpiengie);
    })
   .catch((error) => {
    console.log(error.response);
    alert("une erreur s'est produite home.js ligne 78");
        })
  },[]);


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
     {/* <HeroSection listEng={engie} /> 
    <Calendartest /> */}
    <Calendar1 listDate={datej}/>
    <Stack direction="row" spacing={1}>
    <Pause listPlan={plansdh}/>
    <Traitement listTrait={traitement}/>
    <Sonnerie listSonn={sonnerie}/>
    <Posttravail listPost={posttravail}/>
    <HHermes listHher={hhermes}/>
    <SPHLog listSph={sphlog}/>
    <SPHCom listSphC = {sphcom}/>
    <CA_AGI listCaAgi={caagi}/>
    <CA_BRUT listCaBrut={cabrut}/>
    <CAperH listCAH={cah}/>
    <FTperH listFTH={fth}/>
    </Stack>
    {/* <MyCalendar/> */}
    </ThemeProvider>
  );
}

export default Home1;


function HeroSection(props) {
  const [engieSelect, setengieSelect] = useState([]);
  const [engie, setEngie] = useState('');
  
  useEffect(() => {
    var options2=[];
    props.listEng.map((element,i) => {
      options2.push({label:element.Agent,id:element.Id})
    });
    setengieSelect(options2);
    console.log("options2",options2);
  },[props.listEng])
  
  return ( 
    <Box bgColor="white">
    <Stack direction="row" spacing={1} mt={3} alignItems="center" justifyContent="center">
    <Autocomplete disablePortal  id="combo-box-demo" options={engieSelect}
    value={engie}
     sx={{ width: 300 }}
       renderInput={(params) => <TextField {...params} label="Agent"/>} 
    />
   </Stack>
  </Box>
  );
}
