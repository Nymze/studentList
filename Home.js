import React from "react";

function Home() {
  return (
    <div>
      <div className="homeWrapper">
        <h2>Un petit guide de survie pour les étudiants</h2>
        <p>
          Made with ♥ by{" "}
          <a id="underline" href="https://www.instagram.com/byarnaudpaul/">
            Arnaud Paul
          </a>
        </p>
        <p>
          Vous pouvez retrouver divers ressources, App, articles, video, numéros
          d'ugence ici 👇
        </p>
      </div>
      <h1 className="homeWrapper"> Ecoute et urgences</h1>
      <div class="row">
        <div class="col s12 m6">
          <div class="cardHome blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Nightline</span>
              <p>
                Service d'écoute nocturne pour les étudiants parisien.e.s -
                Confidentiel, anonyme, sans jugement, non directif, gratuit.
              </p>
            </div>
            <div class="card-action">
              <a id="underline" href="https://www.nightline.fr/paris">
                Voir le site
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="cardHome blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">SETU</span>
              <p>
                Service d'Ecoute Téléphonique d'Urgence. En cas d'urgence
                psychologique contacter le Setu. 7/7 - 24h/24h. 01.45.26.81.30
              </p>
            </div>
            <div class="card-action">
              <a
                id="underline"
                href="https://www.rphweb.fr/details-service+d+ecoute+telephonique+d+urgence+-+setu-37.html"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="cardHome blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Suicide Ecoute</span>
              <p>
                Ecoute téléphonique 24 heures sur 24, bénévoles. pour les
                personnes présentant des envies suicidaires. 01 45 39 40 00
              </p>
            </div>
            <div class="card-action">
              <a id="underline" href="https://www.suicide-ecoute.fr/">
                En savoir pus
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="homeWrapper"> Articles</h1>
      <div class="row">
        <div class="col s12 m6">
          <div class="cardHome blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Resilience covid</span>
              <p>
                Un article à l'initiative de l'université de Lille, destiné aux
                étudiants pour comprendre et lutter contre l'isolement.
              </p>
            </div>
            <div class="card-action">
              <a id="underline" href="https://resiliencecovid.univ-lille.fr/">
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="homeWrapper"> Comptes à suivre</h1>
      <div class="row">
        <div class="col s12 m6">
          <div class="cardHome blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Soutien Etudiant</span>
              <p>
                Compte instagram soutien.etudiant pour prendre soin de toi et
                des autres. @soutien.etudiant
              </p>
            </div>
            <div class="card-action">
              <a
                id="underline"
                href="https://www.instagram.com/soutien.etudiant/"
              >
                Voir le compte
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
