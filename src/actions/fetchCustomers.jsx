import {FETCH_CUSTOMERS} from '../constanst';
import {createAction} from 'redux-actions';


export const fetchCustomers = createAction(FETCH_CUSTOMERS);