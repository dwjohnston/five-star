import React, { Component } from 'react';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { requestFetchAllProducts, requestFetchCurrencyRate } from '../redux/actions';
import Router from './Router';
import Header from "./layouts/Header";
import ErrorPanel from './ErrorPanel/ErrorPanel';
class App extends Component {

  constructor(props) {
    super(props);

    props.fetchAllProducts();
    props.fetchCurrencyRate();
  }

  render() {
    return (
      <CssBaseline>
        <Header />
        <ErrorPanel />
        <Router />
      </CssBaseline>
    );
  }
}




const mapStateToProps = (
  state,
  ownProps
) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: () => dispatch(requestFetchAllProducts()),
    fetchCurrencyRate: () => dispatch(requestFetchCurrencyRate()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
