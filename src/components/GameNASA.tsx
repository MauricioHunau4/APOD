import React, { useState } from 'react'

import {
    Box,
    Typography,
} from '@mui/material'

import StarIcon from '@mui/icons-material/Star';

function GameNASA() {

    const [count, setCount] = useState(0)

    const [positionTop, setPositionTop] = useState("45")
    const [positionLeft, setPositionLeft] = useState("45")
    const [colorStar, setColorStar] = useState("white")
    const [finishGame, setFinishGame] = useState(false)

    function Staricon() {
        setPositionTop(Math.floor(Math.random() * (87 - 0) + 0).toString())
        setPositionLeft(Math.floor(Math.random() * (95 - 0) + 0).toString())
        setCount(count + 1)
        if (count === 8) {
            setColorStar("blue")
        } else if (count === 19) {
            setFinishGame(true)
        }
    }

    return (<>
        <Typography variant="h4" sx={{
            color: "whitesmoke",
            position: "relative",
            top: 10,
            left: "42%",
            bottom: 0,
            right: 0,
            zIndex: 1,
        }}>Stars Count: {count
        }</Typography>
        {!finishGame ?
        <Box sx={{
            position: "absolute",
            left: 0,
            top: 70,
            right: 0,
            bottom: 0,
        }}>
            <StarIcon sx={{
                cursor: "pointer",
                color: `${colorStar}`,
                fontSize: "100px",
                position: "absolute",
                left: `${positionLeft}%`,
                top: `${positionTop}%`,
                zIndex: 4
            }}
                className="animate__animated animate__fadeIn"
                onClick={() => {
                    Staricon()
                }}
            />
        </Box>:  <Typography variant="h4" sx={{
        color: "whitesmoke",
        position: "relative",
        top: "45%",
        left: "45%",
        bottom: 0,
        right: 0,
        zIndex: 1,
    }}>Well played</Typography>}
    </>
    )
}

export default GameNASA