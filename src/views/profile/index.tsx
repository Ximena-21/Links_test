import { Box, Grid } from "@mui/material";
import ButtonBasic from "../../lib/components/ButtonBasic";
import Logo from "../../assets/images/Logo";
import InputText from "../../lib/components/Form/InputText";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ProfileUser } from "../../lib/components/ProfileUser";
import { WallUrls } from "../../lib/components/WallUrls";
import {
  boxStyles,
  buttonLoginStyles,
  gridStyles,
  buttonStyles,
} from "./styles";
import { useProfileStore } from "../../lib/stores/profileStore";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserStore } from "../../lib/stores/userStore";

export interface IUrlForm {
  url: string;
  name: string;
}

export const Profile = () => {
  const { control, handleSubmit, reset} = useForm<IUrlForm>();
  const addUrl = useProfileStore((state) => state.addUrl);
  const logOut = useUserStore((state) => state.logOut);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IUrlForm> = (data: any) => {
    const dataUrl = {
      url: data.url,
      name: data.name,
    };

    addUrl(dataUrl);

    reset({
          url: "",
          name: "",
        })
  };

  const onLogout = () => {
    logOut();
    return navigate("/");
  };

  return (
    <Grid sx={gridStyles}>
      <Box sx={boxStyles}>
        <Logo />

        <ButtonBasic
          label="LOGOUT"
          variant="outlined"
          style={buttonLoginStyles}
          onClick={onLogout}
        />
      </Box>

      <ProfileUser />

      <div
        style={{
          width: "100%",
          maxWidth: "750px",
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="url"
            control={control}
            defaultValue=""
            rules={{
              required: "Ingrese una Url",
              pattern: {
                value: /https?:\/\/(?:www\.)?[^\s\)]+/,
                message: "no es url",
              },
            }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputText
                label="Url to save"
                type="text"
                placeholder="https://google.com/"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Requiered" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <InputText
                type="text"
                label="Name of url"
                placeholder="Name of url"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />

          <ButtonBasic
            type="submit"
            label="ADD"
            variant="contained"
            style={buttonStyles}
          />
        </form>
        <div style={{ width: "90%", maxWidth: "350px" }}>
          <WallUrls />
        </div>

      </div>
    </Grid>
  );
};
