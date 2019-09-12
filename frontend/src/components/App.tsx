import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {Theme } from '@material-ui/core';
import { RatingDisplay } from './Rater/RatingDisplay';
import { SelectableRating } from './Rater/SelectableRating';
const useStyles = makeStyles((theme: Theme) => {
    return ({
        root: ({
        }),
    })
});

export interface AppProps {

}



export const App: React.FunctionComponent<AppProps> = (props) => {
    const {
       
    } = props;
    const classes = useStyles(props);
    return <main className={classes.root}>
      <RatingDisplay value ={3} /> 

      <SelectableRating selectedValue ={4} /> 

    </main>;
}

