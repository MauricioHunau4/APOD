import { Typography, Box } from '@mui/material'
import { InformationNASA } from '../Interfaces';
import DisplayData from './DisplayData';

const Api = (props: InformationNASA) => {

    
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
                    <Box sx={{ textAlign: "center", padding: "20px 0" }}>
                        <DisplayData date={props.date} information={props.image} title={props.title} />
                    </Box>
                </Box>}
            <span>{props.error && "Something went wrong"}</span>
        </>
    )
}

export default Api
