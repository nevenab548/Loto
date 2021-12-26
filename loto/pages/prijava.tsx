import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Prijava() {
    return (
        <main className='d-flex flex-column min-vh-100'>
            <Header/>
            <br/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header">
                                <h4 className="card-title mt-2">Prijava</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Korisnicko ime / Email adresa</label>
                                            <input id="inputLogin" type="password" className="form-control"
                                                   placeholder="" required/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <label>Sifra</label>
                                            <input id="inputPasswordLogin" type="password" className="form-control"
                                                   placeholder="" required/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <button id="loginBtn" type="submit"
                                                className="btn btn-primary btn-block"> Prijavi se
                                        </button>
                                    </div>
                                </form>
                            </article>
                            <div className="border-top card-body text-center">Nemas nalog? <a href='/registracija'>Registruj se</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}