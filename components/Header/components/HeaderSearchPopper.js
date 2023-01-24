import ClickAwayListener from "@mui/base/ClickAwayListener";
import Popper from "@mui/material/Popper";


const HeaderSearchPopper = ({children, handlerClickAway, anchorEl}) => {
    return (
        <ClickAwayListener onClickAway={handlerClickAway}>
            <Popper sx={{zIndex: 999}} open={!!anchorEl} anchorEl={anchorEl}>
                {children}
            </Popper>
        </ClickAwayListener>
    )
}

export default HeaderSearchPopper;
