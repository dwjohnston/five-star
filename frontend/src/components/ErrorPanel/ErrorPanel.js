import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {

    },
});

function ErrorPanel({ }) {
    const classes = useStyles();
    return <div className={classes.root}>
    </div>;
}



const mapStateToProps = (
    state,
    ownProps
) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorPanel);