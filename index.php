<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" title="theme" href="css/theme-light.css">
    <script src="js/index.js" defer></script>
    <title>PC Supporter</title>
</head>
<body>
    <div class="basic">
        <div class="menu1">
            <div class="menu2">
                <a style="text-decoration:none" class="menubtn" href="/login.php">Войти</a><br><br>
                <a style="text-decoration:none" class="menubtn" href="/register.php">Регистрация</a><br><br>
                <a class="menubtn open-popup-3">Справка по сайту</a>
            </div>
            <div class="container">
                <div class="buttons">
                    <button type="button" class="button active" onclick="fontchange(18)">A</button>
                    <button type="button" class="button" onclick="fontchange(22)">A</button>
                    <button type="button" class="button" onclick="fontchange(26)">A</button>
                    <button type="button" class="button" onclick="fontchange(32)">A</button>
                </div>
            </div>
            <div class="menu3">
                <div class="theme">
                    <svg class="changeTheme" data-theme="light" width="40" height="40" viewBox="0 0 40 40"  xmlns="http://www.w3.org/2000/svg"> <path d="M20 30C22.6522 30 25.1957 28.9464 27.0711 27.0711C28.9464 25.1957 30 22.6522 30 20C30 17.3478 28.9464 14.8043 27.0711 12.9289C25.1957 11.0536 22.6522 10 20 10C17.3478 10 14.8043 11.0536 12.9289 12.9289C11.0536 14.8043 10 17.3478 10 20C10 22.6522 11.0536 25.1957 12.9289 27.0711C14.8043 28.9464 17.3478 30 20 30V30ZM20 0C20.3315 0 20.6495 0.131696 20.8839 0.366117C21.1183 0.600537 21.25 0.918479 21.25 1.25V6.25C21.25 6.58152 21.1183 6.89946 20.8839 7.13388C20.6495 7.3683 20.3315 7.5 20 7.5C19.6685 7.5 19.3505 7.3683 19.1161 7.13388C18.8817 6.89946 18.75 6.58152 18.75 6.25V1.25C18.75 0.918479 18.8817 0.600537 19.1161 0.366117C19.3505 0.131696 19.6685 0 20 0V0ZM20 32.5C20.3315 32.5 20.6495 32.6317 20.8839 32.8661C21.1183 33.1005 21.25 33.4185 21.25 33.75V38.75C21.25 39.0815 21.1183 39.3995 20.8839 39.6339C20.6495 39.8683 20.3315 40 20 40C19.6685 40 19.3505 39.8683 19.1161 39.6339C18.8817 39.3995 18.75 39.0815 18.75 38.75V33.75C18.75 33.4185 18.8817 33.1005 19.1161 32.8661C19.3505 32.6317 19.6685 32.5 20 32.5V32.5ZM40 20C40 20.3315 39.8683 20.6495 39.6339 20.8839C39.3995 21.1183 39.0815 21.25 38.75 21.25H33.75C33.4185 21.25 33.1005 21.1183 32.8661 20.8839C32.6317 20.6495 32.5 20.3315 32.5 20C32.5 19.6685 32.6317 19.3505 32.8661 19.1161C33.1005 18.8817 33.4185 18.75 33.75 18.75H38.75C39.0815 18.75 39.3995 18.8817 39.6339 19.1161C39.8683 19.3505 40 19.6685 40 20ZM7.5 20C7.5 20.3315 7.3683 20.6495 7.13388 20.8839C6.89946 21.1183 6.58152 21.25 6.25 21.25H1.25C0.918479 21.25 0.600537 21.1183 0.366117 20.8839C0.131696 20.6495 0 20.3315 0 20C0 19.6685 0.131696 19.3505 0.366117 19.1161C0.600537 18.8817 0.918479 18.75 1.25 18.75H6.25C6.58152 18.75 6.89946 18.8817 7.13388 19.1161C7.3683 19.3505 7.5 19.6685 7.5 20ZM34.1425 5.8575C34.3768 6.09191 34.5085 6.40979 34.5085 6.74125C34.5085 7.07271 34.3768 7.39059 34.1425 7.625L30.6075 11.1625C30.4913 11.2786 30.3533 11.3706 30.2016 11.4333C30.0498 11.4961 29.8871 11.5283 29.7229 11.5282C29.3912 11.528 29.0731 11.396 28.8387 11.1612C28.7227 11.045 28.6307 10.9071 28.5679 10.7553C28.5052 10.6035 28.4729 10.4409 28.4731 10.2766C28.4733 9.94491 28.6053 9.62689 28.84 9.3925L32.375 5.8575C32.6094 5.62316 32.9273 5.49152 33.2588 5.49152C33.5902 5.49152 33.9081 5.62316 34.1425 5.8575V5.8575ZM11.16 28.84C11.3943 29.0744 11.526 29.3923 11.526 29.7237C11.526 30.0552 11.3943 30.3731 11.16 30.6075L7.625 34.1425C7.38925 34.3702 7.07349 34.4962 6.74575 34.4933C6.418 34.4905 6.10449 34.359 5.87273 34.1273C5.64097 33.8955 5.50951 33.582 5.50666 33.2543C5.50381 32.9265 5.6298 32.6108 5.8575 32.375L9.3925 28.84C9.62691 28.6057 9.94479 28.474 10.2762 28.474C10.6077 28.474 10.9256 28.6057 11.16 28.84V28.84ZM34.1425 34.1425C33.9081 34.3768 33.5902 34.5085 33.2588 34.5085C32.9273 34.5085 32.6094 34.3768 32.375 34.1425L28.84 30.6075C28.6123 30.3717 28.4863 30.056 28.4892 29.7282C28.492 29.4005 28.6235 29.087 28.8552 28.8552C29.087 28.6235 29.4005 28.492 29.7282 28.4892C30.056 28.4863 30.3717 28.6123 30.6075 28.84L34.1425 32.375C34.3768 32.6094 34.5085 32.9273 34.5085 33.2588C34.5085 33.5902 34.3768 33.9081 34.1425 34.1425ZM11.16 11.1625C10.9256 11.3968 10.6077 11.5285 10.2762 11.5285C9.94479 11.5285 9.62691 11.3968 9.3925 11.1625L5.8575 7.625C5.73811 7.50969 5.64288 7.37176 5.57737 7.21926C5.51186 7.06675 5.47738 6.90273 5.47594 6.73675C5.47449 6.57078 5.50612 6.40618 5.56897 6.25256C5.63182 6.09894 5.72464 5.95937 5.84201 5.84201C5.95937 5.72464 6.09894 5.63182 6.25256 5.56897C6.40618 5.50612 6.57078 5.47449 6.73675 5.47594C6.90273 5.47738 7.06675 5.51186 7.21926 5.57737C7.37176 5.64288 7.50969 5.73811 7.625 5.8575L11.16 9.3925C11.2764 9.50861 11.3688 9.64655 11.4318 9.79842C11.4948 9.95028 11.5272 10.1131 11.5272 10.2775C11.5272 10.4419 11.4948 10.6047 11.4318 10.7566C11.3688 10.9084 11.2764 11.0464 11.16 11.1625V11.1625Z"></path></svg>
                    <svg class="changeTheme" data-theme="dark" width="38" height="40" viewBox="0 0 38 40"  xmlns="http://www.w3.org/2000/svg"> <path d="M15 0.695136C15.244 0.991667 15.3935 1.35457 15.4292 1.73694C15.4648 2.11932 15.385 2.5036 15.2 2.84014C13.7546 5.49382 12.9998 8.46837 13.005 11.4901C13.005 21.5426 21.2 29.6826 31.3 29.6826C32.6175 29.6826 33.9 29.5451 35.1325 29.2826C35.5103 29.2008 35.9039 29.2321 36.264 29.3726C36.6241 29.5131 36.9349 29.7566 37.1575 30.0726C37.3925 30.4013 37.5123 30.7983 37.4983 31.2021C37.4842 31.6058 37.3372 31.9936 37.08 32.3051C35.1192 34.7137 32.6456 36.6544 29.8396 37.9856C27.0335 39.3168 23.9658 40.0051 20.86 40.0001C9.335 40.0001 0 30.7151 0 19.2751C0 10.6651 5.285 3.28014 12.81 0.150136C13.1848 -0.00828447 13.601 -0.0407995 13.9959 0.057475C14.3908 0.15575 14.7431 0.379507 15 0.695136V0.695136Z" ></path></svg>
                </div>
            </div>
        </div>
    <div id="para" class="basic2">
        <div class="to_helper p1">
            <button  class="btn1 c1" id="btn1">Перейти к Помошнику</button><p>
        </div>
    <br>
        <div id="fh" class="for_whom p1">
            <div class="c1">
                <p>Для кого выбираете компьютер?</p><br><br> 
            <ul>
                <input name="cc1" type="radio" value="me" id="me"> Себя<br><br>
                <input name="cc1" type="radio" value="fam" id="fam"> Родственника<br><br>
                <input name="cc1" type="radio" value="frn" id="frn"> Друга<br><br>
                <input name="cc1" type="radio" value="col" id="col"> Колега по работе<br><br>
                <input name="cc1" type="radio" value="dk1" id="dk1"> Затрудняюсь ответить<br><br>
            </uL>
            <br>
            <div class="p12">
                    <button class="sbrs" id="sbrs1">Сброс</button>
                    <button class="sbrs" id="nxt1">следующий вопрос</button>
            </div>
            </div>
        </div>
    <br>
        <div class="how_old p1" id="how_old">
            <div class="c1">
                <p>Сколько лет?</p><p class="age"></p><br><br>
            <uL>
                <input type="text" id="age-range"><p>
                <input name="cc2" type="radio" value="dk2" id="dk2"> Затрудняюсь ответить<br>
            </uL>
            <br>
            <div class="p12">
                <button class="sbrs" id="prvs2">предыдущий вопрос</button>
                <button class="sbrs" id="sbrs2">Сброс</button>
                <button class="sbrs" id="nxt2">следующий вопрос</button>
            </div>
            <br>
            </div>
        </div>
    <br>
        <div class="how_often p1" id="how_often">
            <div class="c1">
                <p>Как часто будет пользоватся?</p><p class="tm"></p><br><br>
            <ul>
                <input name="cc4" type="radio" id="day" value="day" onchange="psu(`day`, `psu`)"> Несколько раз в день<br><br>
                <input name="cc4" type="radio" id="week" value="week" onchange="psu(`week`, `psu`)"> Несколько раз в неделю<br><br>
                <input name="cc4" type="radio" id="month" value="month" onchange="psu(`month`, `psu`)"> Несколько раз в месяц<br><br>
                <input name="cc4" type="radio" id="dk4" value="dk4" onchange="psu(`dk4`, `psu`)"> Затрудняюсь ответить<br><br>
            <div hidden class="howu">
                <p class="ho" id="ho"></p><p class="ho2" id="ho2"></p>
                <input type="text" hidden id="ho1">
            </div>
            </ul> 
            <br>
            <div class="p12">
                <button class="sbrs" id="prvs4">предыдущий вопрос</button>
                <button class="sbrs" id="sbrs4">Сброс</button>
                <button class="sbrs" id="nxt4">следующий вопрос</button>
            </div>
            <br>
            </div>
        </div>
    <br>
        <div class="monoblock_laptop p1" id="monoblock_laptop">
            <div class="c1">
                <p>Интересует ли покупка моноблока или ноутбука?</p><br><br>
            <ul>
                <input name="cc5" type="radio" id="yes1"> Да<br><br>
                <input name="cc5" type="radio" id="no1"> Нет<br><br>
                <input name="cc5" type="radio" id="dk5"> Затрудняюсь ответить<br><br>
                <button class="sbrs open-popup-mnblck">Статья</button>
            <div hidden id="MnblckNtbk">
                <input name="cc6" hidden type="checkbox" id="mnblck">
                <label hidden id="mnblck1"> Моноблок</label><br><br>
                <input name="cc6" hidden type="checkbox" id="ntbk">
                <label hidden id="ntbk1"> Ноутбук</label><br><br>
            </div>
            </ul>
            <div class="p12">
                <button class="sbrs" id="prvs5">предыдущий вопрос</button>
                <button class="sbrs" id="sbrs5">Сброс</button>
                <button class="sbrs" id="nxt5">следующий вопрос</button>
            </div>
            <br>
            </div>
        </div>
    <br>
        <div class="pereferia p1" id="pereferia">
            <div class="c1">
                <p>Нужна ли переферия?</p><br><br>
            <ul>
                <input name="cc7" type="radio" id="yes2" value="yes2" onchange="prphYES(this.id, `prph`)"> Да<br><br>
                <input name="cc7" type="radio" id="no2" value="no2" onchange="prphNO(this.id, `prph`)"> Нет<br><br>
                <input name="cc7" type="radio" id="dk6" value="dk6" onchange="prphDK(this.id, `monitor`,`keyboard`,`mouse`,`prph`)"> Затрудняюсь ответить<br><br>
                <button class="sbrs open-popup-prfr">Статья</button>
            </ul>
            <div hidden class="pereferia1">
            <ul>
                <input name="cc8" hidden type="checkbox" id="mntr" value="mntr" onchange="mntr(this.id, `monitor`)">
                <label id="mntr1" hidden> Монитор</label><br><br>
                <input name="cc8" hidden type="checkbox" id="kbrd" value="kbrd" onchange="kbrd(this.id, `keyboard`)">
                <label id="kbrd1" hidden> Клавиатура</label><br><br>
                <input name="cc8" hidden type="checkbox" id="ms" value="ms" onchange="ms(this.id, `mouse`)">
                <label id="ms1" hidden> Мышь</label><br><br>
                <input name="cc8" hidden type="checkbox" id="hdphns" value="ndphns" onchange="hdphns(this.id, `headphones`)">
                <label id="hdphns1" hidden> Наушники</label><br><br>
                <input name="cc8" hidden type="checkbox" id="spkrs" value="spkrs" onchange="spkrs(this.id, `speakers`)">
                <label id="spkrs1" hidden> Колонки</label><br><br>
                <input name="cc8" hidden type="checkbox" id="prntr" value="prntr" onchange="prntr(this.id, `printer`)">
                <label id="prntr1" hidden> Принтер/Сканер</label>
            </ul>
            </div>
            <div class="p12">
                <button class="sbrs" id="prvs6">предыдущий вопрос</button>
                <button class="sbrs" id="sbrs6">Сброс</button>
                <button class="sbrs" id="nxt6">следующий вопрос</button>
            </div>
            </div>
        </div>
    <br>
        <div class="target p1" id="target">
            <div class="c1">
                <p>Цель использования</p><br><br>
            <div class="target1">
                <input name="cc9" type="checkbox" id="lrn" value="lrn" onchange="chase1(`lrn`,`cpu`,`mb`,`cpuc`,`vram`,`ssd`,`hdd`,`gpu`,`case`,`cost`,`mnblck`,`mnblck2`,`mnblckCost`,`ntbk`,`ntbk2`,`ntbkCost`)"> Учеба<br><br>
                <input name="cc9" type="checkbox" id="wrk" value="wrk" onchange="chase2(`wrk`,`cpu`,`mb`,`cpuc`,`vram`,`ssd`,`hdd`,`gpu`,`case`,`cost`,`mnblck`,`mnblck2`,`mnblckCost`,`ntbk`,`ntbk2`,`ntbkCost`)"> Работа<br><br>
                <input name="cc9" type="checkbox" id="brws" value="brws" onchange="chase3(`brws`, `cpu`,`mb`,`cpuc`,`vram`,`ssd`,`hdd`,`gpu`,`case`,`cost`,`mnblck`,`mnblck2`,`mnblckCost`,`ntbk`,`ntbk2`,`ntbkCost`)"> Поиск в интернете<br><br>
                <input name="cc9" type="checkbox" id="wtch" value="wtch" onchange="chase4(`wtch`, `cpu`,`mb`,`cpuc`,`vram`,`ssd`,`hdd`,`gpu`,`case`,`cost`,`mnblck`,`mnblck2`,`mnblckCost`,`ntbk`,`ntbk2`,`ntbkCost`)"> Просмотр видео/кино/сериалов<br><br>
                <input name="cc9" type="checkbox" id="prgrm" value="prgrm" onchange="chase5(`prgrm`, `cpu`,`mb`,`cpuc`,`vram`,`ssd`,`hdd`,`gpu`,`case`,`cost`,`mnblck`,`mnblck2`,`mnblckCost`,`ntbk`,`ntbk2`,`ntbkCost`)"> Программирование<br><br>
                <input name="cc9" type="checkbox" id="dsgn" value="dsgn" onchange="chase6(`dsgn`, `cpu`,`mb`,`cpuc`,`vram`,`ssd`,`hdd`,`gpu`,`case`,`cost`,`mnblck`,`mnblck2`,`mnblckCost`,`ntbk`,`ntbk2`,`ntbkCost`)"> 3D Дизайн<br><br>
                <input name="cc9" type="checkbox" id="gms" value="gms" onchange="chase7(`gms`, `cpu`,`mb`,`cpuc`,`vram`,`ssd`,`hdd`,`gpu`,`case`,`cost`,`mnblck`,`mnblck2`,`mnblckCost`,`ntbk`,`ntbk2`,`ntbkCost`)"> Компьютерные игры<br><br>
                <input name="cc9" type="checkbox" id="txt" value="txt" onchange="chase8(`txt`, `cpu`,`mb`,`cpuc`,`vram`,`ssd`,`hdd`,`gpu`,`case`,`cost`,`mnblck`,`mnblck2`,`mnblckCost`,`ntbk`,`ntbk2`,`ntbkCost`)"> Работа в текстовых редакторах<br><br>
                <input name="cc9" type="checkbox" id="drw" value="drw" onchange="chase9(`drw`, `cpu`,`mb`,`cpuc`,`vram`,`ssd`,`hdd`,`gpu`,`case`,`cost`,`mnblck`,`mnblck2`,`mnblckCost`,`ntbk`,`ntbk2`,`ntbkCost`), hide(this.id, `gp`)"> Рисование<br><br>
            </div>
            <br>
            <div hidden id="gp">
                <p>Нужен ли графический планшет</p>
            <ul>
                <input name="cc10" type="radio" id="yes3">
                <label id="yes31">Да</label><br><br>
                <input name="cc10" type="radio" id="no3">
                <label id="no31">Нет</label><br><br>
                <input name="cc10" type="radio" id="dk7">
                <label id="dk71">Затрудняюсь ответить</label>
            </ul>
            </div>
            <div class="p12">
                <button class="sbrs" id="prvs7">предыдущий вопрос</button>
                <button class="sbrs" id="sbrs7">Сброс</button>
            </div>
            <br>
            <div class="p13">
                <button class="sbrs c13" id="result">Перейти к рекомендациям</button>
            </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div hidden class="result grid" >
            <div hidden  class="computer grid-item1" id="computer">
                <label>Компьютер</label>
                <ul>
                    <li id="cpu"></li>
                    <li id="mb"></li>
                    <li id="cpuc"></li>
                    <li id="vram"></li>
                    <li id="psu"></li>
                    <li id="ssd"></li>
                    <li id="hdd"></li>
                    <li id="gpu"></li>
                    <li id="case"></li>
                    <li id="cost"></li>
                </ul>
                <div class="grid2">
                    <button class="sbrs grid2-item1 open-popup-PC">Справка о комлпектующих</button>
                    <button class="sbrs grid2-item2" id="btn-export" onclick="exportPC();">Сохранить на устройство</button>
                </div>
            </div>
            <div hidden class="monoblock grid-item2" id="monoblock">
                <label>Моноблок</label>
                <ul>
                    <li id="mnblck2"></li>
                    <li id="mnblckCost"></li>
                </ul>
                <div class="grid2">
                    <button class="sbrs grid2-item1 open-popup-PC">Справка о Моноблоках</button>
                    <button class="sbrs grid2-item2" id="btn-export" onclick="exportMNBLCK();">Сохранить на устройство</button>
                </div>
            </div>
            <div hidden class="notebook grid-item3" id="notebook" >
                <label>Ноутбук</label>
                <ul>
                    <li id="ntbk2"></li>
                    <li id="ntbkCost"></li>
                </ul>
                <div class="grid2">
                    <button class="sbrs grid2-item1 open-popup-PC">Справка о Ноутбуках</button>
                    <button class="sbrs grid2-item2" id="btn-export" onclick="exportNTBCK();">Сохранить на устройство</button>
                </div>
            </div>
            <div class="prph grid-item4" id="prph" hidden>
                <label>Переферия</label>
                <ul>
                    <li id="monitor" hidden></li>
                    <li id="keyboard" hidden></li>
                    <li id="mouse" hidden></li>
                    <li id="headphones" hidden></li>
                    <li id="speakers" hidden></li>
                    <li id="printer" hidden></li>
                </ul>
                <div class="grid2">
                    <button class="sbrs grid2-item1 open-popup-PC">Справка о переферии</button>
                    <button class="sbrs grid2-item2" id="btn-export" onclick="exportPRPH();">Сохранить на устройство</button>
                </div>
            </div>
        </div>
        </div>    
        <div class="basic3">
            <div class="popup__bg-3">
                <div class="popup-3">
                    <img src="images/cross.svg" class="close-popup-3">
                        <h3>Приветсвую вас на сайте-помошнике по подбору комлпектующих для компьютера</h3>
                        <p>На сайте вы можете зарегестрироваться по кнопке регистрации <button class="menubtn">Регистрация</button></p>
                        <p>Войти в уже созданные аккаунт по кнопке входа <button class="menubtn">Войти</button></p>
                        <p>Изменить размер шрифта кнопками <img src="images/fonts.png"></p>
                        <p>Переключить сайт на темную тему кнопкой <img src="images/theme.png"> и обратно кнопкой <img src="images/theme2.png"></p>
                        <p>При опросе на сайте есть две формы заполнения:</p>  
                        <p>если форма для заполнения кругла, <input type="radio"> то вы можете выбрать только один вариант ответа,</p>
                        <p>если форма для заполнения квадратная, <input type="checkbox"> то вы может выбрать несколько вариантов ответа</p>
                        <p>Вы можете нажать кнопку <button class="sbrs">Сброс</button> если вы хотите изменить ответ на вопрос</p>
                        <p>После завершения опроса вы сможете сохранить полученный результ к себе на компьютер или в свой профиль на сайт нажав на кнопку <button class="menubtn">Сохранить</button> </p>
                        <p>У некоторых вопросах присутвую кнопки <button class="sbrs">Статья</button> по нажатию на эти кнопки появляются статьи с подробным разьяснениями в случае если вам не ясно о чем идет речь в вопросе</p>
                        <p>Вы всегда можете вновь прочесть справку в любой момент по нажатию кнопки <button class="menubtn">Справка по сайту</button></p>
                        <h4>На этом всё, вы можете опробовать доступный функционал или сразу перейти к опросу</h4>
                    </div>
                </div>
            </div>
            <div class="popup__bgprfr">
                <div class="popup-prfr">
                    <img src="images/cross.svg" class="close-popup-prfr">
                        <h3>Что такое переферия и для чего она нужна</h3>
                        <p> Периферия для компьютера - это все, что не находится внутри системного блока.</p>
                        <p>Если перефразировать, то периферийное оборудование компьютера - это все, что можно отключить от него, и при этом компьютер продолжит работу с некоторыми ограничениями</p>
                        <p>Примеры периферийных устройств:
                            <ul>
                            <li>Монитор.</li>
                            <li>Клавиатура.</li>
                            <li>Мышь</li>
                            <li>Принтер.</li>
                            <li>Сканер.</li>
                            <li>Микрофон, колонки</li>
                            </ul>
                        </p>
                        <p>Монитор <img src="images/monitor.png"> —  устройство вывода визуально информации и позволяешь с ней работать при помощи клавиатуры и мыши</p>
                        <p>Мышь <img src="images/mouse.jpg"> —  устройство для управления курсором и отдачи различных команд компьютеру</p>
                        <p>Клавиатура <img src="images/keyboard.png"> —  устройство, позволяющее пользователю вводить информацию в компьютер (устройство ввода). Представляет собой набор клавиш (кнопок), расположенных в определённом порядке.</p>
                        <p>Принтер <img src="images/printer.jpg"> — устройство предназначенное для вывода текстовой или графической информации, хранящейся в компьютере, на физический носитель, обычно на бумагу</p>
                        <p>Сканер <img src="images/scaner.jpg">  — устройство ввода, которое, анализируя какой-либо объект (обычно изображение, текст на бумаге), создаёт его цифровое изображение.</p>
                        <p>Наушники <img src="images/headphones.png"> — устройство для персонального прослушивания музыки, речи или иных звуковых сигналов. В комплекте с микрофоном могут служить головной гарнитурой — средством для ведения переговоров по телефону или иному средству голосовой связи</p>
                        <p>Колонки <img src="images/speakers.jpg"> — периферийное устройство и предназначено для вывода звука</p>
                    </div>
                </div>
                <div class="popup__bgmnblck">
                    <div class="popup-mnblck">
                        <img src="images/cross.svg" class="close-popup-mnblck">
                            <h3>Что такое Моноблок и Ноутбук</h3>
                            <p>Моноблок <img src="images/monoblock.jpg"> — это компьютер, собранный в одном корпусе с монитором. В настоящее время, когда используются большие плоские ЖК-панели, моноблок внешне очень похож на монитор, разве что он потолще и имеет больше органов управления.</p>
                            <p>Ноутбук <img src="images/laptop.jpg">— переносной компьютер, в корпусе которого объединены типичные компоненты персонального компьютера, включая дисплей, клавиатуру и устройство указания (обычно сенсорная панель или тачпад), а также аккумуляторные батареи.  </p>
                    </div>
                </div>
                <div class="popup__bgPC">
                    <div class="popup-PC">
                        <img src="images/cross.svg" class="close-popup-PC">
                        <h3>Подробная српавка о каждой из комлпектующих</h3>
                        <div class="popup-PC-1"></div>
                            <div class="first"><p>Процессор — (или центральный процессор) один из основных компонентов компьютерной техники 
                                (настольные компьютеры, ноутбуки, планшеты, телефоны и так далее). 
                                Отвечает за математические вычисления и обработку команд. При выходе из строя устройство перестает включаться. <br>На фото ниже Процессоры Intel и AMD,
                                их главное физическое отличие у процессорв Intel нет ножек для установки в *Сокет материнской платы а у AMD они есть.<br> В связи с этими различиями для процессорв
                                Intel и AMD нужны разные Материнские платы.</p></div>
                            <div class="cp"><img src="images/intel.jpg"> <img src="images/amd.jpg"><img src="images/intel_back.jpg"><img src="images/amd_back.jpg"></div>
                            <div><p>Материнская плата — некий единый транспортный узел, который берет на себя функции развязки (взаимодействия) 
                                всех подключенных к компьютеру железок и их централизованной работы, будь то процессор, оперативная память, 
                                видеокарта или флешки, USB-винчестеры и прочие элементы, гаджеты и периферия.<br>
                                Главное различие материнских плат заключается в *Сокете для процессора (или по простому посадочном месте для процессора).<br>
                                У материнских плат для процессоров Intel внутри сокета есть контактные ножки для соединения процессора с материнской платой.
                                У материнских плат для процессорва AMD внутри сокета находятся отверстия для контактных ножек которые находятся на самих прцоессорах AMD</p></div>
                            <div><img class="mb" src="images/intel_mb.jpg"> <img class="mb" src="images/amd_mb.jpg"> <img class="mb"  src="images/intel_mb_soket.jpg"> <img class="mb" src="images/amd_mb_soket.png"></div>
                            <div><p>Охлаждение — набор средств для отвода тепла от нагревающихся в процессе работы компьютерных компонентов.
                                существует два вида охлаждения процессоров: <br>
                                Воздушное - с радиатором в который вмонтированны тепловые трубки для отвода тепла а на сам радиатор прикреплен куллер для обдува ребер радиатора холодным воздухом<br>
                                Жидкосное - в комплекте находится помпа, трубки с хладогеном, радиатор и куллер, чаще всего помпа устаналивается на процессор, 
                                от помпы идут трубки к радиатору, в самих трубках радиаторе и поме находится хладоген, а радиатор в свою крепится внутри корпуса либо на верхнюю либо на переднюю панель.<br>
                                Если говорить о различиях охлаждения для процессорв Intel и AMD то главное различие заключается в крепежах для конкретного прозводителя процессорв.
                                Довольно часто в коплекте с жидкосным охлаждением есть унивирасльный крепеж для обоих процессорв. 
                            </p></div>
                            <div><img class="mb" src="images/svo.jpg"> <img class="mb" src="images/sjo.jpg"> <img class="mb" src="images/intel_k.jpg"> <img class="mb" src="images/amd_k.jpg"> <img class="mb" src="images/u_k.jpg"></div>
                            <div><p>Оперативная память</p></div>
                            <div><img src="" ></div>
                            <div><p>Блок питания</p></div>
                            <div><img src="" ></div>
                            <div><p>SSD</p></div>
                            <div><img src=""></div>
                            <div><p>HDD</p></div>
                            <div><img src=""></div>
                            <div><p>Видеокарта</p></div>
                            <div><img src=""></div>
                            <div><p>Корпус</p></div>
                            <div><img src=""></div>
                    </div>
                </div>
            </div>
</body>
</html>