import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { connect } from 'react-redux';
import ButtonGroup from '../generic/ButtonGroup';
import { Link } from "react-router-dom";
import * as Routes from "../../routes/routes";
import { selectAllProducts, selectCurrencyRate } from '../../redux/selectors';
import { requestDeleteProduct } from "../../redux/actions";
import Button from "../generic/Button";
import ControlPanel from './ControlPanel';
import { convertCurrency, formatCurrency } from '../../util/convertCurrency';
const useStyles = makeStyles({
    root: {

    },

    currencyColumn: {
        textAlign: "right", 
    }
});

function ProductTable({ products, deleteProduct, currencyRate }) {
    const classes = useStyles();

    const [useAud, updateUseAud] = useState(false);

    return (
        <section>
            <ControlPanel
                useAud={useAud}
                updateUseAud={updateUseAud}
                disabled={!currencyRate}
            />
            <Table className={classes.root}>
                <TableHead>
                    <TableRow>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>{useAud ? `Value (AUD)` : `Value (USD)`}</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products && products.map((product, i) => {
                        return (<TableRow
                            key={product.id}
                        >
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell className={classes.currencyColumn}>{formatCurrency(
                                useAud ? convertCurrency(product.priceUsd, currencyRate)
                                    : product.priceUsd
                            )}</TableCell>
                            <TableCell>
                                <ButtonGroup>
                                    <Button
                                        component={Link}
                                        to={`${Routes.UPDATE_PRODUCT}/${product.id}`}
                                        color="primary"
                                    >Update</Button>
                                    <Button
                                        onClick={() => deleteProduct(product)}
                                        color="secondary"
                                    >Delete</Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>)
                    })}
                </TableBody>


            </Table>
        </section>);

}




const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        products: selectAllProducts(state),
        currencyRate: selectCurrencyRate(state),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: (product) => dispatch(requestDeleteProduct(product))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTable); 