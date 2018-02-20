import React, { Component } from 'react';
import main_fone from './img/main_fone.jpg'
import logo from './img/logo.png'
import icon from './img/icon.png'
import './sberbank.css';

class App extends Component {
  render() {
      return <div className="App">
          <head className="App-head">
              <meta charset="utf-8"></meta>
              <title>"Сбербанк"</title>
              <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans|Didact+Gothic|Exo+2|Montserrat|Noto+Serif" rel="stylesheet"/>
              <link rel="stylesheet" href="sberbank.css"></link>

              <link rel="shortcut icon" href={icon} type="image/x-icon"></link>
          </head>
          <body>
          <header className="App-header">
          </header>
          <main>

              <div class="mainphoto">

                  <h1 class='text_main'>«Легкий старт»<br></br>для вашего бизнеса</h1>
                  <div class="text_sec">Первый пакет услуг с бесплатным обслуживанием</div>
                  <img src={main_fone} alt="font3" class="main_fone"></img>
                  <img src={logo} alt="logo" class="logotype"></img>
                  <a href="sberbank_reg.js" class="button">Открыть счет</a>

              </div>

          </main>
          </body>
      </div>;
  }
}

export default App;
