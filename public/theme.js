import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#EDEEF0'
        },
        secondary: {
            light: '#447bba',
            main: '#447bba',
            dark: '#447bba',
            contrastText: '#447bba',
        },
        icons: {
            main: '#818c99'
        }
    },

    typography: {
        fontFamily: "sans-serif", // doesn't work
        fontSize: 14,
    },
})

export default theme
