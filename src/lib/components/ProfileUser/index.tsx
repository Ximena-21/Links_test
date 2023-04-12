import { Avatar, Stack, Typography } from "@mui/material"
import foto  from "../../../assets/images/img.jpg"

export const ProfileUser = () => {

    const dataUser = {
        "id": 0,
        "name": "Alguien",
        "email": "algo@gmai.com",
        "password": "121321",
        "image": foto
      }

    return (
        <div>
            <Stack direction="column" justifyContent="center" alignItems="center" >
                <Avatar alt={`img_${dataUser.name}`} src={dataUser.image} sx={{ width: 68, height: 68 }}/>
                <Typography component={"p"} variant={"h6"}>{dataUser.name}</Typography>
                <Typography component={"p"} variant={"subtitle1"}>{dataUser.email}</Typography>
            </Stack>
        </div>
    )
}