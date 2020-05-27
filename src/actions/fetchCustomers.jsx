import {FETCH_CUSTOMERS} from '../constanst';
import {createAction} from 'redux-actions';

const customers = [
    {
        "dni": "416000904",
        "name": "Mario Ochoa",
        "age": 25
    },
    {
        "dni": "7851498",
        "name": "Karal max",
        "age": 30
    },
    {
        "dni": "22986451232",
        "name": "Daniela Odai",
        "age": 27
    }
];


export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);