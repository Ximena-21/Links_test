import { Grid, Typography, Box } from "@mui/material";
import Logo from "../../assets/images/Logo";
import ButtonBasic from "../../lib/components/ButtonBasic";
import InputText from "../../lib/components/Form/InputText";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { gridStyles, buttonSingInStyles, buttonStyles } from "./style";
import { useUserStore } from "../../lib/stores/userStore";
import { Link, useNavigate } from "react-router-dom";

export interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}

export const Signup = () => {
  const signup = useUserStore((state) => state.signInUser);
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<ISignUpForm>();

  const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
    const dataUserSignIn = {
      name: data.name,
      email: data.email,
      password: data.password,
      image: "",
    };

    signup(dataUserSignIn, () => navigate("/"));
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Grid sx={gridStyles}>
        <Link to="/">
          <ButtonBasic
            label="LOGIN"
            variant="outlined"
            style={buttonSingInStyles}
          />
        </Link>

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
          Signup
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{
              required: "Ingrese su nombre",
              minLength: {
                value: 5,
                message: "Debe contener minimo 5 carcateres",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputText
                label="Full Name"
                type="text"
                placeholder="Jeff Brown"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
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
                placeholder="jeff.brown@example.com"
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
            label="Signup"
            variant="contained"
            style={buttonStyles}
          />
        </form>

        <Typography
          component={"p"}
          sx={{
            width: "300px",
            textAlign: "center",
            fontSize: "13px",
            margin: "15px auto",
            "& > span": { color: "#007AFF" },
          }}
        >
          By Creating account You agree to the <span>Terms of use </span> and{" "}
          <span>Privacy Polycy</span>
        </Typography>
      </Grid>
    </Box>
  );
};
