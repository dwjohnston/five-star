import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from "../generic/Button";
import { Link } from "react-router-dom";
import { CREATE_PRODUCT } from '../../routes/routes';
import { Switch } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-end",
    },
});

export default function ControlPanel({ useAud, updateUseAud, disabled }) {
    const classes = useStyles();
    return <div className={classes.root}>


        <Switch
            checked={useAud}
            onChange={() => updateUseAud(!useAud)}
            value="useAud"
            color="primary"
            disabled={disabled}
        />
        <Button
            color="primary"
            component={Link}
            to={CREATE_PRODUCT}
        >Add Product</Button>
    </div>;
}