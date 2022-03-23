import React from 'react';
import s from './Freelance.module.css';



export const Freelance = () => {
    return (
        <section className={s.freelance}>
            <div className="container">
                <div className={s.freelance__block}>
                    <h2 className={s.freelance__block_title}>
                        Рассматриваю варианты удаленной работы
                    </h2>
                    <button className={s.freelance__block_btn}>
                        Нанять меня
                    </button>
                </div>
            </div>
        </section>
    );
};
