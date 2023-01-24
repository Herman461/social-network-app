import {styled} from "@mui/material/styles";
import {Input} from "@mui/material";


const HeaderSearchInput = styled(Input)(( { theme } ) => ({
    background: theme.palette.primary.main,
    borderRadius: 8,
    '&::before': {
        display: 'none'
    },
    '&::after': {
        display: 'none'
    },
}))

export default HeaderSearchInput;
