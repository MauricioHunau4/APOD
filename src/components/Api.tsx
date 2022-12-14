import { Typography, Box, Modal } from '@mui/material'
import { InformationNASA } from '../Interfaces';
import React, { useState } from 'react'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:"auto",
    border:"none",
};

const Api = (props: InformationNASA) => {

    const [open, setOpen] = useState<boolean>(false);
    const handleOpenClose = () => setOpen(!open);
    
    return (
        <>
            {props.loading ?
                <Box sx={{
                    position: "absolute",
                    top: 400,
                    left: 600
                }}>
                    <Typography variant='h3' sx={{ color: "white" }}>
                        Aligning satelites...
                    </Typography>
                </Box> :
                <Box sx={{
                    position: "absolute",
                    top: 40,
                    bottom: "auto",
                    left: 0,
                    right: 0,
                    bgcolor: "#121D3B",
                    zIndex: -1
                }}>

                    <Box sx={{ padding: "100px 0 10px 0" }} className="box-query">
                        <Typography variant="h5" sx={{ color: "white" }}>
                            {props.searchDate === undefined ? props.date : props.searchDate}
                        </Typography>
                        <Typography variant="h5" sx={{ color: "white" }}>
                            {props.searchDate === undefined ? props.title : props.searchTitle}
                        </Typography>
                    </Box>
                    <Box sx={{ height: "auto", justifyContent: "center", margin: "0 0 30px 0" }} >
                        <img src={props.searchDate === undefined ? props.url : props.searchUrl}
                            alt="APOD" onClick={handleOpenClose} className="APODimage">
                        </img>
                    </Box>
                    <Modal
                        open={open}
                        onClose={handleOpenClose}>
                        <Box sx={style} className="animate__animated animate__fadeIn">
                        <img src={props.searchDate === undefined ? props.url : props.searchUrl}
                            alt="APODModal" className="APODimage" >
                        </img>
                        </Box>
                    </Modal>
                </Box>}
            <span>{props.error && "Something went wrong"}</span>
        </>
    )
}

export default Api
