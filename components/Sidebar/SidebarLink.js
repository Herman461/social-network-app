import Box from '@mui/material/Box';
import style from './style';
import Link from 'next/link';

import { styled } from '@mui/material/styles';

const CustomLink = styled(Link)(() => ({
    ...style.link
}))

const SidebarLink = (props) => {

    return (
        <Box component="li">
            <CustomLink
                href={props.href}
            >
                {props.icon}
                <Box component="span" sx={style.linkText}>{props.children}</Box>
            </CustomLink>
        </Box>
    )
}


export default SidebarLink
