import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { selectProductByProductId, createEmptyProduct } from '../../redux/selectors';
import { requestUpdateProduct } from '../../redux/actions';
import { Input, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
    },
});


function updateProduct(oldData, field, value) {
    return {
        ...oldData,
        [field]: value
    };
}

function ProductEditForm({ productData, submitForm }) {
    const classes = useStyles();
    const [name, updateName] = useState(productData.name);
    const [priceUsd, updatePriceUsd] = useState(productData.priceUsd);

    return <form
        className={classes.root}
        onSubmit={submitForm}
    >
        <TextField
            disabled
            label="Product ID"
            value={productData.id || "n/a"} />
        <TextField
            value={name}
            label="Product Name"
            onChange={(event) => updateName(event.target.value)}
        />

        <TextField
            value={priceUsd}
            label="Price"
            onChange={(event) => updatePriceUsd(event.target.value)}
        />

        <Button type="submit">Submit</Button>
    </form>;
}


export default ProductEditForm;
