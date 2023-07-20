import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="homePage">
      <Header />
      <div className="boxWithoutHeader">
        <h1>Bienvenue!</h1>
        <br />
        <p>
          Vous avez un intérieur qui vous plaît et pourtant cela « déborde » des
          penderies, des étagères, des placards ? Vous avez des meubles ou des
          pièces où vous ne mettez plus vraiment les pieds ? Vous n’êtes pas
          tout à fait à l’aise dans cette pièce ou devant ce meuble sans trop
          savoir comment changer cela ? Vous cherchez toujours à peu près les
          mêmes affaires sans parvenir une astuce pour que cela cesse ?
        </p>
        <br />
        <h2>Ma méthode? Celle qui vous conviendra!</h2>
        <br />
        <p>
          Je suis Amélie, décoratrice spécialisée dans le rangement des espaces
          intérieurs de vie. Je suis aussi maman d’une ado avec des chats, un
          jardin, une cave, un étage, un atelier dédié aux loisirs créatifs …
          pleiiiiin de raisons de tester et vous garantir une méthode validée
          par les principaux intéressé(e)s, y compris moi !
        </p>
        <p>
          Je vous propose une séance « fête du tri » d'une jounée de 10h à 16h
          pour 1 pièce.
        </p>
        <p>
          Ensemble, nous allons changer le destin d’un espace de vie :
          regrouper, trier, organiser et puis ranger (apprendre à plier, à
          suspendre de façon plus fonctionnelle). Ce sera peut être l’occasion
          de revoir les meubles de rangement, les étagères, les bacs, les
          solutions modulables. Dans la joie, la bonne humeur et en toute
          bienveillance. On peut même rajouter du thé, du café et de la musique
          si cela vous met en joie ! Si certaines affaires demandent un temps de
          réflexion, pas de soucis : une boîte, une caisse dédiée sera créé en
          attendant que vous y réfléchissiez. Pas de pression de ma part, je ne
          suis pas là pour cela.
        </p>
        <br />
        <h2>Préparation de la séance</h2>
        <br />
        <p>
          Nous échangerons pour préparer cette séance anti-bazar, gain de place,
          anti superflu. Ma présence n’est pas synonyme de « jeter » mais bien
          d’optimiser l’espace et les rangements quitte à vous conseiller des
          solutions modulables, coulissantes plutôt que battantes, des armoires
          au lieu d’étagères, des compartiments à rajouter dans les tiroirs. A
          votre demande, je peux même concevoir (sur devis) des rangements
          sur-mesure, c’est l’avantage d’être aussi décoratrice ! Ma présence
          vous permettra de prendre conscience de tout ce que vous possédez, de
          ce que vous n’utilisez plus, de ce qui ne fonctionne plus, de ce qui
          peut être vendu / donné.
        </p>
        <br />
        <h2>Détails pratiques de la séance</h2>
        <br />
        <p>
          Durée : 6H / pièce (minimum pour vous garantir un résultat notable)
        </p>
        <p>
          Prix : 75€/heure soit 450€ TTC. Pour une habitation complète, demandez
          un devis.
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
