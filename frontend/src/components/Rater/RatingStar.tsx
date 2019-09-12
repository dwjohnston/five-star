
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme: Theme) => {
    return ({
        root: ({
        }),
    })
});

export interface StarProps {
    isSolid: boolean;
    onHover?: () => void;
    onMouseOut?: () => void;
    onClick?: () => void;

}



export const RatingStar: React.FunctionComponent<StarProps> = (props) => {
    const {
        isSolid,
        onHover,
        onMouseOut,
        onClick, 
    } = props;
    const classes = useStyles(props);
    return isSolid ? <StarIcon
        className = {classes.root}
        onMouseOver={onHover}
        onClick={onClick}
        onMouseOut={onMouseOut}
    /> : <StarBorderIcon
            onMouseOver={onHover}
            onClick={onClick}
            onMouseOut={onMouseOut}
        />;
}

