import React from 'react';
import s from './Footer.module.css';



export const Footer = () => {
    return (
        <footer className={s.footer}>
            <h2 className={s.footer__title}>
                Даниель Ткачук
            </h2>
            <div className="container">
                <div className={s.footer__inner}>
                    <div className={s.footer__links}>
                        <div className={s.footer__link}>

                        </div>
                        <div className={s.footer__link}>

                        </div>
                        <div className={s.footer__link}>

                        </div>
                        <div className={s.footer__link}>

                        </div>
                    </div>
                    <p className={s.footer__copy}>
                        © 2019 Все права защищены
                    </p>
                </div>
            </div>
        </footer>
    );
};
