import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import QuantityOfGoods from '../../QuantityOfGoods'

import s from './GoodsList.module.sass';

const GoodsList = ({ categoryGoods }) => {
    const [goodsInfo, setGoodsInfo] = useState({})
    const addAmoundGoods = (e) => {
        const { name, value } = e.target
        setGoodsInfo(prev => ({
            ...prev, [name]: {
                ...prev[name],
                amount: +value
            }
        }))
    }

    useEffect(() => {
        categoryGoods.goods.forEach(({ gid, gname, gprice }) => {
            setGoodsInfo(prev => {
                return {
                    ...prev, [gid]: {
                        gname: gname,
                        gprice: +gprice,
                    }
                }
            })
        })

    }, [categoryGoods])

    return (
        <>
            <section className={s.goodsList}>
                <form id='goodsForm'>
                    <div className={s.wrapper}>
                        <div className={s.goodsTable}>
                            <div className={s.title}><h1>{categoryGoods.rname}</h1></div>
                            <div className={s.id}>Id</div>
                            <div className={s.name}>Название товара</div>
                            <div className={s.price}>Цена</div>
                            <div className={s.amount}>Количество</div>
                            <div className={s.totalPrice}>Сумма</div>
                            {categoryGoods.goods.map(({ gid, gname, gprice }) => {
                                return (
                                    <Fragment key={gid}>
                                        <div className={s.tableItem}>{gid}</div>
                                        <div className={s.tableItem}>{gname}</div>
                                        <div className={s.tableItem}>{gprice}</div>
                                        <div className={s.tableItem}>
                                            <input type="number" placeholder="Введите количество" name={gid} value={goodsInfo[gid]?.amount} onChange={addAmoundGoods} />
                                        </div>
                                        <div className={s.tableItem}>{goodsInfo[gid]?.amount ? goodsInfo[gid].amount * goodsInfo[gid].gprice : 0}</div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                    <QuantityOfGoods goodsInfo={goodsInfo} />
                </form>
            </section>

        </>
    );
}

GoodsList.propTypes = {
    categoryGoods: PropTypes.object
}

export default GoodsList;