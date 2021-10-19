import React from "react";
import s from './MainPage.module.css';

const MainPage = () => {
    let onClick=()=>{
        window.location.href="./test";
    }
    return (
        <div className={s.mainPage}>
            <div className={s.pic} >
                <img src = "http://www.kolymastory.ru/wp-content/uploads/2015/09/voron_gory_009.jpg" alt=""/>
                <div className={s.quote}>
                «Путь в тысячу миль начинается с единственного маленького шага»
                    <p>Лао Цзы</p>
                </div>
            </div>
            <div>
                <h3>10 причин пойти в поход</h3>
                <ol>
                    <li>Незабываемые впечатления, интересный опыт</li>
                    <li>Возможность узнать себя</li>
                    <li>Перезагрузка</li>
                    <li>Испытание себя</li>
                    <li>Физические нагрузки. Хорошая фигура. Крепкое здоровье.</li>
                    <li>Отдых от цивилизации и гаджетов</li>
                    <li> Бюджетный отдых </li>
                    <li> Единение с природой</li>
                    <li>Новые знакомства</li>
                    <li>Романтика: гитара, костёр, звёздное небо...</li>
                </ol>
            </div>
            <button className={s.button} onClick={onClick}>Хочу в поход!</button>
        </div>
    );
}
export default MainPage;