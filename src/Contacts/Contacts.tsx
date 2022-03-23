import React from 'react';
import s from './Contacts.module.css';


export const Contacts = () => {
    return (
        <section className={s.contacts}>
            <h2 className={s.contacts__title}>
                Контакты
            </h2>
            <div className="container">
                <div className={s.contacts__inner}>
                    <form className={s.contacts__form}>
                        <input className={s.contacts__input} type="text"/>
                        <input className={s.contacts__input} type="text"/>
                        <textarea className={s.contacts__textArea}/>
                        <button className={s.contacts__btn}>
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
