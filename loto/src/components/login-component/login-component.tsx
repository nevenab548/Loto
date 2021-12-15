import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'login-component',
  styleUrl: 'login-component.css',
  shadow: false,
  scoped:true
})
export class LoginComponent {

  render() {
    return (
      <Host>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="card">
                <header class="card-header">
                  <h4 class="card-title mt-2">Prijava</h4>
                </header>
                <article class="card-body">
                  <form>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Korisnicko ime / Email adresa</label>
                        <input id="inputLogin" type="password" class="form-control" placeholder="" required/>
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col">
                        <label>Sifra</label>
                        <input id="inputPasswordLogin" type="password" class="form-control" placeholder="" required/>
                      </div>
                    </div>
                    <div class="form-group">
                      <button id="loginBtn" type="submit" class="btn btn-primary btn-block"> Prijavi se
                      </button>
                    </div>
                  </form>
                </article>
                <div class="border-top card-body text-center">Nemas nalog? <a href="">Registruj se</a></div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
