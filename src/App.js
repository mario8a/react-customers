import React , {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeContainer from './container/HomeContainer';
import CustomersContainer from './container/CustomersContainer';
import CustomerContainer from './container/CustomerContainer';

class App extends Component {

  renderHome = () => <h1>Home</h1>
  renderCustomerContainer = () => <h1>Customer container</h1>
  renderCustomerListConainer = () => <h1>Customers list container</h1>

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomeContainer}></Route>
          <Route exact path="/customers" component={CustomersContainer}></Route>
          <Switch>
            <Route path="/customers/new" component={this.renderCustomerNewContainer}></Route>
            <Route path="/customers/:dni" 
                  render={props => <CustomerContainer dni={props.match.params.dni} /> }></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
