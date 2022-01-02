import Header from "../components/Header";
import Footer from "../components/Footer";
import nextcookie from "next-cookies";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import {withAuthSync} from "../utils/auth";

const Izvlacenje = (props:any) => {
    const{
        numbers=[] //ovo je primer cisto
    }=props.body;
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var tmdate = today.getFullYear() + '-' + (today.getMonth() + 2) + '-' + today.getDate();
   console.log(numbers)

    return (
        <div>
            <Header/>
            <div className='raffle'>
                <div className='nextJackpot'><p className='regWeight'>Sledece izvlacenje:</p>
                    <p>{tmdate}</p>
                    <p className='gameJackpot'>Ovde ce da bude suma</p>
                </div>
                <p className='regWeight'>Izvuceni brojevi za datum:</p>
                <p>{date}</p>
                <div className='gamePageBalls'>
                    <p className='wnBalls'><span className='balls'>{15}</span><span
                        className='wnDash'>-</span><span
                        className='balls'>{2}</span><span className='wnDash'>-</span><span
                        className='balls'>3</span><span
                        className='wnDash'>-</span><span className='balls'>4</span><span
                        className='wnDash'>-</span><span
                        className='balls'>5</span><span className='wnDash sbDash'>-</span><span
                        className='balls pbBall'>6</span><span className='wnDash'>-</span><span
                        className='balls multiplier'>7</span></p>
                    <p className='powerball rolloverOrWinners'>0 pobednika </p></div>
            </div>
            <Footer/>
        </div>
    )
}
Izvlacenje.getInitialProps = async (ctx: any) => {
    const token = nextcookie(ctx);
    const apiUrl = "http://localhost:3000/get-user-by-username";
    const apiRaffle="http://localhost:3000/get-raffle";

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
    const response2 = await fetch(apiRaffle, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({token}),
    });
    if (response.status==200 && response2.status==200) {
        return await response.json();
    } else {
        return await redirectOnError();
    }

};


export default withAuthSync(Izvlacenje)