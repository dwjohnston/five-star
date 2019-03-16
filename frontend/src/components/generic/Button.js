import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginBottom: "0.5em"
    },
});

export default function ButtonGroup({ children, ...rest }) {
    const classes = useStyles();
    return <Button className={classes.root} variant="contained" {...rest}>
        {children}
    </Button>;
}