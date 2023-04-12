import { Box, InputLabel, TextField } from "@mui/material";


interface IpropsInputText {
  label: string,
  placeholder: string,
  type: string,
  defaultValue?: string | number ,
}

export default function InputText({ defaultValue, label, placeholder, type } : IpropsInputText) {
  return (
    <Box sx={{width: 340}} > 
      <InputLabel htmlFor="component-simple">{label}</InputLabel>
      <TextField defaultValue={defaultValue} type={type} id="outlined-disabled" placeholder={placeholder}  sx={{ '& .MuiOutlinedInput-root':{borderRadius: '7px', borderColor: '#B7C0C9' },  '& .MuiInputBase-input':{padding:'17px'}, marginTop: '15px', width: '100%'}}/>
    </Box>
    
  )
}
