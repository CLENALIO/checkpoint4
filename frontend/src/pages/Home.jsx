import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="homePage">
      <Header />
      <div className="boxWithoutHeader">
        <h1>Bienvenue</h1>
        <br />
        <p>
          Parce que le rangement et le sens de l’organisation ne sont pas innés,
          je vous propose mes services de coach pour vous aider à retrouver de
          l'ordre dans votre environnement.
        </p>
        <p>
          Je vous apporte conseils et astuces pour mettre en place une nouvelle
          organisation, tant personnelle que professionnelle. Mon champ d'action
          peut aller d'un placard à une maison entière, d'un bureau à l'ensemble
          d'un local professionnel…
        </p>
        <br />
        <h2>Quelques mots sur moi</h2>
        <br />
        <p>
          Coach en rangement ? Home organiser ? Organisatrice d’intérieur ? Il
          existe plusieurs intitulés pour un même métier et un même but : vous
          aider à vous sentir bien chez vous.
        </p>
        <p>
          Vous aimeriez un intérieur mieux organisé, épuré et facile à ranger ?
        </p>
        <p>
          Vous souhaitez faire un grand ménage intérieur pour reprendre pied ?
        </p>
        <p>
          Vous rêvez de voir disparaitre vos amas de papiers pour un système
          simple et efficace ?
        </p>
        <br />
        <br />
        <div className="endButton">
          <NavLink to="/rdv">
            <button className="buttonRdv" type="button">
              Prendre rendez vous
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
