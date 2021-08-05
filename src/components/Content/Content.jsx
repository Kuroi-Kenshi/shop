import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import GoodsList from './GoodsList'

import s from './Content.module.sass';

const Content = ({ match }) => {
    const categoryId = match.params.id
    const goodsData = useSelector(state => state.goodsDataReducer)
    const goodsOfCategory = goodsData.find(el => el.urlalias === categoryId)

    return (
        <section className={s.content}>
            {goodsOfCategory && <GoodsList categoryGoods={goodsOfCategory} />}
        </section>
    );
}

Content.propTypes = {
    match: PropTypes.object,
}

export default Content;