import React  from 'react'
import { Box, Typography } from '@mui/material'


function InformationAPOD(props : any) {
  let explanation = sessionStorage.getItem("info")
  return (<>
    <Box sx={{textAlign:"center", width:"auto", height:"auto", border:" 1px solid grey", padding:"40px", margin:"40px 0 0 0"}}>
        <Typography variant="h3" sx={{color: "white"}}>Explanation of the day</Typography>
        <Typography sx={{color: "white", padding:"20px 0 0 0", fontSize:"20px"}}>{explanation === undefined || explanation === null? props.explanation: explanation}</Typography>
    </Box>
    <Box sx={{position:"relative", width:"auto", bottom: -150}}>
      <Typography sx={{color: "white", padding:"20px 0 0 0", margin:"0 0 10px 0"}}>
        The Astronomy picture of the day is a web page where each day a different image or photograph of our fascinating universe is featured, 
        along with a brief explanation written by a professional astronomer. The auhtos & editors are <a href='https://www.mtu.edu/physics/department/faculty/nemiroff/' className="authors" target="__blank">Robert Nemiroff</a> & <a href='https://apod.nasa.gov/htmltest/jbonnell/www/biosketch.html' className="authors" target="__blank">Jerry Bonnell</a>. 
        </Typography>
    </Box>
    </>
  )
}

export default InformationAPOD