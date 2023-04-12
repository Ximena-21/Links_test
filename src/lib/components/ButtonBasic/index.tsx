import { Button } from "@mui/material";


interface IpropsButton {
  label: string,
  variant: "text" | "contained" | "outlined",
  onClick?: () => void,
  style?: any,
  type?: "submit" | "button" | "reset"
}

export default function ButtonBasic({ type, label, variant, onClick, style } : IpropsButton) {
  return (
    
    <Button type={type} sx={style} onClick={onClick} variant={variant} >{label}</Button>
  )
}
