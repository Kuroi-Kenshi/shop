import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './CategoriesList.module.sass';

const CategoriesList = () => {
    const goodsData = useSelector(state => state.goodsDataReducer)

    return (
        <>
            <aside className={s.categories}>
                <nav className={s.nav}>
                    <ul className={s.categoriesList}>
                        {goodsData.map(({ rname, urlalias, rid }, id) => {
                            if (id !== goodsData.length - 1) {
                                return (
                                    <li className={s.categoriesItem} key={rid}>
                                        <NavLink to={`/categories/${urlalias}`} className={s.link}>{rname}</NavLink>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    );
}

export default CategoriesList;