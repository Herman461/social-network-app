import Layout from "../components/Layout";
import '../public/css/reset.css';
import '../public/css/default.css';
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../public/theme";
import {wrapper} from "../store/store";


export default function App({ Component, ...rest }) {
    const {store, props} = wrapper.useWrappedStore(rest);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...props.pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>

    );
}


