import React, { useState } from 'react'
import GameNASA from './GameNASA'

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material'

import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import CloseIcon from '@mui/icons-material/Close';

function APODBar() {
    const [backgroundChange, setBacgroundChange] = useState("none")
    const [animationbg, setAnimationBg] = useState("")
    const [animationSatellite, setAnimationSatellite] = useState("animate__animated animate__pulse animate__infinite")

    const gameNASA = () => {
        setAnimationSatellite("animate__animated animate__fadeOut")
        setAnimationBg("animate__animated animate__fadeIn animate__delay-1s")
        setBacgroundChange("block")
    }

    const closeGame = () => { 
        setAnimationBg("animate__animated animate__fadeOut");
        setBacgroundChange("none");
        setAnimationSatellite("animate__animated animate__fadeIn");
    }

    return (
        <> <Box sx={{
                display:`${backgroundChange}`,
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 1,
                bgcolor: "rgba(0,0,0,0.8)"
            }}
                className={animationbg}>
                <Box sx={{ display: "flex", justifyContent:"center" }}>
                    <Box sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        zIndex: 2,
                        cursor: "pointer"
                    }}
                        onClick={() => closeGame()}>
                        <CloseIcon sx={{ fontSize: "70px", color: "#253D7D" }} />
                    </Box>
                </Box>
                    <GameNASA/>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ bgcolor: "#253D7D", textAlign: "center", alignItems: "center" }}>
                    <Toolbar>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <SatelliteAltIcon
                                sx={{ fontSize: "3.5rem", cursor: "pointer"}}
                                className={animationSatellite}
                                onClick={gameNASA} />
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                                APOD
                            </Typography >
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default APODBar