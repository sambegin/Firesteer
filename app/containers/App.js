import withStyles from 'material-ui/styles/withStyles';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import SideNavigation, { sideNavigationWidth } from '../components/SideMenu/SideMenu';
import Intro from './Intro/Intro';
import WatchRoute from './Watch/WatchRoute';

const styles = (theme) => ({
  mainPage: {
    height: '100%',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    marginLeft: sideNavigationWidth,
    WebkitOverflowScrolling: 'touch',
    '& > *': {
      flex: '0 0 auto'
    }
  },
  mainPageContent: {
    padding: theme.spacing.unit * 2,
    position: 'relative',
    display: 'flex',
    flex: '1 1 auto',
    overflowY: 'auto',
    overflowX: 'hidden',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const App = ({ classes }) => (
  <Fragment>
    <SideNavigation />
    <main id="main-page" className={classes.mainPage}>
      <div className={classes.mainPageContent}>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/watch/:id" component={WatchRoute} />
        </Switch>
      </div>
    </main>
  </Fragment>
);

export default withStyles(styles)(App);
