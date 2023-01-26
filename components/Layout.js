/*import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';*/
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar/Sidebar.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./Header/Header.js";
import {useEffect} from "react";
import { Provider } from 'react-redux'
import store from "../store/store";

/*
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}))
*/

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

const Layout = (props) => {

    useEffect(() => {

    }, [])

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Header />
                <Box component="main" sx={{ paddingTop: '60px' }}>
                    <Container maxWidth="lg">
                        <Box sx={{ flexGrow: 1}}>
                            <Grid container spacing={2}>
                                <Grid item xs={2}>
                                    <Sidebar />
                                </Grid>
                                <Grid item xs={10}>
                                    {props.children}
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>

            </ThemeProvider>
        </Provider>

    );
}

function mapDispatchToProps() {

}

export default Layout;
