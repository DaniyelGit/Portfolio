import React from 'react';
import s from './Header.module.css';


export const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <nav className={s.menu}>
                        <ul className={s.menu__list}>
                            <li className={s.menu__list_item}>
                                <a className={s.menu__list_link} href="#">
                                    Главная
                                </a>
                            </li>
                            <li className={s.menu__list_item}>
                                <a className={s.menu__list_link} href="#">
                                    Навыки
                                </a>
                            </li>
                            <li className={s.menu__list_item}>
                                <a className={s.menu__list_link} href="#">
                                    Работы
                                </a>
                            </li>
                            <li className={s.menu__list_item}>
                                <a className={s.menu__list_link} href="#">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};