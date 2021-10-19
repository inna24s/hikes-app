import React from "react";
import s from './Reviews.module.css';

const Review =(props) =>
{
    return(
        <div>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.textReview}>
                {props.textReview}
            </div>
            <br/>
        </div>
    );
}
const Reviews = () => {
    return (
        <div>
            <h1>Отзывы</h1>
            <Review name = "Roma K." textReview = "Хочется поблагодарить турфирму RobinsonGroup за горный поход на Алтай по Шавлинским озёрам.
            Руководитель - профессионал своего дела. Грамотно продуман маршрут." />
            <Review name = "Светлана П." textReview = "Ходила в лыжный поход по Хибинам. Всё очень понравилось!" />
            <Review name = "Александр" textReview = "Первый раз в жизни пошёл в поход. Ходили в Крым. Поход - пешая единичка.
            Руководитель подбадривал, помогал. Он похода остался в полном восторге. Обязательно пойду ещё. Всем с удовольствием советую вашу фирму." />
            <Review name = "Natalya G." textReview = "Ожидала большее сложных перевалов в горной тройке. Но в общем все понравилось." />
            <Review name = "Denis D." textReview = "Ходил в лыжный поход. Организация замечательная, но, кажется, зимние походы - это не моё.
            Пойду летом куда-нибудь на Юг и в горы." />
        </div>
    );
}
export default Reviews;