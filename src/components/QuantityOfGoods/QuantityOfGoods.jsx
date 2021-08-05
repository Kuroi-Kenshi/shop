import { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { getData } from '../../utils/getData';
import s from './QuantityOfGoods.module.sass';

const QuantityOfGoods = ({ goodsInfo }) => {
    const [fullPrice, setFullPrice] = useState(0)
    const [fullAmount, setFullAmount] = useState(0)
    const dataToSend = useMemo(() => new FormData(), [])

    const sendDataToBasket = async (e) => {
        e.preventDefault();
        console.log('Sending to basket...');

        const url = 'https://datainlife.ru/junior_task/add_basket.php'
        getData(url, 'POST', dataToSend).then(data => console.log(data))
    }

    useEffect(() => {
        let fullPrice = 0
        let fullAmount = 0

        for (let key in goodsInfo) {
            if (goodsInfo[key].amount) {
                fullPrice += goodsInfo[key].gprice * goodsInfo[key].amount
                fullAmount += goodsInfo[key].amount
                dataToSend.set(`product[${key}]`, `${goodsInfo[key].amount}`)
            }
        }
        setFullPrice(fullPrice)
        setFullAmount(fullAmount)

    }, [goodsInfo, dataToSend])

    return (
        <>
            <section className={s.totalInfo}>
                <div className={s.totalAmount}>Общее количество товаров: {fullAmount}</div>
                <div className={s.totalPrice}>Общая сумма: {fullPrice}</div>
                <button type="submit" className={s.submitBtn} onClick={sendDataToBasket}>В корзину</button>
            </section>
        </>
    );
}

QuantityOfGoods.propTypes = {
    goodsInfo: PropTypes.object
}

export default QuantityOfGoods