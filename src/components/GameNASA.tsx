import React, { useState } from 'react'

import {
    Box,
    Typography,
} from '@mui/material'

import RestartAltIcon from '@mui/icons-material/RestartAlt';
import StarIcon from '@mui/icons-material/Star';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function GameNASA() {

    const [count, setCount] = useState<number>(0)

    const [positionTop, setPositionTop] = useState<string>("45")
    const [positionLeft, setPositionLeft] = useState<string>("45")
    const [colorStar, setColorStar] = useState<string>("white")
    const [finishGame, setFinishGame] = useState<boolean>(false)
    const [animationStar, setAnimationStar] = useState<string>("animate__animated animate__fadeIn")

    const clickStar = ()=> {
        setAnimationStar("animate__animated animate__fadeOut")
        setTimeout(()=>{
        setPositionTop(Math.floor(Math.random() * (87)).toString())
        setPositionLeft(Math.floor(Math.random() * (95)).toString())
        setCount(count + 1)
        setAnimationStar("animate__animated animate__fadeIn")
        if (count === 8) {
            setColorStar("blue")
        }else if(count === 19){
            setColorStar("yellow")
        }
        else if (count === 29){
        setFinishGame(true)
        }
    },500)
    }

    const changeStar=()=>{
        if(count < 20){
            return <StarIcon sx={{
                cursor: "pointer",
                color: `${colorStar}`,
                fontSize: "100px",
                position: "absolute",
                left: `${positionLeft}%`,
                top: `${positionTop}%`,
                zIndex: 4
            }}
                className={animationStar}
                onClick={() => {
                    clickStar()
                }}
            />
            }else{
            return <Brightness7Icon sx={{
                cursor: "pointer",
                color: `${colorStar}`,
                fontSize: "100px",
                position: "absolute",
                left: `${positionLeft}%`,
                top: `${positionTop}%`,
                zIndex: 4
            }}
                className={animationStar}
                onClick={() => {
                    clickStar()
                }}
            />
        }       
    }
    const restartGame = () => {
        setFinishGame(false)
        setPositionLeft("45")
        setPositionTop("45")
        setCount(0)
        setColorStar("white")
    }

    return (<>
        <RestartAltIcon sx={{
            fontSize: "67px", color: "#253D7D", position: "absolute",
            top: 0,
            right: 60,
            zIndex: 2,
            cursor: "pointer"
        }}
            onClick={() => { restartGame() }} />
        <Typography variant="h4" sx={{
            color: "whitesmoke",
            position: "relative",
            top: 10,
            left: "42%",
            bottom: 0,
            right: 0,
            zIndex: 1,
        }}
        className="typography-query"
        >Stars Count: {count
            }</Typography>
        {!finishGame ?
            <Box sx={{
                position: "absolute",
                left: 0,
                top: 70,
                right: 0,
                bottom: 0,
            }}>
                {changeStar()}   
            </Box> : 
            <Typography variant="h4" sx={{
                color: "whitesmoke",
                position: "relative",
                top: "45%",
                left: "45%",
                bottom: 0,
                right: 0,
                zIndex: 1,
            }}>Well played!</Typography>}
    </>
    )
}

export default GameNASA