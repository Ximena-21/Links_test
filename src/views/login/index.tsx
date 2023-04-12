import { Grid, Typography, Box } from "@mui/material";
import Logo from "../../assets/images/Logo";
import ButtonBasic from "../../lib/components/ButtonBasic";
import InputText from "../../lib/components/Form/InputText";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";
import { buttonStyles, gridStyles, buttonSingInStyles } from "./styles";
import { useUserStore } from "../../lib/stores/userStore";


interface IFormInput {
    email: string;
    password: string;
}

export const Login = () => {
    const { control, handleSubmit } = useForm();

    const login = useUserStore((state: any)=> state.loginUser)
    console.log("user store login", login)

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        login(data.email, data.password)
    console.log(data);
    };

    return (
        <Box sx={{ position: "relative" }}>
            <Grid sx={gridStyles}>
            <ButtonBasic
                label="SIGNUP"
                variant="outlined"
                style={buttonSingInStyles}
            />

            <Logo />

            <Typography
                component={"p"}
                variant={"h5"}
                sx={{
                width: "100%",
                color: "black",
                fontWeight: "bolder",
                margin: "20px 0px 10px",
                }}
            >
                Login
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{ required: "Ingrese un email", pattern: {
                    value: /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/,
                    message: 'Ingrese un email valido'
                } }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <InputText
                    label="Your Email"
                    type="text"
                    placeholder="exampla@example.com"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? "Ingresa un email" : null}
                    />
                )}
                />
                <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ 
                    required: "Ingrese una contraseña", 
                    minLength: {
                    value: 4,
                    message: 'Debe tener entre 4 y 8 carcteres'
                    }
                    // maxLength: {
                    //     value: 8,
                    //     message: 'Debe tener entre 4 y 8 carcteres'
                    // }
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <InputText
                    type="password"
                    label="Password"
                    placeholder="*********"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    />
                )}
                />

                <ButtonBasic
                type="submit"
                label="Login"
                variant="contained"
                style={buttonStyles}
                />
            </form>
            </Grid>
        </Box>
    );
};