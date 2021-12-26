import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Registracija() {
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
                                                   required/>
                                        </div>
                                        <div className="col form-group">
                                            <label>Prezime</label>
                                            <input id="inputLastName" type="text" className="form-control"
                                                   placeholder=" " required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Pol</label>
                                            <select id="inputGender" className="form-control" required>
                                                <option>Muski</option>
                                                <option>Zenski</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Adresa</label>
                                            <textarea id="inputAddress" className="form-control" required></textarea>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Postanski broj</label>
                                            <input id="inputPostNum" type="text" className="form-control" required/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Naselje</label>
                                            <input id="inputCity" type="text" className="form-control" required/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Drzava</label>
                                            <input id="inputCountry" className="form-control" type="text"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Datum rodjenja</label>
                                            <input id="inputDOB" type="date" className="form-control" placeholder=""
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Mesto rodjenja</label>
                                            <input id="inputPOB" type="text" className="form-control" placeholder=""
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Email adresa</label>
                                            <input id="inputEmailOne" type="email" className="form-control"
                                                   placeholder="" required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Ponovi email adresu</label>
                                            <input id="inputEmailTwo" type="email" className="form-control"
                                                   placeholder="" required/>
                                            <small className="form-text text-muted">Nikada necemo deliti tvoj mejl se
                                                nekim.
                                            </small>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Broj telefona</label>
                                            <input id="inputPhone" type="text" className="form-control" placeholder=""/>
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
                                                   required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Broj bankovnog racuna</label>
                                            <input id="inputBank" type="text" className="form-control" placeholder=""/>
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
                                                   placeholder="" required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Sifra</label>
                                            <input id="inputPasswordOne" type="password" className="form-control"
                                                   placeholder="" required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Ponovi sifru</label>
                                            <input id="inputPasswordTwo" type="password" className="form-control"
                                                   placeholder="" required/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <button id="registerBtn" type="submit"
                                                className="btn btn-primary btn-block"> Registruj se
                                        </button>
                                    </div>
                                    <br/>
                                    <small className="text-muted">Klikom na 'Registruj se' dugme, potvrdjujes da
                                        prihvatas
                                        nase <br/> <a href=""> Uslove koriscenja. </a> </small>
                                </form>
                            </article>
                            <div className="border-top card-body text-center">Vec imas nalog? <a href="/prijava">Prijavi se</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}