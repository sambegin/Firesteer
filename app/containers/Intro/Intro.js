import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import withStyles from 'material-ui/styles/withStyles';
import Typography from 'material-ui/Typography/Typography';
import React from 'react';
import firebaseLogo from '../../assets/firebase-logo.svg';
import CenteredContainer from '../../components/CenteredContainer/CenteredContainer';

const styles = () => ({
  arrow: {
    position: 'absolute',
    top: 25,
    left: -30,
    width: '4em',
    height: '4em'
  }
});

const Intro = ({ classes }) => (
  <CenteredContainer>
    <ArrowBackIcon className={classes.arrow} />
    <Typography variant="headline">Welcome to Firesteer</Typography>
    <Typography variant="body1">Start by adding your firebase configuration</Typography>
    <img src={firebaseLogo} alt="Firebase logo" />
  </CenteredContainer>
);

export default withStyles(styles)(Intro);
