import React, { ChangeEvent, useState } from 'react'

import { TextField, Box, Typography } from '@mui/material';

function DisplayData(props: any) {

  let informatioNasa: any = localStorage.getItem('information')
  informatioNasa = JSON.parse(informatioNasa)

  const [value, setValue] = useState(
    props.date
  );

  const handleChange = (newValue: ChangeEvent) => {
    setValue(newValue);
  };


  return (
    <>
      <TextField
        id="date"
        type="date"
        defaultValue={props.date}
        onChange={handleChange}
        sx={{ width: 220, bgcolor: "whitesmoke", borderRadius: "5px" }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Box sx={{ padding: "20px 0" }}>
        <Typography variant="h5" sx={{ color: "white" }}>{informatioNasa === undefined ? props.date : informatioNasa.date}</Typography>
        <Typography variant="h5" sx={{ color: "white" }}>{informatioNasa === undefined ? props.title : informatioNasa.title}</Typography>
      </Box>
      <Box sx={{ height: "auto", justifyContent: "center" }}>
        <img src={
          informatioNasa === null ?
            props.info.url :
            informatioNasa.url}
          alt="APOD">
        </img>
      </Box>
    </>
  )
}

export default DisplayData;