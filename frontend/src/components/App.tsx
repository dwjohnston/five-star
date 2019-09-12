import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography, Grid } from '@material-ui/core';
import { RatingDisplay } from './Rater/RatingDisplay';
import { SelectableRating } from './Rater/SelectableRating';
import { fetchAllContent, fetchUser, postRating } from '../services/apiService';
import { useLoads } from 'react-loads';
import CircularProgress from '@material-ui/core/CircularProgress';
import { } from "@material-ui/core";
import { ContentPanel } from './Content/ContentPanel';
import { UserPanel } from './User/User';
import { RatingValues } from 'common';
const useStyles = makeStyles((theme: Theme) => {
    return ({
        root: ({
            maxWidth: theme.breakpoints.values.lg,
            margin: "0 auto"
        }),
    })
});

export interface AppProps {

}



export const App: React.FunctionComponent<AppProps> = (props) => {
    const {

    } = props;
    const classes = useStyles(props);

    const loadContent = useCallback(fetchAllContent, []);
    const loadUser = useCallback(fetchUser, []); 

    const { response: userResponse, isPending: userIsPending,  } = useLoads(loadUser, {
        context: 'user'
    });

    console.log(userResponse);
    const submitRating = useCallback((contentId :number, ratingValue : RatingValues) => {

        if (userResponse) {
            return postRating(
                contentId,
                  userResponse.userId,
                ratingValue
            ); 
        }
        else {
            throw new Error("Logic error. Post rating was called without a user present"); 
        }
        
    }, [userResponse]); 
    const { response: contentResponse, isPending: contentIsPending,  } = useLoads(loadContent);

    return <div className={classes.root}>
        <Grid
            container
            component="main"
            spacing={10}
            alignItems="center"
            alignContent= "center"
        >
            <Grid item xs={12}>
                <Typography variant="h1" align = "center">Acme Content</Typography>
            </Grid>
            {<Grid item xs={12}>
               {contentIsPending &&  <CircularProgress />}  
               <UserPanel user = {userResponse}/>
            </Grid>}
            {contentResponse && contentResponse.map(v => <Grid item xs={12} key={v.contentId} >
                <ContentPanel 
                    content={v} 
                    disabledRating = {!userResponse}
                    submitRatingFn = {submitRating} 
                    />
            </Grid>)}
        </Grid>
    </div>
        ;
}

