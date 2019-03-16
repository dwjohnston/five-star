import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import ButtonGroup from '../generic/ButtonGroup';

const useStyles = makeStyles({
    root: {

    },
});

function ProductTable({ products }) {
    const classes = useStyles();
    return <Table className={classes.root}>
        <TableHead>
            <TableCell>Product ID</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Value (USD)</TableCell>
            <TableCell>Action</TableCell>
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
                            <Button>Update</Button>
                            <Button>Delete</Button>
                        </ButtonGroup>
                    </TableCell>
                </TableRow>)
            })}
        </TableBody>


    </Table>;

}




const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTable); 