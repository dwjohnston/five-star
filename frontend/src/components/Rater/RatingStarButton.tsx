
import React, { useState, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, IconButton, Typography } from '@material-ui/core';
import { RatingStar } from './RatingStar';
import { debounce } from "lodash";
import { useLoadsCache, useLoads } from 'react-loads';
import { User, RatingValues, Rating } from 'common';
const useStyles = makeStyles((theme: Theme) => {
    return ({
        root: ({

            display: "flex",
            flexFlow: "column nowrap",
            alignItems: "center",
        }),

        radioButton: {
            display: "none",
        }
    })
});
export interface RatingStarButtonProps {
    value: RatingValues;
    updateTempValue: (i: RatingValues) => void;
    clearTempValue: () => void;
    isSolid: boolean;
    disabled: boolean; 
    submitRatingFn: (value: RatingValues) => any; 
}

export const RatingStarButton: React.FunctionComponent<RatingStarButtonProps> = (props) => {
    const {
        value,
        updateTempValue,
        clearTempValue,
        submitRatingFn,
        isSolid, 
        disabled = false
    } = props;
    const classes = useStyles(props);
    const handleMouseOver = useCallback(() => updateTempValue(value), []);
    const handleMouseOut = clearTempValue;
    const handleClick = useCallback(() => submitRatingFn(value), [submitRatingFn]); 

    return <label>
        <input
            className={classes.radioButton}
            type="radio"
            name="rating"
            value={value}
        />
        <IconButton
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            size="small"
            disabled = {disabled}
            onClick = {handleClick}
        >
            <RatingStar
                isSolid={isSolid}

            />
        </IconButton>
    </label>
}