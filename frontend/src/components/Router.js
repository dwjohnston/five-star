import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch, Link } from "react-router-dom";
import ProductTable from "./ProductTable/ProductTable";

import * as Routes from "../routes/routes";
import UpdateProduct from "./ProductEditForm/UpdateProduct";
import CreateProduct from "./ProductEditForm/CreateProduct";
import { connect } from 'react-redux';

function Router() {
    return (<ReactRouter>
        <Switch>
            {/* nb. Order is important because switch statement */}
            <Route path={Routes.CREATE_PRODUCT} exact component={CreateProduct} />
            <Route path={Routes.UPDATE_PRODUCT} exact component={UpdateProduct} />
            <Route path={Routes.PRODUCT_TABLE} exact component={ProductTable} />
            <Route path={Routes.HOME} exact component={ProductTable} />
        </Switch>
    </ReactRouter>)
}

const mapStateToProps = (
    state,
    ownProps
) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Router)