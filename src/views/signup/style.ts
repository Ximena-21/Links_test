const gridStyles = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: "10px",
  marginTop: "70px",
};

const buttonStyles = {
  width: "340px",
  padding: "15px 0",
  backgroundColor: "#007AFF",
  marginTop: "10px",
  fontFamily: "Montserrat"
};

const buttonSingInStyles = {
  position: "absolute",
  top: "10px",
  right: 0,
  color: "#007AFF",
  borderColor: "#007AFF",
  fontFamily: "Montserrat"
};

const boxSignUpStyles = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
}

const typographySingUpStyles = {
  width: "100%",
  color: "black",
  fontWeight: "bolder",
  margin: "20px 0px 10px",
  fontFamily: "Montserrat"
}

const typographyTextStyles = {
  width: "300px",
  textAlign: "center",
  fontSize: "13px",
  margin: "15px auto",
  fontFamily: "Montserrat",
  "& > span": { color: "#007AFF" },
}

export { 
  gridStyles, 
  buttonStyles, 
  buttonSingInStyles, 
  boxSignUpStyles, 
  typographySingUpStyles,
  typographyTextStyles
};
