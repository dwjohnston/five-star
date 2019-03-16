import React from 'react';
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
    root: {
        padding: "2em",
    },
});

export default function ProductEditFormLayout({ children }) {
    const classes = useStyles();
    return <div className={classes.root}>

        {children}

    </div>;
}