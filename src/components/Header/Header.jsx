import s from './Header.module.sass';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}></div>
                <nav className={s.nav}>
                    <ul className={s.menu}>
                        <li className={s.menuItem}><a href="#" className={s.menuLink}>Menu Item 1</a></li>
                        <li className={s.menuItem}><a href="#" className={s.menuLink}>Menu Item 2</a></li>
                        <li className={s.menuItem}><a href="#" className={s.menuLink}>Menu Item 3</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;