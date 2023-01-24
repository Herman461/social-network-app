import {useRef, useState} from "react";

import {useTheme} from "@mui/material/styles";
import {FormControl, InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


import header from '../style/header';

import HeaderSearchInput from './HeaderSearchInput';
import HeaderSearchPopper from "./HeaderSearchPopper";

const HeaderSearch = () => {
    const theme = useTheme()
    const inputEl = useRef(null)
    const [anchorEl, setAnchorEl] = useState(null)


    const handlerSearchClick = () => {
        inputEl.current.focus()
    }

    const handlerOpenPopover = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handlerClosePopover = (e) => {
        setAnchorEl(null)
    }

    return (
        <>
            <FormControl onClick={handlerOpenPopover}>
                <HeaderSearchInput
                    inputRef={inputEl}
                    placeholder="Поиск"
                    startAdornment={
                        <InputAdornment
                            onClick={handlerSearchClick}
                            sx={header.searchIcon} position="start"
                        >
                            <SearchIcon fill={theme.palette.icons.main}/>
                        </InputAdornment>
                    }
                />
            </FormControl>
            {
                !!anchorEl
                && <HeaderSearchPopper
                    handlerClickAway={handlerClosePopover}
                    anchorEl={anchorEl}
                >
                    The content of the Popper.
                </HeaderSearchPopper>
            }
        </>
    )
}

export default HeaderSearch
