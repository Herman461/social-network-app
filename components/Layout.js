import BasePage from "./Base/BasePage";


const Layout = (props) => {
    return (
        <BasePage>{props.children}</BasePage>
    );
}


export default Layout;
