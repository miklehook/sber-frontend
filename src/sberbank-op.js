import React, { Component } from 'react';
import main_fone from './img/main_fone.jpg'
import logo from './img/logo.png'
//import icon from '../public/icon.png'
import './sberbank.css';
import './sberbank-reg.js';

class MainPage extends Component {
  render() {
      return <div className="MainPage">
          <head className="MainPage-head">
              <meta charset="utf-8"/>
              <title>"Сбербанк"</title>
              <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans|Didact+Gothic|Exo+2|Montserrat|Noto+Serif" rel="stylesheet"/>
              <link rel="stylesheet" href="sberbank.css"/>

          </head>
          <body>
          <header className="MainPage-header">
          </header>
          <main>

              <div class="mainphoto">

                  <h1 class='text_main'>«Легкий старт»<br/>для вашего бизнеса</h1>
                  <div class="text_sec">Первый пакет услуг с бесплатным обслуживанием</div>
                  <img src={main_fone} alt="font3" class="main_fone"/>
                  <img src={logo} alt="logo" class="logotype"/>
                  <a href="sberbank-reg.js" class="button">Открыть счет</a>

              </div>

          </main>
          </body>
      </div>;
  }
}

export default MainPage;
