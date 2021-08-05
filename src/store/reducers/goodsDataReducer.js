import { ADD_GOODS_DATA } from '../constants/actionTypes';

const initialState = [];

const goodsDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOODS_DATA:
            return [...state, ...action.payload];

        default:
            return state;
    }
};

export default goodsDataReducer;
