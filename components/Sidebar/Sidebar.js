import SidebarLink from './SidebarLink';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';


const links = [
    {
        id: 1,
        icon: <AccountCircleOutlinedIcon color="secondary" />,
        text: "Моя страница",
        href: "/"
    },
    {
        id: 2,
        icon: <ChatBubbleOutlineOutlinedIcon color="secondary" />,
        text: "Мессенджер",
        href: "/im"
    },
    {
        id: 3,
        icon: <GroupOutlinedIcon color="secondary" />,
        text: "Друзья",
        href: "/friends"
    },
    {
        id: 4,
        icon: <GroupsOutlinedIcon color="secondary" />,
        text: "Сообщества",
        href: "/groups"
    },
    {
        id: 5,
        icon: <PhotoLibraryOutlinedIcon color="secondary" />,
        text: "Фотографии",
        href: "/albums"
    },
]
const Sidebar = () => {
    return (
        <ul>
            {links.map(link => (
                <SidebarLink
                    key={link.id}
                    icon={link.icon}
                    href={link.href}
                >
                    {link.text}
                </SidebarLink>
            ))
            }
        </ul>
    )
}

export default Sidebar;
