import { Button } from "@mui/material";


interface IpropsButton {
  label: string,
  variant: "text" | "contained" | "outlined",
  onClick?: () => void,
  style?: any
}

export default function ButtonBasic({ label, variant, onClick, style } : IpropsButton) {
  return (
    
    <Button sx={style} onClick={onClick} variant={variant} >{label}</Button>
  )
}

// {width: {width}, padding:'15px 0', backgroundColor: '#007AFF'