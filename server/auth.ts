import {setUserId} from "../store/auth/auth";
import http from "../http/http";
import {wrapper} from "../store/store";
import {getCookie} from "cookies-next";
import {CookieValueTypes} from "cookies-next/src/types";

interface VerifyTokenResponse {
    userId: string | null
}


export const getServerSideProps = wrapper.getServerSideProps( store => async () => {
    const token: CookieValueTypes = getCookie('token');

    if (typeof token !== 'string') {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            },
        }
    }

    const { data } = await http.post<VerifyTokenResponse>('/users/auth', {token})

    if (typeof data.userId === 'string') {
        store.dispatch(setUserId(data.userId))
    }

    return {
        props: {}
    }
})
