import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/profil.css'
import "../styles/ticket.css"
import {CookiesProvider} from "react-cookie"
import type {AppProps} from 'next/app'

import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps) {

    useEffect(() => {
        // @ts-ignore
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return(
    <CookiesProvider>
        <Component {...pageProps} />
    </CookiesProvider>
    )
}

export default MyApp
