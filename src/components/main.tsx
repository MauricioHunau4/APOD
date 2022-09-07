import React, { useState, SyntheticEvent, useEffect } from 'react';
import Api from './Api';
import { Information } from '../Interfaces'
import InformationAPOD from './InformationAPOD';

import {
  Box,
  Button,
  Container,
  Tabs,
  Tab,
  TextField
} from '@mui/material'


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  let today: Date = new Date();

  const [information, setInformation] = useState<Information>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [dateAPI, setDateAPI] = useState<number|string>()
  const [infoPerSearch, setInfoPerSearch] = useState<Information>()

  useEffect(() => {
    const getAPI = async () => {
      setLoading(true);
      setError(false);
      try {
        await fetch(`https://api.nasa.gov/planetary/apod?&api_key=${process.env.REACT_APP_API_KEY}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setLoading(false);
            setInformation(data)
          })
          .catch((err) => {
            setError(true);
            setLoading(false);
          })
      } catch (error) {
        console.log(error)
      }
    }
    getAPI()
  }, [])

  const handleChange = (e: any) => {
    setDateAPI(e.target.value)
  }

  useEffect(() => {
    if (dateAPI !== undefined) {
      setLoading(true);
      setError(false);
      try {
      const prueba = async () => {
          await fetch(`https://api.nasa.gov/planetary/apod?date=${dateAPI}&api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              sessionStorage.setItem("info", `${data.explanation}` )
              setLoading(false);
              setInfoPerSearch(data);
            })
            .catch((err)=>{
              setError(true);
            setLoading(false);
            })
          }
          prueba() 
          
      } catch (error) {
          console.log(error)
        }
    }
  }, [dateAPI])

  const random = (e: any) =>{
    e.preventDefault();
    const year = Math.floor(Math.random() * (today.getFullYear() - 1995) + 1995)
    const day = Math.floor(Math.random() * (29 - 1) + 1)
    const month = Math.floor(Math.random() * (13 - 1) + 1)

    setDateAPI(`${year}-${month}-${day}`)
  }
  console.log(infoPerSearch?.explanation)
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === 0 && (<>
      <Box sx={{ textAlign: "center", padding: "20px 0" }}>
        <Box sx={{display: "flex", justifyContent:"center", gap:" 10px"}}>
        <TextField
          id="date"
          type="date"
          defaultValue={dateAPI}
          sx={{ width: 220 }}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" onClick={random} sx={{bgcolor:"#253D7D"}}>Random</Button>
        </Box>
        <Api 
          date={information?.date}
          title={information?.title}
          url={information?.url}
          searchDate={infoPerSearch?.date}
          searchTitle={infoPerSearch?.title}
          searchUrl={infoPerSearch?.url}
          loading={loading}
          error={error} />
      </Box>
      </>
      )}
      {value === 1 && (
        <InformationAPOD explanation={information?.explanation} explanationSearch={infoPerSearch?.explanation}/>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Main() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%', position: "absolute", bgcolor: "#121D3B" }}>
      <Box sx={{ borderBottom: 1, border: 'none' }}>
        <Tabs value={value} onChange={handleChange}  >
          <Tab label="Astronomy photo of the day" {...a11yProps(0)} sx={{ color: "white", width: "20rem" }} />
          <Tab label="Explanation" {...a11yProps(1)} sx={{ color: "white", width: "20rem" }} />
        </Tabs>
      </Box>
      <Container>
        <TabPanel value={value} index={0} />
        <TabPanel value={value} index={1} />
      </Container>
    </Box>

  )
}

export default Main
