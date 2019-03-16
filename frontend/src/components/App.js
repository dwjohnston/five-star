import React, { Component } from 'react';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { requestFetchAllProducts } from '../redux/actions';
import ProductTable from './ProductTable/ProductTable';

class App extends Component {

  constructor(props) {
    super(props);

    props.fetchAllProducts();
  }

  render() {
    return (

      <CssBaseline>
        <section className="App">
          <ProductTable />
        </section>
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
    fetchAllProducts: () => dispatch(requestFetchAllProducts())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
