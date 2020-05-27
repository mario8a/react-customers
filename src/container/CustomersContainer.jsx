import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from '../actions/fetchCustomers';

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

class CustomersContainer extends Component {

    componentDidMount() {
      this.props.fetchCustomers();
    }
    

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'} >
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )
    render() {
        return (
            <div>
                <AppFrame 
                    header={'listado de clientes'} 
                    body={this.renderBody(customers)}
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
    {
        fetchCustomers: () => dispatch(fetchCustomers())
    }
)

export default withRouter(connect(null, mapDispatchToProps)( CustomersContainer));