import Header from "../components/Header";
import Footer from "../components/Footer";
import nextcookie from "next-cookies";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import tiket from "./tiket";
const tiketiKorisnika= (props: any) => {
   /* const {
        broj1,
        broj2,
        broj3,
        broj4,
        broj5,
        broj6,
        broj7,
        username,
        expTime
    } = props.body;*/
    return (
        <div>
        <Header />
       
        <div className='raffle'>
           
            <div className='gamePageBalls'>
                <p className='wnBalls'><span className='balls'>{/*broj1*/}</span><span
                    className='wnDash'>-</span><span
                        className='balls'>{2}</span><span className='wnDash'>-</span><span
                            className='balls'>{3}</span><span
                                className='wnDash'>-</span><span className='balls'>{4}</span><span
                                    className='wnDash'>-</span><span
                                        className='balls'>{5}</span><span className='wnDash sbDash'>-</span><span
                                            className='balls pbBall'>{6}</span><span className='wnDash'>-</span><span
                                                className='balls multiplier'>{}</span></p>
               {/* <p className=''>{username} </p>*/}</div>
        </div>
        <Footer />
    </div>
    )
}

tiketiKorisnika.getInitialProps= async (context:any)=> {
    const username=context.username;
    const res=await fetch("http://localhost:3000/get-user-tickets",
    {
        method:'POST',
        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        body:JSON.stringify({username})
    });
 
    if (res.status == 200) {
        return await res.json();
    }
    else{
        return await 'greska';
    }
}
export default tiketiKorisnika
   

