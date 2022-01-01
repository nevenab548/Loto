import Header from '../components/Header';
import Footer from '../components/Footer';
import {useState} from "react";

function Registracija() {

    const [userData, setUserData] = useState({
        ime: '',
        prezime: '',
        pol: '',
        adresa: '',
        postanskiBr: '',
        naselje: '',
        drzava: '',
        datumR: '',
        mestoR: '',
        email: '',
        emailProvera: '',
        brTel: '',
        jmbg: '',
        brBank: '',
        username: '',
        sifra: '',
        sifraProvera: '',
        error: ''
    })

    const validateEmail = (email: string) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const validateBank = (account: string) => {
        return account.match(/\d\d\d-\d\d\d\d\d\d\d\d\d\d\d\d\d-\d\d/i);
    };
    const validatePhone = (number: string) => {
        return number.match(/\+3816\d/i);
    };

    async function handleSubmit(event: any) {
        event.preventDefault()
        setUserData(Object.assign({}, userData, {error: ''}))

        const ime = userData.ime;
        const prezime = userData.prezime;
        const pol = userData.pol;
        const adresa = userData.adresa;
        const postanskiBr = userData.postanskiBr;
        const naselje = userData.naselje;
        const drzava = userData.drzava;
        const datumR = userData.datumR;
        const mestoR = userData.mestoR;
        const email = userData.email;
        const emailProvera = userData.emailProvera;
        const brTel = userData.brTel;
        const jmbg = userData.jmbg;
        const brBank = userData.brBank;
        const username = userData.username;
        const sifra = userData.sifra;
        const sifraProvera = userData.sifraProvera;
        const url = 'http://localhost:3000/create-user'

        if (ime == '' || prezime == '' || adresa == '' || postanskiBr == '' || naselje == '' || datumR == '' || mestoR == '' || email == '' || jmbg == '' || username == '' || sifra == '') {
            alert("Niste popunili sva neophodna polja!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Unesite validan mejl!");
            return;
        }

        if (email !== emailProvera) {
            alert("Niste uneli isti mejl!");
            return;
        }

        if (sifra !== sifraProvera) {
            alert("Niste uneli isti password!");
            return;
        }

        if (brBank != '' && !validateBank(brBank)) {
            alert("Niste uneli validan bankovni racun!");
            return;
        }

        if (brTel != '' && !validatePhone(brTel)) {
            alert("Niste uneli validan broj telefona!");
            return;
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({
                    ime: ime,
                    prezime: prezime,
                    pol: pol,
                    adresa: adresa,
                    postanskiBr: postanskiBr,
                    naselje: naselje,
                    drzava: drzava,
                    datumR: datumR,
                    mestoR: mestoR,
                    email: email,
                    brTel: brTel,
                    jmbg: jmbg,
                    brBank: brBank,
                    username: username,
                    sifra: sifra
                })
            })
            if (response.status === 200) {
                console.log("Registration success.");
            } else {
                console.log('Registration failed.')
                let error = new Error(response.statusText)
                error.message = JSON.stringify(response)
            }
        } catch (error: any) {
            console.error(
                'You have an error in your code or there are Network issues.',
                error
            )

            const {response} = error
            setUserData(
                Object.assign({}, userData, {
                    error: response ? response.statusText : error.message,
                })
            )
        }
    }

    return (
        <main className='d-flex flex-column min-vh-100'>
            <Header/>
            <br/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header">
                                <h4 className="card-title mt-2">Registracija</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <h5 className="card-title mt-4"> Licni podaci </h5>
                                    <hr/>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Ime </label>
                                            <input id="inputName" type="text" className="form-control" placeholder=""
                                                   required value={userData.ime}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {ime: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                        <div className="col form-group">
                                            <label>Prezime</label>
                                            <input id="inputLastName" type="text" className="form-control"
                                                   placeholder=" " required value={userData.prezime}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {prezime: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Pol</label>
                                            <select id="inputGender" className="form-control" required
                                                    value={userData.pol}
                                                    onChange={event =>
                                                        setUserData(
                                                            Object.assign({}, userData, {pol: event.target.value})
                                                        )
                                                    }>
                                                <option>Muski</option>
                                                <option>Zenski</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Adresa</label>
                                            <textarea id="inputAddress" className="form-control" required
                                                      value={userData.adresa}
                                                      onChange={event =>
                                                          setUserData(
                                                              Object.assign({}, userData, {adresa: event.target.value})
                                                          )
                                                      }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Postanski broj</label>
                                            <input id="inputPostNum" type="text" className="form-control" required
                                                   value={userData.postanskiBr}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {postanskiBr: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Naselje</label>
                                            <input id="inputCity" type="text" className="form-control" required
                                                   value={userData.naselje}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {naselje: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Drzava</label>
                                            <input id="inputCountry" className="form-control" type="text"
                                                   value={userData.drzava}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {drzava: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Datum rodjenja</label>
                                            <input id="inputDOB" type="date" className="form-control" placeholder=""
                                                   required value={userData.datumR}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {datumR: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Mesto rodjenja</label>
                                            <input id="inputPOB" type="text" className="form-control" placeholder=""
                                                   required value={userData.mestoR}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {mestoR: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Email adresa</label>
                                            <input id="inputEmailOne" type="email" className="form-control"
                                                   placeholder="" required value={userData.email}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {email: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Ponovi email adresu</label>
                                            <input id="inputEmailTwo" type="email" className="form-control"
                                                   placeholder="" required value={userData.emailProvera}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {emailProvera: event.target.value})
                                                       )
                                                   }/>
                                            <small className="form-text text-muted">Nikada necemo deliti tvoj mejl se
                                                nekim.
                                            </small>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Broj telefona</label>
                                            <input id="inputPhone" type="text" className="form-control" placeholder=""
                                                   value={userData.brTel}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {brTel: event.target.value})
                                                       )
                                                   }/>
                                            <small className="form-text text-muted">Broj mobilnog telefona mora početi
                                                sa +3816 i u nastavku
                                                mora sadrzati samo cifre!
                                            </small>
                                        </div>
                                    </div>
                                    <h5 className="card-title mt-4"> Licna identifikacija </h5>
                                    <hr/>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>JMBG</label>
                                            <input id="inputJMBG" type="text" className="form-control" placeholder=""
                                                   required value={userData.jmbg}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {jmbg: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Broj bankovnog racuna</label>
                                            <input id="inputBank" type="text" className="form-control" placeholder=""
                                                   value={userData.brBank}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {brBank: event.target.value})
                                                       )
                                                   }/>
                                            <small className="form-text text-muted">Bankovni račun mora biti u formatu:
                                                xxx-xxxxxxxxxxxxx-xx
                                            </small>
                                        </div>
                                    </div>
                                    <h5 className="card-title mt-4"> Podaci za prijavu </h5>
                                    <hr/>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Korisnicko ime</label>
                                            <input id="inputUserName" type="text" className="form-control"
                                                   placeholder="" required value={userData.username}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {username: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Sifra</label>
                                            <input id="inputPasswordOne" type="password" className="form-control"
                                                   placeholder="" required value={userData.sifra}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {sifra: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Ponovi sifru</label>
                                            <input id="inputPasswordTwo" type="password" className="form-control"
                                                   placeholder="" required value={userData.sifraProvera}
                                                   onChange={event =>
                                                       setUserData(
                                                           Object.assign({}, userData, {sifraProvera: event.target.value})
                                                       )
                                                   }/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <button id="registerBtn" type="submit"
                                                className="btn btn-primary btn-block" onClick={handleSubmit}> Registruj
                                            se
                                        </button>
                                    </div>
                                    <br/>
                                    <small className="text-muted">Klikom na `Registruj se` dugme, potvrdjujes da
                                        prihvatas
                                        nase <br/> <a href=""> Uslove koriscenja. </a> </small>
                                </form>
                            </article>
                            <div className="border-top card-body text-center">Vec imas nalog? <a href="/prijava">Prijavi
                                se</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Registracija