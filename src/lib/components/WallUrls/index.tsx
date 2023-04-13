import { Box, Divider, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { DeleteOutline } from '@mui/icons-material';
import { useProfileStore } from "../../stores/profileStore";
import { useUserStore } from "../../stores/userStore";
import { useEffect } from "react";


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

    const currentUser =  JSON.parse(localStorage.getItem("user") as string)
    console.log("token",  currentUser.token)
    
    const getUrls = useProfileStore((state: any) => state.getDataUrls)
    const deleteStore = useProfileStore((state: any) => state.deleteUrl)

    useEffect(()=>{
        getUrls(currentUser.token)
    },[])
    
    // getUrls(currentUser.token) //hace muchas veces la peticion
    
    const dataUrls = useProfileStore((state: any)=> state.urls).data
    console.log("DATA DEL USUARIO ACTUAL",  dataUrls)


    const deleteUrl = (id:any)=>{
        deleteStore(currentUser.token, id)
        console.log("id de esta url", id);
        
    }

    // const dataUrls = useProfileStore((state: any)=> state.urls)
    // console.log("xxx", dataUrls)
    return (

        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', maxHeight: 500, overflow: 'auto'}}>
            <List component="nav" aria-label="main mailbox folders">
            {
                dataUrls.map((url:any, index:any)=>(
                    <>
                        <Grid key={index} container direction="row" justifyContent="space-between" alignItems="center">
                            <ListItemText 
                            // key={index}
                            sx={{color: '#007AFF'}}
                            primary={url.url}
                            secondary={
                                <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                > 
                                    {url.name} 
                                </Typography>
                            } />
                            <ListItemIcon>
                                <IconButton onClick={()=>deleteUrl(url.id)}>
                                    <DeleteOutline sx={{color: "#FF5C6C"}}/>
                                </IconButton>
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