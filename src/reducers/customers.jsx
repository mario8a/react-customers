import {handleActions} from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constanst'

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload]
}, []);