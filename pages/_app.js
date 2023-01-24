import Layout from "../components/Layout";
import '../public/css/reset.css';
import '../public/css/default.css';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
