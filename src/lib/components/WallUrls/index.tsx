import {
  Box,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { useProfileStore } from "../../stores/profileStore";
import { useEffect } from "react";
import { ListItemStyles, boxStyles, typographyStyles } from "./styles";

export const WallUrls = () => {
  const getUrls = useProfileStore((state) => state.getDataUrls);
  const deleteStore = useProfileStore((state) => state.deleteUrl);
  const dataUrls = useProfileStore((state) => state.urls);

  useEffect(() => {
    getUrls();
  }, []);

  const deleteUrl = (id: any) => {
    deleteStore(id);
  };
  return (
    <Box
      sx={boxStyles}
    >
      <List component="nav" aria-label="main mailbox folders">
        {dataUrls?.map((url, index: any) => (
          <>
            <Grid
              key={index}
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <ListItemText
                sx={ListItemStyles}
                primary={url.url}
                secondary={
                  <Typography
                    sx={typographyStyles}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {url.name}
                  </Typography>
                }
              />
              <ListItemIcon>
                <IconButton onClick={() => deleteUrl(url.id)}>
                  <DeleteOutline sx={{ color: "#FF5C6C" }} />
                </IconButton>
              </ListItemIcon>
            </Grid>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );
};
