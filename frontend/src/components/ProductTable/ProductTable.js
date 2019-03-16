import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { connect } from 'react-redux';
import ButtonGroup from '../generic/ButtonGroup';
import { Link } from "react-router-dom";
import * as Routes from "../../routes/routes";
import { selectAllProducts } from '../../redux/selectors';
import { requestDeleteProduct } from "../../redux/actions";
import Button from "../generic/Button";
import ControlPanel from './ControlPanel';
const useStyles = makeStyles({
    root: {

    },
});

function ProductTable({ products, deleteProduct }) {
    const classes = useStyles();
    return (
        <section>
            <ControlPanel />
            <Table className={classes.root}>
                <TableHead>
                    <TableRow>
                        <TableCell>Product ID</TableCell>
                        <TableCell>Product Name</TableCell>
                        <TableCell>Value (USD)</TableCell>
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
                            <TableCell>{product.priceUsd}</TableCell>
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
        products: selectAllProducts(state)
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