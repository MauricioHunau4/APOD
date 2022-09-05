
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material'
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';

function appBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#253D7D", textAlign: "center", alignItems: "center" }}>
                <Toolbar>
                    <Box sx={{ display :"flex", alignItems:"center", gap: "5px"}}>
                        <SatelliteAltIcon sx={{fontSize: "3.5rem"}} />
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            APOD
                        </Typography >
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default appBar

//#253D7D
//#1C2E5E