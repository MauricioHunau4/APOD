import React from 'react'
import { Box, Typography } from '@mui/material'


function InformationAPOD(props : any) {
  return (<>
    <Box sx={{textAlign:"center", width:"auto", height:"auto", border:" 1px solid grey", padding:"40px", margin:"40px 0 0 0"}}>
        <Typography variant="h3" sx={{color: "white"}}>Explanation</Typography>
        <Typography sx={{color: "white", padding:"20px 0 0 0"}}>{props.explanation}</Typography>
    </Box>
    </>
  )
}

export default InformationAPOD