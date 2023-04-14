import { Grid, Typography, Box, Alert } from "@mui/material";
import Logo from "../../assets/images/Logo";
import ButtonBasic from "../../lib/components/ButtonBasic";
import InputText from "../../lib/components/Form/InputText";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { buttonStyles, gridStyles, buttonSingInStyles, typographyStyles } from "./styles";
import { useUserStore } from "../../lib/stores/userStore";
import { Link, Navigate } from "react-router-dom";

export interface ILoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const { control, handleSubmit, reset } = useForm<ILoginForm>();

  const login = useUserStore((state) => state.loginUser);
  const user = useUserStore((state) => state.user);
  const alert = useUserStore((state) => state.alert)

  const onSubmit: SubmitHandler<ILoginForm> = async (data: ILoginForm) => {
    const dataUserLogin = {
      email: data.email,
      password: data.password,
    };

    login(dataUserLogin);

    reset({
      email:"",
      password: ""
    })
  };

  if (user.token) return <Navigate to={"/profile"} replace />;

  return (
    <Box sx={{ position: "relative" }}>
      <Grid sx={gridStyles}>
        <Link to="signup">
          <ButtonBasic
            label="SIGNUP"
            variant="outlined"
            style={buttonSingInStyles}
          />
        </Link>

        <Logo />

        <Typography
          component={"p"}
          variant={"h5"}
          sx={typographyStyles}
        >
          Login
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Ingrese un email",
              pattern: {
                value: /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/,
                message: "Ingrese un email valido",
              },
            }}
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
                message: "Debe tener entre 4 y 8 carcteres",
              },
              maxLength: {
                value: 8,
                message: "Debe tener entre 4 y 8 carcteres",
              },
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


        {alert && <Alert severity="error">{alert}</Alert>}
      </Grid>
    </Box>
  );
};
