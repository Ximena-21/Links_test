import { Avatar, Stack, Typography } from "@mui/material"
import foto  from "../../../assets/images/img.jpg"
import { useUserStore } from "../../stores/userStore"

export const ProfileUser = () => {

    const user = useUserStore( (state ) => state.user)      
    const dataUser = user.data

    return (
        <div>
            <Stack direction="column" justifyContent="center" alignItems="center" >
                <Avatar alt={`img_${dataUser.name}`} src={dataUser.image || foto} sx={{ width: 68, height: 68 }}/>
                <Typography component={"p"} variant={"h6"}>{dataUser.name}</Typography>
                <Typography component={"p"} variant={"subtitle1"}>{dataUser.email}</Typography>
            </Stack>
        </div>
    )
}