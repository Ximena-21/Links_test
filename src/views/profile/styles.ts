const gridStyles = {
  width: "100%",
  maxWidth: "800px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: "10px",
  marginTop: "20px",
};

const buttonStyles = {
  width: "340px",
  padding: "10px 0",
  backgroundColor: "#007AFF",
};

const boxStyles = {
  width: "90%",
  display: "flex",
  justifyContent: "space-between",

  "& svg": {
    width: "70px",
    height: "50px",
  },
};

const buttonLoginStyles = {
  padding: "0",
  width: "85px",
  height: "32px",
  fontSize: "10px",
};

export { gridStyles, buttonStyles, boxStyles, buttonLoginStyles };
