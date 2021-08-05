import { ADD_GOODS_DATA } from '../constants/actionTypes';

export const addGoodsData = data => ({
    type: ADD_GOODS_DATA,
    payload: data,
});
