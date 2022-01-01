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

export default Tiket