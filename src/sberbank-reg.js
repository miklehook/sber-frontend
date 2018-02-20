import React, { Component } from 'react';
import main_fone from './img/main_fone.jpg'
import logo from './img/logo.png'
import grey from '.img/grey.jpg'
import './sberbank.css';

class App extends Component {
    render() {
        return <div className="App">
            <body>
            <header className="App-header">
            </header>
            <main>

                <div class="mainphoto">


                    <img src={main_fone} alt="font3" class="main_fone_reg"/>
                    <a href="sberbank_op.js"><img  src={logo} alt="logo" class="logotype"/></a>
                    <div class='reg_block'>
                        <img src="img/white.jpg" alt="white" class="white">
                            <h1 class="zagol_1">Информация об оранизации или ИП</h1>



                            <p class="OGRN">ОГРН</p>
                            <p class="INN">ИНН</p>
                            <p class="year_gain">Годовая выручка<br/>(в рублях)</p>
                            <p class="v_org">Вид организации</p>
                            <p class="m_phone">Мобильный телефон</p>
                            <p class="email">Электронная почта</p>
                            <p class="pasport">Серия и номер<br/> паспорта</p>

                            <input class="vvod_dnnyh_ogrn" type="text" name="email-address"
                                   size="20" maxlength="13"/>
                            <input class="vvod_dnnyh_inn" type="text" name="email-address"
                                   size="20" maxlength="11"/>

                            <select class='vvod_dnnyh_gain' name="text" >
                                <option value="60" selected>До 60 млн. руб.</option>
                                <option value="240">От 60 млн. руб.<br/> До 400 млн. руб.</option>
                                <option value="400">От 400 млн. руб.</option>
                            </select>

                            <select class='vvod_dnnyh_org' name="text" >
                                <option value="Comerc" selected>Комерческая организация</option>
                                <option value="Finance">Финансовая организация</option>
                                <option value="NonComerc">Некомерческая организация</option>
                            </select>

                            <input class="vvod_dnnyh_phone" type="tel" name="phone"
                                   placeholder="+7(000)000-00-00" size="20" maxlength="11"/>

                            <input class="vvod_dnnyh_email" type="email" name="email-address" placeholder="name@domain.com" size="20"/>

                            <input class="vvod_dnnyh_pasport" type="text" name="pasport"
                                   placeholder="00 00 0000" size="20" maxlength="5"/>


                            <hr class='line'>

                                <a href="sberbank_doc.js" class="button_next">Продолжить</a>
                                <a href="sberbank_doc.js" class="button_reg">Зарезервировать счет</a></hr>

                    </div>
                    <img src={grey} alt="white" class="grey"/>
                </div>

            </main>
            </body>
        </div>
    );
    }
}
}

    export default App;
