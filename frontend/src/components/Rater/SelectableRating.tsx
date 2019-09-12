
import React, { useState, useCallback, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, IconButton, Typography } from '@material-ui/core';
import { RatingStar } from './RatingStar';
import { debounce } from "lodash";
import { useLoadsCache, useLoads } from 'react-loads';
import { User, RatingValues, Rating } from 'common';
import { RatingStarButton } from './RatingStarButton';
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

const allStarValues: RatingValues[] = [1, 2, 3, 4, 5];

export interface SelectableRatingProps {
    selectedValue?: RatingValues;
    disabled?: boolean; 
    submitRatingFn: (value: RatingValues) => Promise<Rating>; 
}



export const SelectableRating: React.FunctionComponent<SelectableRatingProps> = (props) => {
    const {
        disabled = false, 
        submitRatingFn, 
    } = props;
    const classes = useStyles(props);


    const [selectedValue, setSelectedValue] = useState<RatingValues | null>(null);
    const [tempValue, setTempValue] = useState<RatingValues | null>(null);

    const debouncedSetTempValue = debounce(setTempValue, 200);
    const updateTempValue = useCallback((i: RatingValues) => {
        debouncedSetTempValue.cancel();
        setTempValue(i);
    }, []);
    const clearTempValue = useCallback(() => {
        debouncedSetTempValue(null);
    }, []);

    const {load, response: submitRatingResponse,} = useLoads(submitRatingFn, {
        defer: true
    }); 

    useEffect(() => {
        if (submitRatingResponse) {
            debouncedSetTempValue.cancel(); 
            setSelectedValue(submitRatingResponse.rating); 
        }else {
            setSelectedValue(null); 

        }
    }, [submitRatingResponse]); 

    const displayValue = tempValue || selectedValue || -1;

    return <section className={classes.root}>

        <Typography>Did you like this movie? Rate Here!</Typography>
        <div>
            {allStarValues.map((v) => {
                return <RatingStarButton
                    value={v}
                    key={v}
                    updateTempValue={updateTempValue}
                    clearTempValue={clearTempValue}
                    submitRatingFn = {load}
                    disabled = {disabled}
                    isSolid={v <= displayValue} />

            })}
        </div>
    </section>;
}

