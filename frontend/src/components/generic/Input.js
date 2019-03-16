import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
    },
});

export default function ButtonGroup({ children }) {
    const classes = useStyles();
    return <div className={classes.root}>
        {children}
    </div>;
}