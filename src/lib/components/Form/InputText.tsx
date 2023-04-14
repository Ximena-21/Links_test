import { Box, InputLabel, TextField } from "@mui/material";
import { inputSyles, labelInputStyle } from "./styles";


interface IpropsInputText {
  label: string,
  placeholder: string,
  type: string,
  value?: string | number ,
  onChange?:  () => void,
  error?: any,
  helperText?: any
}



export default function InputText({value, label, placeholder, type, onChange, error, helperText } : IpropsInputText) {
  return (
    <Box sx={{width: 340}} > 
      <InputLabel sx={labelInputStyle} htmlFor="component-simple">{label}</InputLabel>
      <TextField error={error} helperText={helperText} onChange={onChange} value={value} type={type} placeholder={placeholder}  sx={inputSyles}/>
    </Box>
    
  )
}
