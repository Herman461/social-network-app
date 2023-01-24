import Link from 'next/link';
import Logo from '../../public/images/logo.svg';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import header from './style/header';
import HeaderSearch from "./components/HeaderSearch";

const Header = () => {

    return (
        <Box component="header" sx={header.header}>
            <Container sx={header.container} maxWidth="lg">
                <Box sx={{marginRight: 4}}>
                    <Link href="/"><Logo /></Link>
                </Box>
                <HeaderSearch />
            </Container>

        </Box>
    )
}

export default Header;
