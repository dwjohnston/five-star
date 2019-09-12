
import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Card, Typography, Grid } from '@material-ui/core';
import { ContentSummary, RatingValues, Rating } from "common";
import { RatingDisplay } from '../Rater/RatingDisplay';
import { SelectableRating } from '../Rater/SelectableRating';

const useStyles = makeStyles((theme: Theme) => {
    return ({
        root: ({

        }),
    })
});

export interface ContentPanelProps {
    content: ContentSummary;
    disabledRating?: boolean;
    submitRatingFn: (contentId: number, rating: RatingValues) => Promise<Rating>; 
}



export const ContentPanel: React.FunctionComponent<ContentPanelProps> = (props) => {
    const {
        content,
        disabledRating = true,
        submitRatingFn, 
    } = props;
    const classes = useStyles(props);
    const _submitRatingFn = useCallback((rating: RatingValues) =>  submitRatingFn(content.contentId, rating), [submitRatingFn]); 

    return <Grid
        container
        spacing={6}
        component={Card}
        className={classes.root}>

        <Grid
            item
            xs={12}

        >
            <Typography
                variant="h2">
                ContentId: {content.contentId}
            </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
            <RatingDisplay value={content.rating} />
        </Grid>


        <Grid item xs={12} md={6}>
            <SelectableRating
                disabled={disabledRating}
                submitRatingFn= {_submitRatingFn}
                
            />
        </Grid>
    </Grid>;
}

