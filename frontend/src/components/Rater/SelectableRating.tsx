
import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, IconButton } from '@material-ui/core';
import { RatingStar } from './RatingStar';
import { debounce } from "lodash";
const useStyles = makeStyles((theme: Theme) => {
    return ({
        root: ({
        }),

        radioButton: {
            display: "none",
        }
    })
});

type StarValues = 1 | 2 | 3 | 4 | 5;
const allStarValues: StarValues[] = [1, 2, 3, 4, 5];

export interface SelectableRatingProps {
    selectedValue?: StarValues;
}

interface StarButton {
    value: StarValues;
    onClick: () => void;
    updateTempValue: (i: StarValues) => void;
    clearTempValue: () => void;
    isSolid: boolean;
}

const StarButton: React.FunctionComponent<StarButton> = (props) => {
    const {
        value,
        updateTempValue,
        clearTempValue,
        onClick,
        isSolid
    } = props;
    const classes = useStyles(props);
    const handleMouseOver = useCallback(() => updateTempValue(value), []);
    const handleMouseOut = clearTempValue;

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
        >
            <RatingStar
                isSolid={isSolid}

            />
        </IconButton>
    </label>
}

export const SelectableRating: React.FunctionComponent<SelectableRatingProps> = (props) => {
    const {
        selectedValue,
    } = props;
    const classes = useStyles(props);

    const [tempValue, setTempValue] = useState<StarValues | null>(null);

    const debouncedSetTempValue = debounce(setTempValue, 200);
    const updateTempValue = useCallback((i: StarValues) => {
        debouncedSetTempValue.cancel();
        setTempValue(i);
    }, []);
    const clearTempValue = useCallback(() => {
        debouncedSetTempValue(null);
    }, []);

    const displayValue = tempValue || selectedValue || -1;

    return <section className={classes.root}>
        {allStarValues.map((v) => {
            return <StarButton
                value={v}
                key={v}
                updateTempValue={updateTempValue}
                clearTempValue={clearTempValue}
                onClick={() => { }}
                isSolid={v < displayValue} />

        })}
    </section>;
}

