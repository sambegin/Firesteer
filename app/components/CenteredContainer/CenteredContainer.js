import classNames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import React from 'react';

const styles = () => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const CenteredContainer = ({ children, className, classes }) => (
  <div className={classNames(classes.container, className)}>
    {children}
  </div>
);

export default withStyles(styles)(CenteredContainer);
