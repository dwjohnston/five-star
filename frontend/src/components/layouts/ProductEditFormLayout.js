import React from 'react';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    root: {

    },
});

export default function ProductEditFormLayout({ children }) {
    const classes = useStyles();
    return <div className={classes.root}>

        {children}

    </div>;
}