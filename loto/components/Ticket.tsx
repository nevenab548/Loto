import {useState} from "react";
import exp from "constants";
import nextCookie from "next-cookies";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import {withAuthSync} from "../utils/auth";

const Ticket = (props:any) => {

    const username = props.data.username;

    const [ticketData, setTicketData] = useState({
        'broj1':'',
        'broj2':'',
        'broj3':'',
        'broj4':'',
        'broj5':'',
        'broj6':'',
        'broj7':'',
        'username':username,
        'expTime':'86400' //dan
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
        const expTime = ticketData.expTime;

        if( new Set([broj1, broj2, broj3, broj4, broj5, broj6, broj7]).size !== [broj1, broj2, broj3, broj4, broj5, broj6, broj7].length)
        {
            alert("Ne mozete uneti dva ista broja za tiket!");
            return;
        }
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({
                    'broj1':broj1,
                    'broj2':broj2,
                    'broj3':broj3,
                    'broj4':broj4,
                    'broj5':broj5,
                    'broj6':broj6,
                    'broj7':broj7,
                    'expTime':expTime
                })
            })
            if (response.status === 200) {
                console.log("Creation success.");
            } else {
                console.log('Creation failed.')
                let error = new Error(response.statusText)
                error.message = JSON.stringify(response)
                console.log(response)
            }
        } catch (error: any) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            )

            const {response} = error
            setTicketData(
                Object.assign({}, ticketData, {
                    error: response ? response.statusText : error.message,
                })
            )
        }
    }
    return (
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
            <button className="btn btn-primary btn-block" id={'ticketSubmit'} onClick={handleSubmit}>Napravi tiket</button>
        </div>
    )
}
Ticket.getInitialProps = async (ctx: any) => {
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
export default withAuthSync(Ticket)