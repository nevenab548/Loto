import Header from "../components/Header";
import Footer from "../components/Footer";
import Ticket from "../components/Ticket"
import nextCookie from "next-cookies";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import {withAuthSync} from "../utils/auth";

const Tiket = () => {
    return (
        <div>
            <Header/>
            <Ticket/>
            <Footer/>
        </div>
    )
}

Tiket.getInitialProps = async (ctx: any) => {
    const {token} = nextCookie(ctx);
    const apiUrl = "http://localhost/get-user";

    const redirectOnError = () =>
        typeof window !== "undefined"
            ? Router.push("/prijava")
            : ctx.res.writeHead(302, {Location: "/prijava"}).end();

    try {
        const response = await fetch(apiUrl, {
            credentials: "include",
            headers: {
                Authorization: JSON.stringify({token})
            }
        });

        if (response.ok) {
            const js = await response.json();
            console.log("js", js);
            return js;
        } else {
            return await redirectOnError();
        }
    } catch (error) {
        // Implementation or Network error
        return redirectOnError();
    }
};
export default withAuthSync(Tiket)