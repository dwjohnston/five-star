import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import ProductEditForm from './ProductEditForm';
import { connect } from 'react-redux';
import { selectProductByProductId } from '../../redux/selectors';
import { requestUpdateProduct } from '../../redux/actions';
import ProductEditFormLayout from '../layouts/ProductEditFormLayout';

const useStyles = makeStyles({
    root: {

    },
});

function UpdateProduct({ productData }) {
    const classes = useStyles();
    return <ProductEditFormLayout >
        <Typography variant="h2">Update Product </Typography>
        {productData && <ProductEditForm productData={productData} />}
    </ProductEditFormLayout >;
}

const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        productData: selectProductByProductId(state, ownProps.match.params.id)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (productData) => dispatch(requestUpdateProduct(productData))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateProduct);