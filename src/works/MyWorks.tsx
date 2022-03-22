import React from 'react';
import s from './MyWorks.module.css';



export const MyWorks = () => {
    return (
        <section className={s.works}>
            <h2 className={s.works__title}>
                Мои работы
            </h2>
            <div className="container">
                <div className={s.works__items}>
                    <div className={s.works__item}>
                        <div className={s.works__item_images}>
                            <button className={s.works__item_btn}>
                                Смотреть
                            </button>
                        </div>
                        <div className={s.works__item_content}>
                            <h4 className={s.works__item_title}>
                                Название проекта
                            </h4>
                            <p className={s.works__item_descr}>
                                Краткое описание проекта
                            </p>
                        </div>
                    </div>
                    <div className={s.works__item}>
                        <div className={s.works__item_images}>
                            <button className={s.works__item_btn}>
                                Смотреть
                            </button>
                        </div>
                        <div className={s.works__item_content}>
                            <h4 className={s.works__item_title}>
                                Название проекта
                            </h4>
                            <p className={s.works__item_descr}>
                                Краткое описание проекта
                            </p>
                        </div>
                    </div>
                    <div className={s.works__item}>
                        <div className={s.works__item_images}>
                            <button className={s.works__item_btn}>
                                Смотреть
                            </button>
                        </div>
                        <div className={s.works__item_content}>
                            <h4 className={s.works__item_title}>
                                Название проекта
                            </h4>
                            <p className={s.works__item_descr}>
                                Краткое описание проекта
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
