import { Box, InputLabel, TextField } from "@mui/material";


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
      <InputLabel htmlFor="component-simple">{label}</InputLabel>
      <TextField error={error} helperText={helperText} onChange={onChange} value={value} type={type} placeholder={placeholder}  sx={{ '& .MuiOutlinedInput-root':{borderRadius: '7px', borderColor: '#B7C0C9' },  '& .MuiInputBase-input':{padding:'15px'}, margin: '10px 0px 15px', width: '100%'}}/>
    </Box>
    
  )
}
