import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field, isPristine} from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';

// const isRequired = value => (
//     !value && "Este campo es requerido"
// );

const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";

    }

    if (!values.dni) {
        error.dni = "El Dni es un campo obligatorio";
    }

    return error;
};

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un numero"
);

const MyField = ({input, meta, type, label, name}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type}/>
        {
            meta.touched && meta.error && <span> {meta.error} </span>
        }
    </div>
)

const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();
const onlyGrow = (value, prevValue, values) => 
    value && (!prevValue ? value : (value > prevValue ? value : prevValue));

const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceed}) => {
    return (
        <div>
            <h2>Ediion del cliente</h2>
            <form onSubmit={handleSubmit}>
                    <Field 
                        name="name" 
                        component={MyField} 
                        type="text"
                        label="Nombre"
                        parse={toUpper}
                        format={toLower}
                        >

                    </Field>
                    <Field 
                        name="dni" 
                        component={MyField}
                        type="text"
                        label="Dni">
                        
                    </Field>
                    <Field 
                        name="age" 
                        component={MyField}
                        type="number" 
                        validate={isNumber}
                        label="Edad"
                        parse={toNumber}
                        normalize={onlyGrow}>

                    </Field>
                <CustomersActions>
                    <button type="submit" disabled={pristine || submitting}>
                        Aceptar
                    </button>
                    <button type="button" onClick={onBack} disabled={submitting}>
                        Cancelar
                    </button>
                </CustomersActions>
                <Prompt 
                    when={!pristine && !submitSucceed} 
                    message="Se perderan los cambios si continua">

                </Prompt>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
    { 
        form: 'CustomerEdit',
        validate
    })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);