
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { RatingStar } from './RatingStar';
const useStyles = makeStyles((theme: Theme) => {
    return ({
        root: ({
        }),

    })
});

export interface RatingDisplayProps {
    value: 1 | 2 | 3 | 4 | 5;
}



export const RatingDisplay: React.FunctionComponent<RatingDisplayProps> = (props) => {
    const {
        value
    } = props;
    const classes = useStyles(props);

    //Todo - Aria tag? 
    return <section className={classes.root} >
        {new Array(5).fill(true).map((v, i) => {
            return <RatingStar isSolid={i < value}
            />
        })}
    </section>;
}

