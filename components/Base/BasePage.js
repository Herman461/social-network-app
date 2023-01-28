import Header from "../Header/Header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Sidebar from "../Sidebar/Sidebar";


const BasePage = (props) => {
    return (
        <>
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
        </>
    )
}

export default BasePage
