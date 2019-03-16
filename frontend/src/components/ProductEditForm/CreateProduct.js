import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import ProductEditForm from './ProductEditForm';
import { createEmptyProduct } from '../../redux/selectors';
import ProductEditFormLayout from '../layouts/ProductEditFormLayout';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
    },
});

const emptyData = createEmptyProduct();

export default function CreateProduct({ }) {
    const classes = useStyles();
    return <ProductEditFormLayout>
        <Typography variant="h2" gutterBottom>Create Product </Typography>
        <ProductEditForm productData={emptyData} />
    </ProductEditFormLayout>;
}