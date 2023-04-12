import { Box, Divider, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { DeleteOutline } from '@mui/icons-material';
import { useProfileStore } from "../../stores/profileStore";


const data = [
    {
        "message": "una descripcion corta",
        "data": {
            "id": 0,
            "name": "nombre url",
            "url": "www.unaurl.com"
        }
    },
    {
        "message": "una descripcion corta",
        "data": {
            "id": 1,
            "name": "otra url",
            "url": "www.url.com"
        }
    },
    {
        "message": "una descripcion corta",
        "data": {
            "id": 2,
            "name": "una mas url",
            "url": "www.otraurl.com"
        }
    },
    {
        "message": "una descripcion corta de la url 3",
        "data": {
            "id": 3,
            "name": "una mas url23242",
            "url": "www.otraurl3.com"
        }
    }
]
export const WallUrls = () => {

    const getUrls = useProfileStore((state: any) => state.getDataUrls)
    getUrls()


    // const dataUrls = useProfileStore((state: any)=> state.urls)
    // console.log("xxx", dataUrls)
    return (

        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', maxHeight: 500, overflow: 'auto'}}>
            <List component="nav" aria-label="main mailbox folders">
            {
                data.map((url, index)=>(
                    <>
                        <Grid key={index} container direction="row" justifyContent="space-between" alignItems="center">
                            <ListItemText 
                            // key={index}
                            sx={{color: '#007AFF'}}
                            primary={url.data.url}
                            secondary={
                                <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                > 
                                    {url.message} 
                                </Typography>
                            } />
                            <ListItemIcon>
                                <DeleteOutline sx={{color: "#FF5C6C"}}/>
                            </ListItemIcon>
                            
                        </Grid>
                        <Divider />
                    </>
                ))
            }
            </List>
        </Box>
    )
}