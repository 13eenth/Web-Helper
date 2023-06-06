//-------------------------------------------------------//
//ПОПАП СПРАВКИ//
let popupBg3 = document.querySelector(`.popup__bg-3`);
let popup3 = document.querySelector(`.popup-3`);
let openPopupButtons3 = document.querySelectorAll(`.open-popup-3`);
let closePopupButton3 = document.querySelector(`.close-popup-3`)

openPopupButtons3.forEach((button)=>{
    button.addEventListener(`click`, (e)=>{
        e.preventDefault();
        popupBg3.classList.add(`active`)
        popup3.classList.add(`active`)
    })
})

closePopupButton3.addEventListener(`click`,()=>{
    popupBg3.classList.remove(`active`)
    popup3.classList.remove(`active`)
})

document.addEventListener(`click`, (e)=>{
    if(e.target === popupBg3){
        popupBg3.classList.remove(`active`)
        popup3.classList.remove(`active`)
    }
})
//-------------------------------------------------------//
//ПОПАП ПЕРЕФЕРИИ//
let popupBgprfr = document.querySelector(`.popup__bgprfr`);
let popupprfr = document.querySelector(`.popup-prfr`);
let openPopupButtonsprfr = document.querySelectorAll(`.open-popup-prfr`);
let closePopupButtonprfr = document.querySelector(`.close-popup-prfr`)

openPopupButtonsprfr.forEach((button)=>{
    button.addEventListener(`click`, (e)=>{
        e.preventDefault();
        popupBgprfr.classList.add(`active`)
        popupprfr.classList.add(`active`)
    })
})

closePopupButtonprfr.addEventListener(`click`,()=>{
    popupBgprfr.classList.remove(`active`)
    popupprfr.classList.remove(`active`)
})

document.addEventListener(`click`, (e)=>{
    if(e.target === popupBgprfr){
        popupBgprfr.classList.remove(`active`)
        popupprfr.classList.remove(`active`)
    }
})
//-------------------------------------------------------//
//ПОПАП МОНОБЛОК/НОУТБУК//
let popupBgmnblck = document.querySelector(`.popup__bgmnblck`);
let popupmnblck = document.querySelector(`.popup-mnblck`);
let openPopupButtonsmnblck = document.querySelectorAll(`.open-popup-mnblck`);
let closePopupButtonmnblck = document.querySelector(`.close-popup-mnblck`)

openPopupButtonsmnblck.forEach((button)=>{
    button.addEventListener(`click`, (e)=>{
        e.preventDefault();
        popupBgmnblck.classList.add(`active`)
        popupmnblck.classList.add(`active`)
    })
})

closePopupButtonmnblck.addEventListener(`click`,()=>{
    popupBgmnblck.classList.remove(`active`)
    popupmnblck.classList.remove(`active`)
})

document.addEventListener(`click`, (e)=>{
    if(e.target === popupBgmnblck){
        popupBgmnblck.classList.remove(`active`)
        popupmnblck.classList.remove(`active`)
    }
})
//-------------------------------------------------------//
//ПОПАП КОМПЛЕКТУЮЩИХ//
let popupBgPC = document.querySelector(`.popup__bgPC`);
let popupPC= document.querySelector(`.popup-PC`);
let openPopupButtonsPC = document.querySelectorAll(`.open-popup-PC`);
let closePopupButtonPC = document.querySelector(`.close-popup-PC`)

openPopupButtonsPC.forEach((button)=>{
    button.addEventListener(`click`, (e)=>{
        e.preventDefault();
        popupBgPC.classList.add(`active`)
        popupPC.classList.add(`active`)
    })
})

closePopupButtonPC.addEventListener(`click`,()=>{
    popupBgPC.classList.remove(`active`)
    popupPC.classList.remove(`active`)
})

document.addEventListener(`click`, (e)=>{
    if(e.target === popupBgPC){
        popupBgPC.classList.remove(`active`)
        popupPC.classList.remove(`active`)
    }
})
//-------------------------------------------------------//
//ПЛАВНО ПОЛЗЕМ НАЧАЛО//
const $button1 = document.querySelector(`#btn1`)
const $form1 = document.querySelector(`#fh`)
    
$button1.addEventListener(`click`, ()=>{
    $form1.scrollIntoView({
        block:`center`,
        behavior:`smooth`
    })
})
//-------------------------------------------------------//
//ПЛАВНО ПОЛЗЕМ КОНЕЦ//
const $buttonResult = document.querySelector(`#result`)
const $formCmptr = document.querySelector(`.result`)
    
$buttonResult.addEventListener(`click`, ()=>{
    
    document
        .querySelector(`#computer`)
        .hidden=false
    $formCmptr.scrollIntoView({
        block:`nearest`,
        behavior:`smooth`
    
    })
    $formCmptr.hidden=false;
    
})

document
    .querySelector(`#result`)
    .addEventListener(`click`,()=>{
        if(document
                .querySelector(`#mnblck`)
                .checked==true){
            document
                .querySelector(`#monoblock`)
                .hidden = false
        }
    })
document
    .querySelector(`#result`)
    .addEventListener(`click`,()=>{
        if(ntbk.checked==true){
            document
                .querySelector(`#notebook`)
                .hidden = false
        }
    })
document
    .querySelector(`#result`)
    .addEventListener(`click`, ()=>{
        if(document
                .querySelector(`#yes2`)
                .checked==true){
            document
                .querySelector(`#prph`)
                .hidden = false
        }
    })
//-------------------------------------------------------//
//ДЛЯ КОГО//
//СБРОС ДЛЯ КОГО//
document
    .querySelector(`#sbrs1`)
    .addEventListener(`click`, ()=>{
        document
            .querySelector(`#me`)
            .checked = false
        document
            .querySelector(`#fam`)
            .checked = false
        document
            .querySelector(`#frn`)
            .checked = false
        document
            .querySelector(`#col`)
            .checked = false
        document
            .querySelector(`#dk1`)
            .checked = false
    })
//-------------------------------------------------------//
//СКОЛЬКО ЛЕТ//
document
    .querySelector(`#age-range`)
    .addEventListener(`input`, (evt)=>{
        document
            .querySelector(`.age`)
            .innerHTML=`${evt.target.value}`
    })
// НЕ ЗНАЮ СКОЛЬКО ЛЕТ//
document
    .querySelector(`#dk2`)
    .addEventListener(`input`, ()=>{
        document
            .querySelector(`#age-range`)
            .innerHTML = "";
        document
            .querySelector(`#age-range`)
            .disabled = true
        document
            .querySelector(`.age`)
            .innerHTML = "";
        
    })
//СБРОС СКОЛЬКО ЛЕТ//
document
    .querySelector(`#sbrs2`)
    .addEventListener(`click`, ()=>{
        document
            .querySelector(`#age-range`)
            .disabled = false
        document
            .querySelector(`#dk2`)
            .checked = false
    })
//-------------------------------------------------------//
//СКОЛЬКО ВРЕМЕНИ ИСПОЛЬЗУЕТСЯ//
//в день//
document
    .querySelector(`#day`)
    .addEventListener(`input`, ()=>{
        document
            .querySelector(`#ho1`)
            .hidden = false
        document
            .querySelector(`#ho`)
            .innerHTML=`Введите количество часов:`
        document
            .querySelector(`.ho`)
            .hidden = false
        document
            .querySelector(`.howu`)
            .hidden = false
    })
//в неделю//
document
    .querySelector(`#week`)
    .addEventListener(`input`, ()=>{
        document
            .querySelector(`#ho1`)
            .hidden = false
        document
            .querySelector(`#ho`)
            .innerHTML=`Введите количество дней:`
        document
            .querySelector(`.ho`)
            .hidden = false
        document
            .querySelector(`.howu`)
            .hidden = false
    })
//в месяц//
document
    .querySelector(`#month`)
    .addEventListener(`input`, (evt)=>{
        document
            .querySelector(`#ho1`)
            .hidden = false
        document
            .querySelector(`#ho`)
            .innerHTML=`Введите количество дней:`
        document
            .querySelector(`.ho`)
            .hidden = false
        document
            .querySelector(`.howu`)
            .hidden = false
    })
//введение количества часов/дней в КАК ЧАСТО//
document
    .querySelector(`#ho1`)
    .addEventListener(`input`, (evt)=>{
        document
            .querySelector(`.ho2`)
            .innerHTML=`${evt.target.value}`
            console.log(evt.target.value)
    })
//затрудняюсь ответить КАК ЧАСТО//
document
    .querySelector(`#dk4`)
    .addEventListener(`input`, ()=>{
        document
            .querySelector(`#ho1`)
            .hidden = true
        document
            .querySelector(`#ho2`)
            .hidden = true
        document
            .querySelector(`#ho`)
            .hidden = true
        document
            .querySelector(`.howu`)
            .hidden = true
    })
//СБРОС КАК ЧАСТО ПОЛЬЗОВАТЬСЯ//
document
    .querySelector(`#sbrs4`)
    .addEventListener(`click`, ()=>{
        document
            .querySelector(`#day`)
            .checked = false;
        document
            .querySelector(`#week`)
            .checked = false;
        document
            .querySelector(`#month`)
            .checked = false;
        document
            .querySelector(`#dk4`)
            .checked = false;
        document
            .querySelector(`#ho`)
            .hidden = true
        document
            .querySelector(`#ho1`)
            .hidden = true
        document
            .querySelector(`#ho2`)
            .hidden = true
        document
            .querySelector(`.howu`)
            .hidden = true
    })
//-------------------------------------------------------//
//МОНОБЛОК ИЛИ НОУТБУК//
//ДА//
document
    .querySelector(`#yes1`)
    .addEventListener(`input`, ()=>{
        document
            .querySelector(`#mnblck`)
            .hidden=false
        document
            .querySelector(`#ntbk`)
            .hidden=false
        document
            .querySelector(`#mnblck1`)
            .hidden=false
        document
            .querySelector(`#ntbk1`)
            .hidden=false
        document
            .querySelector(`#MnblckNtbk`)
            .hidden=false
    })
//НЕТ//
document
    .querySelector(`#no1`)
    .addEventListener(`input`, ()=>{
        document
            .querySelector(`#mnblck`)
            .hidden=true
        document
            .querySelector(`#ntbk`)
            .hidden=true
        document
            .querySelector(`#mnblck1`)
            .hidden=true
        document
            .querySelector(`#ntbk1`)
            .hidden=true
        document
            .querySelector(`#MnblckNtbk`)
            .hidden=true
    })
//ЗАТРУДНЯЮСЬ//
document
    .querySelector(`#dk5`)
    .addEventListener(`input`, ()=>{
        document
            .querySelector(`#mnblck`)
            .hidden=true
        document
            .querySelector(`#ntbk`)
            .hidden=true
        document
            .querySelector(`#mnblck1`)
            .hidden=true
        document
            .querySelector(`#ntbk1`)
            .hidden=true
        document
            .querySelector(`#MnblckNtbk`)
            .hidden=true
    })
//СБРОС//
document
    .querySelector(`#sbrs5`)
    .addEventListener(`click`, ()=>{
        document
            .querySelector(`#yes1`)
            .checked = false
        document
            .querySelector(`#no1`)
            .checked = false
        document
            .querySelector(`#dk5`)
            .checked = false
        document
            .querySelector(`#mnblck`)
            .hidden = true
        document
            .querySelector(`#ntbk`)
            .hidden = true
        document
            .querySelector(`#mnblck1`)
            .hidden = true
        document
            .querySelector(`#ntbk1`)
            .hidden = true
        document
            .querySelector(`#mnblck`)
            .checked = false
        document
            .querySelector(`#ntbk`)
            .checked = false 
        document
            .querySelector(`#MnblckNtbk`)
            .hidden=true
    })
//-------------------------------------------------------//
//ПЕРЕФЕРИЯ//
//ДА//
document
    .querySelector(`#yes2`)
    .addEventListener(`input`,()=>{
        document
            .querySelector(`#mntr`)
            .hidden=false
        document
            .querySelector(`#kbrd`)
            .hidden=false
        document
            .querySelector(`#ms`)
            .hidden=false
        document
            .querySelector(`#hdphns`)
            .hidden=false
        document
            .querySelector(`#spkrs`)
            .hidden=false
        document
            .querySelector(`#prntr`)
            .hidden=false
        document
            .querySelector(`#mntr1`)
            .hidden=false
        document
            .querySelector(`#kbrd1`)
            .hidden=false
        document
            .querySelector(`#ms1`)
            .hidden=false
        document
            .querySelector(`#hdphns1`)
            .hidden=false
        document
            .querySelector(`#spkrs1`)
            .hidden=false
        document
            .querySelector(`#prntr1`)
            .hidden=false
        document
            .querySelector(`.pereferia1`)
            .hidden=false
    })
//НЕТ//
document
    .querySelector(`#no2`)
    .addEventListener(`input`,()=>{
        document
            .querySelector(`#mntr`)
            .hidden=true
        document
            .querySelector(`#kbrd`)
            .hidden=true
        document
            .querySelector(`#ms`)
            .hidden=true
        document
            .querySelector(`#hdphns`)
            .hidden=true
        document
            .querySelector(`#spkrs`)
            .hidden=true
        document
            .querySelector(`#prntr`)
            .hidden=true
        document
            .querySelector(`#mntr1`)
            .hidden=true
        document
            .querySelector(`#kbrd1`)
            .hidden=true
        document
            .querySelector(`#ms1`)
            .hidden=true
        document
            .querySelector(`#hdphns1`)
            .hidden=true
        document
            .querySelector(`#spkrs1`)
            .hidden=true
        document
            .querySelector(`#prntr1`)
            .hidden=true
        document
            .querySelector(`.pereferia1`)
            .hidden=true
    })
//ЗАТРУДНЯЮСЬ//
document
    .querySelector(`#dk6`)
    .addEventListener(`input`,()=>{
        document
            .querySelector(`#mntr`)
            .hidden=true
        document
            .querySelector(`#kbrd`)
            .hidden=true
        document
            .querySelector(`#ms`)
            .hidden=true
        document
            .querySelector(`#hdphns`)
            .hidden=true
        document
            .querySelector(`#spkrs`)
            .hidden=true
        document
            .querySelector(`#mntr1`)
            .hidden=true
        document
            .querySelector(`#kbrd1`)
            .hidden=true
        document
            .querySelector(`#ms1`)
            .hidden=true
        document
            .querySelector(`#hdphns1`)
            .hidden=true
        document
            .querySelector(`#spkrs1`)
            .hidden=true
        document
            .querySelector(`.pereferia1`)
            .hidden=true
    })
//СБРОС//
document
    .querySelector(`#sbrs6`)
    .addEventListener(`click`, ()=>{
        document
            .querySelector(`#yes2`)
            .checked = false
        document
            .querySelector(`#no2`)
            .checked = false
        document
            .querySelector(`#dk6`)
            .checked = false
        document
            .querySelector(`#mntr`)
            .hidden = true
        document
            .querySelector(`#mntr`)
            .checked = false
        document
            .querySelector(`#kbrd`)
            .hidden = true
        document
            .querySelector(`#kbrd`)
            .checked = false
        document
            .querySelector(`#ms`)
            .hidden = true
        document
            .querySelector(`#ms`)
            .checked = false
        document
            .querySelector(`#hdphns`)
            .hidden = true
        document
            .querySelector(`#hdphns`)
            .checked = false
        document
            .querySelector(`#spkrs`)
            .hidden = true
        document
            .querySelector(`#spkrs`)
            .checked = false
        document
            .querySelector(`#prntr`)
            .hidden = true
        document
            .querySelector(`#prntr`)
            .checked = false
        document
            .querySelector(`#mntr1`)
            .hidden = true
        document
            .querySelector(`#kbrd1`)
            .hidden = true
        document
            .querySelector(`#ms1`)
            .hidden = true
        document
            .querySelector(`#hdphns1`)
            .hidden = true
        document
            .querySelector(`#spkrs1`)
            .hidden = true
        document
            .querySelector(`#prntr1`)
            .hidden = true
        document
            .querySelector(`#monitor`)
            .innerHTML = ``
        document
            .querySelector(`#keyboard`)
            .innerHTML = ``
        document
            .querySelector(`#mouse`)
            .innerHTML = ``
        document
            .querySelector(`#headphones`)
            .innerHTML = ``
        document
            .querySelector(`#speakers`)
            .innerHTML = ``
        document
            .querySelector(`#printer`)
            .innerHTML = ``
        document
            .querySelector(`#prph`)
            .hidden = true
        document
            .querySelector(`.pereferia1`)
            .hidden=true
    })
//-------------------------------------------------------//
//ЦЕЛЬ ИСПОЛЬЗОВАНИЯ//
//Рисование//
function hide(hide1, hide2){
    var hide1 = document.getElementById(hide1)
    var hide2 = document.getElementById(hide2)
        if(hide1.checked==true){
            hide2.hidden = false
        }else{
            hide2.hidden = true
        }
    }
//СБРОС//
document
    .querySelector(`#sbrs7`)
    .addEventListener(`click`, ()=>{
        document
            .querySelector(`#computer`)
            .hidden = true
        document
            .querySelector(`#lrn`)
            .checked = false;
        document
            .querySelector(`#wrk`)
            .checked = false;
        document
            .querySelector(`#brws`)
            .checked = false;
        document
            .querySelector(`#wtch`)
            .checked = false;
        document
            .querySelector(`#prgrm`)
            .checked = false;
        document
            .querySelector(`#dsgn`)
            .checked = false;
        document
            .querySelector(`#gms`)
            .checked = false;
        document
            .querySelector(`#txt`)
            .checked = false;
        document
            .querySelector(`#drw`)
            .checked = false;
        document
            .querySelector(`#gp`)
            .hidden = true
        document
            .querySelector(`#yes3`)
            .checked = false
        document
            .querySelector(`#no3`)
            .checked = false
        document
            .querySelector(`#dk7`)
            .checked = false
        document
            .querySelector(`#cpu`)
            .innerHTML=""
        document
            .querySelector(`#mb`)
            .innerHTML=""
        document
            .querySelector(`#cpuc`)
            .innerHTML=""
        document
            .querySelector(`#vram`)
            .innerHTML=""
        document
            .querySelector(`#ssd`)
            .innerHTML=""
        document
            .querySelector(`#hdd`)
            .innerHTML=""
        document
            .querySelector(`#gpu`)
            .innerHTML=""
        document
            .querySelector(`#case`)
            .innerHTML=""
        document
            .querySelector(`#cost`)
            .innerHTML=""
        document
            .querySelector(`#psu`)
            .hidden=true
        document
            .querySelector(`#monoblock`)
            .hidden=true
        document
            .querySelector(`#mnblck2`)
            .innerHTML=""
        document
            .querySelector(`#mnblckCost`)
            .innerHTML=""
        document
            .querySelector(`#notebook`)
            .hidden=true
        document
            .querySelector(`#ntbk2`)
            .innerHTML=""
        document
            .querySelector(`#ntbkCost`)
            .innerHTML=""
    })
//------------------------------------------------//

//------------------------------------------------//
//КОЛИЧЕСТВО ДНЕЙ блок питания//
function psu(p1,p2){
    var p1 = document.getElementById(p1)
    var p2 = document.getElementById(p2)
    p2.innerHTML="";
    if(p1.value=="day"){
        p2.innerHTML = `<h4>Блок питания:</h4> Рекомендуемый блок питаяни от 600 до 1000 ватт следующих фирм <br> DeepCool, be quiet!, Chieftec, Cougar, EVGA`
    }else if(p1.value=="week"){
        p2.innerHTML = `<h4>Блок питания:</h4> Рекомендуемый блок питаяни от 550 до 800 ватт следующих фирм <br> DeepCool, be quiet!, Chieftec, Cougar, EVGA`
    }else if(p1.value=="month"){
        p2.innerHTML = `<h4>Блок питания:</h4> Рекомендуемый блок питаяни от 450 до 750 ватт следующих фирм <br> DeepCool, be quiet!, Chieftec, Cougar, EVGA`
    }else if(p1.value=="dk4"){
        p2.innerHTML = `<h4>Блок питания:</h4> Рекомендуемый блок питаяни от 550 до 800 ватт следующих фирм <br> DeepCool, be quiet!, Chieftec, Cougar, EVGA`
    }
}

function psu2(p3, p4){
    var p3 = document.getElementById(p3)
    var p4 = document.getElementById(p4)
    if(p3.value=="day"){
        p4.innerHTML = `<h4>Блок питания:</h4> Рекомендуемый блок питаяни от 600 до 1000 ватт следующих фирм <br> DeepCool, be quiet!, Chieftec, Cougar, EVGA`
    }else if(p3.value=="week"){
        p4.innerHTML = `<h4>Блок питания:</h4> Рекомендуемый блок питаяни от 550 до 800 ватт следующих фирм <br> DeepCool, be quiet!, Chieftec, Cougar, EVGA`
    }else if(p3.value=="month"){
        p4.innerHTML = `<h4>Блок питания:</h4> Рекомендуемый блок питаяни от 450 до 750 ватт следующих фирм <br> DeepCool, be quiet!, Chieftec, Cougar, EVGA`
    }else if(p3.value=="dk4"){
        p4.innerHTML = `<h4>Блок питания:</h4> Рекомендуемый блок питаяни от 550 до 800 ватт следующих фирм <br> DeepCool, be quiet!, Chieftec, Cougar, EVGA`
    }
}
//------------------------------------------------//
//ЦЕЛЬ ИСПОЛЬЗОВАНИЯ чекбокс результата - 1, Процессор - 2, материнская плата - 3, охлаждение процессора - 4 оперативная память - 5, ssd - 6, hdd - 7, gpu - 8, корпус - 9, cost - 10//
// чекбокс моноблока - 11, производитель моноблока - 12, цена моноблока - 13//
// чекбокс ноутбука - 14, производитель ноутбука - 15, цена ноутбука - 16//
//------------------------------------------------УЧЕБА------------------------------------------------//
function chase1(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16){
    var c1 = document.getElementById(c1)
    var c2 = document.getElementById(c2)
    var c3 = document.getElementById(c3)
    var c4 = document.getElementById(c4)
    var c5 = document.getElementById(c5)
    var c6 = document.getElementById(c6)
    var c7 = document.getElementById(c7)
    var c8 = document.getElementById(c8)
    var c9 = document.getElementById(c9)
    var c10 = document.getElementById(c10)
    var c11 = document.getElementById(c11)
    var c12 = document.getElementById(c12)
    var c13 = document.getElementById(c13)
    var c14 = document.getElementById(c14)
    var c15 = document.getElementById(c15)
    var c16 = document.getElementById(c16)
    if(c1.checked==true){
        c2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel или AMD, поколения: Intel Core i3 - 10xxx Без индекса F в конце (подробнее в справке)  или AMD Ryzen 3 серии 3xxx или 4xxx`
        c3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel или AMD: Asrock или MSI. <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200`
        c4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: DeepCool, be quiet!, CoolerMaster, ZALMAN `
        c5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем 8 или 16 гигабайт, любого производителя`
        c6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA, Рекомендуемый объем памяти 120 гигабайт, Рекомендуемые производители: Kingston или AMD`
        c7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти 1000 гигабайт, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        c8.hidden = true;
        c9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, DeepCool, Zalman<br>`
        c10.innerHTML =`Примерная стоимость такой сборки будет равна: <h4>~22000 - 25000 рублей</h4>`
    }
    if(c11.checked==true){
        c12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, MSI, HP`
        c13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(c14.checked==true){
        c15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HP, LENOVO`
        c16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~22000 - 25000 рублей`
    }
}
// Чекбокс - 1, Процессор - 2, Материнская плата - 3, Охлаждение - 4, Опреативная память - 5, ssd - 6, hdd - 7, gpu - 8, корпус - 9, cost - 10,//
// чекбокс моноблока - 11, производитель моноблока - 12, Цена моноблока - 13//
// чекбокс ноутбука - 14, производитель ноутбука - 15, Цена ноутбука - 16//
function chase10(j1,j2,j3,j4,j5,j6,j7,j8,j9,j10,j11,j12,j13,j14,j15,j16){
    var j1 = document.getElementById(j1)
    var j1 = document.getElementById(j2)
    var j1 = document.getElementById(j3)
    var j1 = document.getElementById(j4)
    var j1 = document.getElementById(j5)
    var j1 = document.getElementById(j6)
    var j1 = document.getElementById(j7)
    var j1 = document.getElementById(j8)
    var j1 = document.getElementById(j9)
    var j1 = document.getElementById(j10)
    var j1 = document.getElementById(j11)
    var j1 = document.getElementById(j12)
    var j1 = document.getElementById(j13)
    var j1 = document.getElementById(j14)
    var j1 = document.getElementById(j15)
    var j1 = document.getElementById(j16)
    if(j1.checked==true){
        j2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel или AMD, поколения: Intel Core i3 - 10xxx Без индекса F в конце (подробнее в справке)  или AMD Ryzen 3 серии 3xxx или 4xxx`
        j3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel или AMD: Asrock или MSI. <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200`
        j4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: DeepCool, be quiet!, CoolerMaster, ZALMAN `
        j5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем 8 или 16 гигабайт, любого производителя`
        j6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA, Рекомендуемый объем памяти 120 гигабайт, Рекомендуемые производители: Kingston или AMD`
        j7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти 1000 гигабайт, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        j8.hidden = true;
        j9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, DeepCool, Zalman<br>`
        j10.innerHTML =`Примерная стоимость такой сборки будет равна: <h4>~22000 - 25000 рублей</h4>`
    }
    if(j11.checked==true){
        j12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, MSI, HP`
        j13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(j14.checked==true){
        j15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HP, LENOVO`
        j16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~22000 - 25000 рублей`
    }
}
//------------------------------------------------РАБОТА------------------------------------------------//
function chase2(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16){
    var a1 = document.getElementById(a1)
    var a2 = document.getElementById(a2)
    var a3 = document.getElementById(a3)
    var a4 = document.getElementById(a4)
    var a5 = document.getElementById(a5)
    var a6 = document.getElementById(a6)
    var a7 = document.getElementById(a7)
    var a8 = document.getElementById(a8)
    var a9 = document.getElementById(a9)
    var a10 = document.getElementById(a10)
    var a11 = document.getElementById(a11)
    var a12 = document.getElementById(a12)
    var a13 = document.getElementById(a13)
    var a14 = document.getElementById(a14)
    var a15 = document.getElementById(a15)
    var a16 = document.getElementById(a16)
    if(a1.checked==true){
        a2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel или AMD, поколения: Intel Core i3 - 10xxx Без индекса F в конце (подробнее в справке)  или AMD Ryzen 3 серии 3xxx или 4xxx`
        a3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel или AMD: Asrock или MSI. <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200`
        a4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: DeepCool, be quiet!, CoolerMaster, ZALMAN`
        a5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем 16 гигабайт, любого производителя`
        a6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA, Рекомендуемый объем памяти 120 гигабайт, Рекомендуемые производители: Kingston или AMD`
        a7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти 1000 гигабайт, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        a8.hidden = true;
        a9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, DeepCool, DEXP`
        a10.innerHTML =`Примерная стоимость такой сборки будет равна: <h4>~22000 - 25000 рублей</h4>`
    }
    if(a11.checked==true){
        a12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, MSI, HP`
        a13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(a14.checked==true){
        a15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HP, LENOVO`
        a16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~22000 - 25000 рублей`
    }
}
function chase11(l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16){
    var l1 = document.getElementById(l1)
    var l2 = document.getElementById(l2)
    var l3 = document.getElementById(l3)
    var l4 = document.getElementById(l4)
    var l5 = document.getElementById(l5)
    var l6 = document.getElementById(l6)
    var l7 = document.getElementById(l7)
    var l8 = document.getElementById(l8)
    var l9 = document.getElementById(l9)
    var l10 = document.getElementById(l10)
    var l11 = document.getElementById(l11)
    var l12 = document.getElementById(l12)
    var l13 = document.getElementById(l13)
    var l14 = document.getElementById(l14)
    var l15 = document.getElementById(l15)
    var l16 = document.getElementById(l16)
    if(l1.checked==true){
        l2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel или AMD, поколения: Intel Core i3 - 10xxx Без индекса F в конце (подробнее в справке)  или AMD Ryzen 3 серии 3xxx или 4xxx`
        l3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel или AMD: Asrock или MSI. <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200`
        l4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: DeepCool, be quiet!, CoolerMaster, ZALMAN`
        l5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем 16 гигабайт, любого производителя`
        l6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA, Рекомендуемый объем памяти 120 гигабайт, Рекомендуемые производители: Kingston или AMD`
        l7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти 1000 гигабайт, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        l8.hidden = true;
        l9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, DeepCool, DEXP`
        l10.innerHTML =`Примерная стоимость такой сборки будет равна: <h4>~22000 - 25000 рублей</h4>`
    }
    if(l11.checked==true){
        l12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, MSI, HP`
        l13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(l14.checked==true){
        l15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HP, LENOVO`
        l16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~22000 - 25000 рублей`
    }
}
//------------------------------------------------ПОИСК В ИНТЕРНЕТЕ------------------------------------------------//
function chase3(b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16){
    var b1 = document.getElementById(b1)
    var b2 = document.getElementById(b2)
    var b3 = document.getElementById(b3)
    var b4 = document.getElementById(b4)
    var b5 = document.getElementById(b5)
    var b6 = document.getElementById(b6)
    var b7 = document.getElementById(b7)
    var b8 = document.getElementById(b8)
    var b9 = document.getElementById(b9)
    var b10 = document.getElementById(b10)
    var b11 = document.getElementById(b11)
    var b12 = document.getElementById(b12)
    var b13 = document.getElementById(b13)
    var b14 = document.getElementById(b14)
    var b15 = document.getElementById(b15)
    var b16 = document.getElementById(b16)
    if(b1.checked==true){
        b2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel или AMD, поколения: Intel Core i3 - 10xxx Без индекса F в конце (подробнее в справке)  или AMD Ryzen 3 серии 3xxx или 4xxx`
        b3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel или AMD: Asrock или MSI. <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200`
        b4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: DeepCool, ZALMAN`
        b5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем от 8 гигабайт, любого производителя`
        b6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA, Рекомендуемый объем памяти 120 гигабайт, Рекомендуемые производители: Kingston или AMD`
        b7.hidden = true;
        b8.hidden = true;
        b9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, DeepCool, DEXP`
        b10.innerHTML =`Примерная стоимость такой сборки будет равна: <h4>~22000 - 23000 рублей</h4>`
    }
    if(b11.checked==true){
        b12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, MSI, HP`
        b13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(b14.checked == true){
        b15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HP, LENOVO`
        b16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~22000 - 23000 рублей`
    }
}

function chase12(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16){
    var m1 = document.getElementById(m1)
    var m2 = document.getElementById(m2)
    var m3 = document.getElementById(m3)
    var m4 = document.getElementById(m4)
    var m5 = document.getElementById(m5)
    var m6 = document.getElementById(m6)
    var m7 = document.getElementById(m7)
    var m8 = document.getElementById(m8)
    var m9 = document.getElementById(m9)
    var m10 = document.getElementById(m10)
    var m11 = document.getElementById(m11)
    var m12 = document.getElementById(m12)
    var m13 = document.getElementById(m13)
    var m14 = document.getElementById(m14)
    var m15 = document.getElementById(m15)
    var m16 = document.getElementById(m16)
    if(m1.checked==true){
        m2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel или AMD, поколения: Intel Core i3 - 10xxx Без индекса F в конце (подробнее в справке)  или AMD Ryzen 3 серии 3xxx или 4xxx`
        m3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel или AMD: Asrock или MSI. <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200`
        m4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: DeepCool, ZALMAN`
        m5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем от 8 гигабайт, любого производителя`
        m6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA, Рекомендуемый объем памяти 120 гигабайт, Рекомендуемые производители: Kingston или AMD`
        m7.hidden = true;
        m8.hidden = true;
        m9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, DeepCool, DEXP`
        m10.innerHTML =`Примерная стоимость такой сборки будет равна: <h4>~22000 - 23000 рублей</h4>`
    }
    if(m11.checked==true){
        m12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, MSI, HP`
        m13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(m14.checked == true){
        m15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HP, LENOVO`
        m16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~22000 - 23000 рублей`
    }
}
//------------------------------------------------ПРОСМОТР ВИДЕО/КИНО/СЕРИАЛОВ------------------------------------------------//
function chase4(d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16){
    var d1 = document.getElementById(d1)
    var d2 = document.getElementById(d2)
    var d3 = document.getElementById(d3)
    var d4 = document.getElementById(d4)
    var d5 = document.getElementById(d5)
    var d6 = document.getElementById(d6)
    var d7 = document.getElementById(d7)
    var d8 = document.getElementById(d8)
    var d9 = document.getElementById(d9)
    var d10 = document.getElementById(d10)
    var d11 = document.getElementById(d11)
    var d12 = document.getElementById(d12)
    var d13 = document.getElementById(d13)
    var d14 = document.getElementById(d14)
    var d15 = document.getElementById(d15)
    var d16 = document.getElementById(d16)
    if(d1.checked==true){
        d2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel или AMD, поколения: Intel Core i3 - 10xxx Без индекса F в конце (подробнее в справке)  или AMD Ryzen 3 серии 3xxx или 4xxx`
        d3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel или AMD: Asrock или MSI. <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200`
        d4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: DeepCool, ZALMAN`
        d5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем от 8 гигабайт, любого производителя`
        d6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA, Рекомендуемый объем памяти 120 гигабайт, Рекомендуемые производители: Kingston или AMD`
        d7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти 1000 гигабайт, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        d8.hidden = true;
        d9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, DeepCool, DEXP`
        d10.innerHTML =`Примерная стоимость такой сборки будет равна: <h4>~22000 - 25000 рублей</h4>`
    }
    if(d11.checked==true){
        d12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, MSI, HP`
        d13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(d14.checked==true){
        d15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HP, LENOVO`
        d16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~22000 - 25000 рублей`
    }
}

function chase13(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16){
    var n1 = document.getElementById(n1)
    var n2 = document.getElementById(n2)
    var n3 = document.getElementById(n3)
    var n4 = document.getElementById(n4)
    var n5 = document.getElementById(n5)
    var n6 = document.getElementById(n6)
    var n7 = document.getElementById(n7)
    var n8 = document.getElementById(n8)
    var n9 = document.getElementById(n9)
    var n10 = document.getElementById(n10)
    var n11 = document.getElementById(n11)
    var n12 = document.getElementById(n12)
    var n13 = document.getElementById(n13)
    var n14 = document.getElementById(n14)
    var n15 = document.getElementById(n15)
    var n16 = document.getElementById(n16)
    if(n1.checked==true){
        n2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel или AMD, поколения: Intel Core i3 - 10xxx Без индекса F в конце (подробнее в справке)  или AMD Ryzen 3 серии 3xxx или 4xxx`
        n3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel или AMD: Asrock или MSI. <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200`
        n4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: DeepCool, ZALMAN`
        n5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем от 8 гигабайт, любого производителя`
        n6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA, Рекомендуемый объем памяти 120 гигабайт, Рекомендуемые производители: Kingston или AMD`
        n7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти 1000 гигабайт, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        n8.hidden = true;
        n9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, DeepCool, DEXP`
        n10.innerHTML =`Примерная стоимость такой сборки будет равна: <h4>~22000 - 25000 рублей</h4>`
    }
    if(n11.checked==true){
        n12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, MSI, HP`
        n13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(n14.checked==true){
        n15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HP, LENOVO`
        n16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~22000 - 25000 рублей`
    }
}
//------------------------------------------------ПРОГРАММИРОВАНИЕ------------------------------------------------//
function chase5(e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16){
    var e1 = document.getElementById(e1)
    var e2 = document.getElementById(e2)
    var e3 = document.getElementById(e3)
    var e4 = document.getElementById(e4)
    var e5 = document.getElementById(e5)
    var e6 = document.getElementById(e6)
    var e7 = document.getElementById(e7)
    var e8 = document.getElementById(e8)
    var e9 = document.getElementById(e9)
    var e10 = document.getElementById(e10)
    var e11 = document.getElementById(e11)
    var e12 = document.getElementById(e12)
    var e13 = document.getElementById(e13)
    var e14 = document.getElementById(e14)
    var e15 = document.getElementById(e15)
    var e16 = document.getElementById(e16)
    if(e1.checked==true){
        e2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel или AMD, поколения: Intel Core i3 или i5 - 10xxx Без индекса F в конце (подробнее в справке)  или AMD Ryzen 3 или 5 серии 3xxx или 4xxx`
        e3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel или AMD: ASUS, MSI или GIGABYTE. <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200, c 4-мя слотами под оперативную память `
        e4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: be quit, DeepCool, Thermaltake, Cooler Master `
        e5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем от 16 гигабайт с предустановленным радиатором`
        e6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA или M.2, Рекомендуемый объем памяти от 250 гигабайт, Рекомендуемые производители: Kingston, AMD, Samsung, WD (Western Digital)`
        e7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти 1000 гигабайт со скоростью вращения не менее 7200 оборотов/минуту, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        e8.innerHTML = `<h4>Видеокарта:</h4> Рекомендуемые производители Nvidia или AMD, серии: Nvidia не нижее серии GTX 16xx, AMD не ниже серии RX 6xxx`
        e9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, Cougar, DEEPCOOL, ZALMAN`
        e10.innerHTML = `Примерная стоимость такой сборки будет равна: <h4>~46000 - 50000 рублей</h4>`
    }
    if(e11.checked==true){
        e12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: ASUS, MSI, HP, LENOVO`
        e13.innerHTML = `Примерная стоимость этих моноблоков составит: ~32000-37000 рублей`
    }
    if(e14.checked==true){
        e15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HUAWEI, MSI, LENOVO`
        e16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~46000 - 50000 рублей`
    }
}

function chase14(t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16){
    var t1 = document.getElementById(t1)
    var t2 = document.getElementById(t2)
    var t3 = document.getElementById(t3)
    var t4 = document.getElementById(t4)
    var t5 = document.getElementById(t5)
    var t6 = document.getElementById(t6)
    var t7 = document.getElementById(t7)
    var t8 = document.getElementById(t8)
    var t9 = document.getElementById(t9)
    var t10 = document.getElementById(t10)
    var t11 = document.getElementById(t11)
    var t12 = document.getElementById(t12)
    var t13 = document.getElementById(t13)
    var t14 = document.getElementById(t14)
    var t15 = document.getElementById(t15)
    var t16 = document.getElementById(t16)
    if(t1.checked==true){
        t2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel или AMD, поколения: Intel Core i3 или i5 - 10xxx Без индекса F в конце (подробнее в справке)  или AMD Ryzen 3 или 5 серии 3xxx или 4xxx`
        t3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel или AMD: ASUS, MSI или GIGABYTE. <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200, c 4-мя слотами под оперативную память `
        t4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: be quit, DeepCool, Thermaltake, Cooler Master `
        t5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем от 16 гигабайт с предустановленным радиатором`
        t6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA или M.2, Рекомендуемый объем памяти от 250 гигабайт, Рекомендуемые производители: Kingston, AMD, Samsung, WD (Western Digital)`
        t7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти 1000 гигабайт со скоростью вращения не менее 7200 оборотов/минуту, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        t8.innerHTML = `<h4>Видеокарта:</h4> Рекомендуемые производители Nvidia или AMD, серии: Nvidia не нижее серии GTX 16xx, AMD не ниже серии RX 6xxx`
        t9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, Cougar, DEEPCOOL, ZALMAN`
        t10.innerHTML = `Примерная стоимость такой сборки будет равна: <h4>~46000 - 50000 рублей</h4>`
    }
    if(t11.checked==true){
        t12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: ASUS, MSI, HP, LENOVO`
        t13.innerHTML = `Примерная стоимость этих моноблоков составит: ~32000-37000 рублей`
    }
    if(t14.checked==true){
        t15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HUAWEI, MSI, LENOVO`
        t16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~46000 - 50000 рублей`
    }

}
//------------------------------------------------3D-ДИЗАЙН------------------------------------------------//
function chase6(f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12,f13,f14,f15,f16){
    var f1 = document.getElementById(f1)
    var f2 = document.getElementById(f2)
    var f3 = document.getElementById(f3)
    var f4 = document.getElementById(f4)
    var f5 = document.getElementById(f5)
    var f6 = document.getElementById(f6)
    var f7 = document.getElementById(f7)
    var f8 = document.getElementById(f8)
    var f9 = document.getElementById(f9)
    var f10 = document.getElementById(f10)
    var f11 = document.getElementById(f11)
    var f12 = document.getElementById(f12)
    var f13 = document.getElementById(f13)
    var f14 = document.getElementById(f14)
    var f15 = document.getElementById(f15)
    var f16 = document.getElementById(f16)
    if(f1.checked==true){
        f2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel Поколения не ниже i7 - 10xxx `
        f3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel: ASUS, MSI или GIGABYTE <br> Сокет для AMD: LGA 1200, c 4-мя слотами под оперативную память`
        f4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать жидкостное охлаждение с 2-мя или 3-мя вентиляторами в комплекте, Рекомендуемые производители: Cougar, DeepCool, ID-COOLING, Lian Li, MSI, Thermaltake`
        f5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем от 16 гигабайт с предустановленным радиатором, Производители: AMD, Sasmsung`
        f6.innerHTML = `<h4>SSD накопитель:</h4> Формат M.2, Рекомендуемый объем памяти от 1000 гигабайт, Рекомендуемые производители: Kingston, AMD, Samsung, WD (Western Digital)`
        f7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти от 2000 гигабайт, со скоростью вращения не менее 7200 оборотов/минуту, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        f8.innerHTML = `<h4>Видеокарта:</h4> Рекомендуемые производители Nvidia, серии не ниже RTX 30xx`
        f9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, Cougar, DEEPCOOL, Lian Li, ZALMAN`
        f10.innerHTML = `Примерная стоимость такой сборки будет равна: <h4>~110000 - 130000 рублей</h4>`
    }
    if(f11.checked==true){
        f12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: ASUS, MSI, LENOVO`
        f13.innerHTML = `Примерная стоимость этих моноблоков составит: ~38000-40000 рублей`
    }
    if(f14.checked==true){
        f15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, Honor, MSI`
        f16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~80000 - 100000 рублей`
    }
}

function chase15(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16){
    var p1 = document.getElementById(p1)
    var p2 = document.getElementById(p2)
    var p3 = document.getElementById(p3)
    var p4 = document.getElementById(p4)
    var p5 = document.getElementById(p5)
    var p6 = document.getElementById(p6)
    var p7 = document.getElementById(p7)
    var p8 = document.getElementById(p8)
    var p9 = document.getElementById(p9)
    var p10 = document.getElementById(p10)
    var p11 = document.getElementById(p11)
    var p12 = document.getElementById(p12)
    var p13 = document.getElementById(p13)
    var p14 = document.getElementById(p14)
    var p15 = document.getElementById(p15)
    var p16 = document.getElementById(p16)
    if(p1.checked==true){
        p2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров Intel Поколения не ниже i7 - 10xxx `
        p3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров Intel: ASUS, MSI или GIGABYTE <br> Сокет для AMD: LGA 1200, c 4-мя слотами под оперативную память`
        p4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать жидкостное охлаждение с 2-мя или 3-мя вентиляторами в комплекте, Рекомендуемые производители: Cougar, DeepCool, ID-COOLING, Lian Li, MSI, Thermaltake`
        p5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем от 16 гигабайт с предустановленным радиатором, Производители: AMD, Sasmsung`
        p6.innerHTML = `<h4>SSD накопитель:</h4> Формат M.2, Рекомендуемый объем памяти от 1000 гигабайт, Рекомендуемые производители: Kingston, AMD, Samsung, WD (Western Digital)`
        p7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти от 2000 гигабайт, со скоростью вращения не менее 7200 оборотов/минуту, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        p8.innerHTML = `<h4>Видеокарта:</h4> Рекомендуемые производители Nvidia, серии не ниже RTX 30xx`
        p9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, Cougar, DEEPCOOL, Lian Li, ZALMAN`
        p10.innerHTML = `Примерная стоимость такой сборки будет равна: <h4>~110000 - 130000 рублей</h4>`
    }
    if(p11.checked==true){
        p12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: ASUS, MSI, LENOVO`
        p13.innerHTML = `Примерная стоимость этих моноблоков составит: ~38000-40000 рублей`
    }
    if(p14.checked==true){
        p15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, Honor, MSI`
        p16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~80000 - 100000 рублей`
    }
}
//------------------------------------------------ИГРЫ------------------------------------------------//
function chase7(g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16){
    var g1 = document.getElementById(g1)
    var g2 = document.getElementById(g2)
    var g3 = document.getElementById(g3)
    var g4 = document.getElementById(g4)
    var g5 = document.getElementById(g5)
    var g6 = document.getElementById(g6)
    var g7 = document.getElementById(g7)
    var g8 = document.getElementById(g8)
    var g9 = document.getElementById(g9)
    var g10 = document.getElementById(g10)
    var g11 = document.getElementById(g11)
    var g12 = document.getElementById(g12)
    var g13 = document.getElementById(g13)
    var g14 = document.getElementById(g14)
    var g15 = document.getElementById(g15)
    var g16 = document.getElementById(g16)
    if(g1.checked==true){
        g2.innerHTML = `<h4>Процессор: </h4> Рекомендуемые фирмы процессоров AMD или Intel, поколения: Intel i5-10xxx, AMD Ryzen 5 3xxx`
        g3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров AMD и Intel: ASUS, MSI или GIGABYTE <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200, c 4-мя слотами под оперативную память`
        g4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать жидкостное охлаждение с 2-мя вентиляторами в комплекте, Рекомендуемые производители: Cougar, DeepCool, ID-COOLING, Lian Li, MSI, Thermaltake`
        g5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем от 16 гигабайт с предустановленным радиатором, Производители: AMD, Sasmsung`
        g6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA или M.2, Рекомендуемый объем памяти от 250 гигабайт, Рекомендуемые производители: Kingston, AMD, Samsung, WD (Western Digital)`
        g7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти от 1000 гигабайт, со скоростью вращения не менее 7200 оборотов/минуту, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        g8.innerHTML = `<h4>Видеокарта:</h4> Рекомендуемые производители Nvidia, серии не ниже RTX 30xx`
        g9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, Cougar, DEEPCOOL, Lian Li, ZALMAN`
        g10.innerHTML = `Примерная стоимость такой сборки будет равна: <h4>~80000 - 84000 рублей</h4>`
    }
    if(g11.checked==true){
        g12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: ASUS, MSI, LENOVO`
        g13.innerHTML = `Примерная стоимость этих моноблоков составит: ~36000-39000 рублей`
    }
    if(g14.checked==true){
        g15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HUAWEI, MSI, GIGABYTE`
        g16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~75000 - 84000 рублей`
    }
}

function chase16(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16){
    var q1 = document.getElementById(q1)
    var q2 = document.getElementById(q2)
    var q3 = document.getElementById(q3)
    var q4 = document.getElementById(q4)
    var q5 = document.getElementById(q5)
    var q6 = document.getElementById(q6)
    var q7 = document.getElementById(q7)
    var q8 = document.getElementById(q8)
    var q9 = document.getElementById(q9)
    var q10 = document.getElementById(q10)
    var q11 = document.getElementById(q11)
    var q12 = document.getElementById(q12)
    var q13 = document.getElementById(q13)
    var q14 = document.getElementById(q14)
    var q15 = document.getElementById(q15)
    var q16 = document.getElementById(q16)
    if(q1.checked==true){
        q2.innerHTML = `<h4>Процессор: </h4> Рекомендуемые фирмы процессоров AMD или Intel, поколения: Intel i5-10xxx, AMD Ryzen 5 3xxx`
        q3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров AMD и Intel: ASUS, MSI или GIGABYTE <br> Сокет для AMD:AM4, Сокет для Intel: LGA 1200, c 4-мя слотами под оперативную память`
        q4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать жидкостное охлаждение с 2-мя вентиляторами в комплекте, Рекомендуемые производители: Cougar, DeepCool, ID-COOLING, Lian Li, MSI, Thermaltake`
        q5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем от 16 гигабайт с предустановленным радиатором, Производители: AMD, Sasmsung`
        q6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA или M.2, Рекомендуемый объем памяти от 250 гигабайт, Рекомендуемые производители: Kingston, AMD, Samsung, WD (Western Digital)`
        q7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти от 1000 гигабайт, со скоростью вращения не менее 7200 оборотов/минуту, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        q8.innerHTML = `<h4>Видеокарта:</h4> Рекомендуемые производители Nvidia, серии не ниже RTX 30xx`
        q9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители AeroCool, Cougar, DEEPCOOL, Lian Li, ZALMAN`
        q10.innerHTML = `Примерная стоимость такой сборки будет равна: <h4>~80000 - 84000 рублей</h4>`
    }
    if(q11.checked==true){
        q12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: ASUS, MSI, LENOVO`
        q13.innerHTML = `Примерная стоимость этих моноблоков составит: ~36000-39000 рублей`
    }
    if(q14.checked==true){
        q15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, HUAWEI, MSI, GIGABYTE`
        q16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~75000 - 84000 рублей`
    }
}
//------------------------------------------------ТЕКСТОВЫЕ РЕДАКТОРЫ------------------------------------------------//
function chase8(h1,h2,h3,h4,h5,h6,h7,h8,h9,h10,h11,h12,h13,h14,h15,h16){
    var h1 = document.getElementById(h1)
    var h2 = document.getElementById(h2)
    var h3 = document.getElementById(h3)
    var h4 = document.getElementById(h4)
    var h5 = document.getElementById(h5)
    var h6 = document.getElementById(h6)
    var h7 = document.getElementById(h7)
    var h8 = document.getElementById(h8)
    var h9 = document.getElementById(h9)
    var h10 = document.getElementById(h10)
    var h11 = document.getElementById(h11)
    var h12 = document.getElementById(h12)
    var h13 = document.getElementById(h13)
    var h14 = document.getElementById(h14)
    var h15 = document.getElementById(h15)
    var h16 = document.getElementById(h16)
    if(h1.checked==true){
        h2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров AMD или Intel, поколения: Intel не выше i3-10xxx Без индекса F в конце (подробнее в справке), AMD Ryzen не выше 3xxx`
        h3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров AMD и Intel: Asrock или MSI`
        h4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: DeepCool`
        h5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем 8 гигабайт Производители: AMD`
        h6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA Рекомендуемый объем памяти 120 гигабайт, Рекомендуемые производители: Kingston, AMD`
        h7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти от 1000 гигабайт, Рекомендуемые производители: WD (Western Digital) Blue`
        h8.hidden = true
        h9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители DEEPCOOL, DEXP`
        h10.innerHTML = `Примерная стоимость такой сборки будет равна: <h4>~24000 - 26000 рублей</h4>`
    }
    if(h11.checked==true){
        h12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, HP`
        h13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(h14.checked==true){
        h15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, LENOVO`
        h16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~24000 - 26000 рублей`
    }
}

function chase17(r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16){
    var r1 = document.getElementById(r1)
    var r2 = document.getElementById(r2)
    var r3 = document.getElementById(r3)
    var r4 = document.getElementById(r4)
    var r5 = document.getElementById(r5)
    var r6 = document.getElementById(r6)
    var r7 = document.getElementById(r7)
    var r8 = document.getElementById(r8)
    var r9 = document.getElementById(r9)
    var r10 = document.getElementById(r10)
    var r11 = document.getElementById(r11)
    var r12 = document.getElementById(r12)
    var r13 = document.getElementById(r13)
    var r14 = document.getElementById(r14)
    var r15 = document.getElementById(r15)
    var r16 = document.getElementById(r16)
    if(r1.checked==true){
        r2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров AMD или Intel, поколения: Intel не выше i3-10xxx Без индекса F в конце (подробнее в справке), AMD Ryzen не выше 3xxx`
        r3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров AMD и Intel: Asrock или MSI`
        r4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: DeepCool`
        r5.innerHTML = `<h4>Оперативная память:</h4> Формат DIMM, Рекомендуемая объем 8 гигабайт Производители: AMD`
        r6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA Рекомендуемый объем памяти 120 гигабайт, Рекомендуемые производители: Kingston, AMD`
        r7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти от 1000 гигабайт, Рекомендуемые производители: WD (Western Digital) Blue`
        r8.hidden = true
        r9.innerHTML = `<h4>Корпус:</h4> Рекомендуемые производители DEEPCOOL, DEXP`
        r10.innerHTML = `Примерная стоимость такой сборки будет равна: <h4>~24000 - 26000 рублей</h4>`
    }
    if(r11.checked==true){
        r12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, HP`
        r13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(r14.checked==true){
        r15.innerHTML = `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, ASUS, LENOVO`
        r16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~24000 - 26000 рублей`
    }
}
//------------------------------------------------РИСОВАНИЕ------------------------------------------------//
function chase9(k1,k2,k3,k4,k5,k6,k7,k8,k9,k10,k11,k12,k13,k14,k15,k16){
    var k1 = document.getElementById(k1)
    var k2 = document.getElementById(k2)
    var k3 = document.getElementById(k3)
    var k4 = document.getElementById(k4)
    var k5 = document.getElementById(k5)
    var k6 = document.getElementById(k6)
    var k7 = document.getElementById(k7)
    var k8 = document.getElementById(k8)
    var k9 = document.getElementById(k9)
    var k10 = document.getElementById(k10)
    var k11 = document.getElementById(k11)
    var k12 = document.getElementById(k12)
    var k13 = document.getElementById(k13)
    var k14 = document.getElementById(k14)
    var k15 = document.getElementById(k15)
    var k16 = document.getElementById(k16)
    if(k1.checked==true){
        k2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров AMD или Intel,`
        k3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров AMD и Intel: Asrock или MSI`
        k4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: AeroCool, DeepCool `
        k5.innerHTML = `<h4>Оперативная память:</h4>Формат DIMM, Рекомендуемая объем 16 гигабайт Производители: AMD`
        k6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA Рекомендуемый объем памяти 250 гигабайт, Рекомендуемые производители: Kingston, AMD, Samsung`
        k7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти от 1000 гигабайт, со скоростью вращения не менее 7200 оборотов/минуту, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        k8.innerHTML = `<h4>Видеокарта:</h4> Рекомендуемые производители Nvidia или AMD, серии: Nvidia не нижее серии GTX 16xx, AMD не ниже серии RX 6xxx`
        k9.innerHTML = `<h4>Корпус:</h4>Рекомендуемые производители DEEPCOOL, AeroCool`
        k10.innerHTML = `Примерная стоимость такой сборки будет равна:<h4>~40000 - 45000 рублей</h4>`
    }
    if(k11.checked==true){
        k12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, MSI, HP`
        k13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(k14.checked==true){
        h15.innerHTML= `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, HUAWEI, MSI, Xiaomi `
        h16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~35000 - 45000 рублей`
    }
}
function chase18(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16){
    var s1 = document.getElementById(s1)
    var s2 = document.getElementById(s2)
    var s3 = document.getElementById(s3)
    var s4 = document.getElementById(s4)
    var s5 = document.getElementById(s5)
    var s6 = document.getElementById(s6)
    var s7 = document.getElementById(s7)
    var s8 = document.getElementById(s8)
    var s9 = document.getElementById(s9)
    var s10 = document.getElementById(s10)
    var s11 = document.getElementById(s11)
    var s12 = document.getElementById(s12)
    var s13 = document.getElementById(s13)
    var s14 = document.getElementById(s14)
    var s15 = document.getElementById(s15)
    var s16 = document.getElementById(s16)
    if(s1.checked==true){
        s2.innerHTML = `<h4>Процессор:</h4> Рекомендуемые фирмы процессоров AMD или Intel,`
        s3.innerHTML = `<h4>Материснкая плата:</h4> Рекомендуемые фирмы для процессоров AMD и Intel: Asrock или MSI`
        s4.innerHTML = `<h4>Охлаждение процессора:</h4> Рекомендуем брать воздушное охлоаждение, Рекомендуемые производители: AeroCool, DeepCool `
        s5.innerHTML = `<h4>Оперативная память:</h4>Формат DIMM, Рекомендуемая объем 16 гигабайт Производители: AMD`
        s6.innerHTML = `<h4>SSD накопитель:</h4> Формат SATA Рекомендуемый объем памяти 250 гигабайт, Рекомендуемые производители: Kingston, AMD, Samsung`
        s7.innerHTML = `<h4>HDD накопитель:</h4> Рекомендуе объем памяти от 1000 гигабайт, со скоростью вращения не менее 7200 оборотов/минуту, Рекомендуемые производители: WD (Western Digital) Blue, Segate BarraCuda`
        s8.innerHTML = `<h4>Видеокарта:</h4> Рекомендуемые производители Nvidia или AMD, серии: Nvidia не нижее серии GTX 16xx, AMD не ниже серии RX 6xxx`
        s9.innerHTML = `<h4>Корпус:</h4>Рекомендуемые производители DEEPCOOL, AeroCool`
        s10.innerHTML = `Примерная стоимость такой сборки будет равна:<h4>~40000 - 45000 рублей</h4>`
    }
    if(s11.checked==true){
        s12.innerHTML = `Рекомендуем выбирать Моноблоки следующих фирм: DEXP, MSI, HP`
        s13.innerHTML = `Примерная стоимость этих моноблоков составит: ~29000-32000 рублей`
    }
    if(s14.checked==true){
        s15.innerHTML= `Рекомендуем выбирать Ноутбуки следующих фирм: Acer, HUAWEI, MSI, Xiaomi `
        s16.innerHTML = `Примерная стоимость этих ноутбуков составит: ~35000 - 45000 рублей`
    }
}
//------------------------------------------------//
//ФУНКЦИИ ПЕРЕФЕРИИ//
//ДА//
function prphYES(pr1, pr2){
    var pr1 = document.getElementById(pr1)
    var pr2 = document.getElementById(pr2)
    if(pr1.value="yes2"){
        pr2.hidden=false;
    }
}
//НЕТ//
function prphNO(pr11, pr22){
    var pr11 = document.getElementById(pr11)
    var pr22 = document.getElementById(pr22)
    pr22.hidden=false;
    if(pr11.value="no2"){
        pr22.hidden=true;
    }}
//НЕ ЗНАЮ//
function prphDK(pr111, pr222, pr333, pr444, pr555){
    var pr111 = document.getElementById(pr111)
    var pr222 = document.getElementById(pr222)
    var pr333 = document.getElementById(pr333)
    var pr444 = document.getElementById(pr444)
    var pr555 = document.getElementById(pr555)
    pr222.innerHTML="";
    pr333.innerHTML="";
    pr444.innerHTML="";
    if(pr111.value==`dk6`){
        pr222.innerHTML="1";
        pr333.innerHTML="2";
        pr444.innerHTML="3";
        pr222.hidden=false;
        pr333.hidden=false;
        pr444.hidden=false;
        pr555.hidden=false;
    }
}
//------------------------------------------------//
//ВЫБОР ПЕРЕФЕРИИ//
//МОНИТОР//
function mntr(mntr1, mntr11){
    var mntr1 = document.getElementById(mntr1)
    var mntr11 = document.getElementById(mntr11)
    mntr11.innerHTML="";
    if(mntr1.checked ==true){
        mntr11.innerHTML="1";
        mntr11.hidden = false
    }else{
        mntr11.hidden=true
    }
}
function mntr2(mntr3, mntr33){
    var mntr3 = document.getElementById(mntr3)
    var mntr33 = document.getElementById(mntr33)
    if(mntr3.checked ==true){
        mntr33.innerHTML="1";
    }else{
        mntr33.hidden=true
    }
}
//КЛАВИАТУРА//
function kbrd(kbrd1, kbrd11){
    var kbrd1 = document.getElementById(kbrd1)
    var kbrd11 = document.getElementById(kbrd11)
    kbrd11.innerHTML="";
    if(kbrd1.checked ==true){
        kbrd11.innerHTML="2";
        kbrd11.hidden = false    
    }else{
        kbrd11.hidden=true
    }
}

function kbrd2(kbrd3, kbrd33){
    var kbrd3 = document.getElementById(kbrd3)
    var kbrd33 = document.getElementById(kbrd33)
    if(kbrd3.checked ==true){
        kbrd33.innerHTML="2";   
    }else{
        kbrd33.hidden=true
    }
}
//МЫШБ//
function ms(ms1,ms11){
    var ms1 = document.getElementById(ms1)
    var ms11 = document.getElementById(ms11)
    ms11.innerHTML="";
    if(ms1.checked ==true){
        ms11.innerHTML="3";
        ms11.hidden = false    
    }else{
        ms11.hidden=true
    }
}

function ms2(ms3,ms33){
    var ms3 = document.getElementById(ms3)
    var ms33 = document.getElementById(ms33)
    if(ms3.checked ==true){
        ms33.innerHTML="3";    
    }else{
        ms33.hidden=true
    }
}
//НАУШНИКИ//
function hdphns(hdphns1,hdphns11){
    var hdphns1 = document.getElementById(hdphns1)
    var hdphns11 = document.getElementById(hdphns11)
    hdphns11.innerHTML="";
    if(hdphns1.checked ==true){
        hdphns11.innerHTML="4";
        hdphns11.hidden = false    
    }else{
        hdphns11.hidden=true
    }
}

function hdphns2(hdphns3,hdphns33){
    var hdphns3 = document.getElementById(hdphns3)
    var hdphns33 = document.getElementById(hdphns33)
    if(hdphns3.checked ==true){
        hdphns33.innerHTML="4";   
    }else{
        hdphns33.hidden=true
    }
}
//КОЛОНКИ//
function spkrs(spkrs1,spkrs11){
    var spkrs1 = document.getElementById(spkrs1)
    var spkrs11 = document.getElementById(spkrs11)
    spkrs11.innerHTML="";
    if(spkrs1.checked ==true){
        spkrs11.innerHTML="5";
        spkrs11.hidden = false    
    }else{
        spkrs11.hidden=true
    }
}

function spkrs2(spkrs3,spkrs33){
    var spkrs3 = document.getElementById(spkrs3)
    var spkrs33 = document.getElementById(spkrs33)
    if(spkrs3.checked ==true){
        spkrs33.innerHTML="5";   
    }else{
        spkrs33.hidden=true
    }
}
//ПРИНТЕР/СКАНЕР//
function prntr(prntr1,prntr11){
    var prntr1 = document.getElementById(prntr1)
    var prntr11 = document.getElementById(prntr11)
    prntr11.innerHTML="";
    if(prntr1.checked ==true){
        prntr11.innerHTML="6";
        prntr11.hidden = false    
    }else{
        prntr11.hidden=true
    }
}

function prntr2(prntr3,prntr33){
    var prntr3 = document.getElementById(prntr3)
    var prntr33 = document.getElementById(prntr33)
    if(prntr3.checked ==true){
        prntr33.innerHTML="6";   
    }else{
        prntr33.hidden=true
    }
}
//ТЕМНАЯ ТЕМА//
let changeThemeButtons = document.querySelectorAll('.changeTheme');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let theme = this.dataset.theme;
        applyTheme(theme);
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block'; 
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName)
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null || activeTheme === 'light') {
    applyTheme('light');
} else if (activeTheme === 'dark') {
    applyTheme('dark');
}
//ИЗМЕНЕНИЕ ШРИФТА//
function fontchange(n){
    var paragraph = document.getElementById('para');
    paragraph.style.fontSize = n + "px";
}

var buttons = document.querySelector(".buttons");
var button = buttons.querySelectorAll(".button");

for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", "");
        this.className += " active"
    })
}
//------------------------------------------------//
//ПРОЛИСТОВАНИЕ ВОПРОСОВ ВПЕРЕД//
document
    .querySelector(`#nxt1`)
    .addEventListener(`click`, ()=>{
        document
        .querySelector(`#how_old`)
        .scrollIntoView({
            block:`nearest`,
            behavior:`smooth`
    })
})

document
    .querySelector(`#nxt2`)
    .addEventListener(`click`, ()=>{
        document
        .querySelector(`#how_often`)
        .scrollIntoView({
            block:`nearest`,
            behavior:`smooth`
    })
})

document
    .querySelector(`#nxt4`)
    .addEventListener(`click`, ()=>{
        document
        .querySelector(`#monoblock_laptop`)
        .scrollIntoView({
            block:`nearest`,
            behavior:`smooth`
    })
})

document
    .querySelector(`#nxt5`)
    .addEventListener(`click`, ()=>{
        document
        .querySelector(`#pereferia`)
        .scrollIntoView({
            block:`nearest`,
            behavior:`smooth`
    })
})

document
    .querySelector(`#nxt6`)
    .addEventListener(`click`, ()=>{
        document
        .querySelector(`#target`)
        .scrollIntoView({
            block:`nearest`,
            behavior:`smooth`
    })
})
//------------------------------------------------//
//ПРОЛИСТОВАНИЕ ВОПРОСОВ НАЗАД//
document
    .querySelector(`#prvs2`)
    .addEventListener(`click`, ()=>{
        document
        .querySelector(`#fh`)
        .scrollIntoView({
            block:`nearest`,
            behavior:`smooth`
    })
})

document
    .querySelector(`#prvs4`)
    .addEventListener(`click`, ()=>{
        document
        .querySelector(`#how_old`)
        .scrollIntoView({
            block:`nearest`,
            behavior:`smooth`
    })
})

document
    .querySelector(`#prvs5`)
    .addEventListener(`click`, ()=>{
        document
        .querySelector(`#how_often`)
        .scrollIntoView({
            block:`nearest`,
            behavior:`smooth`
    })
})

document
    .querySelector(`#prvs6`)
    .addEventListener(`click`, ()=>{
        document
        .querySelector(`#monoblock_laptop`)
        .scrollIntoView({
            block:`nearest`,
            behavior:`smooth`
    })
})

document
    .querySelector(`#prvs7`)
    .addEventListener(`click`, ()=>{
        document
        .querySelector(`#pereferia`)
        .scrollIntoView({
            block:`nearest`,
            behavior:`smooth`
    })
})
//------------------------------------------------//
//СОХРАНЕНИЕ//
//------------------------------------------------СОХРАНЕНИЕ В ДОКУМЕНТ------------------------------------------------//
//------------------------------------------------ПК------------------------------------------------//
function exportPC(){
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header+document.getElementById("computer").innerHTML+footer;
    
    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'Компьютер.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}
//------------------------------------------------МОНОБЛОК------------------------------------------------//
function exportMNBLCK(){
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header+document.getElementById("monoblock").innerHTML+footer;
    
    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'Моноблок.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}
//------------------------------------------------НОУТБУК------------------------------------------------//
function exportNTBCK(){
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header+document.getElementById("notebook").innerHTML+footer;
    
    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'Ноутбук.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}
//------------------------------------------------ПЕРЕФЕРИЯ------------------------------------------------//
function exportPRPH(){
    var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
    var footer = "</body></html>";
    var sourceHTML = header+document.getElementById("prph").innerHTML+footer;
    
    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'Переферия.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
}
//------------------------------------------------//
// const textarea = document.querySelector(".textarea"),
// fileNameInput = document.querySelector(".file-name input"),
// selectMenu = document.querySelector(".save-as select"),
// saveBtn = document.querySelector(".save-btn");

// selectMenu.addEventListener("change", () => {
//     const selectedFormat = selectMenu.options[selectMenu.selectedIndex].text;
//     saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
// });

// saveBtn.addEventListener("click", () => {
//     const blob = new Blob([textarea.value], {type: selectMenu.value});
//     const fileUrl = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.download = fileNameInput.value;
//     link.href = fileUrl;
//     link.click();
// });