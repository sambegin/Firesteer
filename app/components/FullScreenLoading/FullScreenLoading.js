import CircularProgress from 'material-ui/Progress/CircularProgress';
import withStyles from 'material-ui/styles/withStyles';
import React from 'react';

const styles = (theme) => ({
  loadingContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary[500],
    height: 'inherit',
    flex: 1
  }
});


class FullScreenLoading extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loadingContainer}>
        <CircularProgress color="inherit" />
      </div>
    );
  }
}

export default withStyles(styles)(FullScreenLoading);
