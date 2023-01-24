import Link from 'next/link';
import Logo from '../../public/images/logo.svg';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import SearchIcon from '@mui/icons-material/Search';
import {FormControl, InputAdornment, Input} from "@mui/material";
import { styled } from '@mui/material/styles';
import {useTheme} from '@mui/material/styles';
import {useRef} from "react";

const HeaderInput = styled(Input)(( { theme } ) => ({
    background: theme.palette.primary.main,
    borderRadius: 8,
    '&::before': {
        display: 'none'
    },
    '&::after': {
        display: 'none'
    },

}))

const Header = () => {
    const theme = useTheme()
    const inputEl = useRef(null)

    const handlerSearchClick = () => {
        inputEl.current.focus()
    }

    return (
        <Box
            component="header"
            sx={{

                background: '#fff',
                zIndex: 999,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',

            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: 48,
                }}
                maxWidth="lg"
            >
                <Box
                    sx={{
                        marginRight: 4
                    }}
                >
                    <Link href="/" className="logo">
                        <Logo />
                    </Link>
                </Box>

                <FormControl className="search">
                    <HeaderInput
                        inputRef={inputEl}
                        placeholder="Поиск"
                        startAdornment={
                            <InputAdornment
                                onClick={handlerSearchClick}
                                sx={{maxHeight: '100%', height: '100%', justifyContent: 'center', width: '35px', paddingLeft: 1, cursor: 'pointer'}} position="start">
                                <SearchIcon fill={theme.palette.icons.main} />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Container>

        </Box>
    )
}

export default Header;
