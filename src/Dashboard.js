import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Dashboard() {
  return (
    <section class="card-list">
      <article class="card">
        <header class="card-header">
          <p>App</p>
          <a href="https://apps.apple.com/fr/app/headspace-m%C3%A9ditation-sommeil/id493145008">
            <h2>Headspace</h2>
          </a>
        </header>
        <p>Pour te détendre en periode de crise</p>

        <div class="card-author">
          <a
            class="author-avatar"
            href="https://apps.apple.com/fr/app/headspace-m%C3%A9ditation-sommeil/id493145008"
          >
            <img src={require("./images/AppVisu.jpg")} />
          </a>

          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Meditation</div>
            Application
          </div>
        </div>

        <div class="tags">
          <a href="#">Android</a>
          <a href="#">IOS</a>
          <a href="#">Free-pay</a>
        </div>
      </article>
      <article class="card">
        <header class="card-header">
          <p>App</p>
          <a href="https://apps.apple.com/fr/app/headspace-m%C3%A9ditation-sommeil/id493145008">
            <h2>Petit Bambou</h2>
          </a>
        </header>
        <p>Comme Headspace mais en Français</p>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src={require("./images/AppVisu.jpg")} />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Meditation</div>
            Application
          </div>
        </div>

        <div class="tags">
          <a href="#">Android</a>
          <a href="#">IOS</a>
          <a href="#">Free & Pay</a>
        </div>
      </article>
      <article class="card">
        <header class="card-header">
          <p>App</p>
          <a href="https://apps.apple.com/fr/app/headspace-m%C3%A9ditation-sommeil/id493145008">
            <h2>Calm</h2>
          </a>
        </header>
        <p>
          Cette application vous permet de vous relaxer, avec des sons et des
          scènes de nature apaisants
        </p>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src={require("./images/AppVisu.jpg")} />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Relaxation</div>
            Meditation
          </div>
        </div>

        <div class="tags">
          <a href="#">Android</a>
          <a href="#">IOS</a>
          <a href="#">Free & pay</a>
        </div>
      </article>
      <article class="card">
        <header class="card-header">
          <p>App</p>
          <a href="https://www.goove.fr/">
            <h2>Groove App</h2>
          </a>
        </header>
        <p>
          Pour faire du sport depuis chez vous, avec d'autres personnes. Réseaux
        </p>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src={require("./images/AppVisu.jpg")} />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Sport</div>
            Application
          </div>
        </div>

        <div class="tags">
          <a href="#">Android</a>
          <a href="#">IOS</a>
          <a href="#">Free & pay</a>
        </div>
      </article>
      <article class="card">
        <header class="card-header">
          <p>App</p>
          <a href="https://www.mycoachsport.com/">
            <h2>My Coach</h2>
          </a>
        </header>
        <p>
          Application Française de sport "Numérique", tu fais du sport chez toi
          avec un coach.
        </p>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src={require("./images/AppVisu.jpg")} />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Sport</div>
            Application
          </div>
        </div>

        <div class="tags">
          <a href="#">Android</a>
          <a href="#">IOS</a>
          <a href="#">Free & pay</a>
        </div>
      </article>
    </section>
  );
}
export default Dashboard;
