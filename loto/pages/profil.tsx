import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import nextCookie from "next-cookies";
import {withAuthSync} from "../utils/auth";

const Profil = (props: any) => {
    const {
        ime,
        prezime,
        pol,
        adresa,
        postanskiBr,
        naselje,
        drzava,
        datumR,
        mestoR,
        email,
        brTel,
        jmbg,
        brBank,
        username
    } = props.body;
    var src="";
   
    if (pol=='Muski' || pol=='')
    {
       src = "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg";
    }
    else
    {
        src = "https://images.cdn1.stockunlimited.net/clipart450/woman-with-long-hair_1347443.jpg";
    }
    return (
        <div>
            <Header/>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img
                            className="rounded-circle mt-5" width="150px"
                            src={src} alt={""}/><span
                            className="font-weight-bold">{ime} {prezime}</span><span
                            className="text-black-50">{username}</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Korisnicki profil</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Pol</label>{" "}<label className="labels">{pol}</label>
                                </div>
                                <div className="col-md-6"><label
                                    className="labels">Adresa</label>{" "}<label className="labels">{adresa}</label>
                                </div>
                                <div className="col-md-6"><label
                                    className="labels">Postanski broj</label>{" "}<label className="labels">{postanskiBr}</label>
                                </div>
                                <div className="col-md-6"><label
                                    className="labels">Naselje</label>{" "}<label className="labels">{naselje}</label>
                                </div>
                                <div className="col-md-6"><label
                                    className="labels">Drzava</label>{" "}<label className="labels">{drzava}</label>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Datum rodjenja</label>
                                    {" "} <label className="labels">{datumR}</label>
                                </div>
                                <div className="col-md-12"><label className="labels">Mesto rodjenja</label>
                                    {" "}<label className="labels">{mestoR}</label>
                                </div>
                                <div className="col-md-12"><label className="labels">JMBG</label>
                                    {" "}<label className="labels">{jmbg}</label>
                                </div>
                                <div className="col-md-12"><label className="labels">Broj telefona</label>
                                    {" "}<label className="labels">{brTel}</label>
                                </div>
                                <div className="col-md-12"><label className="labels">Email adresa</label>
                                    {" "}<label className="labels">{email}</label>
                                </div>
                                <div className="col-md-12"><label className="labels">Broj bankovnog racuna</label>
                                    {" "}<label className="labels">{brBank}</label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
    // return(
    //     <div></div>
    // )
}
Profil.getInitialProps = async (ctx: any) => {
    const token = nextCookie(ctx);
    const apiUrl = "http://localhost:3000/get-user-by-username";

    const redirectOnError = () =>
        typeof window !== "undefined"
            ? Router.push("/prijava")
            : ctx.res.writeHead(302, {Location: "/prijava"}).end();

        const response = await fetch(apiUrl, {
            method:'POST',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body:JSON.stringify({token}),
        });
        if (response.status == 200) {
            return await response.json();
        } else {
            return await redirectOnError();
        }
};
export default withAuthSync(Profil)