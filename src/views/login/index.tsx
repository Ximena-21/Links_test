import { Grid, Typography, Box } from "@mui/material"
import Logo from "../../assets/images/Logo"
import ButtonBasic from "../../lib/components/ButtonBasic"
import InputText from "../../lib/components/Form/InputText"
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

const gridStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px", 
    marginTop: '114px'
}

const buttonStyles = {
    width: "340px",
    padding: "15px 0",
    backgroundColor: "#007AFF",
    marginTop: '20px'
}

const buttonSingInStyles = {
    position: "absolute",
    top: "20px",
    right: 0,
    color: "#007AFF", 
    borderColor: "#007AFF",

}

type Inputs = {
    yourEmail: string,
    password: string,
}

export const Login = () => {

    // const [data, setData] = useState<any>({})

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = data => {console.log(data)};

    console.log(watch("yourEmail"))

    return (
        <Box sx={{position: "relative"}}>
            <Grid sx={gridStyles}>
                <ButtonBasic label="SINGUP" variant="outlined" style={buttonSingInStyles}/>

                <Logo/>

                <Typography component={"p"} variant={"h5"} sx={{ width: '100%', color: "black", fontWeight: "bolder", margin: '20px 0px 10px'}}>Loguin</Typography>

                <form >

                    <InputText defaultValue="hola" {...register("yourEmail", {required: "Se Requiere"})} type="text" label="Your Email" placeholder="example@example.com"/>
                    <p>{errors.yourEmail?.message}</p>
                    <InputText {...register("password", {required: true, minLength: {value: 8, message: "minimo 8 caracteres"}})} type="password" label="Password" placeholder="*********"/>
                    <p>{errors.password?.message}</p>
                    <ButtonBasic onClick={handleSubmit(onSubmit)} label="Login" variant="contained" style={buttonStyles}/>
                </form>

            </Grid>
        </Box>
    )
}

//handleSubmit(onSubmit)

// {...register("password", {required: "es requerido", minLenght: {value: 8, message: "minimo 8 caracteres"}})}

//{...register("yourEmail", {required: true})}
//{required: "es requerido", minLenght: {value: 8, message: "minimo 8 caracteres"}}