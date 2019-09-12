
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {Theme } from '@material-ui/core';
import { User } from 'common';
const useStyles = makeStyles((theme: Theme) => {
    return ({
        root: ({
            marginLeft: "auto", 
            display: "inline-block",
        }),
    })
});

export interface UserPanelProps {
    user?: User
}



export const UserPanel: React.FunctionComponent<UserPanelProps> = (props) => {
    const {
       user
    } = props;
    const classes = useStyles(props);
    return <div className={classes.root}>
        UserId: {user && user.userId}
    </div>;
}

