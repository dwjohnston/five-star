import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { selectProductByProductId, createEmptyProduct, isUpdateLoading } from '../../redux/selectors';
import { requestUpdateProduct } from '../../redux/actions';
import { Input, TextField } from '@material-ui/core';
import Button from "../generic/Button";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { PRODUCT_TABLE } from '../../routes/routes';
const useStyles = makeStyles({
    root: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",

        maxWidth: 600,
    },

    field: {
        //display: "block",
        paddingBottom: "1em",
    }
});

/***
 * Not that happy with the way I've done this. 
 * 
 * Possibly would have been better to use something like Formik. 
 */
function ProductEditForm({ productData, submitForm, updateLoading }) {
    const classes = useStyles();
    const [name, updateName] = useState(productData.name);
    const [priceUsd, updatePriceUsd] = useState(productData.priceUsd);

    const [formSubmitted, updateFormSubmitted] = useState(false);

    return (
        (formSubmitted && !updateLoading) ? <Redirect to={PRODUCT_TABLE} /> : <form
            className={classes.root}
            onSubmit={(event) => {
                event.preventDefault();
                submitForm({
                    id: productData.id,
                    name,
                    priceUsd,
                });

                updateFormSubmitted(true);
            }}
        >
            <TextField
                disabled
                label="Product ID"
                value={productData.id || "n/a"}
                className={classes.field}
            />
            <TextField
                value={name}
                label="Product Name"
                onChange={(event) => updateName(event.target.value)}
                disabled={updateLoading}
                className={classes.field}

            />

            <TextField
                value={priceUsd}
                label="Price (USD)"
                onChange={(event) => updatePriceUsd(event.target.value)}
                disabled={updateLoading}
                type="number"
                className={classes.field}

            />

            <Button
                type="submit"
                disabled={updateLoading}
                className={classes.field}
                color="primary"

            >Submit</Button>
        </form >
    )

}



const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        updateLoading: isUpdateLoading(state)
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
)(ProductEditForm);
