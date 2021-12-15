import {Component, Host, h} from '@stencil/core';

@Component({
  tag: 'register-component',
  styleUrl: 'register-component.css',
  scoped: true,
  shadow: false,
})
export class RegisterComponent {

  render() {
    return (
      <Host>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="card">
                <header class="card-header">
                  <h4 class="card-title mt-2">Registracija</h4>
                </header>
                <article class="card-body">
                  <form>
                    <h5 class="card-title mt-4"> Licni podaci </h5>
                    <hr/>
                    <div class="form-row">
                      <div class="col form-group">
                        <label>Ime </label>
                        <input id="inputName" type="text" class="form-control" placeholder="" required/>
                      </div>
                      <div class="col form-group">
                        <label>Prezime</label>
                        <input id="inputLastName" type="text" class="form-control" placeholder=" " required/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Pol</label>
                        <select id="inputGender" class="form-control" required>
                          <option>Muski</option>
                          <option>Zenski</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Adresa</label>
                        <textarea id="inputAddress" class="form-control" required></textarea>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label>Postanski broj</label>
                        <input id="inputPostNum" type="text" class="form-control" required/>
                      </div>
                      <div class="form-group col-md-6">
                        <label>Naselje</label>
                        <input id="inputCity" type="text" class="form-control" required/>
                      </div>
                      <div class="form-group col-md-6">
                        <label>Drzava</label>
                        <input id="inputCountry" class="form-control" type="text"/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Datum rodjenja</label>
                        <input id="inputDOB" type="date" class="form-control" placeholder="" required/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Mesto rodjenja</label>
                        <input id="inputPOB" type="text" class="form-control" placeholder="" required/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Email adresa</label>
                        <input id="inputEmailOne" type="email" class="form-control" placeholder="" required/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Ponovi email adresu</label>
                        <input id="inputEmailTwo" type="email" class="form-control" placeholder="" required/>
                        <small class="form-text text-muted">Nikada necemo deliti tvoj mejl se nekim.
                        </small>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Broj telefona</label>
                        <input id="inputPhone" type="text" class="form-control" placeholder=""/>
                        <small class="form-text text-muted">Broj mobilnog telefona mora početi sa +3816 i u nastavku
                          mora sadrzati samo cifre!
                        </small>
                      </div>
                    </div>
                    <h5 class="card-title mt-4"> Licna identifikacija </h5>
                    <hr/>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>JMBG</label>
                        <input id="inputJMBG" type="text" class="form-control" placeholder="" required/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Broj bankovnog racuna</label>
                        <input id="inputBank" type="text" class="form-control" placeholder=""/>
                        <small class="form-text text-muted">Bankovni račun mora biti u formatu: xxx-xxxxxxxxxxxxx-xx
                        </small>
                      </div>
                    </div>
                    <h5 class="card-title mt-4"> Podaci za prijavu </h5>
                    <hr/>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Korisnicko ime</label>
                        <input id="inputUserName" type="text" class="form-control" placeholder="" required/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Sifra</label>
                        <input id="inputPasswordOne" type="password" class="form-control" placeholder="" required/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Ponovi sifru</label>
                        <input id="inputPasswordTwo" type="password" class="form-control" placeholder="" required/>
                      </div>
                    </div>
                    <div class="form-group">
                      <button id="registerBtn" type="submit" class="btn btn-primary btn-block"> Registruj se</button>
                    </div>
                    <small class="text-muted">Klikom na 'Registruj se' dugme, potvrdjujes da prihvatas
                      nase <br/> <a href=""> Uslove koriscenja. </a> </small>
                  </form>
                </article>
                <div class="border-top card-body text-center">Vec imas nalog? <a href="">Prijavi se</a></div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
