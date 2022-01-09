import Header from "../components/Header";
import Footer from "../components/Footer";
import nextcookie from "next-cookies";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import {withAuthSync} from "../utils/auth";
import {useRef} from "react";


const Izvlacenje = (props: any) => {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var tmdate = today.getFullYear() + '-' + (today.getMonth() + 2) + '-' + today.getDate();
    var token = props.token;
    var lotoValue = [1,2,3,4,5,6,7];
    const ref = useRef(null)

    async function handleRaffle(event: any) {
        const apiUrl = 'http://localhost:3000/get-raffle'
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            if (response.status == 200)
                return response.json()
        })
        if (response.status == 400) {
            alert(response.body)
        } else {
            lotoValue = JSON.parse(response.body).numbers;
            const response2 = await fetch('http://localhost:3000/get-user-tickets', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({token})
            }).then(response => {
                if (response.status == 200)
                    return response.json()
            })
            if (response2.status == 400)
                alert("Nemate uplacene tikete!")
            else {
                let array = []
                array.push(parseInt(JSON.parse(response2.body).broj1))
                array.push(parseInt(JSON.parse(response2.body).broj2))
                array.push(parseInt(JSON.parse(response2.body).broj3))
                array.push(parseInt(JSON.parse(response2.body).broj4))
                array.push(parseInt(JSON.parse(response2.body).broj5))
                array.push(parseInt(JSON.parse(response2.body).broj6))
                array.push(parseInt(JSON.parse(response2.body).broj7))
                if (array.sort().join(',') == lotoValue.sort().join(','))
                    alert("CESTITAMO OSVOJILI STE NAGRADU!")
                else
                    alert("Nazalost niste osvojili nagradu! Vise srece sledeci put!")
            }
        }
    }

    function raffleBall(number: number) {
        if (lotoValue)
            return (
                <span className='balls'>{lotoValue[number]}</span>
            )
        else
            return (
                <span className='balls'>{number + 1}</span>
            )
    }

    function getBalls() {
        return (
            <div className='gameBalls' ref={ref}>
                <div className='gamePageBalls'>
                    <p className='wnBalls'>{raffleBall(0)}<span
                        className='wnDash'>-</span><span
                        className='balls'>{raffleBall(1)}</span><span className='wnDash'>-</span><span
                        className='balls'>{raffleBall(2)}</span><span
                        className='wnDash'>-</span><span className='balls'>{raffleBall(3)}</span><span
                        className='wnDash'>-</span><span
                        className='balls'>{raffleBall(4)}</span><span className='wnDash sbDash'>-</span><span
                        className='balls pbBall'>{raffleBall(5)}</span><span className='wnDash'>-</span><span
                        className='balls multiplier'>{raffleBall(6)}</span></p></div>
            </div>
        )
    }

    return (
        <div>
            <Header/>

            <div className='raffle'>
                <div className='nextJackpot'><p className='regWeight'>Sledece izvlacenje:</p>
                    <p>{tmdate}</p>
                </div>
                <div className="jackpot">
                    <p className='regWeight'>Izvuceni brojevi za datum:</p>
                    <p>{date}</p>
                </div>
            </div>
            <div className='gameBalls' ref={ref}>
                <div className='gamePageBalls'>
                    <p className='wnBalls'>{raffleBall(0)}<span
                        className='wnDash'>-</span><span
                        className='balls'>{raffleBall(1)}</span><span className='wnDash'>-</span><span
                        className='balls'>{raffleBall(2)}</span><span
                        className='wnDash'>-</span><span className='balls'>{raffleBall(3)}</span><span
                        className='wnDash'>-</span><span
                        className='balls'>{raffleBall(4)}</span><span className='wnDash sbDash'>-</span><span
                        className='balls pbBall'>{raffleBall(5)}</span><span className='wnDash'>-</span><span
                        className='balls multiplier'>{raffleBall(6)}</span></p></div>
            </div>
            <div className='raffleButton'>
                <button className="btn btn-primary btn-block center-btn" onClick={handleRaffle}>Proveri dobitak!
                </button>
            </div>
            <Footer/>
        </div>
    )
}
Izvlacenje.getInitialProps = async (ctx: any) => {
    const token = nextcookie(ctx);
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


export default withAuthSync(Izvlacenje)