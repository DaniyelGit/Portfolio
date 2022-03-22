import React from 'react';
import s from './Main.module.css';



export const Main = () => {
    return (
        <section className={s.main}>
            <div className="container">
                <div className={s.main__inner}>

                    <div className={s.main__content}>
                        <span className={s.main__content_pretite}>
                            Всем привет!
                        </span>
                        <h1 className={s.main__content_title}>
                            Меня зовут Даниель Ткачук
                        </h1>
                        <p className={s.main__content_text}>
                            Я front-end разработчик
                        </p>
                    </div>

                    <div className={s.main__photo}>

                    </div>
                </div>
            </div>
        </section>
    );
};