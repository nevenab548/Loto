import Header from "../components/Header";
import Footer from "../components/Footer";
import nextCookie from "next-cookies";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import {withAuthSync} from "../utils/auth";
import {useState} from "react";


const Tiket = (props: any) => {
    const username = props.token;
    var today = new Date();
    var dayexp=86400-today.getDate();

    const [ticketData, setTicketData] = useState({
        'broj1': '',
        'broj2': '',
        'broj3': '',
        'broj4': '',
        'broj5': '',
        'broj6': '',
        'broj7': '',
        'username': username,
        'expTime': dayexp //dan
    })
    const url = 'http://localhost:3000/create-ticket'

    async function handleSubmit(event: any) {
        event.preventDefault()
        setTicketData(Object.assign({}, ticketData, {error: ''}))

        const broj1 = ticketData.broj1;
        const broj2 = ticketData.broj2;
        const broj3 = ticketData.broj3;
        const broj4 = ticketData.broj4;
        const broj5 = ticketData.broj5;
        const broj6 = ticketData.broj6;
        const broj7 = ticketData.broj7;
        const username = ticketData.username;
        const expTime = ticketData.expTime;

        if (new Set([broj1, broj2, broj3, broj4, broj5, broj6, broj7]).size !== [broj1, broj2, broj3, broj4, broj5, broj6, broj7].length) {
            alert("Ne mozete uneti dva ista broja za tiket!");
            return;
        }

        async function postData(url = '') {
            const response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    'broj1': broj1,
                    'broj2': broj2,
                    'broj3': broj3,
                    'broj4': broj4,
                    'broj5': broj5,
                    'broj6': broj6,
                    'broj7': broj7,
                    'username':username,
                    'expTime': expTime
                })
            })
            return response;
        }
        postData(url)
            .then(data => {
                alert("Uspesno kreiran tiket!");
            });
    }

    return (
        <div>
            <Header/>
            <div className={'container ticketNum'}>
                <div className={"row justify-content-center"}>
                    <input id={'numOne'} className="inputTicket" type={'number'} min={1} max={39} onChange={event =>
                        setTicketData(
                            Object.assign({}, ticketData, {broj1: event.target.value})
                        )
                    }/>
                    <input id={'numTwo'} className="inputTicket" type={'number'} min={1} max={39} onChange={event =>
                        setTicketData(
                            Object.assign({}, ticketData, {broj2: event.target.value})
                        )
                    }/>
                    <input id={'numThree'} className="inputTicket" type={'number'} min={1} max={39} onChange={event =>
                        setTicketData(
                            Object.assign({}, ticketData, {broj3: event.target.value})
                        )
                    }/>
                    <input id={'numFour'} className="inputTicket" type={'number'} min={1} max={39} onChange={event =>
                        setTicketData(
                            Object.assign({}, ticketData, {broj4: event.target.value})
                        )
                    }/>
                    <input id={'numFive'} className="inputTicket" type={'number'} min={1} max={39} onChange={event =>
                        setTicketData(
                            Object.assign({}, ticketData, {broj5: event.target.value})
                        )
                    }/>
                    <input id={'numSix'} className="inputTicket" type={'number'} min={1} max={39} onChange={event =>
                        setTicketData(
                            Object.assign({}, ticketData, {broj6: event.target.value})
                        )
                    }/>
                    <input id={'numSeven'} className="inputTicket" type={'number'} min={1} max={39} onChange={event =>
                        setTicketData(
                            Object.assign({}, ticketData, {broj7: event.target.value})
                        )
                    }/>
                </div>
                <button className="btn btn-primary btn-block" id={'ticketSubmit'} onClick={handleSubmit}>Napravi tiket
                </button>
            </div>
            <Footer/>
        </div>
    )
}
Tiket.getInitialProps = async (ctx: any) => {
    const token = nextCookie(ctx);
    const apiUrl = "http://localhost:3000/get-user-by-username";

    const redirectOnError = () =>
        typeof window !== "undefined"
            ? Router.push("/prijava")
            : ctx.res.writeHead(302, {Location: "/prijava"}).end();

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({token}),
    });
    if (response.status == 200) {
        return await response.json();
    } else {
        return await redirectOnError();
    }
};
export default withAuthSync(Tiket)